function inserir(valor) {
    var nome = document.getElementById("campo1").value += valor;
}

function corrige() {
    document.getElementById("campo1").value = "";
    document.getElementById("img").style.display = "none";
}
function corrige1() {
    document.getElementById("campo1").value = "";
    document.getElementById("img").style.display = "none";
    alert("Limpo com sucesso!");
}

function votar() {
    var camp1 = document.getElementById("campo1").value;
    if (camp1 == "") {
        alert("Campo de confirmação em Branco!!!");
        document.getElementById("img").style.display = "none";
    } else {
        myFunction();
    }
}

function myFunction() {
    var idade = prompt("Digite sua Senha:");
    if (idade == "778899") {
        document.getElementById("img").style.display = "block";
        alert("Parabéns você votou certo!!\ clique Ok para ver a imagem!");

    } else {
        alert("Esse usuario votou em outro candidato!! Tente uma proxima vez!!");
        document.getElementById("campo1").value = "";
    }

}
