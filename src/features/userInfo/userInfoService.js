
import axios from 'axios'

//const API_URL = '/user/me/'

const updateUser = async (userInfoData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
	
	const response = await axios.post('http://gusspencer.tech/bk/wp-json/wp/v2/users/me', userInfoData, config)
	
	return response.data
}

const getUser = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
	
	const response = await axios.get('http://gusspencer.tech/bk/wp-json/wp/v2/users/me', config)
	
	return response.data
}

const userInfoService = {
	updateUser,
	getUser
}

export default userInfoService
