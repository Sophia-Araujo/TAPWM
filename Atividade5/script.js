function jogar(escolhaJogador) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const numeroAleatorio = Math.floor(Math.random() * 3);
    const escolhaComputador = opcoes[numeroAleatorio];
  
    document.getElementById('choices').innerHTML =
      `Você escolheu: <b>${escolhaJogador}</b><br>
       Computador escolheu: <b>${escolhaComputador}</b>`;
  
    let resultado = '';
  
    if (escolhaJogador === escolhaComputador) {
      resultado = 'Empate!';
    } else if (
      (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
      (escolhaJogador === 'papel' && escolhaComputador === 'pedra') ||
      (escolhaJogador === 'tesoura' && escolhaComputador === 'papel')
    ) {
      resultado = 'Você venceu! 🎉';
    } else {
      resultado = 'O computador venceu! 😢';
    }
  
    document.getElementById('resultado').innerHTML = resultado;
  }
  