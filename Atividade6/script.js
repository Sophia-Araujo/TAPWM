let respostas = [];

document.getElementById('formPesquisa').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  const idade = parseInt(form.idade.value);
  const sexo = form.sexo.value;
  const opiniao = parseInt(form.opiniao.value);

  if (respostas.length < 45) {
    respostas.push({ idade, sexo, opiniao });
    alert("Resposta registrada!");
    form.reset();
  } else {
    alert("Limite de 45 respostas atingido!");
  }
});

document.getElementById('btnResultado').addEventListener('click', function () {
  if (respostas.length === 0) {
    alert("Nenhuma resposta registrada!");
    return;
  }

  const idades = respostas.map(p => p.idade);
  const mediaIdade = (idades.reduce((a, b) => a + b, 0) / respostas.length).toFixed(2);
  const maisVelha = Math.max(...idades);
  const maisNova = Math.min(...idades);
  const pessimo = respostas.filter(p => p.opiniao === 1).length;
  const otimoBom = respostas.filter(p => p.opiniao === 3 || p.opiniao === 4).length;
  const porcentagemOtimoBom = ((otimoBom / respostas.length) * 100).toFixed(2);

  const generoCount = {
    masculino: 0,
    feminino: 0,
    outros: 0
  };
  respostas.forEach(p => generoCount[p.sexo]++);

  document.getElementById('resultados').innerHTML = `
    <p><strong>Média de idade:</strong> ${mediaIdade}</p>
    <p><strong>Idade mais velha:</strong> ${maisVelha}</p>
    <p><strong>Idade mais nova:</strong> ${maisNova}</p>
    <p><strong>Quantidade de "Péssimo":</strong> ${pessimo}</p>
    <p><strong>Quantidade em % de "Ótimo" e "Bom":</strong> ${porcentagemOtimoBom}%</p>
    <p><strong>Homens:</strong> ${generoCount.masculino}</p>
    <p><strong>Mulheres:</strong> ${generoCount.feminino}</p>
    <p><strong>Outros:</strong> ${generoCount.outros}</p>
  `;
});
