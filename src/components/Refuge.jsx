import "../App.css";
import { useLocation } from "react-router-dom";

function Refuge() {
  const location = useLocation();
  const { unRefuge } = location.state;

  return (
    <div className="container">
      <div key={unRefuge.id} className="card">
        <h1 key={unRefuge.id}>{unRefuge?.properties?.nom}</h1>
        <a href={unRefuge?.properties?.lien}>{unRefuge?.properties?.lien}</a>
        <p>
          {unRefuge?.properties?.places?.nom} :{" "}
          {unRefuge?.properties?.places?.valeur}
        </p>
      </div>
    </div>
  );
}
export default Refuge;
