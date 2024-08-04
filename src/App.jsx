import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Packages from './pages/Packages';
import PackageInfoAndBooking from './pages/PackageInfoAndBooking';
import Checkout from './pages/Checkout';
import CheckoutConfirmation from './pages/CheckoutConfirmation';


import Tours from './pages/admin/Tours';
import TestimonialsAdmin from './pages/admin/TestimonialsAdmin';
import GalleryAdmin from './pages/admin/GalleryAdmin';
import Booking from './pages/admin/Booking';
import ViewBooking from './pages/admin/ViewBooking';
import CreateTestimonials from './pages/admin/CreateTestimonials';
import CreateTours from './pages/admin/CreateTours';
import EditTours from './pages/admin/EditTours';


import Login from './pages/admin/Login';


//Error Pages
import NotFound from './Components/ErrorPages/NotFound';


import PrivateRoutes from './PrivateRoutes/PrivateRoutes';

const App = () => {

  return (
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/gallery" element={ <Gallery/> } />
        <Route path="/testimonials" element={ <Testimonials/> } />
        <Route path="/contactUs" element={<Home />} />
        <Route path="/packages" element={ <Packages/> } />
        <Route path="/packages/:slug" element={ <PackageInfoAndBooking/> } />
        <Route path="/checkout" element={ <Checkout/> } />
        <Route path="/checkout/confirmation" element={ <CheckoutConfirmation/> } />


        <Route path="/admin/login" element={ <Login/> } />
        <Route element={<PrivateRoutes/>}>
            <Route path="/admin/tours" element={ <Tours/> } />
            <Route path="/admin/tours/create" element={ <CreateTours/> } />
              <Route path="/admin/tours/edit/:slug" element={ <EditTours/> } />
            <Route path="/admin/testimonials" element={ <TestimonialsAdmin/> } />
            <Route path="/admin/testimonials/create" element={ <CreateTestimonials/> } />
            <Route path="/admin/gallery" element={ <Gallery/> } />
            <Route path="/admin/booking" element={ <Booking/> } />
            <Route path="/admin/booking/:slug/view" element={ <ViewBooking/> } />
            <Route path="/admin/account" element={ <Tours/> } />
        </Route>

        <Route path="*" element={ <NotFound/> } />
      </Routes>
  );
};

export default App;
