import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import UserInfoForm from '../components/UserInfoForm'
import Spinner from '../components/Spinner'
import { getUser, reset } from '../features/userInfo/userInfoSlice'

function Dashboard() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	
	const {user} = useSelector((state) => state.auth)
	const {userInfo, isLoading, isError, message} = useSelector((state) => state.userInfo)
	
	useEffect(() => {
		if(isError) {
			console.log(message)
		}
	
		if(!user) {
			navigate('/login')
		}
		
		dispatch(getUser())
		
		return () => {
			dispatch(reset())
		}
	}, [user, navigate, isError, message, dispatch])
	console.log(user)
	
	if(isLoading) {
		return <Spinner />
	}
	
	return (
		<>
			<h1>Dashboard</h1>
			{user && user.user_display_name}
			
			<UserInfoForm />
			
			<section>
				{userInfo && userInfo.id}
			</section>
			
		</>
	)
}


export default Dashboard
