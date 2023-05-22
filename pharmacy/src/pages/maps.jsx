import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaTimes } from 'react-icons/fa';

export default function SimpleContainer(props) {
  const [isVisible, setIsVisible] = React.useState(props.var);

  React.useEffect(() => {
    setIsVisible(props.var);
  }, [props.var]);

  const handleToggle = () => {
    setIsVisible(false);
  };

  const position = [props.lat, props.log];

  return (
    <React.Fragment>
      <CssBaseline />

      <Container
        maxWidth="sm"
        sx={{
          height: '15cm',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          display: isVisible ? 'block' : 'none',
        }}
      >
        <FaTimes onClick={handleToggle} style={{ fontSize: '2rem' }}/>

        <MapContainer center={position} zoom={20} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}></Marker>
        </MapContainer>
      </Container>
    </React.Fragment>
  );
}

let DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png',
  iconSize: [25, 41],
  popupAnchor: [-3, -76],
});

L.Marker.prototype.options.icon = DefaultIcon;
