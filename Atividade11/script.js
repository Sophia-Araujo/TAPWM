 function mascaraNumeroConta(input) {
      input.value = input.value.replace(/\D/g, '').substring(0, 6);
    }

    function mascaraData(input) {
      let v = input.value.replace(/\D/g, '').substring(0, 8);
      if (v.length >= 5)
        input.value = v.replace(/(\d{2})(\d{2})(\d{1,4})/, "$1/$2/$3");
      else if (v.length >= 3)
        input.value = v.replace(/(\d{2})(\d{1,2})/, "$1/$2");
      else
        input.value = v;
    }

    function mascaraDecimal(input) {
      let v = input.value.replace(/[^\d,]/g, '');
      if (v.includes(',')) {
        const partes = v.split(',');
        v = partes[0] + ',' + partes[1].substring(0, 2);
      }
      input.value = v;
    }

    function Retangulo(base, altura) {
      this.base = base;
      this.altura = altura;
      this.calcularArea = function () {
        return this.base * this.altura;
      };
    }

    function calcularArea() {
      const base = parseFloat(document.getElementById("base").value);
      const altura = parseFloat(document.getElementById("altura").value);
      if (isNaN(base) || isNaN(altura)) {
        alert("Informe valores válidos.");
        return;
      }
      const ret = new Retangulo(base, altura);
      document.getElementById("resultadoRetangulo").innerText = "Área: " + ret.calcularArea().toFixed(2) + " m²";
    }

    class Conta {
      constructor(nome, banco, numeroConta, saldo) {
        this._nome = nome;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
      }

      get nome() { return this._nome; }
      get banco() { return this._banco; }
      get numeroConta() { return this._numeroConta; }
      get saldo() { return this._saldo; }
    }

    class Corrente extends Conta {
      constructor(nome, banco, numeroConta, saldo, saldoEspecial) {
        super(nome, banco, numeroConta, saldo);
        this._saldoEspecial = saldoEspecial;
      }

      get saldoEspecial() { return this._saldoEspecial; }
    }

    class Poupanca extends Conta {
      constructor(nome, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nome, banco, numeroConta, saldo);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
      }

      get juros() { return this._juros; }
      get dataVencimento() { return this._dataVencimento; }
    }

    function criar() {
      const nome = document.getElementById("nomeC").value;
      const banco = document.getElementById("bancoC").value;
      const conta = document.getElementById("contaC").value;
      const saldoC = parseFloat(document.getElementById("saldoC").value.replace(',', '.'));
      const especial = parseFloat(document.getElementById("especialC").value.replace(',', '.'));
      const saldoP = parseFloat(document.getElementById("saldoP").value.replace(',', '.'));
      const juros = parseFloat(document.getElementById("jurosP").value.replace(',', '.'));
      const vencimento = document.getElementById("vencimentoP").value;

      if (!nome || !banco || !conta || isNaN(saldoC) || isNaN(especial) || isNaN(saldoP) || isNaN(juros) || !vencimento) {
        alert("Preencha todos os campos corretamente.");
        return;
      }

      const corrente = new Corrente(nome, banco, conta, saldoC, especial);
      const poupanca = new Poupanca(nome, banco, conta, saldoP, juros, vencimento);

      document.getElementById("resultado").innerText =
        `Conta criada!\n` +
        `Nome: ${corrente.nome}\n` +
        `Conta: ${corrente.numeroConta}\n\n` +
        `Corrente: R$ ${corrente.saldo.toFixed(2)} | Especial: R$ ${corrente.saldoEspecial.toFixed(2)}\n` +
        `Poupança: R$ ${poupanca.saldo.toFixed(2)} | Juros: ${poupanca.juros}% | Vencimento: ${poupanca.dataVencimento}`;
    }