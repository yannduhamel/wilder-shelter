import "../App.css";
import { useLocation } from "react-router-dom";
import "../styles/Refuge.css";

function Refuge() {
  const location = useLocation();
  const { unRefuge } = location.state;

  return (
    <div className="container-refuge">
      <div key={unRefuge.id} className="card-refuge">
        <h1 key={unRefuge.id}>{unRefuge?.properties?.nom}</h1>

        <img src="https://media.istockphoto.com/id/1135078485/fr/photo/paysage-montagnard-idyllique-dans-les-alpes-chalet-de-montagne-prairies-et-ciel-bleu.jpg?s=612x612&w=0&k=20&c=t5xsgpyT9wxhZao_CFB0ZIHo2qmBbIUyYb529-0IiRs="></img>
        <div className="texte-refuge">
          <p>
            {unRefuge?.properties?.places?.nom} :{" "}
            {unRefuge?.properties?.places?.valeur}
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <p className="p-lien-refuge">
          Pour plus d'informations :{" "}
          <a href={unRefuge?.properties?.lien}>{unRefuge?.properties?.lien}</a>{" "}
        </p>
      </div>
    </div>
  );
}
export default Refuge;
