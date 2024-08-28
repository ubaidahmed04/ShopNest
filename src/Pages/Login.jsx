import React, { useState } from "react";
import { useForm } from "react-hook-form";
import googleIcon from "../Images/google.png";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import app from "../Firebase/Firebase";
import "./Style.css";

function Login() {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [inputType, setInputType] = useState("password");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        Swal.fire({
          title: "Good job!",
          text: "Sign in Successfully",
          icon: "success",
        });
        reset();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            navigate("/");
          }
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.code,
          text: error.message,
        });
      });
  };

  const resetPass = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        sendPasswordResetEmail(auth, user.email).catch((error) => {
          Swal.fire({
            icon: "error",
            title: error.code,
            text: error.message,
          });
        });
      }
    });
  };

  const SignWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            navigate("/");
          }
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.code,
          text: error.message,
        });
      });
  };

  return (
    <div className="bg-img max-h-screen max-w-screen">
      <div>
        <span>
          <Link to="/">
            <i className="fa-solid arrow-icon fa-3x fa-arrow-left"></i>
          </Link>
        </span>
      </div>
      <div className="content">
        <header className="text-white text-2xl font-semibold">Login Form</header>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div className="field">
            <span className="fa fa-user" />
            <input
              type="email"
              className="w-full p-2 border rounded"
              {...register("email")}
              placeholder="Email or Phone"
            />
          </div>
          <div className="field space mt-4">
            <span className="fa fa-lock" />
            <input
              type={inputType}
              className="w-full p-2 border rounded"
              {...register("password")}
              placeholder="Password"
            />
            <span
              className="show absolute right-4 top-3 cursor-pointer"
              onClick={() => setInputType(inputType === "text" ? "password" : "text")}
            >
              SHOW
            </span>
          </div>
          <div className="pass mt-2">
            <a className=" cursor-pointer" onClick={resetPass}>
              Forgot Password?
            </a>
          </div>
          <div className="field mt-6">
            <input
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded cursor-pointer"
              value="LOGIN"
            />
          </div>
        </form>
        <div className="login text-white mt-4">Or login with</div>
        <div className="mt-4">
          <button
            className="google-btn w-full bg-gray-100 text-gray-900 p-2 rounded flex items-center justify-center"
            onClick={SignWithGoogle}
          >
            <i className="fa-brands fa-google mr-2"></i>
            Continue with Google
          </button>
        </div>
        <div className="signup mt-4 text-white">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-400">Signup</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
