import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "../styles/MapComponent.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5vbnltemUiLCJhIjoiY2wyZWppdWZjMDE5cjNmb2drejYzemswcSJ9.Ikuq09fwres0ikyw6J8qDw";

export default function MapComponent() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(3.82);
  const [lat, setLat] = useState(46.72);
  const [zoom, setZoom] = useState(4.95);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
