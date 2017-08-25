console.log("carregando arquivo externo");
	//classe 'titulo'
	var titulo = document.querySelector(".titulo");

	//muda o texto dentro da tag 'titulo'
	titulo.textContent = "Rafaela Nutricionista";

var paciente = document.querySelector("#primeiro_paciente");
var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

tdIMC = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhvalida = true;

if(peso <= 0 || peso >= 1000){
		console.log("Peso inválido!");
		pesoEhValido = false;
		tdIMC.textContent = "Peso inválido!";
}

if(altura <= 0 || altura >= 3.00){
		console.log("Altura inválida!");
		alturaEhvalida = false;
		tdIMC.textContent = "Altura inválida!";
}


if (alturaEhvalida && pesoEhValido){

var imc = peso / (altura * altura);
tdIMC.textContent = imc;
}





console.log(imc);