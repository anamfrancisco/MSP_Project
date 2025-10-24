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
      <h1>Messages</h1>
      <form onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Type your message"
          value={message}
          onChange={handleChange}
          style={{ width: '300px' }}
        />
        <button type="submit" style={{ marginLeft: '10px' }}>Send</button>
      </form>

      <div style={{ marginTop: '2rem' }}>
        <h3>Sent Messages:</h3>
        <ul>
          {sentMessages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
