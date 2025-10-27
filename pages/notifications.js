import Layout from '../components/Layout';
import { useState, useEffect } from 'react';


export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch('http://localhost:4000/notifications');
        const data = await res.json();
        setNotifications(data);
      } catch (err) {
        console.error('Error fetching notifications:', err);
      }
    };

    fetchNotifications();
  }, []);


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
        <h1 style={{ textAlign: 'center', color: '#0070f3' }}>Notifications</h1>
        {notifications.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666' }}>No new notifications.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
            {notifications.map((note, index) => (
              <li key={index} style={{
                backgroundColor: '#fff',
                padding: '0.75rem 1rem',
                marginBottom: '0.75rem',
                borderRadius: '6px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                fontSize: '1rem',
                color: '#333'
              }}>
                {note}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}
