import React, { useState } from 'react'
import {Form} from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import './Style.css'
import { useForm } from "react-hook-form"
import Login from './Login';
import app from './../Firebase/Firebase';
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

console.log(app)


function Register() {
  const auth = getAuth(app);
  const navigate = useNavigate();

 const [inputType,setInputType] = useState("password")
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()
      const onSubmit = async(data) =>{
        console.log(data)    
        try{
        createUserWithEmailAndPassword(auth,data.email,data.password,data.name)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
          Swal.fire({
            title: "Good job!",
            text: "Sign up Successfully",
            icon: "success"
          });
          onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              navigate("/");
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
          reset();          
         
        })
        
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Swal.fire({
            icon: "error",
            title: errorCode,
            text: errorMessage,
          });
          // ..
      })
      }
      catch(error)  {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(first)
        
        // ..
      }
    }
       
      

  return (
<div>
    <div className="bg-img">

      <span>
      <Link to={'/'}>
    <i className="fa-solid arrow-icon fa-3x fa-arrow-left"></i>
      </Link>
      </span>
   <div className="content">
     <header>SignUp Form</header>
     <Form onSubmit={handleSubmit(onSubmit)}>
     <div className="field mb-3">
         <span className="fa fa-user " />
         <input type="text"
          required="" 
          {...register("name")}
          placeholder=" Name" />
       </div>
       <div className="field">
         <span className="fa fa-user" />
         <input type="email"
          required="" 
          {...register("email")}
          placeholder="myemail@gmail.com" 
          />
       </div>
       <div className="field space">
         <span className="fa fa-lock" />
         <input
          type={inputType}
           className="pass-key"
          placeholder="password" 
           
           required=""
           {...register("password")}
         />
         <span className="show"  onClick={() =>setInputType(inputType === 'text' ? 'password' : 'text')}>SHOW</span>
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
       <Link to={'/Login'}>Login </Link>
     </div>
   </div>
 </div>
 </div>
  )
}

export default Register