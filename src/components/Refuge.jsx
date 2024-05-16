import { useEffect, useState } from "react";
import "../App.css";

function Refuge() {
  function loadRefuge() {
    fetch(
      "https://www.refuges.info/api/massif?massif=352&type_points=all&nb_points=10"
    )
      .then((response) => response.json())
      .then((data) => setRefuge(data.features));
  }
  const [refuge, setRefuge] = useState([]);
  useEffect(() => {
    loadRefuge();
  }, []);
  console.log(refuge);

  return (
    <div className="container">
      {refuge.map((refug) => (
        <div key={refug.id} className="card">
          <h1 key={refug.id}>{refug?.properties?.nom}</h1>
          <a href={refug?.properties?.lien}>{refug?.properties?.lien}</a>
          <p>
            {refug?.properties?.places?.nom} :{" "}
            {refug?.properties?.places?.valeur}
          </p>
        </div>
      ))}
    </div>
  );
}
export default Refuge;
