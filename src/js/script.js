function VerificaForm(){
    var form = document.getElementById("formulario");
    var nome = document.getElementById("username");
    var email = document.getElementById("email");

    if(nome.value == ""){
        alert("voce nao preencheu seu nome");
        nome.focus();
        return;
    }

    if(email.value == ""){
        alert("voce nao preencheu seu email");
        email.focus();
        return;
    }

    alert("Formulário preenchido com os seguintes dados: \nNome: " + nome.value + "\nEmail: " + email.value);

    form.reset();
}