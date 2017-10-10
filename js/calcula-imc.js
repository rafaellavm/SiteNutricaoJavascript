//console.log("carregando arquivo externo");
//classe 'titulo'
var titulo = document.querySelector(".titulo");

//muda o texto dentro da tag 'titulo'
titulo.textContent = "Rafaela Nutricionista";

//var paciente = document.querySelector("#primeiro_paciente");

var pacientes = document.querySelectorAll(".paciente");

console.log(pacientes);

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

		var imc = peso / (altura * altura);
		tdIMC.textContent = imc.toFixed(2);
	}
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
	
	event.preventDefault();
	
	var form = document.querySelector("#form-adiciona");

	//pega o valor do input altura demtro do form
	var altura = form.altura.value;
	var nome = form.nome.value;
	var peso = form.peso.value;
	var gordura = form.gordura.value;

	//criar elemento 'tr' e 'td'
	var pacienteTr = document.createElement("tr");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");
	var nomeTd = document.createElement("td");

	//colocar dentro do 'tr' criado o valor do elemento
	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;

	//acrescentar os tds no 'tr'
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);

	var tabela = document.querySelector("#tabela-pacientes");
	
	//colocar o td com os trs dentro tbody
	tabela.appendChild(pacienteTr);

	//console.log(pacienteTr);

	//console.log(altura);console.log(nome);console.log(peso);console.log(gordura);
});

//console.log(botaoAdicionar);

/////////////////

//'escutador' de eventos, passando uma função anônima
//ou titulo.addEventListener("click", mostraMensagem);
titulo.addEventListener("click", function(){
	//console.log("posso chamar uma função anônima");
});

function mostraMensagem(){
	console.log("Olá, eu fui clicado!");
}
