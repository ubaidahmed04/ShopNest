import React from 'react'
import {Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form"
import './Style.css'


function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    const onSubmit = (data) => console.log(data)
    
  return (
        
       <div>
     <div className="bg-img" >
   <div className="content">
     <header>Login Form</header>
     <Form  onSubmit={handleSubmit(onSubmit)}>
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
           placeholder="Password"
         />
         <span className="show">SHOW</span>
       </div>
       <div className="pass">
         <a >Forgot Password?</a>
       </div>
       <div className="field">
         <input type="submit"
        // onClick={()=>firebase.LoginUser(email,password)}

          defaultValue="LOGIN" />
       </div>
     </Form>
     <div className="login">Or login with</div>
     
       
      
      <div className=" ">
        <div className=" ">
            
       </div>
       <div>
        <Button
             onClick={() => {
               firebase.LoginWithGoogle();
             }}
           >
             LogIn With Google
           </Button> 
           <Button
           variant="danger"
             onClick={() => {
               firebase.LogOut();
             }}
           >
             LogOut
           </Button>
       </div>
     </div>
     <div className="signup">
       Don't have account?
       <Link to={'/register'}>Signup Now</Link>
     </div>
   </div>
 </div>
</div>
  )
}

export default Login