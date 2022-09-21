
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../features/posts/postSlice'

function PostForm() {
  const [formData, setFormData] = useState({
		title: '',
		content: '',
    status: ''
	})
  
  const { title, content, status } = formData

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
      status,
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
          <textarea
            type='text'
            name='content'
            id='content'
            value={content}
            onChange={onChange}>
          </textarea>
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Status</label>
          <select
            type='text'
            name='status'
            id='status'
            value={status}
            onChange={onChange}>
            <option value="draft">draft</option>
            <option value="publish">publish</option>
          </select>
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
