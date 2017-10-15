//console.log("carregando arquivo externo");
//classe 'titulo'
var titulo = document.querySelector(".titulo");

//muda o texto dentro da tag 'titulo'
titulo.textContent = "Rafaela Nutricionista";

//var paciente = document.querySelector("#primeiro_paciente");

var pacientes = document.querySelectorAll(".paciente");

//console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {
	
	//console.log(pacientes[i]);
	var paciente = pacientes[i];
	var tdPeso = paciente.querySelector(".info-peso");

	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	tdIMC = paciente.querySelector(".info-imc");

	var pesoEhValido = true;
	var alturaEhvalida = true;

	if (peso <= 0 || peso >= 1000) {
		pesoEhValido = false;
		tdIMC.textContent = "Peso inválido!";
		
		//adicionando uma nova classe
		paciente.classList.add("paciente-invalido");
		//paciente.style.backgroundColor = "lightcoral";
	}

	if (altura <= 0 || altura >= 3.00) {
		alturaEhvalida = false;
		tdIMC.textContent = "Altura inválida!";
		//paciente.style.backgroundColor = "orange";
		paciente.classList.add("paciente-invalido");
	}


	if (alturaEhvalida && pesoEhValido) {

		var imc = calculaImc(peso, altura);
		tdIMC.textContent = imc;
	}
}

function calculaImc(peso,altura){

	var imc = 0;

	imc = peso / (altura*altura);

	return imc.toFixed(2);
}