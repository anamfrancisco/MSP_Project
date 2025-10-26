import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: '#f0f4f8',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          color: '#0070f3'
        }}>
          Welcome to My Social Prototype
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#333'
        }}>
          Select a feature from the navigation bar to get started.
        </p>
      </div>
    </Layout>
  );
}
