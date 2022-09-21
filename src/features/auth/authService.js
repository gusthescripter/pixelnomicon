
import axios from 'axios'

const API_URL = 'http://gusspencer.tech/bk/wp-json/wp/v2/users'
const headers = {"headers": {"Authorization": ""}}

const register = async (userData) => {
	await axios.post(API_URL, userData, headers)
	const keep = await axios.post('http://gusspencer.tech/bk/wp-json/jwt-auth/v1/token', userData)
	
	if(keep.data) {
		localStorage.setItem('user', JSON.stringify(keep.data))
	}
	return keep.data
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
