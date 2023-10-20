import React from 'react';
import { Carousel,Col,Button,Row,Card, Alert } from 'react-bootstrap';
import StarRatting from '../ProductLayout/StarRatting';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import Loader from '../ProductLayout/Loader';
function Home() {
  const [data,setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        async function fetchData(){ 

         const cloths = await fetch(`http://localhost:8000/cloths`); 
         const  clothsData = await cloths.json();
         

        const watch = await fetch(`http://localhost:8000/watch`); 
        const watchData =  await watch.json();

        const electronics = await fetch(`http://localhost:8000/electronics`)
        const electronicData = await electronics.json();
 
        const shoe = await fetch(`http://localhost:8000/shoes`)
        const shoesData = await shoe.json(); 
         
        const laptops = await fetch(`http://localhost:8000/laptops`); 
        const laptopsData = await laptops.json(); 
         
        const books = await fetch(`http://localhost:8000/books`); 
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
   },[currentPage]);
  

  
   function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
   shuffleArray(data);
  

   //pagination
   const handlePageChange = (pageNumber)=>{
    if(pageNumber<1)
  pageNumber =1;
    setCurrentPage(pageNumber);
   
    
  }
  const pageNumber=8;
  const  indexOfLastItem = (currentPage+1)*pageNumber;
  const indexOfFirstItem = indexOfLastItem-pageNumber; 
  var CurrentItems = data.slice(indexOfFirstItem,indexOfLastItem);
 

  return (
    <div>
    <Carousel slide={true} className='' style={{zIndex:-1,marginBottom:"-28px"}}>
      <Carousel.Item interval={1500}>
        <img
          className="img"
          src="banner1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="img"
          src="banner2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="img"
          src="banner3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

       <Row className='mx-1' style={{zIndex:1}}>
      { CurrentItems.length === 0?(isLoading?<Loader/> :<Col md={12}><div className='d-flex justify-content-center'><Alert className='fs-3 fw-bold'>Items Not Found!</Alert></div></Col>):
      CurrentItems.map(data=>(
        <Col md={3}>
        <Link  to={`/${data.name}`} className="decoration" onClick={(e)=>{
        }}>
          <Card className='card '>
        <Card.Img src={data.img} alt='err'/>
        <Card.Body>
          <Card.Title>
            {data.name.substr(0,50)}
          </Card.Title>
          <Card.Subtitle>
            {data.title.substr(0,60)}
          </Card.Subtitle>
          <Card.Text> 
          <StarRatting star={data.ratting}/>
          &#8377;<strong>{data.price}</strong>/-
            </Card.Text>  
            <div class="d-grid">
            
            </div>  
    
        </Card.Body>
          </Card>
          </Link>
        </Col>
        
      )
  

  )
}
<div className='d-flex mt-3 justify-content-center'>
<Button variant='danger' onClick={() => handlePageChange(currentPage - 1)}>Previous</Button>
<Button  onClick={() => handlePageChange(currentPage - 1)}>{currentPage-1}</Button>
<Button variant='danger' onClick={() => handlePageChange(currentPage)} >{currentPage}</Button>
<Button  onClick={() => handlePageChange(currentPage +1)}>{currentPage+1}</Button>

<Button variant='danger' onClick={() => handlePageChange(currentPage + 1)}>Next</Button>
      </div>
</Row>
     </div>
  )
}

export default Home
