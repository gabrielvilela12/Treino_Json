function selecionarUsuario(indice) {
  localStorage.setItem("usuarioSelecionado", indice);
  window.location.href = "usuario.html";
}

fetch('usuarios.json')
  .then(response => response.json())
  .then(dados => {
    const containerUsuario = document.getElementById("container-usuario");

    // Criando a lista de usuários diretamente
    const ul = document.createElement('ul');
    ul.classList.add("pagination", "justify-content-center");
    ul.style.cursor = "pointer";

    dados.usuarios.forEach((usuario, position) => {
      const li = document.createElement('li');
      li.classList.add("page-item", "mx-1");

      const a = document.createElement('a');
      a.classList.add("page-link");
      a.textContent = usuario.nome;
      a.onclick = () => selecionarUsuario(position);

      //ul > li > a 
      li.appendChild(a);
      ul.appendChild(li);
    });

    //container-usuario > ul > li > a 
    containerUsuario.appendChild(ul);
  })
  .catch(error => console.error('Erro ao carregar JSON:', error));
