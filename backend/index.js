const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

// In-memory data
let users = [];
let contacts = [];
let posts = [];
let messages = [];
let notifications = [];

// Routes
app.post('/register', (req, res) => {
  const user = req.body;
  users.push(user);
  notifications.push(`${user.firstName} registered`);
  res.status(201).json({ message: 'User registered', user });
});

app.post('/contacts', (req, res) => {
  const contact = req.body;
  contacts.push(contact);
  notifications.push(`Added contact: ${contact.name}`);
  res.status(201).json({ message: 'Contact saved', contact });
});

app.post('/posts', (req, res) => {
  const post = req.body;
  posts.push(post);
  notifications.push(`New post from ${post.author}`);
  res.status(201).json({ message: 'Post submitted', post });
});

app.post('/messages', (req, res) => {
  const msg = req.body;
  messages.push(msg);
  notifications.push(`Message sent to ${msg.recipient}`);
  res.status(201).json({ message: 'Message sent', msg });
});

app.get('/messages', (req, res) => {
  res.json(messages);
});

app.get('/notifications', (req, res) => {
  res.json(notifications);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
