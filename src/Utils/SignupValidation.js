function validation (values) {
    // Inicializa un objeto 'error' para almacenar mensajes de error.
    let error = {};

    // Expresión regular para validar el formato de correo electrónico y de la contraseña.
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/; // entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula

    // Los campos seran validados segun el valor que les entra mostrando un mensaje
    // En nuestro cliente segun el mensaje que quede establecido por esta funcion para cada valor
    // realizaremos distintas acciones.
    if (values.email === "") {
        error.email = "Debe introducir un email";
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Introduzca un email valido";
    }
    else {
        error.email = "";
    }

    if (values.password === "") {
        error.password = "Debe introducir una contraseña";
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula";
    }
    else {
        error.password = "";
    }

    if (values.name === "") {
        error.name = "Debe introducir su nombre";
    }
    else {
        error.name = "";
    }
    
    if (values.lastName === "") {
        error.lastName = "Debe introducir su apellidos";
    }
    else {
        error.lastName = "";
    }

    if (values.dni === "") {
        error.dni = "Debe introducir su DNI";
    }
    else {
        error.dni = "";
    }

    if (values.address === "") {
        error.address = "Introduzca su dirección";
    }
    else {
        error.address = "";
    }

    return error;
}

export default validation;