import React, { useRef } from "react";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FacebookIcon from "../../assests/facebook-icon.png";
import twitterIcom from "../../assests/twitter.png";
import instagramIcon from "../../assests/instagram.png";
import YoutubeIcon from "../../assests/youtube.png";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jj2a8fe",
        "template_369vdji",
        form.current,
        "A-hWx405R3ZSrwxNW"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email");
        }
      );
  };
  return (
    <section id="contactPage">
      <ToastContainer />
      <div id="client"></div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form bellow to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            name="to-name"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="email"
            name="from_email"
            placeholder="Your Email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="submitBtn">
            Submit
          </button>

          <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={twitterIcom} alt="Twitter" className="link" />
            <img src={YoutubeIcon} alt="Youtube" className="link" />
            <img src={instagramIcon} alt="Intagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
}
