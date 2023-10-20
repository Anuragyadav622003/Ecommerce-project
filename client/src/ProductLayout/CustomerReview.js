import React, { useState } from 'react'
import  {FaStar} from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai';
import { Link,useNavigate } from 'react-router-dom';
function CustomerReview({data,priceFilter}) {
 const [min,setMin] = useState(0);
const [max,setMax]= useState(0);
  const navigate = useNavigate();
    const unique = data.filter((obj, index, self) => {
        return index === self.findIndex((o) => o.brand === obj.brand);
      });


      //unique category
  const category = data.filter((obj,index,self)=>{ 
    return index ===self.findIndex((o)=>o.category===obj.category)
  })
  return (
    <div className='mx-auto mb-3'>
    <div>
  <span className=" fw-bold fs-4"> Category</span>
  <ul className='list-unstyled ms-1'>
{category.map(cat=><li style={{cursor:"pointer"}}><div className='text-sm' onClick={()=>navigate(`product?c=${cat.category}`)}>{cat.category}</div></li>)}
</ul>
  </div>
    <div className=''>
  <span className='fw-bold fs-4'>Brand</span>
  <ul className='list-unstyled ms-1'>
  {unique.map(data=><li style={{cursor:"pointer"}}><div className='text-sm'  onClick={()=>navigate(`product?n=${data.brand}`)}>{data.brand} </div></li>)}
  </ul>
  </div>
      
<span className="fw-bold fs-4"> Customer Review</span>

<Link to="product?r=4" className='text-decoration-none text-dark '><div><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><AiOutlineStar className='star'/><span className='text-sm'>& Up</span></div></Link>
<Link to = 'product?r=3' className='text-decoration-none text-dark'><div><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><AiOutlineStar className='star'/><AiOutlineStar className='star'/><span className='text-sm'>& Up</span></div></Link>
<Link to='product?r=2' className='text-decoration-none text-dark'><div><FaStar className='star'/><FaStar className='star'/><AiOutlineStar className='star'/><AiOutlineStar className='star'/><AiOutlineStar className='star'/><span className='text-sm'>& Up</span></div></Link>
<Link to ="product?r=1" className='text-decoration-none text-dark'><div><FaStar className='star'/><AiOutlineStar className='star'/><AiOutlineStar className='star'/><AiOutlineStar className='star'/><AiOutlineStar className='star'/><span className='text-sm'>& Up</span></div></Link>

<div className='fw-bold fs-5'>Price</div>
{
 priceFilter.map(item=><div className=''> <Link  to ={`product?min=${item.min}&max=${item.max}`} className='text-decoration-none text-dark'>{item.min===0?<span className='text-sm'>under</span>:<span className='text-sm'>{item.min}</span>} <span className='text-sm'>- {item.max} </span></Link></div>
)
}
<div className='d-flex flex-column mt-2 '>
<input type='number' className='rounded w-75 p-1' style={{width:"65px"}} placeholder="min" onChange={(e)=>setMin(e.target.value)} />
<input type='number' className='p-1 rounded mt-1 w-75' style={{width:"65px"}} placeholder='max' onChange={(e)=>setMax(e.target.value)}/>
</div>

<button className='mt-1 p-1 rounded bg-primary w-75 ' style={{width:"65px"}} onClick={()=>navigate(`product?min=${min}&max=${max}`)}>Apply</button>
    </div>
  )
}

export default CustomerReview