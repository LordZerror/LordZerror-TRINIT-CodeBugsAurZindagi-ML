import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './components/landing_page/LandingPage'
import CropPredictor from './components/CropPredictor/CropPredictor';
import Display_result from './components/Display result/Display_result'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route  path="/" element={<LandingPage />} />
            <Route  path="/crop-predictor" element={<CropPredictor />} />
            <Route  path="/Display-result" element={<Display_result />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;