import React, { useEffect } from 'react'
import { useState } from 'react';
import { Nav } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Avatar from "react-avatar"
import './Header.css'
function Header1() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const[search,setSearch] = useState("");
  const[style,setStyle] = useState('d-none')
  //const[cartItemNo,setCartItemNo] = useState(0);
  const[user, setUser]= useState(null);
  const[T_item,setT_item] = useState(0);
  useEffect(()=>{ 
   setUser(sessionStorage.getItem("user"))
   async  function fetchData(){ 
    
    const response = await fetch(`http://localhost:8000/Carts?user=${sessionStorage.getItem("user")}`,{
      method:"GET"
    });
    const json = await response.json();
  setT_item(json.length);
    }
    fetchData()
      },[])
    
   //handle inputs
 function handleSelectChange(event){
  console.log(event.target.value[0])
  setSearch(event.target.value)
 }
 const closeDropdown = () => {
  setDropdownOpen(false);
};
function logoutUSER(){ 
  closeDropdown()
  setUser(null);
  sessionStorage.removeItem("user")
window.location.reload();
}
 const toggleDropdown = () => {
  setDropdownOpen(!isDropdownOpen);
};
 

  return (
    <header className='mx-auto w-100 fw-bold'>
    <Nav  class="navbar bg-primary nav d-flex " data-bs-theme="dark">
    
       <div className='px-2'> <img src='logo.png' alt='' className='logo '/><span className='logoText fs-3 fw-bold link'>E-commerce</span></div>
       <div className='search w-50'><div className='d-flex'><NavDropdown title="All" className='drop'  onChange={handleSelectChange}>
              
              <NavDropdown.Item href='/cloths' >Cloths</NavDropdown.Item>
              <NavDropdown.Item href="/books">Books</NavDropdown.Item>
              <NavDropdown.Item href="/laptops">Laptops </NavDropdown.Item>
              <NavDropdown.Item href="/electronics">Electronics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Headphones</NavDropdown.Item>
  <NavDropdown.Item href="/shoes">Shoes</NavDropdown.Item>
  <NavDropdown.Item href="/watch">Watch</NavDropdown.Item>
  <NavDropdown.Item href="/mobile">Mobile</NavDropdown.Item>
  <NavDropdown.Item href="/home&kitchen">Home & Kitchen</NavDropdown.Item>
            </NavDropdown>
            <input className=' border-0 w-100 p-1 ' value={search} placeholder='Search' onChange={event=>setSearch(event.target.value)} list='fruits'/>
        
            <Link to={search} className='search-icon text-light'><i class="fa-sharp fa-solid fa-magnifying-glass" ></i></Link></div></div>

            <div className='d-flex'>
         { !user?  <div className='link'><NavLink to='/signup' className="text-decoration-none text-light fs-5">Hello,<br/>Sign in</NavLink></div>:null}
          

            <div className='link'><NavLink to='#' className="text-decoration-none text-light fs-5">Return<br/>& Order</NavLink></div>
            
            <div className='link'><NavLink to='/Cart' className="text-decoration-none text-light fs-5"><span className='px-1 fs-5 fw-bold text-warning'>{T_item}</span><br/><i class="fa-solid fa-cart-shopping " /><span className=''>Cart</span></NavLink></div>

            {user && <div className="flex items-center">
           <div className="relative group">
              <div
                className="cursor-pointe px-2 pt-1"
                onClick={toggleDropdown}
              >
                <Avatar
                  name="User Name"
                  size="50"
                  round={true}
                  src='logo1.png'
                />
              </div>
              {isDropdownOpen && (
                <div className=" mt-2 bg-white border border-gray-200 rounded shadow-lg avatar">
                  <ul className="p-2  ">
                    <li>
                    <button onClick={()=>{sessionStorage.removeItem("user")}}>
                      <NavLink
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-100  "
                        onClick={closeDropdown}
                      >
                        <strong>Profile</strong>
                      </NavLink>
                      </button>
                    </li>
                    <li>
                      <NavLink
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                        onClick={closeDropdown}
                      >
                       <strong> Settings</strong>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                        onClick={logoutUSER}
                      >
                        <strong>Logout</strong>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            
          </div>}
            </div>

            <div className='fas-fa'> <Link onClick={()=>setStyle('d-block')}  className='text-light'><i class="fa-solid fa-bars"></i></Link>
            </div>
            <div className={style}>
       <div className='sidebar fw-bold p-2' onClick={()=>setStyle('d-none')} >
       <button type="button" class="btn-close btn-close-white fs-6"  aria-label="Close"></button>
      <div className='d-grid justify-content-center'>
      <div><NavLink to = '/signup' className='text-decoration-none'>sign in</NavLink></div> 
      
     <div>
       <NavLink to = '/cart' className='text-decoration-none'><i class="fa-solid fa-cart-shopping" /> cart</NavLink>
       </div>
       <div><NavLink to='' className='text-decoration-none'>Return & Order</NavLink>
       </div>
  
       </div>
       </div>
       </div>
          
        </Nav>
       </header>
  )
}

export default Header1