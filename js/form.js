var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {

	event.preventDefault();

	var form = document.querySelector("#form-adiciona");

	var paciente = ObtemPacienteDoFormulario(form);

	var pacienteTr = montaTr(paciente);

	var erro = validaPaciente(paciente)

	if (erro.length > 0) {

		var mensagemErro = document.querySelector("#mensagem-erro");
		mensagemErro.textContent = erro;
		console.log("Paciente inválido");

		return;
	}

	var tabela = document.querySelector("#tabela-pacientes");

	//colocar o td com os trs dentro tbody
	tabela.appendChild(pacienteTr);

	form.reset();

	//console.log(pacienteTr);

	//console.log(altura);console.log(nome);console.log(peso);console.log(gordura);
});


function ObtemPacienteDoFormulario(form) {

	//pega o valor do input altura demtro do form
	var paciente = {

		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;

}

function montaTr(paciente) {

	//criar elemento 'tr' e 'td'
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	var pesoTd = montaTd(paciente.peso, 'info-peso');
	var nomeTd = montaTd(paciente.nome, 'info-nome');
	var alturaTd = montaTd(paciente.altura, 'info-altura');
	var gorduraTd = montaTd(paciente.gordura, 'info-gordura');
	var imcTd = montaTd(paciente.imc, 'info-imc');

	//colocar dentro do 'tr' criado o valor do elemento
	nomeTd.textContent = paciente.nome;
	pesoTd.textContent = paciente.peso;
	alturaTd.textContent = paciente.altura;
	gorduraTd.textContent = paciente.gordura;
	imcTd.textContent = paciente.imc;

	//acrescentar os tds no 'tr'
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	return pacienteTr;
}

function montaTd(dado, classe) {

	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente) {

	var erros = [];

	if (!validaPeso(paciente.peso))
		erros.push("Peso é inválido");

	if (!validaAltura(paciente.altura))
		erros.push("Altura é inválida");

	return erros;
}

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
