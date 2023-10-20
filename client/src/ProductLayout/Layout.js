
import {Link} from 'react-router-dom';
import {Col,Row,Card,Alert} from "react-bootstrap";
import "./product.css";
import StarRatting from './StarRatting';
import { useEffect,useState } from 'react';
import Loader from './Loader';

function Layout(props) {
  const [isLoading, setIsLoading] = useState(true);
 const data = props.data;
 useEffect(()=>{
  setTimeout(() => {
    setIsLoading(false);
  }, 500);
 })

    //randomly arrange data Array
    function shuffleArray(array) {
      // Fisher-Yates shuffle algorithm
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
     shuffleArray(data);

  


 
  return (

  
    <>
   {  data.length === 0?(isLoading?<Loader/>:<div className="d-flex align-items-center justify-content-center" style={{ width: "90vh"}}><div className='py-5'><Alert variant="success" className=' fs-2 fw-bold'>
      Items Not Found!
        </Alert></div></div>) :
     <div className='card-container mx-3'>
    <Row className='cart'>
      { 
      data.map(data=>(
        <Col md={3} > 
    
        <Link  to={`/${data.name}`} className="decoration" onClick={(e)=>{
        }}>
          <Card className='mt-3'>
        <Card.Img src={data.img} alt='err' id="img" className=''/>
        <Card.Body>
          <Card.Title>
           <h4 id='name'>{data.name}</h4>
          </Card.Title>
          <Card.Subtitle id='title'>
            {data.title.substr(0,45)}
          </Card.Subtitle>
          <Card.Text> 
          <StarRatting star={data.ratting}/>
          &#8377;<strong id='price'>{data.price}</strong>/-
            </Card.Text>  
          
           
        </Card.Body>
          </Card>
          </Link>
        </Col>
        
      )
  

  )
}
</Row>
</div>}
</>
  )
}

export default Layout