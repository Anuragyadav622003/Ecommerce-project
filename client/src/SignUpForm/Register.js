import React from 'react'
import {useFormik} from 'formik';
import *as yup from 'yup';
function Register() {
 
  const Schema = yup.object({
    name:yup.string().min(3).max(20).required("name is must"),
    photo:yup.string(),
   email:yup.string().email().required('email is must'),
   password:yup.string().required('password is must').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,"strong password. it must be a number,alphabet(Atleast one upperCase),min-8 charecterstic with Spacial charecter" ).max(20),
   cpassword:yup.string().required("confirm password is must").oneOf([yup.ref('password'),null],"password did not matched")
  })


  const formik = useFormik({
    validationSchema:Schema,
    initialValues:{
       name:"",
       email:"",
       password:"",
       cpassword:"",
      
    },
    onSubmit:async(values,action)=>{
      
    const response =  await fetch('http://localhost:8000/user',{
           method:"POST",
           headers:{
               'Accept':"application/json",
               'Content-Type':"application/json"
              },
       body:JSON.stringify(values),
         
      })

    
      const res = await response.json();
      alert(res.status);
      action.resetForm();
     
    }
  })
     

  return (
    <>
 
    <div className='mt-5' style={{position:'relative',zIndex:1}}>
   
    <div className='d-flex justify-content-center mt-1'>
        <div className="img-fluid p-2 w-50  border border-dark rounded  justify-content-center">
      
  <form onSubmit={formik.handleSubmit} className='rounded'>
  <h3>Create Account</h3>
  <div class="form-group mb-2">
      <label for="name">Your name:</label>
      <input type="text" className="form-control border-3 fw-bold" id="pwd" name='name' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name}/>
 
  {formik.errors.name&&formik.touched.name?<small style={{color:"red"}}>    {formik.errors.name}</small>:null}    
 
    </div> 
    <div class="form-group mb-2" >
      <label for="usr">Email:</label>
      <input type="text" className="form-control border-3 fw-bold" id="usr" name='email' onBlur={formik.handleBlur}onChange={formik.handleChange} value={formik.values.email}/>
   {formik.errors.email&&formik.touched.email?<span style={{color:"red"}}>   {formik.errors.email}</span>:null}
    </div>

    

    <div class="form-group mb-2">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control border-3 fw-bold" id="pwd" name='password' onBlur={formik.handleBlur}onChange={formik.handleChange} value={formik.values.password}/>
      {formik.errors.password&&formik.touched.password?<span style={{color:"red"}}>   {formik.errors.password}</span>:null}
    </div> 
  
    <div class="form-group mb-2">
      <label for="pwd">confirm Password:</label>
      <input type="password" class="form-control border-3 fw-bold" id="pwd" name='cpassword' onBlur={formik.handleBlur}onChange={formik.handleChange}value={formik.values.cpassword}/>
      {formik.errors.cpassword&&formik.touched.cpassword?<small style={{color:"red"}}>   {formik.errors.cpassword}</small>:null}
    </div> 
  
    <div class="form-group mt-3">
      <input type="submit" className="form-control fw-bold o-2" id="pwd" name='submit' style={{backgroundColor:'orange'}}/>
    </div> 
  

  </form>
</div>
    </div> 
 
    </div>
    </>
  )
}

export default Register