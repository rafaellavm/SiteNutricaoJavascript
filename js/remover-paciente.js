var pacientes = document.querySelectorAll(".paciente");

/*pacientes.forEach(function (paciente) {

    paciente.addEventListener("dblclick", function () {

        this.remove();
    });
});*/

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover 
    
    paiDoAlvo.classList.add("fadeOut");
    //paiDoAlvo.remove();

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
});