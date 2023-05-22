import React, { useEffect, useState } from 'react';
import './css/login.css';
import { useNavigate } from 'react-router-dom';
import md5 from 'md5';
import CryptoJS from 'crypto-js';


function Signup() {
    const [name, setName] = useState('');
    const [prenom, setprenom] = useState('');
    const [telephone, settelephone] = useState('');
    const [email, setemail] = useState('');
    const [photo, setphoto] = useState('');

    const [password, setpassword] = useState('');
    const [showForm, setShowForm] = useState(true);
    const [showPharmacie, setShowPharmacie] = useState(false);


     const [nam, setNam] = useState('');
  const [addresse, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          nom: name,
          prenom: prenom,
          telephone: telephone,
          email: email,
          password: md5(password),          
        };
        fetch('http://localhost:8082/User/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => console.log('Success:', data))
          .catch((error) => console.error('Error:', error)); 
          setShowForm(false)
          setShowPharmacie(true)
      };

     
      const handleSubmitPharmacie = (event) => {
        event.preventDefault();

                
        const data2 = {
          nom: nam,
          address: addresse,
          lat: latitude,
          log: longitude,  
          zone:{id:Zoninfo},
        };
        setShowPharmacie(true)
    
        fetch('http://localhost:8082/Pharmacie/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data2),
        })
          .then((response) => response.json())
          .then((data) => console.log('Success:', data))
          .catch((error) => console.error('Error:', error)); 

          fetch(`http://localhost:8082/User/email/${email}`)
          .then((response) => response.json())
          .then((existingUserData) => {
            console.log(existingUserData)
        fetch(`http://localhost:8082/Pharmacie/nom/${data2.nom}`)
          .then((response) => response.json())
          .then((data4) => { 
            console.log(data4)
            const updatedData = {
            id:existingUserData.id,
              nom: existingUserData.nom,
              prenom: existingUserData.prenom,
              telephone: existingUserData.telephone,
              email: existingUserData.email,
              password:existingUserData.password,
              pharmacie:data4,
            };

           
                if (data4) {
                    const updatedData10 = {
                        pharmacie:data4,
                       nom:photo,
                        };
            fetch(`http://localhost:8082/Photo/save`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedData10),
              })
                .then((response) => response.json())
                .then((data) => console.log('Success:', data))
                .catch((error) => console.error('Error:', error));
            }
            if (existingUserData) {
              fetch(`http://localhost:8082/User/save`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedData),
              })
                .then((response) => response.json())
                .then((data) => console.log('Success:', data))
                .catch((error) => console.error('Error:', error));
            } 
            
          }
          )  
           .catch((error) => console.error('Error:', error))
        })
          .catch((error) => console.error('Error:', error));
            
         
       
          navigate('/login')

      };


      
  const handleCityChange = event => {
    setSelectedCity(event.target.value);
  };

  const handleZoneChange = event => {
    setSelectedZone(event.target.value);
  };

  const [Zoninfo, setZoninfo] = useState('');
  const handleZChange = (event) => {
   setZoninfo(event.target.value);
     };


      const [Villedata, setVilledata] = useState([]);
  const [Zonedata, setZonedata] = useState([]);
  const [selectedZone, setSelectedZone] = useState(null);

      useEffect(() => {
        fetch('http://localhost:8082/Ville/all')
          .then((response) => response.json())
          .then((data) => setVilledata(data))
          .catch((error) => console.error('Error:', error));
      }, []);
    
    
      const [selectedCity, setSelectedCity] = useState(null);
      useEffect(() => {
        fetch(`http://localhost:8082/Ville/v/${selectedCity}`)
          .then(response => response.json())
          .then(data => setZonedata(data))
          .catch((error) => console.error('Error:', error));
        }, [selectedCity]);
 
  return (
    <div className="divlogin">
      <h1 style={{fontFamily: 'Comic Sans MS', color: 'black' , fontFamily:"cursive" }}>Pharmacie SignUp</h1>
      {showForm &&
      <form onSubmit={handleSubmit}>
        <div className="Forms">
          <div>
            <label htmlFor="userInp" className="inp">
              <input type="text" id="userInp" placeholder="&nbsp;" onChange={(e) => setName(e.target.value)}  />
              <span className="label">Name</span>
              <span className="focus-bg"></span>
            </label>
          </div>
          <div style={{ marginTop: '0.7cm' }}>
            <label htmlFor="passwordInp" className="inp">
              <input type="text" id="passwordInp" placeholder="&nbsp;" onChange={(e) => setprenom(e.target.value)} />
              <span className="label">prenom</span>
              <span className="focus-bg"></span>
            </label>
          </div>
          <div style={{ marginTop: '0.7cm' }}>
            <label htmlFor="passwordInp" className="inp">
              <input type="text" id="passwordInp" placeholder="&nbsp;"  onChange={(e) => settelephone(e.target.value)} />
              <span className="label">telephone</span>
              <span className="focus-bg"></span>
            </label>
          </div>
          <div style={{ marginTop: '0.7cm' }}>
            <label htmlFor="passwordInp" className="inp">
              <input type="Email" id="passwordInp" placeholder="&nbsp;" onChange={(e) => setemail(e.target.value)} />
              <span className="label">email</span>
              <span className="focus-bg"></span>
            </label>
          </div>
          <div style={{ marginTop: '0.7cm' }}>
            <label htmlFor="passwordInp" className="inp">
              <input type="password" id="passwordInp" placeholder="&nbsp;" onChange={(e) => setpassword(e.target.value)}  />
              <span className="label">Password</span>
              <span className="focus-bg"></span>
            </label>
          </div>
          <div style={{ marginTop: '0.8cm', marginLeft: '0.10cm' }}>
            <div style={{ marginBottom: '1cm', marginLeft: '0.8cm' }}>
              <button type="submit" style={{ borderRadius: '4cm', color: 'green', width: '5cm', height: '1cm', boxShadow: '-moz-initial' }}>
                Login
              </button>
              
            </div>
          </div>
        </div>
      </form>
       }
        {showPharmacie &&
         <form onSubmit={handleSubmitPharmacie}>
         <div className="Forms">
           <div>
             <label htmlFor="userInp" className="inp">
               <input type="text" id="userInp" placeholder="&nbsp;" onChange={(e) => setNam(e.target.value)} />
               <span className="label">Name</span>
               <span className="focus-bg"></span>
             </label>
           </div>
           <div style={{ marginTop: '0.7cm' }}>
             <label htmlFor="passwordInp" className="inp">
               <input type="text" id="passwordInp" placeholder="&nbsp;" onChange={(e) => setAddress(e.target.value)} />
               <span className="label">Address</span>
               <span className="focus-bg"></span>
             </label>
           </div>
           <div style={{ marginTop: '0.7cm' }}>
             <label htmlFor="passwordInp" className="inp">
               <input type="text" id="passwordInp" placeholder="&nbsp;"  onChange={(e) => setLatitude(e.target.value)} />
               <span className="label">Latitude</span>
               <span className="focus-bg"></span>
             </label>
           </div>
    
           <div style={{ marginTop: '0.7cm' }}>
             <label htmlFor="passwordInp" className="inp">
               <input type="text" id="passwordInp" placeholder="&nbsp;" onChange={(e) => setLongitude(e.target.value)} />
               <span className="label">Longitude</span>
               <span className="focus-bg"></span>
             </label>
           </div>
           
           <select style={{borderRadius: '20px' ,width: '120px', height: '40px' , margin:'30px'}} onChange={handleCityChange}>
                      <option style={{backgroundColor:'gray'}}>Ville</option>
                      {Villedata.map((Ville, index) => (
                     <option value={Ville.nom} key={index}>{Ville.nom}</option>
                     ))}
                    </select>
            <select style={{borderRadius: '20px', width: '120px', height: '40px', margin:'30px'}} onChange={handleZChange}>
                      <option style={{backgroundColor:'gray'}}>Zone</option>
                      {Zonedata.map((Zone, index) => (
                     <option value={Zone.id} key={index}>{Zone.nom}</option>
                  ))}
                    </select>
                   
                    <div style={{ marginTop: '0.7cm' }}>
            <label htmlFor="passwordInp" className="inp">
              <input type="test" id="passwordInp" placeholder="&nbsp;" onChange={(e) => setphoto(e.target.value)}  />
              <span className="label">photo</span>
              <span className="focus-bg"></span>
            </label>
          </div>
           <div style={{ marginTop: '0.8cm', marginLeft: '0.10cm' }}>
             <div style={{ marginBottom: '1cm', marginLeft: '0.8cm' }}>
               <button type="submit" style={{ borderRadius: '4cm', color: 'green', width: '5cm', height: '1cm', boxShadow: '-moz-initial' }}>
                 Login
               </button>
             </div>
           </div>
         </div>
       </form>
        }
    </div>
  );
}

export default Signup;
