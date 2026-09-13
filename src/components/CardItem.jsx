import { Link } from "react-router-dom";
import "./CardItem.css";
import Tooltip from "../Tooltip";

export default function CardItem({ dadosDoFilme }) {
  return (
    <div className="card-filme">
      <img src={dadosDoFilme.image?.medium} alt={``} className="poster" />
      {/*infos dos cards em texto */}
      <div className="card-info">
        <div className="titulo-rating">
          <h3 className="titulo-producao">{dadosDoFilme.name}</h3>
          <div className="rating">
            <img className="estrela" src="/estrela.png" alt="" />
            <p className="rating-numero">{dadosDoFilme.rating?.average}</p>
          </div>
        </div>

        <p className="genero">{dadosDoFilme.genres?.join(" / ")}</p>

        {/*link que leva pra ver os detalhes
        ta faltando o tooltip ainda */}
        <Tooltip texto="Clique para saber mais detalhes">
          <Link to={`/item/${dadosDoFilme.id}`} className="ver-detalhes">
            Ver Detalhes
          </Link>
        </Tooltip>
      </div>
    </div>
  );
}
