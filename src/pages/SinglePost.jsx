
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPost, reset } from '../features/singlePost/singlePostSlice'
import React, { useEffect } from 'react'
import Spinner from '../components/Spinner'

function SinglePost({ singlePost }) {
  const params  = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
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
  if (isLoading) {
    return <Spinner />
  }
  return (
    <div>
      <Link to='/posts'>back</Link>
      <h3>{singlePosts.title && singlePosts.title.rendered}</h3>
    
      <p>{singlePosts.content && singlePosts.content.rendered}</p>
    </div>
  )
}

export default SinglePost

