
import axios from 'axios'

const API_URL = '/wp/v2/users/'
const headers = {"headers": {"Authorization": "Bearer "}}

const register = async (userData) => {
	const response = await axios.post(API_URL, userData, headers)
	
	if(response.data) {
		localStorage.setItem('user', JSON.stringify(response.data))
	}
	return response.data
}

const login = async (userData) => {
	const response = await axios.post('http://gusspencer.tech/bk/wp-json/jwt-auth/v1/token', userData)
	
	if(response.data) {
		localStorage.setItem('user', JSON.stringify(response.data))
	}
	return response.data
}

const logout = () => {
	localStorage.removeItem('user')
}

const authService = {
	register,
	logout,
	login,
}

export default authService
