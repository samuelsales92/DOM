function changeMode() {
	changeClasses();
	changeText();
}

function changeClasses() {
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}

function changeText() {
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' ON';
		return;
	}

	button.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);


class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

get saldo () {
    return this._saldo
}

set saldo (valor) {
    this._saldo = valor;
}

sacar(valor) {
    if (valor > this._saldo){
    return 'Operação negada';
}

    this._saldo = this._saldo - valor;

    return this._saldo
}

depositar (valor) {
    this._saldo = this._saldo + valor;

    return this._saldo
  }
}

class ContaCorrente extends ContaBancaria {
    constructor (agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
    }

    get cartaoCredito () {
        return this._cartaoCredito;
    }

    set cartaoCredito (valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor (agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupanca';    
    }
}

 class ContaUniversitaria extends ContaBancaria {
    constructor (agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'universitaria';       
    }

   sacar (valor) {
       if(valor > 500){
           return "Operação negada!"
       }
       this._saldo = this._saldo - valor;

   } 
}