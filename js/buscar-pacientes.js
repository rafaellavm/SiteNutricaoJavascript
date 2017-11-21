var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes");

    //responsável por fazer requisições http
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    //'escutador' de eventos
    xhr.addEventListener("load", function() {
        console.log(xhr.responseText);
    });

    xhr.send();

});