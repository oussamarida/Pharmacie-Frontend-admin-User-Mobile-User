import React, { useEffect, useState } from 'react';
import '../styles.css';

function Orders(props) {
  const [name, setName] = useState('');
  const [addresse, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [photourl, setphotourl] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedName = name ? name : props.pharmacie.nom;
  const updatedAddress = addresse ? addresse : props.pharmacie.address;
  const updatedLatitude = latitude ? latitude : props.pharmacie.lat;
  const updatedLongitude = longitude ? longitude : props.pharmacie.log;
    
    console.log(name)
    const data = {
      id: props.pharmacie.id,
      nom: updatedName,
      address: updatedAddress,
      lat: updatedLatitude,
      log: updatedLongitude,
      zone: props.pharmacie.zone,
      photo: props.pharmacie.photo,
    };
    fetch('http://localhost:8082/Pharmacie/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log('Success:', data))
      .catch((error) => console.error('Error:', error));

  };

  return (
    <div className="orders-container" style={{ paddingTop: 200 }}>
      <div className="form-container">
        <h1>Pharmacy {props.user.nom}</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" placeholder={props.pharmacie.nom} value={name}  onChange={(e) => setName(e.target.value)}  />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address"  placeholder={props.pharmacie.address} value={addresse} onChange={(e) => setAddress(e.target.value)}  />
          </div>
          <div className="form-group">
            <label htmlFor="latitude">Latitude</label>
            <input type="text" id="latitude"  placeholder={props.pharmacie.lat} value={latitude} onChange={(e) => setLatitude(e.target.value)}  />
          </div>
          <div className="form-group">
            <label htmlFor="longitude">Longitude</label>
            <input type="text" id="longitude"  placeholder={props.pharmacie.log} value={longitude} onChange={(e) => setLongitude(e.target.value)}  />
          </div>
          <div className="form-group">
            <button type="submit">Update it</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Orders;
