function pesquisar() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  const section = document.getElementById('resultados-pesquisa');

  // Obtém o termo de pesquisa inserido pelo usuário, convertendo para minúsculas para facilitar a comparação
  const termoPesquisa = document.getElementById('campo-pesquisa').value.toLowerCase();

  // Verifica se o usuário inseriu algum termo de pesquisa
  if (!termoPesquisa) {
    // Se não houver termo de pesquisa, exibe uma mensagem de erro e encerra a função
    section.innerHTML = 'Busca não encontrada!';
    return;
  }

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let res = "";

  // Itera sobre cada item (atleta) no conjunto de dados
  for (const dado of dados) {
    // Converte o título e a descrição do item para minúsculas para facilitar a comparação
    const tituloMinusculo = dado.titulo.toLowerCase();
    const descricaoMinusculo = dado.descrição.toLowerCase();

    // Converte as tags do item para minúsculas e separa em um array de palavras
    const tagsMinusculas = dado.tag.toLowerCase().split(' ');

    // Verifica se o termo de pesquisa está presente no título, descrição ou tags
    if (tituloMinusculo.includes(termoPesquisa) ||
        descricaoMinusculo.includes(termoPesquisa) ||
        tagsMinusculas.some(tag => tag === termoPesquisa)) {
      // Se o termo foi encontrado, cria um elemento HTML para exibir o resultado da pesquisa
      res += `
        <div class="item-resultado">
          <h3>${dado.titulo}</h3>
          <p class="descricao-meta">${dado.descrição}</p>
          <a href="${dado.link}" target="_blank">Mais informações!</a>
        </div>
      `;
    }

    if (!res) {
      res = '<p>Nada parecido ou relacionado encontrado!</p>';
    }
  }

  // Atualiza o conteúdo da seção com os resultados da pesquisa
  section.innerHTML = res;
}


/*
// Função para realizar a pesquisa e atualizar a 
function pesquisar() {
  // Seleciona o elemento HTML onde os resultados serão exibidos
  const section = document.getElementById('resultados-pesquisa');
  const campoDePesquisa = window.document.getElementById('campo-pesquisa').value;

  if (campoDePesquisa == "") {
    section.innerHTML = 'Busca não encontrada!';
    return;
  }
  campoDePesquisa = campoDePesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar o HTML dos resultados
  const res = "";
  let titulo = "";
  let descrição = "";
  let tags = "";

  // Itera sobre cada item do array de dados
  for (let dado of dados) {
    titulo = dado.toLowerCase();
    descrição = dado.toLowerCase();
    tags = dado.toLowerCase();

    if (titulo.includes(campoDePesquisa) || descrição.includes(campoDePesquisa) || tags.includes(campoDePesquisa)) {
      // Cria uma string HTML para cada item, formatando com as propriedades do objeto
          res += `
          <div class="item-resultado">
            <h3>${dado.titulo}</h3>
            <p class="descricao-meta">${dado.descrição}</p>
            <a href="${dado.link}" target="_blank">Mais informações!</a>
          </div>
        `;
    } 
}
  // Atualiza o conteúdo HTML da seção com os resultados
  section.innerHTML = res;
}
*/