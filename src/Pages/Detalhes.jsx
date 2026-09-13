import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Detalhes.css";

export default function Detalhes() {
  const { id } = useParams();
  const [detalhes, setDetalhes] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarDetalhes() {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const dados = await response.json();
        setDetalhes(dados);
      } catch (erro) {
        console.log("Erro ao buscar os dados:", erro);
      } finally {
        setCarregando(false);
      }
    }
    buscarDetalhes();
  }, [id]);
  if (carregando) {
    return <p className="carregando">Carregando os dados...</p>;
  }
  if (!detalhes) {
    return <p>Produção não encontrada em nossos dados.</p>;
  }

  return (
    <div className="detalhes-div">
      <Link to="/" className="voltar">
        ←
      </Link>
      <div className="container-detalhes">
        <img
          src={
            detalhes.image?.original ||
            "https://via.placeholder.com/400x600?text=Sem+Poster"
          }
          alt={``}
          className="poster-original"
        />
        <div className="info-detalhes">
          <div className="info-sub">
            <p className="genero-detalhes">{detalhes.genres?.join(" / ")}</p>
            <p className="release-runtime">
              {/*cortando a data p aparecer so o ano + data de lançamento */}
              {detalhes.premiered.slice(0, 4)} · {detalhes.runtime} min
            </p>
            <div className="rating-detalhes">
              <img
                className="estrela-detalhes"
                src="../public/estrela.png"
                alt=""
              />
              <p className="rating-numero-detalhes">
                {detalhes.rating?.average}
              </p>
            </div>
          </div>
          <h1 className="titulo-detalhes">{detalhes.name}</h1>

          {/*diabo de api retornando html maldita me tirou mó tempo */}
          <div
            className="sinopse"
            dangerouslySetInnerHTML={{
              __html: detalhes.summary || "<p>Sinopse indisponível.</p>",
            }}
          />
          {/*textinhos debaixo da sinopse e eu caducando alguem ajud */}
          <div className="info-origem">
            <div className="info-haha-to-maluca">
              <p className="titulo-origem">// PAÍS DE ORIGEM</p>
              <p className="origem">{detalhes.network?.country?.name}</p>
            </div>
            <div className="info-haha-to-maluca">
              <p className="titulo-origem">// PLATAFORMA OU EMISSORA</p>
              <p className="origem">{detalhes.network?.name}</p>
              {/*caso tenha lançado em streaming */}
              <p className="origem">{detalhes.webChannel?.name}</p>
            </div>
            <div className="info-haha-to-maluca">
              <p className="titulo-origem">// STATUS</p>
              <p className="origem">{detalhes.status}</p>
            </div>
            <div className="info-haha-to-maluca">
              <p className="titulo-origem">// LÍNGUA ORIGINAL</p>
              <p className="origem">{detalhes.language}</p>
            </div>
            <div className="info-haha-to-maluca">
              <p className="titulo-origem">// FORMATO</p>
              <p className="origem">{detalhes.type}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
