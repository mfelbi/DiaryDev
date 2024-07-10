const express = require('express');
const { createDiscussion, getDiscussions, getDiscussionById, addComment } = require('../controllers/discussionController');
const { auth } = require('../middleware/auth');
const router = express.Router();

router.route('/')
  .post(auth, createDiscussion) 
  .get(getDiscussions);

router.route('/:id')
  .get(getDiscussionById);

router.route('/:id/comments')
  .post(auth, addComment);

module.exports = router;
