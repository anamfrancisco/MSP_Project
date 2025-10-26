import Layout from '../components/Layout';
import { useState } from 'react';

export default function Messages() {
  const [message, setMessage] = useState('');
  const [sentMessages, setSentMessages] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;
    setSentMessages([...sentMessages, message]);
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <Layout>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ textAlign: 'center', color: '#0070f3' }}>Messages</h1>
        <form onSubmit={handleSend} style={{ display: 'flex', gap: '10px', marginTop: '1.5rem' }}>
          <input
            type="text"
            placeholder="Type your message"
            value={message}
            onChange={handleChange}
            style={{
              flex: 1,
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '1rem'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '0.75rem 1.25rem',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Send
          </button>
        </form>

        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>Sent Messages:</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {sentMessages.map((msg, index) => (
              <li key={index} style={{
                backgroundColor: '#fff',
                padding: '0.75rem',
                marginBottom: '0.5rem',
                borderRadius: '6px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
              }}>
                {msg}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
