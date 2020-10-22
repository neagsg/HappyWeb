import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import './styles.css';
import mapMarkerImg from '../../images/map-marker.svg';

const OrphanagesMap: React.FC = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crinças estão esperando a sua visita :)</p>

        </header>

        <footer>
          <strong>Ulianópolis</strong>
          <span>Pará</span>
        </footer>
      </aside>

      <Map
        center={[-3.7588027,-47.5041869]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} /> */}
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={22} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;