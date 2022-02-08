import './App.scss';
import react from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import IDOSales from './View/Pages/IDOSales/IDOSales';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './View/Pages/Home/Home'
import StakingDashboard from './View/Pages/StakingDashboard/StakingDashboard';

function App() {
  return (
    <react.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/idosales" element={<IDOSales />} />
          <Route path="/dashboard" element={<StakingDashboard />} />
        </Routes>
      </BrowserRouter>
    </react.Fragment>
  );
}

export default App;
