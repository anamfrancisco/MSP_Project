import Layout from '../components/Layout';
import { useState } from 'react';

export default function Post() {
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() === '') return;
    console.log('Post submitted:', content);
    setSubmitted(true);
    setContent('');
  };

  return (
    <Layout>
      <h1>Create a Post</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          placeholder="What's on your mind?"
          value={content}
          onChange={handleChange}
        />
        <br /><br />
        <button type="submit">Post</button>
      </form>
      {submitted && <p style={{ color: 'green' }}>Post submitted!</p>}
    </Layout>
  );
}
