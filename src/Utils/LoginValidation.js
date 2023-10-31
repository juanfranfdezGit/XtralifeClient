function validation (values) {
    // Inicializa un objeto 'error' para almacenar mensajes de error.
    let error = {};

    // Expresión regular para validar el formato de correo electrónico.
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Los campos seran validados segun el valor que les entra mostrando un mensaje
    // En nuestro cliente segun el mensaje que quede establecido por esta funcion para cada valor
    // realizaremos distintas acciones.
    if (values.email === "") {
        error.email = "Email no puede estar vacio";
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "No encontramos su email";
    }
    else {
        error.email = "";
    }

    if (values.password === "") {
        error.password = "Escriba su contraseña";
    }
    else {
        error.password = "";
    }

    return error;
}

export default validation;