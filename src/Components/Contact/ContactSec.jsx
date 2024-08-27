import React, { useRef } from "react";
import { Button, TextField } from "@mui/material";
import { Form } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import "./Contact.css";

function ContactSec() {
  const form = useRef();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // mene emailjs ek hi template or service use ki he portfolio or shopnest website ke lye 
    emailjs.sendForm('service_dttlny9', 'template_akza2cj', form.current, 'xZzt_m_2tW7AHgdJu')
      .then(
        () => {
          Swal.fire({ title: 'Good job!', text: 'Sent Successfully', icon: 'success' });
          reset();
        },
        (error) => {
          Swal.fire({ icon: 'error', title: 'Something went wrong', text: 'Failed to send the message. Please try again.' });
          console.error("Email send error:", error);
        }
      );
  };

  return (
    <div className="main py-3 mb-4 xl:mb-60">
      <div className="contact-main">
        <b className="contact-heading text-center">Get in Touch</b>
        <span className="ask text-center">Ask Any Question Or Remarks? Just write a Message!</span>
      </div>
      <div className="content-main col-12 container rounded-4">
        <div style={{ color: "#FFFFFF" }} className="contact-links pl-4 p-lg-3 m-3 col-12 col-lg-6 col-md-6 d-flex flex-column">
          <div className="d-flex flex-column">
            <span className="fs-2 fw-bold">Contact Information</span>
            <span className="fs-6" style={{ color: "#989898" }}>Say something to start a live chat!</span>
          </div>
          <div className="social-link col-12 d-flex justify-content-center align-items-start flex-column gap-3 mt-5">
            <div className="d-flex gap-3 align-items-center">
              <span><i style={{ color: "#989898" }} className="fa-brands fa-2x fa-whatsapp"></i></span>
              <span className="fs-6 fw-medium">+92 3127718780</span>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <span><i style={{ color: "#989898" }} className="fa-regular fa-2xl fa-envelope"></i></span>
              <span className="fs-6 fw-medium">ubaidahmed2040@gmail.com</span>
            </div>
            <div className="d-flex gap-4 align-items-center">
              <span><i style={{ color: "#989898" }} className="fa-solid fa-2x fa-location-dot"></i></span>
              <span className="fs-6 fw-medium">75800 Karachi PK</span>
            </div>
            <div className="main-icon">
              <div className="icon-div" style={{ color: "#000000" }}>
                <span><i className="fa-brands fa-facebook"></i></span>
                <span><i className="fa-brands fa-instagram"></i></span>
                <span><i className="fa-brands fa-x-twitter"></i></span>
                <span><i className="fa-brands fa-linkedin-in"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex col-12 col-lg-6 col-md-6 flex-column text-field p-sm-3  ml-lg-5">
          <Form ref={form} onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-4">
            <TextField
              label="Your Name"
              variant="standard"
              className="col-12"
              name="name"
              {...register('from_name', { required: 'Name is required' })}
              error={!!errors.from_name}
              helperText={errors.from_name?.message}
              sx={inputStyles}
            />
            <TextField
              label="Email"
              variant="standard"
              className="col-12"
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
              className="col-12"
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
              className="col-12"
              name="message"
              {...register('message', { required: 'Message is required' })}
              error={!!errors.message}
              helperText={errors.message?.message}
              sx={inputStyles}
            />
            <Button variant="contained" type="submit" className="col-12" sx={buttonStyles}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
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
