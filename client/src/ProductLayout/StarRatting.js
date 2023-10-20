import React from 'react'
import {FaStarHalfAlt,FaStar} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai';
function StarRatting({star}) {
    const ratting = Array.from({length:5},(elem,index)=>{
        let number = index+0.5;
        return <span>
            {star>=index+1?<FaStar className='star'/>:star>=number?<FaStarHalfAlt className='star'/>:<AiOutlineStar className='star'/>}
        </span>
    })
  return (
    <div><span>{ratting}</span>{star}</div>
  )
}

export default StarRatting