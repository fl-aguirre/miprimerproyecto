//COMPONENTES DEL DOM
//NUEVOS ELEMENTOS PARA SECCION PRODUCTOS
function newElementProducts(producto){
            //CARD Y MODAL DE PRODUCTOS
    return `<div id="productsCard${producto.id}" class="card col-lg-4 col-md-6 col-sm-6 col-12 card__style__products">
                <img src="${producto.imagen}" class="card-img-top img-fluid">
                <div class="card-body">
                    <h3 class="card-title">${producto.nombre}</h3>
                    <p class="card-text">Precio: $ ${producto.precio}</p>
                    <button id="btnAdd${producto.id}" type="button" class="btn btn-secondary">Seleccionar</button>
                    <button id="btnDescription" type="button" class="btn btn-secondary" data-toggle="modal" data-target="#Modal${producto.id}">Descripción</button>
                </div>
            </div>
            
            <div class="modal fade" id="Modal${producto.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="modalLabel">${producto.nombre}</h3>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row">
                                    <img src="${producto.imagen}" width="300" class="mx-auto img-fluid mb-4">
                                    <p class="text-justify mx-4">${producto.descripcion}</p>
                                    <p class="text-justify mx-4"><strong>Precio: $ ${producto.precio}</strong></p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>`;
}

//NUEVOS ELEMENTOS PARA SECCION CARRITO
function newElementCart(producto){
    return `<div id="cartCard${producto.id}" class="card col-12 card__style__cart">
                <div>
                    <img src="${producto.imagen}" width="150" height="150">
                    <h3>${producto.nombre}</h3>
                    <p>Precio: $ ${producto.precio}</p>
                </div>
                <div>
                    <p>Cantidad: <span id="quantity${producto.id}">${producto.cantidad}</span></p>
                    <button id="btnPlus${producto.id}" type="button" class="btn btn-secondary">+</button>
                    <button id="btnMinus${producto.id}" type="button" class="btn btn-secondary">-</button>
                    <button id="btnRemove${producto.id}" type="button" class="btn btn-secondary">Eliminar</button>
                </div>
            </div>`;
}

//NUEVOS ELEMENTOS PARA SECCION COMPRA
function newElementPurchase(producto){
    return `<div id="purchaseCard${producto.id}" class="card col-12 card__style__purchase">
                <div>
                    <img src="${producto.imagen}" width="150" height="150">
                    <h3>${producto.nombre}</h3>
                </div>
                <p>Precio: $ ${producto.precio}<br>
                Cantidad: ${producto.cantidad}</p>
            </div>`;
}

function filtroPrecio(){
    return `<div class="col-12 filter">
                <label for="select">Ordenar por</label>
                <select name="select" id="filtroPrecio">
                    <option disabled selected>Selecciona una opción</option>
                    <option value="1">Mayor precio</option>
                    <option value="2">Menor precio</option>
                </select>
            </div>`;
}

//AGRADECIMIENTO POR LA COMPRA Y DATOS
function purchaseConfirm (nombreComprador) {
    return `<div id="purchaseConfirm">
                <h2>¡Muchas gracias por su compra, ${nombreComprador}!</h2>
                <p>Sus datos han sido correctamente procesados. En instantes, recibirá un correo con los datos de la compra.
            </div>`;
}

//TITULOS
function titleProducts() {
    return `<div class="col-12" id="titleProductsContainer"><h2>Productos</h2></div>`;
}

function titleCart() {
    return `<div id="titlePurchaseCart"><h2>Carrito</h2></div>`;
}

function titlePurchase() {
    return `<div class="col-12" id="titlePurchaseContainer"><h2>Tus compras</h2></div>`;
}

//BOTONES
//GUARDAR CARRITO
function btnSave() {
    return `<button id="btnSave" type="button" class="mt-3 btn"><i class="fas fa-shopping-cart"></i></button>`;
}
//CONTENEDOR BOTONES COMPRAR Y VOLVER
function btnCart() {
    return `<div id="btnCart" class="col-12"></div>`;
}

//COMPRAR CARRITO
function btnBuy() {
    return `<button id="btnBuy" type="button" class="btn btn-secondary" data-toggle="modal" data-target="#Modal">Comprar</button>`;
}
//VOLVER A SECCION ANTERIOR
function btnBack(id) {
    return `<button id="btnBack${id}" type="button" class="btn btn-secondary">Volver</button>`;
}

//MODAL 
function modalForm () { 
    return `<div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="ModalLabel">Formulario de Compra</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form id="formularioCompra" name="formularioCompra" action="../php/formulario.php" method="POST" enctype="">
                            <div class="modal-body form-group">
                                <div class="form-row">
                                    <div class="col-6">
                                        <label for="nombre">Nombre</label>
                                        <input type="text" class="form-control" id="nombre" name="nombre" >
                                    </div>
                                    <div class="col-6">
                                        <label for="apellido">Apellido</label>
                                        <input type="text" class="form-control" id="apellido" name="apellido" >
                                    </div>
                                    <div class="col-12">
                                        <label for="email">Email</label>
                                        <input type="email" class="form-control" id="email" name="email" >
                                    </div>
                                    <div class="col-12">
                                        <label for="telefono">Teléfono</label>
                                        <input type="number" class="form-control" id="telefono" name="telefono" >
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-9">
                                        <label for="direccion">Dirección</label>
                                        <input type="text" class="form-control" id="direccion" name="direccion" >
                                    </div>
                                    <div class="col-3">
                                        <label for="cp">CP</label>
                                        <input type="text" class="form-control" id="cp" name="cp" >
                                    </div>
                                    <div class="col-6">
                                        <label for="localidad">Localidad</label>
                                        <input type="text" class="form-control" id="localidad" name="localidad" >
                                    </div>
                                    <div class="col-6">
                                        <label for="provincia">Provincia</label>
                                        <input type="text" class="form-control" id="provincia" name="provincia" >
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-9">
                                        <label for="tarjeta">N° Tarjeta</label>
                                        <input type="number" class="form-control" id="tarjeta" name="tarjeta" >
                                    </div>
                                    <div class="col-3">
                                        <label for="codigo">Código de seguridad</label>
                                        <input type="number" class="form-control" id="codigo" name="codigo" >
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <input id="btnBuyForm" type="submit" name="enviar" class="btn btn-primary" value="Enviar">
                        </div>
                    </div>
                </div>
            </div>`
}

//ALERTA DE FORMULARIO INCOMPLETO


//CONTENEDOR DE PRECIO TOTAL
function priceContainer() {
    return `<div class="col-12 priceContainer">
                <div class="priceContainer__total">
                    <h3>Precio total: $ <span id="totalPrice">${precioTotal}</span></h3>
                    <h3>Envío: $ <span id="shipping">${costoEnvio}</span></h3>
                </div>
                <div class="priceContainer__final">
                    <h3>Precio final: $ <span id="finalPrice">${precioFinal}</span></h3>
                </div>
            </div>`;
}

//ALERTAS
function alertaCarrito(producto) {
    return `<div class="alert alert-dismissible fade show" role="alert" data-dismiss="alert">
                ${producto.nombre} ha sido agregado al carrito!
            </div>`;
}

function alertaMsj(mensaje) {
    return `<div class="alert alert-primary alert-dismissible fade show" role="alert" data-dismiss="alert">
                ${mensaje}
            </div>`;
}

function quitarAlerta () {
    return $(".alert").fadeOut(1000); //REVISAR. SI SE ESTÁ EJECUTANDO EL REMOVE, ME SACA LAS ALERTAS POSTERIORES
}



