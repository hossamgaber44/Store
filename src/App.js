import './App.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SpecialOffer from './components/pages/SpecialOffer/SpecialOffer';
import SingleProduct from './components/pages/SingleProduct/SingleProduct';
import Card from './components/pages/Card/Card';
import Phones from './components/Phones/Phones';
import Laptops from './components/Laptops/Laptops';
import HandPhones from './components/Hand Phones/HandPhones';
import Accessoires from './components/Accessoires/Accessoires';
import Login from './Authentication/Login/Login';
import Register from './Authentication/Register/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/phones' element= {<Phones/>}/>
            <Route path='/laptops' element= {<Laptops/>}/>
            <Route path='/handPhones' element= {<HandPhones/>}/>
            <Route path='/accessoires' element= {<Accessoires/>}/>
            <Route path='/SingleProduct/:id' element= {<SingleProduct/>}/>
            <Route path='/SpecialOffer/:id' element= {<SpecialOffer/>}/>
            <Route path='/card' element ={<Card/>}/>
            <Route path='/login' element ={<Login/>}/>
            <Route path='/register' element ={<Register/>}/>
         </Routes>
      <Footer />
    </BrowserRouter>
    <ToastContainer/>
    </>
  );
}

export default App;
