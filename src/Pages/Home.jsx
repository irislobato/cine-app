import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import "./Home.css";

export default function Home() {
  const [producao, setProducao] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [busca, setBusca] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 20;

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
  const producaoFiltrada = producao.filter((item) =>
    item.name.toLowerCase().includes(busca.toLowerCase()),
  );

  //constantes p rederização das páginas
  const ultimoItem = paginaAtual * itensPorPagina;
  const primeiroItem = ultimoItem - itensPorPagina;
  const itensAtuais = producaoFiltrada.slice(primeiroItem, ultimoItem);
  const totalPaginas = Math.ceil(producaoFiltrada.length / itensPorPagina);

  return (
    <div className="container-home">
      <input
        type="text"
        placeholder="🔍︎  Buscar filme ou série..."
        value={busca}
        onChange={handleSearchChange}
        className="input-busca"
      />
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
