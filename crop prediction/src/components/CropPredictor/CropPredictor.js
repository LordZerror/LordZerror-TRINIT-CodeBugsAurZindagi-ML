import React, { useState} from "react";
import "./CropPredictor.css";
import logo from '../../assets/Icon.png'
import axios from 'axios';

const App = () => {
  const [location, setLocation] = useState({ district : "" , state : ""});
  const [weather, setWeather] = useState({ temperature : "" , humidity : ""});
  const [seasonCrop, setSeasonCrop] = useState("");
  const [data, setData] = useState({});


  function onSubmit(e){
    e.preventDefault(); 

    const crops = ['rice', 'maize', 'chickpea', 'kidneybeans', 'pigeonpeas',
    'mothbeans', 'mungbean', 'blackgram', 'lentil', 'pomegranate',
    'banana', 'mango', 'grapes', 'watermelon', 'muskmelon', 'apple',
    'orange', 'papaya', 'coconut', 'cotton', 'jute', 'coffee'];

    const rn = Math.floor(Math.random() * (16 - 1 + 1) + 1);
    const res = crops[rn];

    setData({crop : res})
  }
    
  async function sendData(e) {
    e.preventDefault(); 

    const district = location.district;
    const state = location.state;
    const season = seasonCrop
    const formData = {district,state,season}

    axios.post('http://localhost:8000/api/messages/', formData)
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

  let lat,lon,apiKey;

  navigator.geolocation.getCurrentPosition((position) => {
     lat = position.coords.latitude;
     lon = position.coords.longitude;
     apiKey = "pk.8ca69bbdbb997de3f1933c0be42fd71a";
    });  

  const getCurrentLocation = () => {
    fetch(`https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${lat}&lon=${lon}&format=json`)
        .then((response) => response.json())
        .then((data) => {
        setLocation({ district: data.address.state_district, state: data.address.state });
        });
    };


  const getCurrentWeather = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=90d6875860594f5f913215234231102&q=${lat},${lon}`)
        .then((response) => response.json())
        .then((data) => {
        setWeather({ temperature: data.current.temp_c, humidity: data.current.humidity });
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
      <div className="flex-ans1">
        <p className="p-ans1"> State:</p> <span className="span-margin">{location.state} </span><p className="p-ans1">District:</p><span>{location.district}</span>
      </div>
      <div className="weather-container">
        <label htmlFor="weather">Current weather:</label>
        <button onClick={getCurrentWeather} type='button' className='generate-weather'>Get Current weather</button>
      </div>
      <div className="flex-ans2">
        <p className="p-ans2"> temperature(in ℃):</p> <span className="span-margin">{weather.temperature} </span><p className="p-ans2">humidity:</p><span>{weather.humidity}</span>
      </div>
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
      <div className="classofbuttons"><button className="form-confirmation" onClick={sendData}>confirm</button><button className="form-submission" type="submit">Submit</button></div>
    </form>
    <div className="prediction-result"><p className="prediction-crop">Crop:</p><span className="ideal-crop">{data.crop}</span></div>
    </div> 
  );
};

export default App;
