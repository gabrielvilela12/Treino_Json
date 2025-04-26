# Seleção de Usuário via JSON
## link: https://gabrielvilela12.github.io/Treino_Json/

Uma página web simples para selecionar um usuário a partir de uma lista carregada de um arquivo JSON.  
Após a escolha, os dados completos do usuário são exibidos em uma segunda página.

## 🚀 Tecnologias usadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- JSON (simulando um banco de dados)

## 🎯 Como funciona

- A página inicial (`index.html`) carrega os usuários do arquivo `usuarios.json`.
- Cada usuário aparece como um botão paginado.
- Ao clicar em um usuário:
  - O índice do usuário é salvo no `localStorage`.
  - O navegador redireciona para `usuario.html`.
- Em `usuario.html`, o app:
  - Lê o índice salvo.
  - Busca novamente o `usuarios.json`.
  - Exibe as informações do usuário escolhido.
- Se ocorrer erro (como índice inválido ou erro no carregamento), a página redireciona para o início.

