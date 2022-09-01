
import axios from 'axios'

const API_URL = '/users/'

const register = async (userData) => {
	const response = await axios.post(API_URL, userData, {"headers": {"Authorization": ""}})
	
	if(response.data) {
		localStorage.setItem('user', JSON.stringify(response.data))
	}
	return response.data
}

const authService = {
	register
}

export default authService
