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
	var imc = peso / (altura * altura);
	tdIMC.textContent = imc;

	console.log(imc);