let terceiroInputAdicionado = false;

function calcularMedia() {
    const container = document.querySelector(".inpu");

    if (!terceiroInputAdicionado) {
        const input3 = document.createElement("input");
        input3.type = "number";
        input3.id = "num3";
        input3.placeholder = "Digite o terceiro número";

        container.appendChild(input3);
        terceiroInputAdicionado = true;
        return; // só adiciona o input na primeira vez que clica
    }

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor, preencha os três números.");
        return;
    }

    let media = (num1 + num2 + num3) / 3;
    alert(`Média: ${media.toFixed(2)}`);

    // Remove o terceiro input
    const input3 = document.getElementById("num3");
    if (input3) {
        container.removeChild(input3);
        terceiroInputAdicionado = false;
    }
}


function calcularOperacao(operacao) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira dois números válidos.");
        return;
    }
    let resultado;
    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'produto':
            resultado = num1 * num2;
            break;
        case 'divisao':
            resultado = num1 / num2;
            break;
        case 'resto':
            resultado = num1 % num2;
            break;
    }
    alert(`Resultado: ${resultado}`);
}

function limparCampos() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    const input3 = document.getElementById("num3");
    if (input3) {
        input3.remove();
        terceiroInputAdicionado = false;
    }
}
