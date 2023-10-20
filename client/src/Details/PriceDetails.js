import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../ProductLayout/Layout';
function PriceDetails() {
    const url = window.location.href;
     const parsedUrl = new URL(url);
     const query = parsedUrl.search
     const path = parsedUrl.pathname;
     const params = useParams();
    const [data,setData] = useState([]);
    
    useEffect(()=>{
    
        async function fetchData(){ 
         const response = await fetch(`http://localhost:8000${path}${query}`); 
         const  json = await response.json();
         setData(json);
        
     }
      fetchData();
   },[path,query,params.price]);
  return (
    <div><Layout data = {data}/></div>
  )
}

export default PriceDetails