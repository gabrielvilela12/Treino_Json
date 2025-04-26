document.addEventListener("DOMContentLoaded", function () {
  const usuarioDiv = document.getElementById("usuario");
  const indice = localStorage.getItem("usuarioSelecionado");

  async function carregarUsuario() {
    try {
      const response = await fetch("usuarios.json");
      const data = await response.json();
      const usuario = data.usuarios[indice];

      if (usuario) {
        usuarioDiv.innerHTML = `
          <h2>Usuário Escolhido</h2>
          <p><strong>Nome:</strong> ${usuario.nome}</p>
          <p><strong>Idade:</strong> ${usuario.idade}</p>
          <p><strong>Cidade:</strong> ${usuario.cidade}</p>
          <p><strong>Habilidades:</strong> ${usuario.habilidades.join(", ")}</p>
        `;
      } else {
        usuarioDiv.innerHTML = "<p>Usuário não encontrado!</p>";
        setTimeout(() => {
          window.location.href = "index.html"; // Redireciona depois de mostrar a mensagem
        }, 2000); // 2 segundos
      }
    } catch (error) {
      console.error(error);
      usuarioDiv.innerHTML = "<p>Erro ao carregar os dados. Voltando para a página inicial...</p>";
      setTimeout(() => {
        window.location.href = "index.html"; // Redireciona depois de mostrar o erro
      }, 2000); // 2 segundos
    }
  }

  carregarUsuario();
});
