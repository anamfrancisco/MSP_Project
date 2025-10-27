import Layout from '../components/Layout';
import { useState } from 'react';

export default function Post() {
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content.trim() === '') return;

    const post = { author: 'Ana', content };

    try {
      const res = await fetch('http://localhost:4000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
      });

      if (res.ok) {
        console.log('Post submitted:', post);
        setSubmitted(true);
        setContent('');
      } else {
        console.error('Failed to submit post');
      }
    } catch (err) {
      console.error('Error:', err);
    }
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
        <h1 style={{ textAlign: 'center', color: '#0070f3' }}>Create a Post</h1>
        <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem' }}>
          <textarea
            rows="5"
            placeholder="What's on your mind?"
            value={content}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '1rem',
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
            Post
          </button>
        </form>
        {submitted && (
          <p style={{
            marginTop: '1rem',
            color: 'green',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            Post submitted!
          </p>
        )}
      </div>
    </Layout>
  );
}
