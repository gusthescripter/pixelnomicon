
import axios from 'axios'

const API_URL = 'http://gusspencer.tech/bk/wp-json/wp/v2/posts/'

const updatePost = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL + '55', postData, config)

  return response.data
}

const getPost = async (postId, token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.get(API_URL + postId, config)
    
    return response.data
}

// Delete user post
const deletePost = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + postId, config)

  return response.data
}

const singlePostService = {
  updatePost,
  getPost,
  deletePost,
}

export default singlePostService
