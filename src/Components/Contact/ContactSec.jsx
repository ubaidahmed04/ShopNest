import React, { useRef } from "react";
import { Button, TextField } from "@mui/material";
import "./Contact.css";
import { Form } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

function ContactSec() {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const validateForm = (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const formErrors = {};

    if (!data.name) {
      formErrors.name = 'Name is required';
    }
    if (!data.email) {
      formErrors.email = 'Email is required';
    } else if (!emailRegex.test(data.email)) {
      formErrors.email = 'Email is invalid';
    }
    if (!data.message) {
      formErrors.message = 'Message is required';
    }

    if (Object.keys(formErrors).length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fill in all required fields correctly.',
      });
      return false;
    }

    return true;
  };

  const onSubmit = (data) => {
    if (!validateForm(data)) {
      return;
    }

    emailjs
      .sendForm('service_mj7izqf', 'template_dhvgjyn', form.current, 'BGeB65cbgpJqCoxYb')
      .then(
        () => {
          Swal.fire({
            title: 'Good job!',
            text: 'Sent Successfully',
            icon: 'success',
          });
          reset(); // Reset the form fields
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong',
            text: 'Failed to send the message. Please try again.',
          });
        }
      );
  };

  return (
    <div className="main py-3">
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
        <div className="d-flex col-12 col-lg-6 col-md-6 flex-column text-field p-sm-3 p-5 ml-lg-5">
          <Form ref={form} onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-4">
            <div className="d-flex">
              <TextField
                id="filled-basic"
                label="Your Name"
                variant="standard"
                className="col-12"
                name="name"
                {...register('name', { required: true })}
                error={!!errors.name}
                helperText={errors.name ? 'Name is required' : ''}
                sx={{
                  '& .MuiInput-underline:before': {
                    borderBottomColor: '#FFDD10', // normal state
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: '#FFDD10', // focused state
                  },
                  '& .Mui-focused .MuiInputLabel-root': {
                    color: '#FFDD10', // focused label color
                  },
                }}
              />
            </div>
            <div className="d-flex">
              <TextField
                id="filled-basic"
                label="Email"
                variant="standard"
                className="col-12"
                name="email"
                {...register('email', {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                })}
                error={!!errors.email}
                helperText={errors.email ? 'Email is invalid' : ''}
                sx={{
                  '& .MuiInput-underline:before': {
                    borderBottomColor: '#FFDD10', // normal state
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: '#FFDD10', // focused state
                  },
                  '& .Mui-focused .MuiInputLabel-root': {
                    color: '#FFDD10', // focused label color
                  },
                }}
              />
            </div>
            <div className="d-flex flex-grow-1">
              <TextField
                id="filled-basic"
                className="col-12"
                label="Subject"
                variant="standard"
                name="subject"
                {...register('subject', { required: true })}
                error={!!errors.message}
                helperText={errors.message ? 'Subject is required' : ''}
                sx={{
                  '& .MuiInput-underline:before': {
                    borderBottomColor: '#FFDD10', // normal state
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: '#FFDD10', // focused state
                  },
                  '& .Mui-focused .MuiInputLabel-root': {
                    color: '#FFDD10', // focused label color
                  },
                }}
              />
            </div>
            <div className="d-flex flex-grow-1">
              <TextField
                id="filled-multiline-static"
                label="Message"
                multiline
                rows={3}
                variant="standard"
                placeholder="Compose your message here"
                className="col-12"
                name="message"
                {...register('message', { required: true })}
                error={!!errors.message}
                helperText={errors.message ? 'Message is required' : ''}
                sx={{
                  '& .MuiInput-underline:before': {
                    borderBottomColor: '#FFDD10', // normal state
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: '#FFDD10', // focused state
                  },
                  '& .Mui-focused .MuiInputLabel-root': {
                    color: '#FFDD10', // focused label color
                  },
                  '& .Mui-focused .MuiInputLabel-root:hover': {
                    color: '#FFDD10', // focused label color
                  }
                }}
              />
            </div>
            <div>
              <Button
                variant="contained"
                type="submit"
                className="col-12"
                sx={{
                  background: "#FFDD10",
                  border: "none",
                  borderRadius: "5px",
                  flexGrow: 1,
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ContactSec;
