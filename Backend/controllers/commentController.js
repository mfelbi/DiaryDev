const Comment = require('../models/Comment');

exports.addComment = async (req, res) => {
  const { articleId, content, email } = req.body;
  try {
    const commentData = { articleId, content };

    if (req.user) {
      commentData.userId = req.user._id;
    } else {
      commentData.email = email; // Tambahkan email jika tidak login
    }

    const comment = new Comment(commentData);
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ articleId: req.params.articleId }).populate('userId', 'username');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// const Comment = require('../models/Comment');

// exports.addComment = async (req, res) => {
//   const { articleId, content } = req.body;
//   try {
//     const comment = new Comment({
//       articleId,
//       userId: req.user.userId,
//       content
//     });
//     await comment.save();
//     const populatedComment = await comment.populate('userId', 'username').execPopulate();
//     res.status(201).json(populatedComment);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// exports.getComments = async (req, res) => {
//   try {
//     const comments = await Comment.find({ articleId: req.params.articleId }).populate('userId', 'username');
//     res.json(comments);
//   } catch (err) {
//     res.status (500).json({ message: err.message });
//   }
// };
