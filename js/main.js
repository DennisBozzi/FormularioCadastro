var nome = $("#nome");
var sobrenome = $("#sobrenome");
var email = $("#email");
var tel = $("#tel");
var selectDia = $("#dia");
var selectMes = $("#mes");
var selectAno = $("#ano");
var descricao = $("#descricao");

//Populando os Selects
var dia = "<option value='0' selected>Dia</option>";
var mes = "<option value='0' selected>Mês</option>";
var ano = "<option value='0' selected>Ano</option>";

var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

for (let i = 1; i <= 10; i++) {
    dia += `<option value="${i}">${i}</option>`;
}

for (let i = 0; i < meses.length; i++) {
    mes += `<option value="${i + 1}">${meses[i]}</option>`;
}

for (let i = 1990; i <= 1999; i++) {
    ano += `<option value="${i}">${i}</option>`;
}

selectDia.html(dia);
selectMes.html(mes);
selectAno.html(ano);

// -----

//Alert que mostra os campos não preenchidos
function confereCampo() {
    alert(`${(nome.val() == "") ? "O campo [Nome] é necessário\n" : ""}${(sobrenome.val() == "") ? "O campo [Sobrenome] é necessário\n" : ""}${(email.val() == "") ? "O campo [Email] é necessário\n" : ""}${(tel.val() == "") ? "O campo [Telefone] é necessário\n" : ""}${(selectDia.val() == 0) ? "O campo [Dia] é necessário\n" : ""}${(selectMes.val() == 0) ? "O campo [Mês] é necessário\n" : ""}${(selectAno.val() == 0) ? "O campo [Ano] é necessário\n" : ""}${(descricao.val() == "") ? "O campo [Descrição] é necessário\n" : ""}`);
}

//Confere se os campos estão preenchidos e mostra o alert da ficha de cadastro
function cadastrar() {
    if (nome.val() == "" || sobrenome.val() == "" || email.val() == "" ||
        tel.val() == "" || selectDia.val() == 0 || selectMes.val() == 0 ||
        selectAno.val() == 0 || descricao.val() == "") {
        confereCampo();
    }
    else {
        alert("Usuário cadastrado com sucesso:\n\n" +
            "Nome: " + nome.val() + "\n" +
            "Sobrenome: " + sobrenome.val() + "\n" +
            "E-Mail: " + email.val() + "\n" +
            "Telefone: " + tel.val() + "\n" +
            "Data de Nascimento: " + selectDia.val() + "/" + selectMes.val() + "/" + selectAno.val() + "\n" +
            "Descrição: " + descricao.val() + "\n"

        );
    }
}

//Limpa os campos
function limpar() {
    nome.val("");
    sobrenome.val("");
    email.val("");
    tel.val("");
    selectDia.val(0);
    selectMes.val(0);
    selectAno.val(0);
    descricao.val("");
}