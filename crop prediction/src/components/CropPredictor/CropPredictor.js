import React, { useState } from "react";
import "./CropPredictor.css";
import logo from '../../assets/Icon.png'
import axios from 'axios';

const App = () => {
  const [location, setLocation] = useState({ district : "" , state : ""});
  const [seasonCrop, setSeasonCrop] = useState("");

  async function onSubmit(e) {
    e.preventDefault(); 

    const district = location.district;
    const state = location.state;
    const season = seasonCrop
    const formData = {state,district,season}

    axios.post('http://127.0.0.1:8000/api/messages/', formData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });

      console.log(formData);
}

  const handleSeasonCropChange = (event) => {
    setSeasonCrop(event.target.value);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const apiKey = "pk.8ca69bbdbb997de3f1933c0be42fd71a";
      
        fetch(
          `https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${lat}&lon=${lon}&format=json`
        )
          .then((response) => response.json())
          .then((data) => {
            setLocation({ district: data.address.state_district, state: data.address.state });
          });
      });
      
  };

  return (
    <div>
      <header className="header">
          <div className="website-info">
            <img img src={logo} className='logo'></img>
            <h1 className="title"><span className="title-crop">Crop</span>Predictor</h1>
          </div>
      </header>
    <form onSubmit={onSubmit} className="container">
      <h1>Our ML Model based crop prediction</h1>
      <div className="location-container">
        <label htmlFor="location">Current Location:</label>
        <button onClick={getCurrentLocation} type='button' className='generate-location'>Get Current Location</button>
      </div>
      <p className="p-ans1">Your current location is:<span className="ans-notbold"> {location.district} {location.state}</span></p>
      <div className="select-container"> 
        <label htmlFor="seasonCrop">Select Season:</label>
        <select
          id="seasonCrop"
          value={seasonCrop}
          onChange={handleSeasonCropChange}
        >
          <option value="">--Please choose an option--</option>
          <option value="Kharif">Kharif</option>
          <option value="Rabi">Rabi</option>
          <option value="Whole Year">Whole Year</option>
          <option value="Summer">Summer</option>
          <option value="Winter">Winter</option>
          <option value="Autumn">Autumn</option>
        </select>
      </div>
      <p className="p-ans2">The selected seasonal crop is:<span className="ans-notbold"> {seasonCrop}</span></p>
      <button className="form-submission" type="submit">Submit</button>
    </form>
    </div>
    
  );
};

export default App;
