import React,{useState,useEffect} from 'react'
import {Container,Card, Button} from 'react-bootstrap';
import {Col} from 'react-bootstrap'
import {Row} from 'react-bootstrap';
import Payment from '../Payment/Payment';
import "./Cart.css";
import StarRatting from '../ProductLayout/StarRatting';
function CartComp() {
  const[data,setData] = useState([]);
 
  useEffect(()=>{ 
    
  async  function fetchData(){ 
    //url
    const response = await fetch(`http://localhost:8000/Carts?user=${sessionStorage.getItem("user")}`,{
      method:"GET"
    });
    const json = await response.json();
    setData(json);
    }
    fetchData()
  },[]);

  //number of items
  var item = data.length;
  //total price
var tprice=0;
for(let i= 0;i<data.length;i++){
 tprice = tprice+data[i].price;
}
//reload  current page
function HandleDelete(){
  
  window.location.reload();
   
}
  return (
    <div className='d-flex mx-auto'>
    <div className='col-md-8 cart mx-3'>
    <Container>
    <div class="container">
  <div class="d-flex justify-content-between">
    <div><b>Shopping  Cart</b></div>
    <div>Price</div>
  </div>
</div>
    <hr/>
        <div>
      </div>
    {data.map(data=>  <div class="container">
  <div class="d-flex justify-content-between">
    <div> <div className="App">  
   <Row>  
  <Col md="5">  
  <Card>  
  <Card.Img src={data.img} />  
  
</Card>  
    </Col>  
    <Col md="4">
    <div class="d-flex flex-wrap">
  <div class="flex-fill"><h4>{data.name}</h4></div>
  <div class="flex-fill">{data.title}</div>
  <div className='flex-fill'><StarRatting star = {data.ratting}/></div>
  
  <div className=" mt-1">
  <div>
  <Button className='border' variant='light'>
  Qty:
 <select class="border-0 " onChange={(e)=>{

 
 }}>
  <option  value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>

</select>
</Button> 
</div>
<div className=' d-flex'> 
<div className='d-grid me-5'onClick={HandleDelete}><Button variant='danger' onClick={async()=>{
    try{
       await fetch("http://localhost:8000/Carts/",{
        method:'DELETE',
        headers:{
           'Content-Type':"application/json"
        },
        body:JSON.stringify({
          name:data.name
        })
       })
      
    }catch{
       
    }
     
}}>Delete</Button></div>
<Payment p = {data.price} img = {data.img}/>
</div>
</div>
</div>

    </Col>
</Row>  
    </div>  </div>

    <div className='fs-5 ms-1'>
   <div className=''> <sup>&#8377;</sup>{data.price}</div>
    </div>
    
  </div>
  <hr/>
</div>)}
</Container>
    </div>
    
    <div className='d-flex flex-wrap cart w-25 h-100'>
  <div class="flex-fill"><small class="text-success"><input class="form-check-input mx-2 " type="checkbox" value="" id="defaultCheck1" checked/>Part of your order qualifies for FREE Delivery. Select this option at checkout. Details</small></div>
  <div class="flex-fill"><b>Subtotal ({item} items): </b><strong><sup>&#8377;</sup></strong><strong >{tprice}</strong></div>
  <br/>
  <div class="flex-fill"><input class="form-check-input mx-2 " type="checkbox" value="" id="defaultCheck1" />This order contains a gift</div>
      </div>
    </div>
  )
}

export default CartComp