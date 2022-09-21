import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, reset } from '../features/posts/postSlice'
import React, { useState, useEffect } from 'react'

function SinglePost() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.auth)
	const {posts, isLoading, isError, message} = useSelector(
		(state) => state.posts
	)
  
  useEffect(() => {
		if(isError) {
			console.log(message)
			
		}
		
		if(!user) {
			navigate('/login')
		}
		
		if(user) {
			dispatch(getPosts())
		}
		
		return () => {
			dispatch(reset())
		}
		
	
	}, [user, navigate, isError, message, dispatch])

  return (
    <div>
      <h4>{posts.title.rendered}</h4>
      <p>{posts.content.rendered}</p>
    </div>
  )
}

export default SinglePost

