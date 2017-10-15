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
	imcTd.textContent = calculaImc(peso,altura);

	//acrescentar os tds no 'tr'
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

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
//titulo.addEventListener("click", function(){
	//console.log("posso chamar uma função anônima");
//});

//function mostraMensagem(){
	//console.log("Olá, eu fui clicado!");
//}