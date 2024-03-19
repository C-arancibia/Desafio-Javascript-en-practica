const formulario = document.querySelector("#formulario");
const nombreInput = document.querySelector("#nombre");
const asuntoInput = document.querySelector("#asunto");
const mensajeInput = document.querySelector("#mensaje");

formulario.addEventListener("submit", (e) => {
e.preventDefault();

  // Capturamos los valores ingresados por los usuarios
const nombre = nombreInput.value.trim();
const asunto = asuntoInput.value.trim();
const mensaje = mensajeInput.value.trim();

const resultado = validarDatos(nombre, asunto, mensaje);

if (resultado) {
    limpiarErrores();
    exito();
}
});

// Expresión regular para aceptar solo letras y espacios
let validarDatos = (nombre, asunto, mensaje) => {
let datosValidados = true;
let validacionDatos = /^[A-Za-z\s]+$/;

  // Validamos el nombre
if (nombre === '') {
    document.querySelector(".errorNombre").innerHTML = "Nombre es requerido";
    datosValidados = false;
} else if (!validacionDatos.test(nombre)) {
    document.querySelector(".errorNombre").innerHTML = "Nombre inválido. Solo se permiten letras y espacios.";
    datosValidados = false;
} else {
    document.querySelector(".errorNombre").innerHTML = "Nombre ingresado correctamente";
    document.querySelector(".errorNombre").style.color = "green";
}

  // Validamos el asunto
if (asunto === '') {
    document.querySelector(".errorAsunto").innerHTML = "Asunto es requerido";
    datosValidados = false;
} else if (!validacionDatos.test(asunto)) {
    document.querySelector(".errorAsunto").innerHTML = "Asunto inválido. Solo se permiten letras y espacios.";
    datosValidados = false;
} else {
    document.querySelector(".errorAsunto").innerHTML = "Asunto ingresado correctamente";
    document.querySelector(".errorAsunto").style.color = "green";
}

  // Validamos el mensaje
if (mensaje === '') {
    document.querySelector(".errorMensaje").innerHTML = "Mensaje es requerido";
    datosValidados = false;
} else if (!validacionDatos.test(mensaje)) {
    document.querySelector(".errorMensaje").innerHTML = "Mensaje inválido. Solo se permiten letras y espacios.";
    datosValidados = false;
} else {
    document.querySelector(".errorMensaje").innerHTML = "Mensaje ingresado correctamente";
    document.querySelector(".errorMensaje").style.color = "green";
}

return datosValidados;
};

let limpiarErrores = () => {
document.querySelector(".errorNombre").innerHTML = "";
document.querySelector(".errorAsunto").innerHTML = "";
document.querySelector(".errorMensaje").innerHTML = "";
};

let exito = () => {
document.querySelector(".resultado").innerHTML = "Mensaje enviado exitosamente";
};
