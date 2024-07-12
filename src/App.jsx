import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Packages from './pages/Packages';
import PackageInfoAndBooking from './pages/PackageInfoAndBooking';
import Checkout from './pages/Checkout';
import CheckoutConfirmation from './pages/CheckoutConfirmation';


import Tours from './pages/admin/Tours';
import Testimonials from './pages/admin/Testimonials';
import Gallery from './pages/admin/Gallery';
import Booking from './pages/admin/Booking';
import ViewBooking from './pages/admin/ViewBooking';
import CreateTestimonials from './pages/admin/CreateTestimonials';
import CreateTours from './pages/admin/CreateTours';


import Login from './pages/admin/Login';

const App = () => {

  return (
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/packages" element={ <Packages/> } />
          <Route path="/packages/:slug" element={ <PackageInfoAndBooking/> } />
        <Route path="/checkout" element={ <Checkout/> } />
        <Route path="/checkout/confirmation" element={ <CheckoutConfirmation/> } />


        <Route path="/admin/login" element={ <Login/> } />
        <Route path="/admin/tours" element={ <Tours/> } />
        <Route path="/admin/tours/create" element={ <CreateTours/> } />
        <Route path="/admin/testimonials" element={ <Testimonials/> } />
        <Route path="/admin/testimonials/create" element={ <CreateTestimonials/> } />
        <Route path="/admin/gallery" element={ <Gallery/> } />
        <Route path="/admin/booking" element={ <Booking/> } />
        <Route path="/admin/booking/0101/view" element={ <ViewBooking/> } />
        <Route path="/admin/account" element={ <Tours/> } />
      </Routes>
  );
};

export default App;
