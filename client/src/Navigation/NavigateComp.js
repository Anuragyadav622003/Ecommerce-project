
import NavBar from './NavBar';
import Home from "../Slider/Home";
import React from 'react'
import {Route,Routes} from 'react-router-dom'
import ShoesComp from '../Shoes/ShoesComp';
import ElectronicComp from '../Electronics/ElectronicComp';
import ClothsComp from '../Cloths/ClothsComp';
import WatchComp from '../Watch/WatchComp';
import BooksComp from '../Books/BooksComp';
import LaptopsComp from '../Laptops/LaptopsComp';
import SignForm from '../SignUpForm/SignForm';
import CartComp from '../Cart/CartComp';
import Mobile from '../Mobiles/Mobile';
import Details from '../Details/Details';
import PriceDetails from '../Details/PriceDetails';
import AddProducts from '../AddProduct/AddProducts';
import HomeKitchen from '../Home&Kitchen/HomeKitchen';
import Register from '../SignUpForm/Register';
function NavigateComp() {
  return (
    <>
      <NavBar/>
      <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route   path='/shoes' element={<ShoesComp/>}>
         <Route path='product' element = {<PriceDetails/>}/>
         </Route>
         <Route path = "/electronics" element={<ElectronicComp/>}>
         <Route path='product' element = {<PriceDetails/>}/>
         </Route>
         <Route path='/cloths' element = {<ClothsComp/>}>
         <Route path='product' element = {<PriceDetails/>}/>
        </Route>
         <Route path='/watch' element= {<WatchComp/>}>
         <Route path='product' element = {<PriceDetails/>}/>
         </Route>
         <Route path='/books' element= {<BooksComp/>}>
         <Route path='product' element = {<PriceDetails/>}/>
         </Route>
         <Route path='/laptops' element= {<LaptopsComp/>}>
         <Route path='product' element = {<PriceDetails/>}/>
         </Route>

         <Route path='/home&kitchen' element= {<HomeKitchen/>}>
         <Route path='product' element = {<PriceDetails/>}/>
         </Route>
   
         <Route path='/mobile' element = {<Mobile/>}>
        <Route path='product' element = {<PriceDetails/>}/>
        </Route>
        
        <Route path='/signup' element = {<SignForm/>}/>
        <Route path='/user-register' element = {<Register/>}/>
        <Route path = '/cart' element = {<CartComp/>}/>
       
        <Route path=':name'  Component = {Details}/>
        <Route  path = 'Amazone/AddProduct' Component = {AddProducts}/>

      </Routes>
     
      </>

  )
}

export default NavigateComp