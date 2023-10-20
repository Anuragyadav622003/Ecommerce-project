import React from 'react'
import {useFormik} from 'formik';
import *as yup from 'yup';
import { useNavigate } from 'react-router-dom'

function SignForm() {
  const navigate =  useNavigate();
  const Schema = yup.object({
   
   email:yup.string().email().required('email is must'),
   password:yup.string().required('password is must').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,"strong password. it must be a number,alphabet(Atleast one upperCase),min-8 charecterstic with Spacial charecter" ).max(20),
   
  })
  const formik = useFormik({
    validationSchema:Schema,
    initialValues:{
      
       email:"",
       password:"",
     
    },
    onSubmit:async(values,action)=>{
    
    const response =  await fetch('http://localhost:8000/user/signIn',{
           method:"POST",
           headers:{
               'Accept':"application/json",
               'Content-Type':"application/json"
              },
       body:JSON.stringify(values)
         
      })

    
      const res =await response.json();
      alert(res.status);
      if(res.status === "sign in successfully")
      {
        sessionStorage.setItem("user",values.email)
  
      }
      action.resetForm();
     
  
  window.location.reload();


    }
  })
     
  
  
  
  
    
  

  return (
    <div className='container d-flex flex-column mt-5'>
      <div className='d-flex justify-content-center'>
      <div className='w-50'>
 <form className=' border-4 rounded' onSubmit={formik.handleSubmit}>
 <h3 className='p-2'>Sign in</h3>
  <div className='d-flex flex-column form-group p-2'>
    <label className='fw-bold'>Email</label>
    <input type="text" class="form-control  border-3 fw-bold" id="usr" name='email' onBlur={formik.handleBlur}onChange={formik.handleChange} value={formik.values.email}/>
   {formik.errors.email&&formik.touched.email?<span style={{color:"red"}}>   {formik.errors.email}</span>:null}
  </div>
  <div className='d-flex flex-column form-group p-2 '>
    <label className='fw-bold'>Password</label>
    <input type="password" class="form-control border-3 fw-bold" id="pwd" name='password' onBlur={formik.handleBlur}onChange={formik.handleChange} value={formik.values.password}/>
      {formik.errors.password&&formik.touched.password?<span style={{color:"red"}}>   {formik.errors.password}</span>:null}
  </div> 
  <div class="form-group mt-3">
  <div className='d-grid p-2'> <input type="submit" className="form-control fw-bold o-2 bg-primary" id="pwd" name='submit'/></div>
    </div>
 </form>
<div className=' d-flex justify-content-center mt-3 '><div className=' border-2 w-25 h-25 mt-3 ' /><div className=' w-50 h-25 fs-6 d-flex justify-content-around '>New to Amazon?</div><div className='border border-3 w-25 h-25 mt-3' /></div>
<div className='d-grid p-2'><button className='rounded' onClick={()=>navigate('/user-register')}>Create your Amazon account</button></div>
 </div>
 
</div>

    </div>
  )
}

export default SignForm