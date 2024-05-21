import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Style.css";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  // auth,
} from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();


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
        console.log(user);
        Swal.fire({
          title: "Good job!",
          text: "Sign up Successfully",
          icon: "success",
        });
        reset();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            navigate("/");
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
            // ...
          }
        });

        // Add any other actions you need to perform on successful sign-in
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData?.email; // Use optional chaining to avoid undefined error
        Swal.fire({
          icon: "error",
          title: errorCode,
          text: errorMessage,
        });
        const credential = GoogleAuthProvider.credentialFromError(error);
        // Handle any additional error logic here
      });
  };
  return (
    <div>
      <div className="bg-img">
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
                type="password"
                className="pass-key"
                required=""
                {...register("password")}
                placeholder="Password"
              />
              <span className="show">SHOW</span>
            </div>
            <div className="pass">
              <a>Forgot Password?</a>
            </div>
            <div className="field">
              <input
                type="submit"
                // onClick={()=>firebase.LoginUser(email,password)}

                defaultValue="LOGIN"
              />
            </div>
          </Form>
          <div className="login">Or login with</div>

          <div className=" ">
            {/* <div className=" ">
            
       </div> */}
            <div>
              <Button onClick={SignWithGoogle}>LogIn With Google</Button>
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
            <Link to={"/register"}>Signup </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
