import Layout from '../components/Layout';
import { useState } from 'react';

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    'Alice liked your post',
    'Bob commented: "Nice work!"',
    'Charlie sent you a message',
    'Dana added you as a contact'
  ]);

  return (
    <Layout>
      <h1>Notifications</h1>
      {notifications.length === 0 ? (
        <p>No new notifications.</p>
      ) : (
        <ul>
          {notifications.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      )}
    </Layout>
  );
}
