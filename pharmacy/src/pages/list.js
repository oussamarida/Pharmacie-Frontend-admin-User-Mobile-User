import React, { useState, useEffect } from 'react';
import SimpleContainer from './maps';



function List() {
  const [Villedata, setVilledata] = useState([]);
  const [Zonedata, setZonedata] = useState([]);
  const [Pharmaciedata, setPharmaciedata] = useState([]);
  const [Gardedata, setGardedata] = useState([]);

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);
  const [selectedGarde, setSelectedGarde] = useState(null);
  const [Photo, setPhoto] = useState(null);

  const [showDiv, setShowDiv] = useState(false);
  const handleDivToggle = () => {
    setShowDiv(!showDiv);
  };



  const handleCityChange = event => {
    setSelectedCity(event.target.value);
  };

  const handleZoneChange = event => {
    setSelectedZone(event.target.value);
  };

  const handleGardeChange = event => {
    setSelectedGarde(event.target.value);
  };

  useEffect(() => {
    if (selectedZone) {
      fetch('http://localhost:8082/Garde/all')
        .then((response) => response.json())
        .then((data) => setGardedata(data))
        .catch((error) => console.error('Error:', error));
    }
  }, [selectedZone]);

  useEffect(() => {
    fetch('http://localhost:8082/Ville/all')
      .then((response) => response.json())
      .then((data) => setVilledata(data))
      .catch((error) => console.error('Error:', error));
  }, []);



  useEffect(() => {
    fetch(`http://localhost:8082/Ville/v/${selectedCity}`)
      .then(response => response.json())
      .then(data => setZonedata(data))
      .catch((error) => console.error('Error:', error));
    }, [selectedCity]);

  useEffect(() => {
   
        fetch(`http://localhost:8082/Ville/Phar/${selectedCity}`)
      .then(response => response.json())
      .then(data => setPharmaciedata(data))
      .catch((error) => console.error('Error:', error));
  
    }, [selectedCity]);
    
    useEffect(() => {
    
        fetch(`http://localhost:8082/Ville/v/${selectedCity}/z/${selectedZone}`)
        .then(response => response.json())
        .then(data => setPharmaciedata(data))
        .catch((error) => console.error('Error:', error));
      
     
      }, [selectedZone]);

   
      const [photoUrls, setPhotoUrls] = useState([]);

      const getPhoto = (id) => {
        return fetch('http://localhost:8082/Photo/all')
          .then(response => response.json())
          .then(data => {
            const photo = data.find(item => item.pharmacie.id === id);
            return photo ? photo.nom : null;
          });
      }
    
      useEffect(() => {
        const fetchPhotoUrls = async () => {
          const urls = await Promise.all(
            Pharmaciedata.map(pharmacie => getPhoto(pharmacie.id))
          );
          setPhotoUrls(urls);
        };
        fetchPhotoUrls();
      }, [Pharmaciedata]);
    

      
      useEffect(() => {
       
          fetch(`http://localhost:8082/Ville/v/${selectedCity}/z/${selectedZone}/garde/garde=${selectedGarde}`)
          .then(response => response.json())
          .then(data => setPharmaciedata(data))
          .catch((error) => console.error('Error:', error));
          
          }, [selectedGarde]);


  return (
    <div style={{backgroundColor:'white'}}>
        {/* ======= Header ======= */}
        <header id="header" className="fixed-top d-flex align-items-center ">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="logo">
              <h1 className="text-light"><a href="index.html"><span>Pharmacy</span></a></h1>
              {/* Uncomment below if you prefer to use an image logo */}
              {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
            </div>
            <nav id="navbar" className="navbar">
              <ul>
                <li><a className href="/">Home</a></li>
                <li><a className="active" href="/list">Pharmacy</a></li>
                <li><a href="/login">Login</a></li>
              </ul></nav>{/* .navbar */}
          </div>
        </header>{/* End Header */}
        <main id="main">
          {/* ======= Our Portfolio Section ======= */}
          <section className="breadcrumbs">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2>List Pharmacy</h2>
                <ol>
                  <li><a href="/">Home</a></li>
                  <li>Our List Pharmacy</li>
                </ol>
              </div>
            </div>
          </section>{/* End Our Portfolio Section */}
          {/* ======= Portfolio Section ======= */}
          <section className="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <ul id="portfolio-flters">
                    <select style={{borderRadius: '20px' ,width: '120px', height: '40px' , margin:'30px'}} onChange={handleCityChange}>
                      <option style={{backgroundColor:'gray'}}>Ville</option>
                      {Villedata.map((Ville, index) => (
                     <option value={Ville.nom} key={index}>{Ville.nom}</option>
                     ))}
                    </select>
                    <select style={{borderRadius: '20px', width: '120px', height: '40px', margin:'30px'}} onChange={handleZoneChange}>
                      <option style={{backgroundColor:'gray'}}>Zone</option>
                      {Zonedata.map((Zone, index) => (
                     <option value={Zone.nom} key={index}>{Zone.nom}</option>
                  ))}
                    </select>
                    <select style={{borderRadius: '20px', width: '120px', height: '40px', margin:'30px'}} onChange={handleGardeChange}>
                    <option style={{backgroundColor:'gray'}}>Garde</option>
                    {Gardedata.map((Garde, index) => (
                     <option value={Garde.nom} key={index}>{Garde.nom}</option>
                    ))}
                    </select>
                  </ul>
                </div>
              </div>
              <div className="row portfolio-container" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500}>
              {Pharmaciedata.map((pharmacie, index) => (
                
                <div className="col-lg-4 col-md-6 portfolio-wrap filter-app" key={index}>
                  <div className="portfolio-item">
                    <img src={photoUrls[index]} className="img-fluid" alt="" />
                    
                    
                   <div className="portfolio-info">
                      <h3>{ pharmacie.nom}</h3>
                      <div>
                        <p style={{color: 'white'}}>{pharmacie.address}</p>
                        <button
                href="portfolio-details.html"
                title="Portfolio Details"
                onClick={handleDivToggle}
              >
                <i className="bi bi-map" />
              </button>
      
                      </div>
                    </div>
                  </div>
                  {showDiv && (
                   <div style={{ position: 'fixed', top: '100%', left: '50%', zIndex: 999 }}>
                  <SimpleContainer var={true} log={pharmacie.log} lat={pharmacie.lat} />
                 </div>
)}
                </div>
        ))}
              </div>
            </div>
          </section>{/* End Portfolio Section */}
        </main>{/* End #main */}
      </div>
  );
}

export default List;
