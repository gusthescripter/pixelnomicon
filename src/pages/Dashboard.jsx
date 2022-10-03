import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PostForm from '../components/PostForm'
import PostItem from '../components/PostItem'
import Spinner from '../components/Spinner'
import { getPosts, reset } from '../features/posts/postSlice'

function Dashboard() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	
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
	
	if(isLoading) {
		return <Spinner />
	}
	
	return (
		<>
			<h1>Dashboard</h1>			
			
			<section>
			</section>
			<PostForm />
			
		</>
	)
}


export default Dashboard
