import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import "./Home.css";

export default function Home() {
  const [producao, setProducao] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [busca, setBusca] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 20;
  //filtro por genero
  const [generoEscolhido, setGeneroEscolhido] = useState("Todos");
  const listaGeneros = [
    "Todos",
    "Action",
    "Horror",
    "Drama",
    "Comedy",
    "Romance",
    "Fantasy",
    "Anime",
    "Adventure",
    "Science-Fiction",
    "Thriller",
    "Crime",
    "Mystery",
    "Family",
    "Supernatural",
    "History",
    "Medical",
    "Legal",
    "Western",
    "Music",
  ];

  useEffect(() => {
    //consumindo api
    async function buscarProducoes() {
      const url = "https://api.tvmaze.com/shows";
      try {
        const response = await fetch(url, {
          method: "GET",
        });
        const dados = await response.json();

        setProducao(dados);
      } catch (erro) {
        console.error("Erro ao buscar os dados:", erro);
      } finally {
        setCarregando(false);
      }
    }
    buscarProducoes();
  }, []);
  //att filtragem
  function handleSearchChange(evento) {
    setBusca(evento.target.value);
    setPaginaAtual(1);
  }
  //filtragem
  const producaoFiltrada = producao.filter((item) => {
    const passouNaBusca = item.name.toLowerCase().includes(busca.toLowerCase());
    const passouNoGenero =
      generoEscolhido === "Todos" || item.genres?.includes(generoEscolhido);
    return passouNaBusca && passouNoGenero;
  });

  //constantes p rederização das páginas
  const ultimoItem = paginaAtual * itensPorPagina;
  const primeiroItem = ultimoItem - itensPorPagina;
  const itensAtuais = producaoFiltrada.slice(primeiroItem, ultimoItem);
  const totalPaginas = Math.ceil(producaoFiltrada.length / itensPorPagina);

  return (
    <div className="container-home">
      <div className="input-select">
        <input
          type="text"
          placeholder="🔍︎  Buscar filme ou série..."
          value={busca}
          onChange={handleSearchChange}
          className="input-busca"
        />
        <div className="filtros-genero">
          <select
            className="selecionar-genero"
            value={generoEscolhido}
            onChange={(evento) => {
              setGeneroEscolhido(evento.target.value);
              setPaginaAtual(1);
            }}
          >
            {listaGeneros.map((genero) => (
              <option className="opcao" key={genero} value={genero}>
                {genero === "Todos" ? "Todos os Filmes" : genero}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="principal">
        <div className="catalogo">
          <p className="linha-vertical">.</p>
          <h1 className="titulo-catalogo">Catálogo</h1>
        </div>
        <div className="grid-cards">
          {carregando ? (
            <p className="buscando-filmes">Carregando...</p>
          ) : itensAtuais.length > 0 ? (
            itensAtuais.map((item) => (
              <CardItem key={item.id} dadosDoFilme={item} />
            ))
          ) : (
            <p>Nenhuma produção encontrada.</p>
          )}
        </div>
      </div>

      {/* jesus socorro, renderização de páginas, finalmente */}
      <div className="paginas-div">
        {totalPaginas > 1 && (
          <div className="paginacao">
            {Array.from({ length: totalPaginas }, (_, index) => index + 1).map(
              (numero) => (
                <button
                  key={numero}
                  onClick={() => setPaginaAtual(numero)}
                  className="botao-paginacao"
                >
                  {numero}
                </button>
              ),
            )}
          </div>
        )}
      </div>
    </div>
  );
}
