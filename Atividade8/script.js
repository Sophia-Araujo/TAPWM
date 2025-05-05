function maiorNumero() {
    const n1 = Number(document.getElementById('num1').value);
    const n2 = Number(document.getElementById('num2').value);
    const n3 = Number(document.getElementById('num3').value);
    const maior = Math.max(n1, n2, n3);
    document.getElementById('res-maior').textContent = `O maior número é: ${maior}`;
  }
  
  function ordenarNumeros() {
    const n1 = Number(document.getElementById('ord1').value);
    const n2 = Number(document.getElementById('ord2').value);
    const n3 = Number(document.getElementById('ord3').value);
    const numeros = [n1, n2, n3].sort((a, b) => a - b);
    document.getElementById('res-ordem').textContent = `Ordem crescente: ${numeros.join(', ')}`;
  }
  
  
  function verificarPalindromo() {
    let texto = document.getElementById('palavra').value;
  
    let limpo = texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '');
  
    let invertido = limpo.split('').reverse().join('');
    const ehPalindromo = limpo === invertido;
  
    const mensagem = ehPalindromo
      ? `"${texto}" é um palíndromo!`
      : `"${texto}" não é um palíndromo.`;
  
    document.getElementById('res-palindromo').textContent = mensagem;
  }
  
  function verificarSubconjunto() {
    const palavra1 = document.getElementById('palavra1').value.trim().toLowerCase();
    const palavra2 = document.getElementById('palavra2').value.trim().toLowerCase();
  
    if (!palavra1 || !palavra2) {
      document.getElementById('res-subconjunto').textContent = "Erro: preencha ambas as palavras.";
      return;
    }
  
    const resultado = palavra1.includes(palavra2)
      ? `"${palavra2}" é um subconjunto de "${palavra1}".`
      : `"${palavra2}" não é um subconjunto de "${palavra1}".`;
  
    document.getElementById('res-subconjunto').textContent = resultado;
  }
  
  function limparMaior() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('num3').value = '';
    document.getElementById('res-maior').textContent = '';
  }
  
  function limparOrdem() {
    document.getElementById('ord1').value = '';
    document.getElementById('ord2').value = '';
    document.getElementById('ord3').value = '';
    document.getElementById('res-ordem').textContent = '';
  }
  
  function limparPalindromo() {
    document.getElementById('palavra').value = '';
    document.getElementById('res-palindromo').textContent = '';
  }
  
  function limparSubconjunto() {
    document.getElementById('palavra1').value = '';
    document.getElementById('palavra2').value = '';
    document.getElementById('res-subconjunto').textContent = '';
  }
  