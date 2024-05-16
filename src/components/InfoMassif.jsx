import { useState, useEffect } from "react";
import axios from "axios";

function InfoMassif() {
  const [pyrenees, setPyrenees] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://www.refuges.info/api/massif?massif=351&type_points=all&nb_points=5"
      )
      .then((res) => {
        const dataSend = res.data.features[0];
        const dataPyrenees = {
          name: dataSend.properties.nom,
          altitude: dataSend.properties.coord.alt,
          coordinates: dataSend.geometry.coordinates,
        };
        setPyrenees(dataPyrenees);
      });
  }, []);

  console.log(pyrenees);

  return;
}

export default InfoMassif;
