import { useState} from 'react'
import { useDispatch} from 'react-redux'
import { updateUser } from '../features/userInfo/userInfoSlice'

function UserInfoForm() {
	const [text, setText] = useState('')
	
	const dispatch = useDispatch()

	const onSubmit = e => {
		e.preventDefault()
		
		dispatch(updateUser({text}))
		setText('')
	}
	
	return (
		<section>
			<h2>User Info</h2>
			<form onSubmit={onSubmit}>
				<div>
					<label htmlFor="text">Name</label>
					<input type="text" name='text' id='text' value={text} onChange={(e) => setText(e.target.value)} />
					
				</div>
				<div>
					<button className='btn' type='submit'>
						Submit
					</button>
				</div>
			</form>
		</section>
	)
}

export default UserInfoForm
