const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const searchRoutes = require('./routes/searchRoutes');
const discussionRoutes = require('./routes/discussionRoutes');
const blogRoutes = require('./routes/blogRoutes');
const articleRoutes = require('./routes/ArticleRoutes');
const commentRoutes = require('./routes/commentRoutes');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api', searchRoutes);
app.use('/api/discussions', discussionRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/comments', commentRoutes);



const PORT = process.env.PORT || 5009;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
