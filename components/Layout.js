export default function Layout({ children }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <a href="/register" style={{ marginRight: '1rem' }}>Register</a>
        <a href="/add-contact" style={{ marginRight: '1rem' }}>Add Contact</a>
        <a href="/post" style={{ marginRight: '1rem' }}>Post</a>
        <a href="/notifications" style={{ marginRight: '1rem' }}>Notifications</a>
        <a href="/messages">Messages</a>
      </nav>
      {children}
    </div>
  );
}
