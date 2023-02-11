import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './components/landing_page/LandingPage'
import CropPredictor from './components/CropPredictor/CropPredictor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route  path="/" element={<LandingPage />} />
            <Route  path="/crop-predictor" element={<CropPredictor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
