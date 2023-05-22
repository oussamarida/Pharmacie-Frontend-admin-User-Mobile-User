import React from "react";

import "../styles.css";
import { useEffect } from "react";
import { useState } from "react";
import logoDelet from "../../assets/icons/delett.png";

function Zone() {
  const [Zonedata, setZonedata] = useState([]);
  const [updatedName, setUpdatedName] = useState("");
  const [Villedata, setVilledata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/Ville/all")
      .then((response) => response.json())
      .then((data) => setVilledata(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8082/Zone/all")
      .then((response) => response.json())
      .then((data) => setZonedata(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleSubmit = (event) => {
    const data = {
      nom: updatedName,
      ville:{id:selectedCity}
    };
    fetch("http://localhost:8082/Zone/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
    fetch("http://localhost:8082/Zone/all")
      .then((response) => response.json())
      .then((data) => setZonedata(data))
      .catch((error) => console.error("Error:", error));
    setUpdatedName(""); // Reset the form input after submission
  };

  const handleNameChange = (event) => {
    setUpdatedName(event.target.value);
  };

  const handleClick = (id) => {
    // Delete the Zone with the given ID
    fetch(`http://localhost:8082/Zone/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Deleted ID:", id);
        // Refresh the Zone list after successful deletion
        fetch("http://localhost:8082/Zone/all")
          .then((response) => response.json())
          .then((data) => setZonedata(data))
          .catch((error) => console.error("Error:", error));
      })
      .catch((error) => console.error("Error:", error));
  };

  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };



  return (
    <div className="dashboard-content">
      <div className="dashboard-content-container">
        <div className="dashboard-content-header">
          <h2>Zone List</h2>
        </div>

        <table>
          <thead>
            <th>ID</th>
            <th>Zone</th>
            <th>Ville</th>
            <th>Action</th>
          </thead>

          <tbody>
            {Zonedata.map((Zone, index) => (
              <tr key={index}>
                <td>
                  <span>{Zone.id}</span>
                </td>
                <td>
                  <span>{Zone.nom}</span>
                </td>
                <td>
                  <span>{Zone.ville.nom}</span>
                </td>
                <td>
                  <span
                    onClick={() => handleClick(Zone.id)}
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
        <div className="container2" style={{ marginBottom: 50 }}>
          <select className="customSelect" onChange={handleCityChange}>
            <option selected>Ville</option>
            {Villedata.map((Ville, index) => (
              <option value={Ville.id} key={index}>
                {Ville.nom}
              </option>
            ))}
          </select>
        </div>
        <div className="container">
          <input
            type="text"
            placeholder="Zone"
            value={updatedName}
            onChange={handleNameChange}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Zone;

// import React, { useEffect, useState } from "react";
// import "../styles.css";
// import logoDelet from "../../assets/icons/delett.png";

// function Zone() {
//   const [Zonedata, setZonedata] = useState([]);
//   const [updatedName, setUpdatedName] = useState("");
//   const [Villedata, setVilledata] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8082/Ville/all")
//       .then((response) => response.json())
//       .then((data) => setVilledata(data))
//       .catch((error) => console.error("Error:", error));
//   }, []);

//   useEffect(() => {
//     fetch("http://localhost:8082/Zone/all")
//       .then((response) => response.json())
//       .then((data) => setZonedata(data))
//       .catch((error) => console.error("Error:", error));
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const data = {
//       nom: updatedName,
//     };

//     fetch("http://localhost:8082/Zone/save", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log("Success:", data))
//       .catch((error) => console.error("Error:", error));

//     fetch("http://localhost:8082/Zone/all")
//       .then((response) => response.json())
//       .then((data) => setZonedata(data))
//       .catch((error) => console.error("Error:", error));

//     setUpdatedName(""); // Reset the form input after submission
//   };

//   const handleNameChange = (event) => {
//     setUpdatedName(event.target.value);
//   };

//   const handleClick = (id, event) => {
//     event.preventDefault();

//     // Delete the Zone with the given ID
//     fetch(`http://localhost:8082/Zone/delete/${id}`, {
//       method: "DELETE",
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Deleted ID:", id);
//         // Refresh the Zone list after successful deletion
//         fetch("http://localhost:8082/Zone/all")
//           .then((response) => response.json())
//           .then((data) => setZonedata(data))
//           .catch((error) => console.error("Error:", error));
//       })
//       .catch((error) => console.error("Error:", error));
//   };

//   return (
//     <div className="dashboard-content">
//       <div className="dashboard-content-container">
//         <div className="dashboard-content-header">
//           <h2>Zone List</h2>
//         </div>

//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Zone</th>
//               <th>Ville</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Zonedata.map((Zone, index) => (
//               <tr key={index}>
//                 <td>
//                   <span>{Zone.id}</span>
//                 </td>
//                 <td>
//                   <span>{Zone.nom}</span>
//                 </td>
//                 <td>
//                   <span>{Zone.ville.nom}</span>
//                 </td>
//                 <td>
//                   <span
//                     onClick={(event) => handleClick(Zone.id, event)}
//                     style={{ cursor: "pointer" }}
//                   >
//                     <img src={logoDelet} alt="" />
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <form onSubmit={handleSubmit} style={{ marginTop: 200 }}>
//       <div className="container2" style={{marginBottom:50}}>
//          <select className="customSelect">
//             <option selected>Ville</option>
//             {Villedata.map((Ville, index) => (
//               <option value={Ville.id} key={index}>
//                 {Ville.nom}
//               </option>
//             ))}
//           </select>
//           </div>
//         <div className="container">

//           <input
//             type="text"
//             placeholder="Zone"
//             value={updatedName}
//             onChange={handleNameChange}
//           />
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Zone;
