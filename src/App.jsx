import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Packages from './pages/Packages';
import PackageInfoAndBooking from './pages/PackageInfoAndBooking';
import Checkout from './pages/Checkout';

const App = () => {

  return (
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/packages" element={ <Packages/> } />
        <Route path="/packages/temp-pkg" element={ <PackageInfoAndBooking/> } />
        <Route path="/checkout" element={ <Checkout/> } />
      </Routes>
  );
};

export default App;
