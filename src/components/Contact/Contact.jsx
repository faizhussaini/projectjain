import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_6vqe1fg",
        "template_pob0ake",
        form.current,
        "T7puYcfJQz4DlbXlQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
          form.current.user_name.value = '';
          form.current.user_email.value = '';
          form.current.message.value = '';       
         },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="text" name="user_name" className="user"  placeholder="How Many Person"/>
          <input type="date" name="user_name" className="user"  placeholder="Start Date"/>
          <input type="date" name="user_name" className="user"  placeholder="End Date"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <label> Where To:
            <select>
              <option>Usa</option>
              <option>Japan</option>
              <option>Germany</option>
              <option>italy</option>
              <option>malasia</option>
              <option>china</option>
              <option>india</option>
              <option>singapore</option>
            </select>
          </label> 
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Book Now" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
