import Layout from '../components/Layout';
import { useState } from 'react';

export default function AddContact() {
  const [contact, setContact] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!contact.name) newErrors.name = 'Name is required';
    if (!contact.email) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contact.email)) {
        newErrors.email = 'Invalid email format';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Contact added:', contact);
      setSubmitted(true);
      setContact({ name: '', email: '' });
    }
  };

  return (
    <Layout>
      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Add Contact</h1>
        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Contact Name"
            value={contact.name}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginBottom: '0.5rem'
            }}
          />
          <div style={{ color: 'red', marginBottom: '1rem' }}>{errors.name}</div>

          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Contact Email"
            value={contact.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginBottom: '0.5rem'
            }}
          />
          <div style={{ color: 'red', marginBottom: '1rem' }}>{errors.email}</div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Save Contact
          </button>
        </form>
        {submitted && (
          <p style={{
            marginTop: '1rem',
            color: 'green',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            Contact saved!
          </p>
        )}
      </div>
    </Layout>
  );
}
