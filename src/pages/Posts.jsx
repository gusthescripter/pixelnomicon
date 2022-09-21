

import { useNavigate } from 'react-router-dom'
import PostItem from '../components/PostItem'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, reset } from '../features/posts/postSlice'

function Posts() {
	
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
		<main>
			<section>
				<h1 className="text-4xl">Posts</h1>
				<section>
				{
					posts.map(post => (
					<div>
						<PostItem key={post.id} post={post} />
						<Link to={`/singlepost/${post.id}`} key={post.id}>info</Link>
					</div>
					))
				}
			</section>
			</section>
		</main>
	)
}

export default Posts
