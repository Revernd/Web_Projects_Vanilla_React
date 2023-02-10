
import {useState, useEffect} from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";

export default function App() {
  let [marker, setMarker] = useState();
  // TODO: replace with your access token
  mapboxgl.accessToken = "pk.eyJ1IjoicmV2ZXJuZCIsImEiOiJjbGRyNzBma24wODE5M25wcDRrcG4wajF1In0.cUCuWn1XokLY_svJrTn3Ww";

  useEffect(() => {
      const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/dark-v10',
          center:  [ 12.567898, 55.67583 ],
          zoom: 9
      });
      marker = new mapboxgl.Marker()
      .setLngLat([12.567898, 55.67583])
      .addTo(map);
  }, []);

  const stores = {
      central: [12.567898, 55.67583],
      norrebro: [12.553806, 55.699299],
      airport: [12.650784, 55.618042]
  }
  function handleMarkerChange(value){
      marker.setLngLat(stores[value]);
  }

  return <>
      <div className="map-overlay">
          <h3>Choose store: </h3>
          <select onChange={event=>handleMarkerChange(event.target.value)}>
              <option value="central">Central station</option>
              <option value="norrebro">Norrebro street</option>
              <option value="airport">CPH Airport</option>
          </select>
      </div>
      <div id="map"></div>
  </>;
}
