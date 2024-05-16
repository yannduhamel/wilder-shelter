import "./App.css";
import { useEffect, useState } from "react";

function App() {
  function loadRefuge() {
    fetch(
      "https://www.refuges.info/api/massif?massif=352&type_points=all&nb_points=22"
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
      <div className="card">
        
      <h1>{refuge[0]?.properties?.nom}</h1>
          {refuge[0]?.properties?.lien}
      
        {refuge[0]?.properties?.places?.nom} :{" "}
        {refuge[0]?.properties?.places?.valeur}
      
     </div>
    </div>
  );
}

export default App;
