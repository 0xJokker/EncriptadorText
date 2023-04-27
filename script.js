var botonEncriptar = document.querySelector(".button-encriptar");
var botonDesencriptar = document.querySelector(".button-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar");
var muñeco = document.querySelector(".img-muñeco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".txt-resultado");
var txtArea = document.querySelector(".txt-area");



botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarTxt;



function encriptar() {
    ocultarTxtInicio();
    resultado.textContent = textoEncriptado(recuperarTxt());
    //validarTexto()
}

function desencriptar(){
    ocultarTxtInicio();
    resultado.textContent = textoDesencriptado(recuperarTxt());
}



//  retorna el Valor que escribo en el txt-Area a el txt-resultado
function recuperarTxt(){
    var area = document.querySelector(" .txt-area ");
    return area.value.toLowerCase();
}


//  Oculta los elemetos de inicio de la seccion derecha..(imagen y textos)
function ocultarTxtInicio(){
    muñeco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}


//  Encriptacion de la cadena de caracteres
function textoEncriptado(mensaje){
    var texto = mensaje;
    var textofinal = "";

    if(texto.length === 0){
        alert("Debes ingresar un texto");
        location.reload()
        return;
    }

    for(var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textofinal = textofinal + "ai"
        }
        else if (texto[i] == "e"){
            textofinal = textofinal + "enter"
        }
        else if (texto[i] == "i"){
            textofinal = textofinal + "imes"
        }
        else if (texto[i] == "o"){
            textofinal = textofinal + "ober"
        }
        else if (texto[i] == "u"){
            textofinal = textofinal + "ufat"
        }
        else{
            textofinal = textofinal + texto[i];
        }
    }
    
    return textofinal;
}


// Desenncriptacion de la cadena de caracteres
function textoDesencriptado(mensaje){
    var texto = mensaje;
    var textofinal = "";

    for(var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textofinal = textofinal + "a"
            i = i + 1;
        }
        else if (texto[i] == "e"){
            textofinal = textofinal + "e"
            i = i + 4;
        }
        else if (texto[i] == "i"){
            textofinal = textofinal + "i"
            i = i + 3;
        }
        else if (texto[i] == "o"){
            textofinal = textofinal + "o"
            i = i + 3; 
        }
        else if (texto[i] == "u"){
            textofinal = textofinal + "u"
            i = i + 3;
        }
        else{
            textofinal = textofinal + texto[i];
        }
    }
    return textofinal;
}

// MODIFICAR-----------------------
// Condicion sin Mayusculas ni Acentos  
function validarTexto(){
    let textoEscrito = txtArea.value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}



// Copiar Texto en el Portapapeles
function copiarTxt() {
    var txtcopy = resultado;
    navigator.clipboard.writeText(txtcopy.value);
    txtArea.value = "";
    txtArea.focus();
    alert("Texto Copiado en el Portapapeles!");
}