function criarFuncionario() {
  const matricula = document.getElementById("matricula").value.trim();
  const nome = document.getElementById("nome").value.trim();
  const funcao = document.getElementById("funcao").value.trim();

  if (!matricula || !nome || !funcao) {
    alert("Preencha todos os campos!");
    return;
  }

  const Funcionario1 = {
    matricula: matricula,
    nome: nome,
    funcao: funcao
  };

  document.getElementById("resultado").innerHTML = `
    <h2>Funcionário Criado:</h2>
    <pre>${JSON.stringify(Funcionario1, null, 2)}</pre>
  `;
}
