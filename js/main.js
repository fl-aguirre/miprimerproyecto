//ARRAYS Y OTRAS VARIABLES
let baseDeDatos = [];
let listaProductos = [];
let listaCarrito = [];
let listaCarritoParse = [];
let listaCompra = [];
let precioTotal = 0;
let costoEnvio = 200;
let precioFinal;
let nombreComprador;
let datosComprador = [];
let validador;

//DECLARAR CLASE "PRODUCTO" Y SUS MÉTODOS
class Producto {
    constructor(nuevoId, nuevoNombre, nuevoPrecio, nuevaImagen, nuevadescripcion){
        this.id = nuevoId;
        this.nombre = nuevoNombre;
        this.precio = nuevoPrecio;
        this.imagen = nuevaImagen;
        this.descripcion = nuevadescripcion;
        this.cantidad = 1;
    }

    agregarCantidad(){
        this.cantidad ++;
    }

    restarCantidad(){
        this.cantidad --;
        if (this.cantidad <= 0){
            this.cantidad = 1;
        }
    }
}

//FUNCIONES STORAGE
const saveLocal = (clave,valor) => { localStorage.setItem(clave,valor);}

//FUNCION PUSHEAR OBJETOS
function pushear(listaEntrada,listaSalida){
    for(const producto of listaEntrada){
        if (listaSalida.find(elemento => elemento.id == producto.id)){
            //VACIO. NO ME FUNCIONA DE OTRA MANERA.
        }
        else{
            listaSalida.push(new Producto(producto.id, producto.nombre, producto.precio, producto.imagen, producto.descripcion));
        }
    }
}

//FUNCION CALCULAR TOTAL PRECIO
function calcularTotal(lista) {
    precioTotal = 0;
    for (let producto of lista) {
        precioTotal = precioTotal + (producto['precio']*producto['cantidad']);
    }
    precioFinal = precioTotal + costoEnvio;
    
}

//FUNCION RENDERIZAR PRODUCTOS
function renderProducts (lista) {

    $('#sctProducts').empty().parent().show();
    $('#sctCart').empty().parent().hide();
    $('#sctPurchase').empty().parent().hide();

    lista.forEach(producto => {
        $('#sctProducts').append(newElementProducts(producto));

        $(document).ready( ()=> {
        //BOTON PARA SELECCIONAR PRODUCTOS Y GUARDAR EN STORAGE
            $(`#btnAdd${producto.id}`).click(() => {
                if (listaCarrito.find(elemento => elemento.id == producto.id)){
                    $("body").prepend(alertaMsj("Ya has agregado este producto"));
                    quitarAlerta();
                }
                else{
                    listaCarrito.push(producto);
                    $("body").prepend(alertaCarrito());
                    quitarAlerta();
                }
                $(`#productsCard${producto.id}`).fadeOut()
                                                .fadeIn();
                saveLocal(`listaCarrito`, JSON.stringify(listaCarrito));
            });
        });
    });

    $('#sctProducts').prepend(filtroPrecio());
    $('#sctProducts').prepend(titleProducts());
    $('#titleProductsContainer').append(btnSave());
}

//RENDERIZAR CARRITO
function renderCart(lista) {

    $('#sctProducts').empty().parent().hide();
    $("#sctCart").empty().parent().show();
    $('#sctPurchase').empty().parent().hide();

    lista.forEach(producto => {
        $("#sctCart").append(newElementCart(producto));

        //ELIMINAR PRODUCTOS Y GUARDAR EN STORAGE
        $(`#btnRemove${producto.id}`).click(() => {
            $(`#cartCard${producto.id}`).remove();
            lista.splice(lista.indexOf(producto),1);
            saveLocal(`listaCarrito`, JSON.stringify(listaCarrito));
            if (listaCarrito.length === 0){
                listaCarrito = [];
                listaCarritoParse = [];
                lista = [];
                productos(listaProductos);
                localStorage.clear();
            }

            calcularTotal(lista);
            $(`#quantity${producto.id}`).html(producto.cantidad);
            $("#totalPrice").html(precioTotal);
            $("#shipping").html(costoEnvio);
            $("#finalPrice").html(precioFinal);
        });
    });

    calcularTotal(lista);

    $("#sctCart").prepend(titleCart());
    $("#sctCart").append(btnCart());
    $('#btnCart').prepend(btnBuy());
    $('#btnCart').append(btnBack(1));
    $("#sctCart").append(priceContainer());
};


//FUNCION SECCIÓN PRODUCTOS
function productos(lista){

    //RENDERIZAR TITULO, PRODUCTOS Y BOTONES
    renderProducts(lista);

    $(document).ready( ()=> {
    // FILTRO DE PRECIO
    $('#filtroPrecio').on("input", function(e) {
        if (e.target.value == 1){
            lista.sort((producto1,producto2) => producto2.precio - producto1.precio);
            $('#sctProducts').empty().parent().show();
            productos(lista);
        }else {
            lista.sort((producto1,producto2) => producto1.precio - producto2.precio);
            $('#sctProducts').empty().parent().show();
            productos(lista);
        }
    });

    //BOTON PARA GUARDAR CARRITO Y CALCULAR TOTAL 
        $('#btnSave').click(() => { 
            listaCarritoParse = JSON.parse(localStorage.getItem(`listaCarrito`));
            if (Array.isArray(listaCarritoParse)){
                pushear(listaCarritoParse,listaCarrito);
                
                //RENDERIZAR CARRITO
                carrito(listaCarrito);

            }else{
                $("body").prepend(alertaMsj("Tu carrito está vacío!"));
                quitarAlerta();
            }
        });
    });
}

//FUNCION CARRITO
function carrito(lista){

    //RENDERIZAR CARRITO, TITULOS, PRODUCTOS Y BOTONES
    renderCart(lista);
       
    $(document).ready( ()=> {        
        //BOTON PARA CALCULAR CANTIDAD Y PRECIO Y RENDERIZAR
        lista.forEach(producto => {
            $(`#btnPlus${producto.id}`).click(() => {
                producto.agregarCantidad();
                calcularTotal(lista);
                $(`#quantity${producto.id}`).html(producto.cantidad);
                $("#totalPrice").html(precioTotal);
                $("#shipping").html(costoEnvio);
                $("#finalPrice").html(precioFinal);
            });
            $(`#btnMinus${producto.id}`).click(() => {
                producto.restarCantidad();
                calcularTotal(lista);
                $(`#quantity${producto.id}`).html(producto.cantidad);
                $("#totalPrice").html(precioTotal);
                $("#shipping").html(costoEnvio);
                $("#finalPrice").html(precioFinal);
            });
        });

        //BOTON PARA COMPRAR
        $('#btnBuy').click(() => {
            $("body").prepend(modalForm());

            //BOTON PARA CONFIRMAR COMPRA EN MODAL
            $(document).ready(function(){
                $('#btnBuyForm').click((e) => {
                    e.preventDefault();
                    var datosInput = $('#formularioCompra :input');
                    if (validar(datosInput) == true){
                        $("#Modal").modal("toggle");

                        //GUARDAR DATOS DE LA LISTA
                        calcularTotal(lista);
                        listaCompra = lista;
                        saveLocal("listaCompra", JSON.stringify(listaCompra));
                        
                        //GUARDAR DATOS DEL COMPRADOR
                        datosInput.each(function(){
                            var name = $(this).attr('id');
                            var valor = $(this).val();
                            datosComprador.push({
                                key: name,
                                value: valor
                            });
                        });
                        localStorage.removeItem("datosComprador")
                        saveLocal("datosComprador", JSON.stringify(datosComprador));

                        //RENDERIZAR COMPRA
                        compra(listaCompra);
                    };
                });
            });
        });

        //BOTON PARA VOLVER
        $('#btnBack1').click(() => {
            productos(listaProductos);
        });
    });
}

//FUNCION VALIDAR
function validar(datosInput) {
    var validador = 0;
    datosInput.each(function () {
        var valor = $(this).val();
        if (valor == ""){
            $("#Modal").prepend(alertaMsj("Debes terminar de llenar todos los campos"));
            return false;
        }else {
            return validador++;
        }
    });
    if (validador == 10){
        return true;
    }
}

//FUNCION PRODUCTOS COMPRADOS
function compra(lista){

    //ENVIAR DATOS AL API
    $.post("https://jsonplaceholder.typicode.com/posts", {'lista': JSON.stringify(lista), 'datosComprador': JSON.stringify(datosComprador)}, 
        function (data, estado) {
            if(estado === "success"){

                //OCULTAR OTRAS SECCIONES
                $('#sctProducts').empty().parent().hide();
                $('#sctCart').empty().parent().hide();
                $('#sctPurchase').empty().parent().show();

                //CREAR TITULO DE SECCION
                $('#sctPurchase').append(titlePurchase());

                //AGREGAR MENSAJE DE AGRADECIMIENTO
                $('#titlePurchaseContainer').prepend(purchaseConfirm(datosComprador[0].value));

                //MOSTRAR PRODUCTOS COMPRADOS EN HTML
                lista.forEach(producto => {
                    $('#sctPurchase').append(newElementPurchase(producto));
                });

                //MOSTRAR PRECIO TOTAL
                $('#sctPurchase').append(priceContainer());

                //CREAR Y EJECUTAR BOTON PARA VOLVER
                $('#sctPurchase').append(btnBack(2));
                $(document).ready( ()=> {
                    $('#btnBack2').click(() => {
                        lista = [];
                        listaCarrito = [];
                        listaCarritoParse = [];
                        listaCompra = [];
                        localStorage.clear();

                        //RENDERIZAR PRODUCTOS
                        productos(listaProductos);
                    });
                });
            
            //MOSTRAR ALERTA DE ERROR SI NO EJECUTA EL POST CORRECTAMENTE
            }else {
                $("body").prepend(alertaMsj("Hubo un error en el envío de la información"));
                quitarAlerta();
            }
    });
}


//FUNCION EJECUCIÓN -----
function execute(url) {
    $.getJSON(url, function (datos,estado) {
        baseDeDatos = datos;
    
        pushear(baseDeDatos,listaProductos);
        productos(listaProductos);
    
        //TRAER DEL STORAGE INFORMACION DEL CARRITO Y PUSHEAR
        listaCarritoParse = JSON.parse(localStorage.getItem("listaCarrito"));
        if (Array.isArray(listaCarritoParse)){
            pushear(listaCarritoParse,listaCarrito);
        }
    });
}

//EJECUTAR
execute("https://raw.githubusercontent.com/fl-aguirre/miprimerproyecto/main/data/data.json")


window.onload = function () {
    var contenedorSpinner = $("#contenedor__carga");
    $('#fade__effect').hide();
    contenedorSpinner.hide();
    $('#fade__effect').fadeIn(1000);
}












