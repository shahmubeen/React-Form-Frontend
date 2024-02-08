import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Signup from './components/Signup';
import Login from './components/Login';
import Watches from './components/products/Watches';
import Perfumes from './components/products/Perfumes';
import Bikes from './components/products/Bikes';
import Cars from './components/products/Cars';
import useAuth from './hooks/useAuth';

function App() {

  const { auth, setAuth } = useAuth();

  return (
    <>
      {auth ?
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='products'>
              <Route path='watches' element={<Watches />} />
              <Route path='perfumes' element={<Perfumes />} />
              <Route path='vehicles'>
                <Route path='bikes' element={<Bikes />} />
                <Route path='cars' element={<Cars />} />
              </Route>
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </> :
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      }
    </>
  );
}

export default App;
