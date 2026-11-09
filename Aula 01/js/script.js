
document.getElementById("demo").innerHTML = "Pedrão";

function aumentar() {
    document.getElementById("demo").style.fontSize = "35px";
}

function diminuir() {
    document.getElementById("demo").style.fontSize = "15px";
}

function desligar() {
    const lampada = document.getElementById("lampada");

    lampada.src = "img/apagada.png";
    lampada.alt = "Lâmpada apagada";
}

function ligar() {
    const lampada = document.getElementById("lampada");

    lampada.src = "img/acesa.png";
    lampada.alt = "Lâmpada acesa";
}
