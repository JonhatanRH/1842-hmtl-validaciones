export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
}

const validadores = {
    nacimiento: input => validarNacimiento(input),
}

function validarNacimiento(input){
    const fechaCliente = input.value;
    let mensaje = "";
    if(!mayorDeEdad(fechaCliente)){
        mensaje = "Debes ser mayor de 18 años";
    }
    input.setCustomValidity(mensaje);
};

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18, 
        fecha.getUTCMounth(), 
        fecha.getUTCDate()
    );
    return (diferenciaFechas <= fechaActual);
}