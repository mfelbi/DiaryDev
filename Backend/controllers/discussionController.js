const Discussion = require('../models/Discussion');

exports.createDiscussion = async (req, res) => {
  const { title, content } = req.body;
  try {
    const discussion = await Discussion.create({ title, content, user: req.user._id });
    res.status(201).json(discussion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getDiscussions = async (req, res) => {
  try {
    const discussions = await Discussion.find().populate('user', 'username').populate('comments.user', 'username');
    res.status(200).json(discussions);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getDiscussionById = async (req, res) => {
  try {
    const discussion = await Discussion.findById(req.params.id).populate('user', 'username').populate('comments.user', 'username');
    res.status(200).json(discussion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.addComment = async (req, res) => {
  const { content } = req.body;
  try {
    const discussion = await Discussion.findById(req.params.id);
    discussion.comments.push({ content, user: req.user._id });
    await discussion.save();
    res.status(201).json(discussion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
