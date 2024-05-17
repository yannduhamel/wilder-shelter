import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/InfoMassif.css";

function InfoMassif({ pyrenees, jura, alpes, massifCentral }) {
  return (
    <section className="info-massif">
      <h2>Refuges</h2>
      <h3>Pyrénées</h3>
      {pyrenees.map((unRefuge) => (
        <Link
          key={unRefuge.id}
          to={`/refuge/${unRefuge.id}`}
          state={{ unRefuge }}
        >
          <p>
            {unRefuge.properties.nom} | Altitude :{" "}
            {unRefuge.properties.coord.alt} m
          </p>
        </Link>
      ))}
      <h3>Alpes</h3>
      {alpes.map((unRefuge) => (
        <Link
          key={unRefuge.id}
          to={`/refuge/${unRefuge.id}`}
          state={{ unRefuge }}
        >
          <p>
            {unRefuge.properties.nom} | Altitude :{" "}
            {unRefuge.properties.coord.alt} m
          </p>
        </Link>
      ))}
      <h3>Jura</h3>
      {jura.map((unRefuge) => (
        <Link
          key={unRefuge.id}
          to={`/refuge/${unRefuge.id}`}
          state={{ unRefuge }}
        >
          <p>
            {unRefuge.properties.nom} | Altitude :{" "}
            {unRefuge.properties.coord.alt} m
          </p>
        </Link>
      ))}
      <h3>Massif Central</h3>
      {massifCentral.map((unRefuge) => (
        <Link
          key={unRefuge.id}
          to={`/refuge/${unRefuge.id}`}
          state={{ unRefuge }}
        >
          <p>
            {unRefuge.properties.nom} | Altitude :{" "}
            {unRefuge.properties.coord.alt} m
          </p>
        </Link>
      ))}
    </section>
  );
}

InfoMassif.propTypes = {
  pyrenees: PropTypes.array.isRequired,
  alpes: PropTypes.array.isRequired,
  jura: PropTypes.array.isRequired,
  massifCentral: PropTypes.array.isRequired,
};

export default InfoMassif;
