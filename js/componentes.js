//COMPONENTES DEL DOM
//NUEVOS ELEMENTOS PARA SECCION PRODUCTOS
function newElementProducts(producto){
    return `<div id="productsCard${producto.id}" class="card col-4">
                <img src="${producto.imagen}" class="card-img-top img-fluid">
                <div class="card-body">
                    <h3 class="card-title">${producto.nombre}</h3>
                    <p class="card-text">Precio: $ ${producto.precio}</p>
                    <button id="btnAdd${producto.id}" type="button" class="btn btn-secondary">Seleccionar</button>
                </div>
            </div>`;
}
//NUEVOS ELEMENTOS PARA SECCION CARRITO
function newElementCart(producto){
    return `<div id="cartCard${producto.id}" class="card col-12 card__style">
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
    return `<div id="purchaseCard${producto.id}" class="card col-12 card__style">
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

//TITULOS
function titleProducts() {
    return `<h2 class="col-12">Productos</h2>`;
}

function titleCart() {
    return `<h2 class="col-12">Carrito</h2>`;
}

function titlePurchase() {
    return `<h2 class="col-12">Tus compras</h2>`;
}

//BOTONES
//GUARDAR CARRITO
function btnSave() {
    return `<div class="col-12">
                <button id="btnSave" type="button" class="btn btn-secondary">Ir al carrito</button>
            </div>`;
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
                        <form action="../php/formulario.php" method="POST" enctype="">
                            <div class="modal-body form-group">
                                <div class="form-row">
                                    <div class="col-6">
                                        <label for="nombre">Nombre</label>
                                        <input type="text" class="form-control" id="nombre" name="nombre">
                                    </div>
                                    <div class="col-6">
                                        <label for="apellido">Apellido</label>
                                        <input type="text" class="form-control" id="apellido" name="apellido">
                                    </div>
                                    <div class="col-12">
                                        <label for="email">Email</label>
                                        <input type="email" class="form-control" id="email" name="email">
                                    </div>
                                    <div class="col-12">
                                        <label for="telefono">Teléfono</label>
                                        <input type="text" class="form-control" id="telefono" name="telefono">
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-9">
                                        <label for="direccion">Dirección</label>
                                        <input type="text" class="form-control" id="direccion" name="direccion">
                                    </div>
                                    <div class="col-3">
                                        <label for="cp">CP</label>
                                        <input type="text" class="form-control" id="cp" name="cp">
                                    </div>
                                    <div class="col-6">
                                        <label for="localidad">Localidad</label>
                                        <input type="text" class="form-control" id="localidad" name="localidad">
                                    </div>
                                    <div class="col-6">
                                        <label for="provincia">Provincia</label>
                                        <input type="text" class="form-control" id="provincia" name="provincia">
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-9">
                                        <label for="tarjeta">N° Tarjeta</label>
                                        <input type="text" class="form-control" id="tarjeta" name="tarjeta">
                                    </div>
                                    <div class="col-3">
                                        <label for="codigo">Código de seguridad</label>
                                        <input type="text" class="form-control" id="codigo" name="codigo">
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button id="btnBuyForm" type="submit" name="enviar" class="btn btn-primary" data-dismiss="modal">Confirmar compra</button>
                        </div>
                    </div>
                </div>
            </div>`
}

//CONTENEDOR DE PRECIO TOTAL
function containPrice() {
    return `<div class="col-12 containPrice">
                <h3>Precio total: $ <span id="totalPrice">${precioTotal}</span></h3>
                <h3>Envío: $ <span id="shipping">${costoEnvio}</span></h3><hr>
                <h3>Precio final: $ <span id="finalPrice">${precioFinal}</span></h3>
            </div>`;
}

//ALERTAS
function alertaCarrito(producto) {
    return `<div class="alert alert-primary alert-dismissible fade show" role="alert" data-dismiss="alert">
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



