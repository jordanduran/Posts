import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { today, thisWeek, thisMonth, Post } from '../posts';

const app = express();
app.use(cors());
app.use(bodyParser);

const allPosts = [today, thisWeek, thisMonth];

app.get('/posts', (req, res) => {
  res.json([today, thisWeek, thisMonth]);
});

app.post<{}, {}, Post>('/posts', (req, res) => {
  const post = { ...req.body, id: (Math.random() * 10000).toFixed() };
  allPosts.push(post);
  res.json(post);
});

app.listen(8000, () => {
  console.log('Listening on Port 8000');
});
