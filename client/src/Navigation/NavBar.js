import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
function NavBar() {
  const[style,setStyle] = useState('d-none')
  return (
   <nav className='fs-6 fw-bold'> 
    <NavLink to = '/' >All</NavLink>
   <div className='topNav'>
       <NavLink to = '/shoes' >Shoe</NavLink>
       <NavLink to = '/electronics' >Electronic</NavLink>
       <NavLink to = '/cloths' >Cloths</NavLink>
       <NavLink to = '/watch' >Watch</NavLink>
       <NavLink to = '/books' >Books</NavLink>
       <NavLink to = '/laptops' >Laptops</NavLink>
       <NavLink to = '/mobile'>Mobiles</NavLink>
       <NavLink to = '/home&kitchen'>Home & kitchen</NavLink>
       </div>
       <Link onClick={()=>setStyle('d-block')}  className='icon'><i class="fa-solid fa-bars"></i></Link>
       <div className={style}>
       <div className='sidebar' onClick={()=>setStyle('d-none')} >
       <button type="button" class="btn-close btn-close-white fs-6"  aria-label="Close"></button>
       <NavLink to = '/shoes' >Shoe</NavLink>
       <NavLink to = '/electronics' >Electronic</NavLink>
       <NavLink to = '/cloths' >Cloths</NavLink>
        <NavLink to = '/books' >Books</NavLink>
        <NavLink to = '/laptops' >Laptops</NavLink>
       <NavLink to = '/mobile'>Mobile</NavLink>    
     <NavLink to = '/watch' >Watch</NavLink>
     <NavLink to = '/home&kitchen'>home & kitchen</NavLink>
    
       </div>
       </div>
    </nav>
  
     )
}

export default NavBar