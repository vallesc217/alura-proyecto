// declaracion de constantes
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// codigo para encriptacion
// la letra "e" es convertida para "enter"
// la letra "i" es convertida para "imes"
// la letra "a" es convertida para "ai"
// la letra "o" es convertida para "ober"
// la letra "u" es convertida para "ufat"

// funcion para el boton encriptar
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

// funcion para la matriz de encriptar
function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
   }
   return stringEncriptada;
}

// funcion para el boton desencriptar
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

// funcion para la matriz de desencriptar
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }
   }
   return stringDesencriptada
}

//  funcion para el boton copiar

function copiarAlPortapapeles() {
    const textarea = document.getElementById('miTextarea');
    navigator.clipboard.writeText(textarea.value)
        .then(() => {
                alert('Texto copiado al portapapeles');
                })
                .catch(err => {
                    console.error('Error al copiar el texto: ', err);
                });
        }
                