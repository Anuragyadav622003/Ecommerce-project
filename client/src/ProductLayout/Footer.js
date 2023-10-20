import React from 'react'
function Footer() {
  return (

    <footer class="bg-dark text-light py-5">
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <h5>Company Name</h5>
        <p className='pointer-underline'>About Us</p>
        <p className='pointer-underline'>Contact Us</p>
        <p className='pointer-underline'>Careers</p>
      </div>
      <div class="col-md-3">
        <h5>Shop</h5>
        <p className='pointer-underline'>Products</p>
        <p className='pointer-underline'>Deals</p>
        <p className='pointer-underline'>Reviews</p>
      </div>
      <div class="col-md-3">
        <h5>Customer Service</h5>
        <p className='pointer-underline'>Shipping</p>
        <p className='pointer-underline'>Returns</p>
        <p className='pointer-underline'>FAQ</p>
      </div>
      <div class="col-md-3">
        <h5>Connect with Us</h5>
        <p className='pointer-underline'>Facebook</p>
        <p className='pointer-underline'>Twitter</p>
        <p className='pointer-underline'>Instagram</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        <hr/>
        <p>&copy; 2023 Company Name. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer