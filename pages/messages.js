import Layout from '../components/Layout';
import { useState } from 'react';

export default function Messages() {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');
  const [sentMessages, setSentMessages] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleRecipientChange = (e) => {
    setRecipient(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim() === '' || recipient.trim() === '') return;
    const newMessage = { recipient, content: message };
    setSentMessages([...sentMessages, newMessage]);
    console.log('Message sent:', newMessage);
    setMessage('');
    setRecipient('');
  };

  const recipients = ['Alice', 'Bob', 'Charlie', 'Dana'];

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
        <h1 style={{ textAlign: 'center', color: '#0070f3' }}>Send a Message</h1>
        <form onSubmit={handleSend} style={{ marginTop: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Choose Recipient</label>
          <select
            value={recipient}
            onChange={handleRecipientChange}
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #ccc',
              marginBottom: '1rem',
              fontSize: '1rem'
            }}
          >
            <option value="">Select a person</option>
            {recipients.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>

          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Your Message</label>
          <textarea
            rows="4"
            placeholder="Type your message"
            value={message}
            onChange={handleMessageChange}
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              resize: 'none',
              marginBottom: '1rem'
            }}
          />

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
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
                <strong>To {msg.recipient}:</strong> {msg.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
