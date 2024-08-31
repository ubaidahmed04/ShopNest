import React, { useRef } from "react";
import { Button, TextField } from "@mui/material";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import "./Contact.css";
import LowerFooter from "../Footer/LowerFooter";

function ContactSec() {
  const form = useRef();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    emailjs.sendForm('service_dttlny9', 'template_akza2cj', form.current, 'xZzt_m_2tW7AHgdJu')
      .then(
        () => {
          Swal.fire({ title: 'Good job!', text: 'Sent Successfully', icon: 'success' });
          reset();
        },
        (error) => {
          Swal.fire({ icon: 'error', title: 'Something went wrong', text: 'Failed to send email  the message. Please try again.' });
          console.error("Email send error:", error);
        }
      );
  };

  return (
    <>
      <div className="main flex items-center w-full justify-center  min-h-screen ">
        <div className="flex flex-col w-full py-5" >
          <div className="contact-main">
            <b className="contact-heading text-center">Get in Touch</b>
            <span className="ask text-center">Ask Any Question Or Remarks? Just write a Message!</span>
          </div>
          <div className="content-main flex w-4/5  justify-center  bg-white rounded-3xl p-3 mx-auto">
            <div className="contact-links text-white p-4 rounded-xl bg-[#1C2541] flex flex-col gap-3 md:w-1/2">
              <div className="flex flex-col">
                <span className="text-2xl font-bold">Contact Information</span>
                <span className=" text-gray-400">Say something to start a live chat!</span>
              </div>
              <div className="social-link flex flex-col gap-5 mt-5">
                <div className="flex items-center gap-3">
                  <span><i className="fa-brands fa-whatsapp text-gray-400 text-2xl"></i></span>
                  <span className="text-sm font-medium">+92 3127718780</span>
                </div>
                <div className="flex items-center gap-3">
                  <span><i className="fa-regular fa-envelope text-gray-400 text-2xl"></i></span>
                  <span className="text-sm font-medium">ubaidahmed2040@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <span><i className="fa-solid fa-location-dot text-gray-400 text-2xl"></i></span>
                  <span className="text-sm font-medium">75800 Karachi PK</span>
                </div>
                <div className="main-icon flex justify-around  px-12 gap-4">
                  <div className="icon-div">

                    <span><i className="fa-brands fa-facebook text-black"></i></span>
                    <span><i className="fa-brands fa-instagram text-black"></i></span>
                    <span><i className="fa-brands fa-x-twitter text-black"></i></span>
                    <span><i className="fa-brands fa-linkedin-in text-black"></i></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-4  w-full lg:w-1/2">
              <form ref={form} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
                <TextField
                  label="Your Name"
                  variant="standard"
                  className="w-full"
                  name="name"
                  {...register('from_name', { required: 'Name is required' })}
                  error={!!errors.from_name}
                  helperText={errors.from_name?.message}
                  sx={inputStyles}
                />
                <TextField
                  label="Email"
                  variant="standard"
                  className="w-full"
                  name="email"
                  {...register('from_email', {
                    required: 'Email is required',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email is invalid' }
                  })}
                  error={!!errors.from_email}
                  helperText={errors.from_email?.message}
                  sx={inputStyles}
                />
                <TextField
                  label="Subject"
                  variant="standard"
                  className="w-full"
                  name="subject"
                  {...register('subject', { required: 'Subject is required' })}
                  error={!!errors.subject}
                  helperText={errors.subject?.message}
                  sx={inputStyles}
                />
                <TextField
                  label="Message"
                  multiline
                  rows={3}
                  variant="standard"
                  placeholder="Compose your message here"
                  className="w-full"
                  name="message"
                  {...register('message', { required: 'Message is required' })}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                  sx={inputStyles}
                />
                <Button variant="contained" type="submit" className="w-full" sx={buttonStyles}>
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const inputStyles = {
  '& .MuiInput-underline:before': { borderBottomColor: '#FFDD10' },
  '& .MuiInput-underline:after': { borderBottomColor: '#FFDD10' },
  '& .Mui-focused .MuiInputLabel-root': { color: '#FFDD10' },
};

const buttonStyles = {
  background: "#FFDD10",
  border: "none",
  borderRadius: "5px",
  color: "#FFFFFF",
  fontWeight: "bold",
  "&:hover": { backgroundColor: "#FFDD10", transform: "translateY(-5px)" },
};

export default ContactSec;
