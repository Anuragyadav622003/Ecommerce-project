import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Container,Col,Row,Card,Button,Alert} from 'react-bootstrap';
import Loader from '../ProductLayout/Loader';
import StarRatting from '../ProductLayout/StarRatting';
import Payment from '../Payment/Payment';
function Details() {
const {name}  = useParams('');


const [data,setData] = useState([]);
const [user,setUser] = useState();
const [isLoading, setIsLoading] = useState(true);
useEffect(()=>{
  setUser(sessionStorage.getItem('user'))

   async function fetchData(){
     const laptops  = await fetch(`http://localhost:8000/laptops`);
     const laptopsData = await laptops.json();

     const cloths = await fetch(`http://localhost:8000/cloths`); 
     const  clothsData = await cloths.json();


    const watch = await fetch(`http://localhost:8000/watch`); 
    const watchData =  await watch.json();

    const electronics = await fetch(`http://localhost:8000/electronics`);
    const electronicData = await electronics.json();

    const shoe = await fetch(`http://localhost:8000/shoes`);
    const shoesData = await shoe.json(); 

    const books = await fetch(`http://localhost:8000/Books`); 
        const  booksData = await books.json();

        const mobile = await fetch(`http://localhost:8000/mobile`); 
        const  mobileData = await mobile.json();

        const kitchen = await fetch(`http://localhost:8000/home&kitchen`); 
        const  kitchenData = await kitchen.json();

const list = watchData.concat(clothsData).concat(electronicData).concat(shoesData).concat(laptopsData).concat(booksData).concat(mobileData).concat(kitchenData);
  setData( list);
  
  setTimeout(() => {
    setIsLoading(false);
  }, 500);

   }
fetchData();
  },[name]
)
const x = data.filter(item=>{

  if(item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
              {          
                return item.name;
              }
   return '';
})
 function HandleAddToCart()
  {
    window.location.reload();
  }

  return (x.length===0?(isLoading ? <Loader/> :<div className="container" style={{height:"75vh"}}>
  <div className="row h-100">
    <div className="col d-flex align-items-center justify-content-center mt-5">
      {/* Your content goes here */}
      <div>
      <Alert variant='success' className='fs-2 fw-bold'>Items Not Found</Alert>
      </div>
    </div>
  </div>
</div>)
:<div className='mx-auto d-flex justify-content-center'>
  <div className='cart mx-4 col-md-11'>
    <Container><Row>{x.map(item=>(<div className = "container"><div class="d-flex justify-content-between"> <Col md={8}><Row><Col md={5}><Card className=''>
     <Card.Img src={item.img} alt='err' id="img"/>
     </Card></Col>
     <Col md={4} className=''>
     <div class="d-flex flex-wrap">
     <div class="flex-fill"><h4>{item.name}</h4></div>
     <div class="flex-fill">{item.title}</div>
     <div class="flex-fill"><StarRatting star={item.ratting}/></div>
     </div>
    
<div>
<hr/>
  <span  style={{color:"red"}}>-{item.discount}%</span>&nbsp;
  &nbsp;
  <span style={{fontSize:"22px"}}><sup>&#8377;</sup>{item.price}</span>
 <div> <span>M.R.P.</span>&nbsp;:&nbsp;
 <span><strike>{Math.round((item.price*item.discount/100))+item.price}</strike></span></div>
 <p>Inclusive of all taxes</p>
</div>
    
     </Col>
    </Row>
</Col>
    <hr/>
    <Col md={4}>
    <div  className='d-flex flex-wrap cart mx-3 mt-0' >
    
    <div className='w-100'><span className='text-primary'>FREE delivery </span><span>within 5 day Add protection plan</span>
  
      <div  class="form-check">  <input class="form-check-input" type="checkbox"/>&nbsp; <label class="form-check-label" for="flexCheckIndeterminate"></label>{item.price>2000?<span>1 year</span>:<span>4 months</span>} Extended Warranty for ₹{Math.round(item.price*5/100)}</div>
      <div class="form-check"><input class="form-check-input" type="checkbox"/>&nbsp;{item.price>50000?<span>2 year</span>:<span>6 months</span>} Extended Warranty for ₹{Math.round(item.price*8/100)}</div>
    <br/>
   <div onClick={HandleAddToCart}> <Button className='w-100' style={{backgroundColor:"gold"}} onClick={async()=>{

  
            await fetch(`http://localhost:8000/Carts?user=${user}`, {
              method: 'POST',
              headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name:item.name,title:item.title,price:item.price,img:item.img,ratting:item.ratting,discount:item.discount
              })
              })  
            }}>Add to Cart</Button></div>
    <div className='d-grid'><Payment p = {item.price} img = {item.img}/></div>
</div>
<br/>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  <label class="form-check-label" for="add gift">
    Add gift option
  </label>
</div>
</div>
</Col>

    </div>
  
<hr/>
    </div>))}</Row></Container></div></div>
  )
}

export default Details