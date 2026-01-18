const axios = require('axios');
const config = require('../config');

const getPosts = async (req, res, next) => {
  try {
    const response = await axios.get(`${config.jsonPlaceholderUrl}/posts`);
    res.json(response.data);
  } catch (error) {
    next(error);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${config.jsonPlaceholderUrl}/posts/${id}`);
    res.json(response.data);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return res.status(404).json({ error: 'Post not found' });
    }
    next(error);
  }
};

module.exports = {
  getPosts,
  getPostById
};
