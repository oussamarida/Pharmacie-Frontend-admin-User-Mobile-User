import React from "react";

import "../styles.css";
import { useEffect } from "react";
import { useState } from "react";
import logoDelet from '../../assets/icons/delett.png';


function Ville() {

    const [Villedata, setVilledata] = useState([]);
    const [updatedName, setUpdatedName] = useState("");
  

    useEffect(() => {
        fetch('http://localhost:8082/Ville/all')
          .then((response) => response.json())
          .then((data) => setVilledata(data))
          .catch((error) => console.error('Error:', error));
      }, []);

      const handleSubmit = (event) => {

        const data = {
          nom: updatedName,
        };

        fetch("http://localhost:8082/Ville/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => console.log("Success:", data))
          .catch((error) => console.error("Error:", error));
          fetch('http://localhost:8082/Ville/all')
          .then((response) => response.json())
          .then((data) => setVilledata(data))
          .catch((error) => console.error('Error:', error));
        setUpdatedName(""); // Reset the form input after submission
      };
    
      const handleNameChange = (event) => {
        setUpdatedName(event.target.value);

      };


      const handleClick = (id) => {
        // Delete the Ville with the given ID
        fetch(`http://localhost:8082/Ville/delete/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Deleted ID:", id);
            // Refresh the Ville list after successful deletion
            fetch("http://localhost:8082/Ville/all")
              .then((response) => response.json())
              .then((data) => setVilledata(data))
              .catch((error) => console.error("Error:", error));
          })
          .catch((error) => console.error("Error:", error));
      };

    
  return (
    <div className="dashboard-content">
      <div className="dashboard-content-container">
        <div className="dashboard-content-header">
          <h2>Ville List</h2>
        </div>

        <table>
          <thead>
            <th>ID</th>
            <th>Ville</th>
            <th>Action</th>
          </thead>

         
            <tbody>
        {Villedata.map((Ville, index) => (
                <tr key={index}>
                  <td>
                    <span>{Ville.id}</span>
                  </td>
                  <td>
                    <span>{Ville.nom}</span>
                  </td>
                  <td>
                  <span
                    onClick={() => handleClick(Ville.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={logoDelet} alt="" />
                  </span>
                </td>
                </tr>
                 ))}
             
            </tbody>
        </table>

      </div> 
      <form onSubmit={handleSubmit} style={{ marginTop: 200 }}>
        <div className="container">
          <input
            type="text"
            placeholder="Ville"
            value={updatedName}
            onChange={handleNameChange}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Ville;
