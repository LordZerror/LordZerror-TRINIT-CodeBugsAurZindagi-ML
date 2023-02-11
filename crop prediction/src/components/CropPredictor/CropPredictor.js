import React from 'react'
import logo from '../../assets/Icon.png'

const CropPredictor = () => {
  return (
    <div className='crop-predictor'>
        <header className="header">
        <div className="website-info">
          <img src={logo} className='logo'></img>
          <h1 className="title"><span className="title-crop">Crop</span>Predictor</h1>
        </div>
      </header>
    </div>
  )
}

export default CropPredictor