import { useState, useEffect } from "react";
import axios from "axios";

function InfoMassif() {
  const [pyrenees, setPyrenees] = useState([]);
  const [alpes, setAlpes] = useState([]);
  const [jura, setJura] = useState([]);
  const [massifCentral, setMassifCentral] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.refuges.info/api/massif?massif=351&type_points=all&nb_points=5"
      )
      .then((res) => {
        setPyrenees(res.data.features);
      });
  }, []);

  console.log(pyrenees);

  useEffect(() => {
    axios
      .get(
        "https://www.refuges.info/api/massif?massif=352&type_points=all&nb_points=5"
      )
      .then((res) => {
        setAlpes(res.data.features);
      });
  }, []);

  console.log(alpes);

  useEffect(() => {
    axios
      .get(
        "https://www.refuges.info/api/massif?massif=2198&type_points=all&nb_points=5"
      )
      .then((res) => {
        setJura(res.data.features);
      });
  }, []);

  console.log(jura);

  useEffect(() => {
    axios
      .get(
        "https://www.refuges.info/api/massif?massif=50&type_points=all&nb_points=5"
      )
      .then((res) => {
        setMassifCentral(res.data.features);
      });
  }, []);

  console.log(massifCentral);

  return (
    <section className="info-massif">
      <h3>Pyrénées</h3>
      {pyrenees.map((unRefuge) => (
        <p key={unRefuge.id}>
          {unRefuge.properties.nom} | Altitude : {unRefuge.properties.coord.alt}{" "}
          m
        </p>
      ))}
      <h3>Alpes</h3>
      {alpes.map((unRefuge) => (
        <p key={unRefuge.id}>
          {unRefuge.properties.nom} | Altitude : {unRefuge.properties.coord.alt}{" "}
          m
        </p>
      ))}
      <h3>Jura</h3>
      {jura.map((unRefuge) => (
        <p key={unRefuge.id}>
          {unRefuge.properties.nom} | Altitude : {unRefuge.properties.coord.alt}{" "}
          m
        </p>
      ))}
      <h3>Massif Central</h3>
      {massifCentral.map((unRefuge) => (
        <p key={unRefuge.id}>
          {unRefuge.properties.nom} | Altitude : {unRefuge.properties.coord.alt}{" "}
          m
        </p>
      ))}
    </section>
  );
}

export default InfoMassif;
