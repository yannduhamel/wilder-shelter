import "../App.css";
import { useLocation } from "react-router-dom";

function Refuge() {
  const location = useLocation();
  const { unRefuge } = location.state;
  const logo = unRefuge?.properties?.type?.icone;


  


  return (
    <div className="container">
      <div key={unRefuge.id} className="card">
        <h1 key={unRefuge.id}>{unRefuge?.properties?.nom}</h1>
        <a href={unRefuge?.properties?.lien}>{unRefuge?.properties?.lien}</a>
        <br />{" "}
        <img src="https://media.istockphoto.com/id/1135078485/fr/photo/paysage-montagnard-idyllique-dans-les-alpes-chalet-de-montagne-prairies-et-ciel-bleu.jpg?s=612x612&w=0&k=20&c=t5xsgpyT9wxhZao_CFB0ZIHo2qmBbIUyYb529-0IiRs="></img>
        <p>
          {unRefuge?.properties?.places?.nom} :{" "}
          {unRefuge?.properties?.places?.valeur}
        </p>

        <p>Outil Disponible sur Place :</p>
        <div className="icones">
          {logo.includes("eau") ? (
            <img src="https://cdn-icons-png.flaticon.com/512/850/850785.png" />
          ) : (
            <img src=""></img>
          )}
          {logo.includes("feu") ? (
            <img src="https://cdn-icons-png.flaticon.com/512/1172/1172477.png" />
          ) : (
            <img src=""></img>
          )}
          {logo.includes("a48") ? (
            <img src="" />
          ) : (
            <img src="https://cdn-icons-png.flaticon.com/512/3063/3063509.png"></img>
          )}
        </div>
      </div>
    </div>
  );
}
export default Refuge;
