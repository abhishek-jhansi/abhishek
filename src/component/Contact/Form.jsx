import React, { useState } from 'react';

// Utility functions for validation
const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const validateMobile = (mobile) => {
  const re = /^\d{10}$/;
  return re.test(mobile);
};

const validateRequired = (value) => {
  return value.trim() !== '';
};

const validateMessage = (message) => {
  return message.trim().length >= 10;
};

const validateForm = (formData) => {
  let formIsValid = true;
  let errors = {};

  if (!validateRequired(formData.name)) {
    formIsValid = false;
    errors.name = 'Name is required';
  }

  if (!validateMobile(formData.mobile)) {
    formIsValid = false;
    errors.mobile = 'Invalid mobile number';
  }

  if (!validateEmail(formData.email)) {
    formIsValid = false;
    errors.email = 'Invalid email address';
  }

  if (!validateRequired(formData.city)) {
    formIsValid = false;
    errors.city = 'City is required';
  }

  if (!validateMessage(formData.message)) {
    formIsValid = false;
    errors.message = 'Message must be at least 10 characters long';
  }

  return { formIsValid, errors };
};

const ExtendedForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { formIsValid, errors } = validateForm(formData);

   
    if (formIsValid) {
        // Form is valid, proceed with form submission (e.g., API call)
        console.log('Form submitted:', formData);
        // Clear the form fields
        setFormData({
          name: '',
          mobile: '',
          email: '',
          city: '',
          message: '',
        });
        // Optionally, clear errors
        setErrors({});
      } else {
        setErrors(errors);
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </div>
      <div>
        <label>Mobile:</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
        />
        {errors.mobile && <span style={{ color: 'red' }}>{errors.mobile}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
        {errors.city && <span style={{ color: 'red' }}>{errors.city}</span>}
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
        {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExtendedForm;
