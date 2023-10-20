import React from 'react'
import { useState,useEffect } from 'react';
import Layout from '../ProductLayout/Layout';
import { Outlet, useParams} from 'react-router-dom';
import CustomerReview from '../ProductLayout/CustomerReview';
function ElectronicComp() {
  const url = window.location.href;
 const parsedUrl = new URL(url);
const query = parsedUrl.search;
const params = useParams();
  var [display,setDisplay] = useState(false);
    var [data,setData] = useState([]);
    const[filterDisplay,setFilterDisplay] = useState('d-none');
  
    useEffect(()=>{
        async function fetchData(){ 
         const response = await fetch("http://localhost:8000/electronics"); 
         const  json = await response.json();
         setData(json);
         if(query)
         {
           setDisplay(true);
         }
         else{ 
 setDisplay(false);
         
         }
     }
      fetchData();
   },[query,params]);
   
   const priceFilter = [{min:0,max:1000},{min:1000,max:2000},{min:2000,max:3000},{min:3000,max:"over"}]
   
    return (
      <>
     <div className='filter-btn'><button className=' border-0 rounded dropdown-toggle  fw-bold fs-5' onClick={()=>setFilterDisplay("d-flex")}>filter</button></div>
      <div className='d-flex mx-2'>
      <div className='filter-field cart' style={{width:"20%"}}>
      <CustomerReview data = {data} priceFilter={priceFilter}/>
   </div>
   
   <div className={filterDisplay} style={{display:"flex",flexDirection:"column",zIndex:20}}>
   <div>
  <div className='sidebar'>
  <button type="button" className="btn-close btn-close-white fs-4"  aria-label="Close"  onClick={()=>setFilterDisplay('d-none')}></button>
   <div className='filter-btn text-light' style={{zIndex:20,width:'100%'}}>
  
      <CustomerReview data = {data} priceFilter={priceFilter}/>
   </div>
   </div>
</div>
   </div>
   {display?<div><Outlet/></div>:<div style={{zIndex:1}}><Layout data = {data}/></div>}
 </div>
       </>
    )
}

export default ElectronicComp