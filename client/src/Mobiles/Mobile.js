import React from 'react'
import { useState,useEffect } from 'react';
import Layout from '../ProductLayout/Layout';
import { Outlet, useParams} from 'react-router-dom';
import CustomerReview from '../ProductLayout/CustomerReview';
function ClothsComp() {
  const[filterDisplay,setFilterDisplay] = useState('d-none');
  const[style,setStyle] = useState('d-block')
 const url = window.location.href;
 const parsedUrl = new URL(url);
const query = parsedUrl.search;
const params =useParams();

console.log(params.price,query)
      var [data,setData] = useState([]);
      var [display,setDisplay] = useState(false);
    useEffect(()=>{
        async function fetchData(){ 
         const response = await fetch("http://localhost:8000/mobile"); 
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
    
   },[query]);

   
  //price filter data
 
  const  PriceFilter = [{min:0,max:10000},{min:10000,max:15000},{min:15000,max:20000},{min:20000,max:'over'}]
    return (
      <>
  <div className='filter-btn' onClick={()=>setStyle('d-block')}><button className=' border-0 rounded dropdown-toggle  fw-bold fs-5' onClick={()=>setFilterDisplay("d-flex")}>filter</button></div>
      <div className='d-flex mx-2'>
      <div className='filter-field cart' style={{width:"20%"}}>
      <CustomerReview data = {data} priceFilter={PriceFilter}/>
   </div>
   
   <div className={filterDisplay} style={{display:"flex",flexDirection:"column",zIndex:20}}>
   <div className={style}>
  <div className='sidebar'>
  <button type="button" className="btn-close btn-close-white fs-4"  aria-label="Close"  onClick={()=>setFilterDisplay('d-none')}></button>
   <div className='filter-btn text-light' style={{zIndex:20,width:'100%'}}>
  
      <CustomerReview data = {data} priceFilter={PriceFilter}/>
   </div>
   </div>
</div>
   </div>
   {display?<div><Outlet/></div>:<div style={{zIndex:1}}><Layout data = {data}/></div>}
 </div>

      </>
    )
}

export default ClothsComp
