 

 

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [mapLoading, setMapLoading] = useState(true);

  // Hamster loader markup
  const Loader = () => (
    <div className="flex justify-center items-center h-full w-full absolute top-0 left-0 bg-[#1E1E1F] bg-opacity-80 z-10">
      <div className="wheel-and-hamster" aria-label="Hamster running in a wheel">
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>
    </div>
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSuccessMessage('Successful');
      setTimeout(() => {
        setSuccessMessage('');
      }, 4000);
      emailjs.send('service_7ffi2qp', 'template_5alpgpv', formData, 'GKslAB8-E0aTuChV8')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
          console.log('FAILED...', err);
        });
    } else {
      setSuccessMessage('Please fill all fields.');
    }
  };

  return (
    <div className="bg-[#1E1E1F] p-8 rounded-3xl shadow-lg">
      <div className="mb-6 flex justify-center relative">
        <div className="relative w-full h-[180px] md:h-[380px]">
          {mapLoading && <Loader />}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.123456789012!2d77.497703315056!3d28.474388982456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI4JzI1LjgiTiA3N8KwMzAnNTMuNyJF!5e0!3m2!1sen!2sin!4v1633021234567!5m2!1sen!2sin&gestureHandling=greedy"
            width="100%"
            height="100%"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            style={{
              borderRadius: '18px',
              border: '1px solid rgb(56, 56, 56)',
              width: '100%',
              height: '100%',
              opacity: mapLoading ? 0 : 1,
              transition: 'opacity 0.7s',
              zIndex: 20,
              filter: 'grayscale(100%)',
              pointerEvents: 'auto', // <-- ensure pointer events are enabled
            }}
            loading="lazy"
            title="Google Maps"
            onLoad={() => setMapLoading(false)}
          ></iframe>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-4">Contact Form</h3>
      <form className="bg-transparent" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-lg bg-[#1E1E1F] text-white border border-gray-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-lg bg-[#1E1E1F] text-white border border-gray-700"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded-lg bg-[#1E1E1F] text-white border border-gray-700 w-full mb-4"
          rows="4"
        ></textarea>
        <div className="flex justify-end mb-2">
          {successMessage && <p className="text-green-500">{successMessage}</p>}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-yellow-400 text-black p-3 rounded-lg transition-colors duration-200 hover:bg-yellow-500 font-semibold"
          >
            <span className="flex items-center justify-center">
              <img
                src="https://www.svgrepo.com/show/208096/message-mails.svg"
                alt="Send Icon"
                className="w-6 h-6 mr-2"
              />
              Send Message
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;