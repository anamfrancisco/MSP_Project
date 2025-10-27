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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep()) {
      try {
        const res = await fetch('http://localhost:4000/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (res.ok) {
          alert('Registration complete!');
          console.log('User registered:', formData);
        } else {
          console.error('Failed to register');
        }
      } catch (err) {
        console.error('Error:', err);
      }
    }
  };


  return (
    <Layout>
      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ textAlign: 'center', color: '#0070f3' }}>Register</h1>
        <form onSubmit={step === 3 ? handleSubmit : handleNext} style={{ marginTop: '1.5rem' }}>
          {step === 1 && (
            <>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>First Name</label>
              <input 
                type="text" 
                name="firstName" 
                placeholder="First Name" 
                value={formData.firstName} 
                onChange={handleChange} 
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  marginBottom: '0.5rem'
                }}
              />
              <div style={{ color: 'red', marginBottom: '1rem' }}>{errors.firstName}</div>

              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Last Name</label>
              <input 
                type="text" 
                name="lastName" 
                placeholder="Last Name" 
                value={formData.lastName} 
                onChange={handleChange} 
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  marginBottom: '0.5rem'
                }}
              />
              <div style={{ color: 'red', marginBottom: '1rem' }}>{errors.lastName}</div>
            </>
          )}

          {step === 2 && (
            <>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleChange} 
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  marginBottom: '0.5rem'
                }}
              />
              <div style={{ color: 'red', marginBottom: '1rem' }}>{errors.email}</div>
            </>
          )}

          {step === 3 && (
            <>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={formData.password} 
                onChange={handleChange} 
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  marginBottom: '0.5rem'
                }}
              />
              <div style={{ color: 'red', marginBottom: '1rem' }}>{errors.password}</div>
            </>
          )}

          <button type="submit" style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            {step === 3 ? 'Submit' : 'Next'}
          </button>
        </form>
      </div>
    </Layout>
  );
}
