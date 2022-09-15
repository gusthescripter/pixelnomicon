
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../features/posts/postSlice'

function PostForm() {
  const [formData, setFormData] = useState({
		title: '',
		content: ''
	})
  
  const { title, content } = formData

  const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  
  const onSubmit = (e) => {
    e.preventDefault()

    const postData = {
      title,
      content,
    }

    dispatch(createPost(postData))
    
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Content</label>
          <input
            type='text'
            name='content'
            id='content'
            value={content}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Post
          </button>
        </div>
      </form>
    </section>
  )
}

export default PostForm
