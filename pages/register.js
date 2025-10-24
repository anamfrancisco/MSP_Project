import Layout from '../components/Layout';
import { useState } from 'react';

export default function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const validateStep = () => {
    let newErrors = {};
    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
    } else if (step === 2) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';
      else if (formData.email === 'used@example.com') newErrors.email = 'Email already used';
    } else if (step === 3) {
      if (!formData.password) newErrors.password = 'Password is required';
      else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log('User registered:', formData);
      alert('Registration complete!');
    }
  };

  return (
    <Layout>
      <h1>Register</h1>
      <form onSubmit={step === 3 ? handleSubmit : handleNext}>
        {step === 1 && (
          <>
            <input 
              type="text" 
              name="firstName" 
              placeholder="First Name" 
              value={formData.firstName} 
              onChange={handleChange} 
            />
            <div style={{ color: 'red' }}>{errors.firstName}</div>
            <br />
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              value={formData.lastName} 
              onChange={handleChange} 
            />
            <div style={{ color: 'red' }}>{errors.lastName}</div>
            <br />
          </>
        )}

        {step === 2 && (
          <>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={formData.email} 
              onChange={handleChange} 
            />
            <div style={{ color: 'red' }}>{errors.email}</div>
            <br />
          </>
        )}

        {step === 3 && (
          <>
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={formData.password} 
              onChange={handleChange} 
            />
            <div style={{ color: 'red' }}>{errors.password}</div>
            <br />
          </>
        )}

        <button type="submit">
          {step === 3 ? 'Submit' : 'Next'}
        </button>
      </form>
    </Layout>
  );
}
