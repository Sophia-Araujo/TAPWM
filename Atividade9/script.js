function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function classificarIMC(imc) {
  if (imc < 18.5) return "Magreza (Obesidade grau 0)";
  else if (imc < 25) return "Normal (Obesidade grau 0)";
  else if (imc < 30) return "Sobrepeso (Obesidade grau I)";
  else if (imc < 40) return "Obesidade (Obesidade grau II)";
  else return "Obesidade Grave (Obesidade grau III)";
}

function mostrarResultado() {
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
    resultado.innerHTML = "<p class='erro'>Insira valores válidos para peso e altura!</p>";
    return;
  }

  const imc = calcularIMC(peso, altura);
  const classificacao = classificarIMC(imc);

  resultado.innerHTML = `
    <p class="imc">Seu IMC é <strong>${imc.toFixed(2)}</strong></p>
    <p class="classificacao">${classificacao}</p>
  `;
}
