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
      <h1>Add Contact</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Contact Name"
          value={contact.name}
          onChange={handleChange}
        />
        <div style={{ color: 'red' }}>{errors.name}</div>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Contact Email"
          value={contact.email}
          onChange={handleChange}
        />
        <div style={{ color: 'red' }}>{errors.email}</div>
        <br />
        <button type="submit">Save Contact</button>
      </form>
      {submitted && <p style={{ color: 'green' }}>Contact saved!</p>}
    </Layout>
  );
}
