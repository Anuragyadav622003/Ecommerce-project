import React from 'react'
import { useState } from 'react';
function AddProducts() {
  const [product,setProduct] = useState('');
  const [img,setImg] = useState('');  
  const [title,setTitle] = useState('');
  const [ratting,setRatting] = useState();  
  const [name,setName] = useState('');
  const [category,setCategory] = useState('');
  const [brand,setBrand] = useState('');
  const [price,setPrice] = useState();
  const [discount,setDiscount] = useState();
  const [Id,setId] = useState();
    const handleSubmit=async(e)=>{ 
e.preventDefault();
const response = await fetch(`http://localhost:8000/${product}`,{ 
  method:"POST",
  headers:{
      'Accept':"application/json",
      'Content-Type':"application/json"
     },
     body:JSON.stringify({_id:Id,name:name,title:title,img:img,ratting:ratting,category:category,brand:brand,price:price,discount:discount})
}); 
console.log(response)

    }

    const handleReset =()=>{ 
      setBrand('');
      setCategory('');
      setDiscount('');
      setImg('');
      setTitle('');
      setName('');
      setPrice();
      setName('');
      setRatting();
      setProduct('')
      setId('')
    }
  return (
    <div style={{display:"flex",justifyContent:'center'}}><form onSubmit={handleSubmit}>
    <div class="form-group">
      <label for="product">product type :</label>
      <input type="text" class="form-control"  value={product} onChange={(e)=>setProduct(e.target.value)}/>
    
    </div>
   
    <div class="form-group">
      <label for="name">name :</label>
      <input type="text" class="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>


    <div class="form-group">
      <label for="name">_id:</label>
      <input type="number" class="form-control"  value = {Id} onChange={(e)=>setId(e.target.value)}/>
    </div>

    <div class="form-group">
      <label for="name">Img :</label>
      <input type="text" class="form-control" value={img} onChange={(e)=>setImg(e.target.value)}/>
    </div>


    <div class="form-group">
      <label for="name">Title :</label>
      <input type="text" class="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}/>
    </div>

    <div class="form-group">
      <label for="name">Category :</label>
      <input type="text" class="form-control" value={category} onChange={(e)=>setCategory(e.target.value)}/>
    </div>

    <div class="form-group">
      <label for="name">Brand:</label>
      <input type="text" class="form-control" value={brand} onChange={(e)=>setBrand(e.target.value)}/>
    </div>

    
    <div class="form-group">
      <label for="name">Ratting:</label>
      <input type="number" class="form-control"  value = {ratting} onChange={(e)=>setRatting(e.target.value)} step="any"/>
    </div>

    <div class="form-group">
      <label for="name">Price:</label>
      <input type="number" class="form-control" value ={price} onChange={(e)=>setPrice(e.target.value)}/>
    </div>
    <div class="form-group">
      <label for="name">discount:</label>
      <input type="number" class="form-control"  value={discount} onChange={(e)=>setDiscount(e.target.value)}/>
    </div>


    <div className=' d-flex justify-content-between'>
    <button type="submit" class="btn btn-primary">Submit</button>
    <button type="reset" class="btn btn-primary" onClick={handleReset}>reset</button>
    </div>
   
  </form></div>
  )
}

export default AddProducts