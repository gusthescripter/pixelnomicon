import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
	const [formData, setFormData] = useState({
		
		email: '',
		password: '',
		
	})
	
	const { email, password } = formData
	
	const onChange= (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
			
		}))
	}
	
	const onSubmit = (e) => {
		e.preventDefault()
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
					<input type='email' className='' id='email' name='email' value={email} placeholder='Enter email' onChange={onChange} />
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
