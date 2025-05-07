const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcularComApply(arrayNumeros) {
    const soma = Math.max.apply(null, arrayNumeros.map(() => 0)) + arrayNumeros.reduce((a, b) => a + b, 0);
    const quadradoPrimeiro = Math.pow.apply(null, [arrayNumeros[0], 2]);
    const quadradoSegundo = Math.pow.apply(null, [arrayNumeros[1], 2]);

    console.log(`\nA soma dos três números é: ${soma}, o quadrado do primeiro é: ${quadradoPrimeiro} e o quadrado do segundo é: ${quadradoSegundo}`);
}

function formarPalavras(letras) {
    const resultado = [];

    function permutacoes(arr, prefix = "") {
        if (prefix.length === 5) {
            resultado.push(prefix);
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            let novaArray = arr.slice(0, i).concat(arr.slice(i + 1));
            permutacoes(novaArray, prefix + arr[i]);
        }
    }

    permutacoes(letras);

    const palavrasUnicas = [...new Set(resultado)].slice(0, 10);
    const arrayFinal = [];
    Array.prototype.push.apply(arrayFinal, palavrasUnicas);

    console.log("\n10 palavras distintas formadas:");
    console.log(arrayFinal);
}


function perguntarContinuar() {
    rl.question('\nDeseja continuar "s" para sim ou "n" para não): ', (resposta) => {
        if (resposta.toLowerCase() === 's') {
            iniciar();
        } else if (resposta.toLowerCase() === 'n') {
            console.log("Obrigado! Até logo.");
            rl.close();
        } else {
            console.log("Resposta inválida. Por favor, digite 's' para sim ou 'n' para não.");
            perguntarContinuar();
        }
    });
}

function iniciar() {
    console.clear();
   
    rl.question('Digite 3 números separados por vírgula (ex: 2,3,5): ', (numInput) => {
        const numeros = numInput.split(',').map(n => parseInt(n.trim()));

        if (numeros.length !== 3 || numeros.some(isNaN)) {
            console.log("Entrada inválida. Por favor, insira exatamente 3 números.");
            perguntarContinuar();
            return;
        }

        calcularComApply(numeros);

        rl.question('\nDigite 5 letras separadas por vírgula (ex: A,B,C,D,E): ', (letraInput) => {
            const letras = letraInput.split(',').map(l => l.trim().toUpperCase());

            if (letras.length !== 5 || letras.some(l => l.length !== 1 || !/[A-Z]/.test(l))) {
                console.log("Entrada inválida. Por favor, insira exatamente 5 letras (A-Z).");
                perguntarContinuar();
                return;
            }

            formarPalavras(letras);
            perguntarContinuar();
        });
    });
}


iniciar();
