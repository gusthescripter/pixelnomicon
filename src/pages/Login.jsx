import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Login() {
	const [formData, setFormData] = useState({
		
		username: '',
		password: '',
		
	})
	
	const { username, password } = formData
	
	const navigate = useNavigate()
	const dispatch = useDispatch()
	
	const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth) 

	useEffect(() => {
		if(isError) {
			toast.error(message)
		}
		if(isSuccess || user) {
			navigate('/')
		}
		dispatch(reset())
		
	}, [user, isError, isSuccess, message, navigate, dispatch])
	
	const onChange= (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
			
		}))
	}
	
	const onSubmit = (e) => {
		e.preventDefault()
		
		const userData = {
			username,
			password
		}
		dispatch(login(userData))
	}
	
	if(isLoading) {
		return <Spinner />
	}
	
	return <>
		<section className="heading">
			<h1>
				<FaSignInAlt /> Login
			</h1>
			<p>
				Log In
			</p>
		</section>
		<section className='form'>
			<form onSubmit={onSubmit}>
				
				<div>
					<input type='text' className='' id='username' name='username' value={username} placeholder='Enter email' onChange={onChange} />
				</div>
				<div>
					<input type='password' className='' id='password' name='password' value={password} placeholder='Enter password' onChange={onChange} />
				</div>
				
				<div>
					<button type='submit' className=''>
						Submit
					</button>
				</div>
			</form>
		</section>
	</>
}


export default Login
