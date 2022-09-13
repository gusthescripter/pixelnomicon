import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		password2: ''
	})
	
	const { username, email, password, password2 } = formData
	
	const navigate = useNavigate()
	const dispatch = useDispatch()
	
	const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth) 
	
	useEffect(() => {
		if(isError) {
			toast.error(message)
		}
		if(isSuccess || user) {
			navigate('/login')
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
		
		if(password !== password2) {
			toast.error('Passwords do not match')
		} else {
			const userData = {
				username,
				email,
				password
			}
			
			dispatch(register(userData))
		}
	}
	
	if(isLoading) {
		return <Spinner />
	}
	
	return (
	<>
		<section className="heading">
			<h1>
				<FaUser /> Register
			</h1>
			<p>
				Please create an account
			</p>
		</section>
		<section className='form'>
			<form onSubmit={onSubmit}>
				<div>
					<input type='text' className='' id='username' name='username' value={username} placeholder='Enter name' onChange={onChange} />
				</div>
				<div>
					<input type='email' className='' id='email' name='email' value={email} placeholder='Enter email' onChange={onChange} />
				</div>
				<div>
					<input type='password' className='' id='password' name='password' value={password} placeholder='Enter password' onChange={onChange} />
				</div>
				<div>
					<input type='password' className='' id='password2' name='password2' value={password2} placeholder='Re-enter password' onChange={onChange} />
				</div>
				<div>
					<button type='submit' className=''>
						Submit
					</button>
				</div>
			</form>
		</section>
	</>
	)
}


export default Register
