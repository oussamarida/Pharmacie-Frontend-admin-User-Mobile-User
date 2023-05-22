import React, { useEffect, useState } from 'react';
import '../styles.css';
import md5 from 'md5';

function Profil(props) {
  const [name, setName] = useState('');
  const [prenom, setprenom] = useState('');
  const [telephone, settelephone] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedName = name ? name : props.user.nom;
  const updatedprenom = prenom ? prenom : props.user.prenom;
  const updatedtelephone = telephone ? telephone : props.user.telephone;
  const updatedemail = email ? email : props.user.email;
  const updatedpassword = password ? password : props.user.password;

    console.log(name)
    const data = {
      id: props.user.id,
      nom: updatedName,
      prenom: updatedprenom,
      telephone: updatedtelephone,
      email: updatedemail,
      password: md5(updatedpassword),
      pharmacie:props.user.pharmacie
    };
console.log(data)
    fetch('http://localhost:8082/User/save', {
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
            <input type="text" id="name" placeholder={props.user.nom} value={name}  onChange={(e) => setName(e.target.value)}  />
          </div>
          <div className="form-group">
            <label htmlFor="address">prenom</label>
            <input type="text" id="address"  placeholder={props.user.prenom} value={prenom} onChange={(e) => setprenom(e.target.value)}  />
          </div>
          <div className="form-group">
            <label htmlFor="latitude">telephone</label>
            <input type="text" id="latitude"  placeholder={props.user.telephone} value={telephone} onChange={(e) => settelephone(e.target.value)}  />
          </div>
          <div className="form-group">
            <label htmlFor="longitude">email</label>
            <input type="text" id="longitude"  placeholder={props.user.email} value={email} onChange={(e) => setemail(e.target.value)}  />
          </div>
           <div className="form-group">
            <label htmlFor="longitude">password</label>
            <input type="text" id="longitude" onChange={(e) => setpassword(e.target.value)}  />
          </div>
          <div className="form-group">
            <button type="submit">Update it</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profil;
