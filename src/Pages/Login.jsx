import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { createContext, useContext } from "react";
import googleIcon from "../Images/google.png";

import "./Style.css";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail  ,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import app from "../Firebase/Firebase";

function Login() {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const firebaseAuth = getAuth(app);
 
  const [inputType, setInputType] = useState("password");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Swal.fire({
          title: "Good job!",
          text: "Sign up Successfully",
          icon: "success",
        });

        reset();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            // navigate("/");
            console.log(user)
            // ...
          } else {
            // User is signed out
          }
        }); // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: errorCode,
          text: errorMessage,
        });
      });
  };
  const resetPass = (user)=>{
    onAuthStateChanged(auth, (user) => {
      
      console.log("current user ",user.email)
      // const user = auth.currentUser;
      sendPasswordResetEmail(auth, user.email)
      .then(() => {
        console.log("reset  email sent")
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
      
    }); // ...
    
   
  }
  const SignWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;

            navigate("/");
            // ...
          } else {
            // User is signed out
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData?.email;
      });
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate("register");
        Swal.fire({
          title: "Good Job!",
          text: "Log Out ",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(onSubmit);
  return (
    <div>
      <div className="bg-img">
        <div>
        <span>
      <Link to={'/'}>
    <i className="fa-solid arrow-icon fa-3x fa-arrow-left"></i>
      </Link>
      </span>
        </div>
        <div className="content">
       
          <header>Login Form</header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <span className="fa fa-user" />
              <input
                type="email"
                required=""
                {...register("email")}
                placeholder="Email or Phone"
              />
            </div>
            <div className="field space">
              <span className="fa fa-lock" />
              <input
                type={inputType}
                className="pass-key"
                required=""
                {...register("password")}
                placeholder="Password"
              />
              <span
                className="show"
                onClick={() => {
                  setInputType(inputType === "text" ? "password" : "text");
                }}
              >
                SHOW
              </span>
            </div>
            <div className="pass" onClick={resetPass}>
              <a>Forgot Password?</a>
            </div>
            <div className="field">
              <input type="submit" defaultValue="LOGIN" />
            </div>
          </Form>
          <div className="login">Or login with</div>

          <div className=" ">
            <div>
              <Button
                className=" google-btn"
                 onClick={SignWithGoogle}
              >
                <i class="fa-brands fa-google"></i>
                Continue with Google
              </Button>

              {/* <Button
                variant="danger"
                onClick={() => {logOut}}
              >
                LogOut
              </Button> */}
            </div>
          </div>
          <div className="signup">
            Don't have account?
            <Link to={"/register"}>Signup </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
