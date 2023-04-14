function buscarInformacoesGitHub() {
    fetch("https://api.github.com/users/Veigatech98")
        .then(Response => Response.json())
        .then(data => exibirDadosNaTela(data))
}

function exibirDadosNaTela(data) {
    document.getElementById("info").innerHTML = `
    <img src=${data.avatar_url} alt="imagem do avatar" />
    <p>${data.name}</p>
    <a href=${data.html_url}>Github</a>
   `
}