import React, { useState } from 'react';
import Navbar from '../components/Navbar.js';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send('service_h4d2drg', 'template_anxl0dm', formData, 'EKWaVB39TyQnW84da')
      .then((response) => {
        console.log('Success:', response);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send message.');
      });

    // Clear form data after submission
    setFormData({
      name: '',
      email: '',
      signature: '',
    });
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="page">
        <div className="header">
          <h1>Contact Me</h1>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
