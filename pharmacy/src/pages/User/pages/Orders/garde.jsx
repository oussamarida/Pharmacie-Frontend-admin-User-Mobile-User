import React, { useState, useEffect } from "react";
import "../styles.css";

function Garde(props) {
  const [selectedGarde, setSelectedGarde] = useState(null);
  const [Gardedata, setGardedata] = useState([]);

  const handleGardeChange = (event) => {
    setSelectedGarde(event.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:8082/Garde/all")
      .then((response) => response.json())
      .then((data) => setGardedata(data))
      .catch((error) => console.error("Error:", error));
  }, []);


  const [Dateopen, setDateopen] = useState('');
  const [DateClose, setDateClose] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(Dateopen)
    console.log(DateClose)
    console.log(selectedGarde)
    console.log(props.pharmacie.id)
    const data = {
      id: {garde: selectedGarde, pharmacie: props.pharmacie.id  , dateopen: Dateopen},
      datefin:DateClose
    };

    fetch("http://localhost:8082/Gardepharmacie/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
  };



  

  return (
    <div className="orders-container" style={{ paddingTop: 200 }}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <div className="form-group">
            <label htmlFor="latitude">Date open</label>
            <input type="Date" id="Date"  placeholder="Date open" onChange={(e) => setDateopen(e.target.value)}  />
          </div>
          <div className="form-group">
            <label htmlFor="latitude">Date Close</label>
            <input type="Date" id="Date"  placeholder="Date Close" onChange={(e) => setDateClose(e.target.value)}  />
          </div>
            <select
              style={{
                borderRadius: "20px",
                width: "120px",
                height: "40px",
                margin: "30px",
              }}
              onChange={handleGardeChange}
            >
              <option style={{ backgroundColor: "gray" }}>Garde</option>
              {Gardedata.map((Garde, index) => (
                <option value={Garde.id} key={index}>
                  {Garde.nom}
                </option>
              ))}
            </select>
            <button type="submit">Update it</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Garde;
