import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import UserInfoForm from '../components/UserInfoForm'
import Spinner from '../components/Spinner'
import { getPost, updatePost, reset } from '../features/singlePost/singlePostSlice'

function EditPost({ singlePost }) {
	const params  = useParams()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	
	const [formData, setFormData] = useState({
		title: '',
		content: '',
    status: ''
	})
	
	const { title, content, status } = formData
	
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

    dispatch(updatePost(postData))
    
  }
	
	const {user} = useSelector((state) => state.auth)
	const {singlePosts, isLoading, isError, message} = useSelector(
		(state) => state.singlePosts
	)
	
	useEffect(() => {
		if(isError) {
			console.log(message)
			
		}
		
		if(!user) {
			navigate('/login')
		}
		
		if(user) {
		  dispatch(getPost(params.id))
		}
		
		return () => {
			dispatch(reset())
		}
		
	
	}, [user, navigate, isError, message, dispatch, params])
	
	if(isLoading) {
		return <Spinner />
	}
	
	return (
		<>
			<h1>Edit Post</h1>			
			<Link to='/posts'>back</Link>
			<section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Title</label>
          <input
			placeholder={singlePosts.title && singlePosts.title.rendered}
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
				{singlePosts.content && singlePosts.content.rendered}
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
            update
          </button>
        </div>
      </form>
    </section>			
		</>
	)
}


export default EditPost

