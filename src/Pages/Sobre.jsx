import React from "react";
import "./Sobre.css";

export default function Sobre() {
  return (
    <div className="sobre-total">
      <img className="img-sobre" src="./about-hero.png" alt="" />
      <div className="container-texto-sobre">
        <div className="sobre-paragrafo">
          <p className="titulinho-sobre">// CRIAÇÃO</p>
          <h1 className="sobre-title">O projeto</h1>
          <p className="descricao-sobre">
            Desenvolvido como um projeto prático de Single Page Application
            (SPA) utilizando <strong>React e Vite</strong>, o CineApp consome os
            dados da API pública da TVMaze para trazer informações detalhadas
            sobre as maiores produções da TV e do streaming.
          </p>
        </div>
        <div className="info-sobre">
          <p className="titulinho-sobre">//ARQUITETURA & TECNOLOGIA</p>
          <p className="textinho-tech">
            Desenvolvido com padrões web modernos para fornecer uma experiência
            de catálogo leve e extremamente rápida, com fidelidade absoluta.
          </p>
          <div className="tech">
            <p className="tech-detalhes">React</p>
            <p className="tech-detalhes">Vite</p>
            <p className="tech-detalhes">CSS</p>
            <p className="tech-detalhes">TVMaze API</p>
          </div>
          <hr className="linha-sobre" />
          <p className="titulinho-sobre">//CRIADORA</p>
          <div className="creator">
            <img className="creator-img" src="./img-creator.jpg" alt="" />
            <div className="creator-info">
              <p className="nome-creator">Iris Lobato</p>
              <p className="tags-creator">Full-Stack Developer(?!) / Estudante de Engenharia Mecânica</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
