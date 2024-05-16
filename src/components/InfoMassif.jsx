function InfoMassif({ pyrenees, jura, alpes, massifCentral }) {
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
