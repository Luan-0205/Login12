function autenticar() {
    let usuario = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    if (usuario === "usuario" && senha === "senha123") {
        document.getElementById("mensagem").innerHTML = "Usuário autenticado com sucesso"
    } else {
        document.getElementById("mensagem").innerHTML = "Usuário ou senha autenticados"
    }
}