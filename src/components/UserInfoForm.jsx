import { useState} from 'react'
import { useDispatch} from 'react-redux'
import { updateUser } from '../features/userInfo/userInfoSlice'

function UserInfoForm() {
	const [formData, setFormData] = useState({
		name: '',
		description: ''
	})
  
  const { name, description } = formData

  const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  
  const onSubmit = (e) => {
    e.preventDefault()

    const userInfoData = {
      name,
      description,
    }

    dispatch(updateUser(userInfoData))
    
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Description</label>
          <textarea
            type='text'
            name='description'
            id='description'
            value={description}
            onChange={onChange}>
          </textarea>
        </div>
        
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Update
          </button>
        </div>
      </form>
    </section>
  )
}

export default UserInfoForm
