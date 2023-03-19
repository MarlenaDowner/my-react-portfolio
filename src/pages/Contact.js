import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../components/style/header.css';
import thumbs from "../assets/pictures/thumbs.png";


const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_kllagzy', 
        'template_2k7tzik', 
        form.current, 
        '3xIWOQx_cbX53gitG')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent, I'll reply shortly")
      }, (error) => {
          console.log(error.text);
      });
  };

    return <div className="body3">
        <div className="contactHeader">
        Contact
        </div>
        <div className="Projectintro">Feel free to drop me an email! Alternativly you can download my CV, view my projects on Github or connect with me via LinkedIn. All can be achieved via the icons at the top of the page.
        </div>


    
                    <div className="contactPic">
                        <img src={thumbs} className="contactPic" alt="logo"></img>
                    </div>

                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>



                </div>
           
     
    

}

export default Contact;





