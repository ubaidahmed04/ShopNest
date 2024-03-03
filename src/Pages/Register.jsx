import React from 'react'
import {Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Style.css'
import { useForm } from "react-hook-form"
import Login from './Login';


function Register() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)    

  return (
<div>
    <div className="bg-img">
   <div className="content">
     <header>SignUp Form</header>
     <Form onSubmit={handleSubmit(onSubmit)}>
       <div className="field">
         <span className="fa fa-user" />
         <input type="email"
          required="" 
          {...register("email")}
          placeholder="Email or Phone" />
       </div>
       <div className="field space">
         <span className="fa fa-lock" />
         <input
           type="password"
           className="pass-key"
           required=""
           {...register("password")}
         />
         <span className="show">SHOW</span>
       </div>
       <div className="pass">
         <a >Forgot Password?</a>
       </div>
       <div className="field">
         <input type="submit"
        // onClick={()=>firebase.SignupUser(email,password)}

          defaultValue="LOGIN" />
       </div>
     </Form>
     <div className="login"></div>
     
       
      
      
     <div className="signup">
       Already have an account?
       <Link to={'/Login'}>Login Now</Link>
     </div>
   </div>
 </div>
 </div>
  )
}

export default Register