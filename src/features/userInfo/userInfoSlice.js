
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import userInfoService from './userInfoService'

const initialState = {
	usersInfo: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
}

export const updateUser = createAsyncThunk(
	'usersInfo/updateInfo',
	async (userInfoData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await userInfoService.updateUser(userInfoData, token)
		} catch (error) {
			const message = (
				error.response &&
				error.response.data &&
				error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
})

export const getUser = createAsyncThunk(
	'usersInfo/getInfo',
	async (userInfoData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await userInfoService.getUser(token)
		} catch (error) {
			const message = (
			error.response &&
			error.response.data &&
			error.response.data.message) ||
			error.message ||
			error.toString()
		return thunkAPI.rejectWithValue(message)
		}
})

export const userInfoSlice = createSlice({
	name: 'userInfo',
	initialState,
	reducers: {
		reset: (state) => initialState
	},
	extraReducers: (builder) => {
		builder
			.addCase(updateUser.pending, (state) => {
				state.isLoading = true
			})
			.addCase(updateUser.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.usersInfo = action.payload
			})
			.addCase(updateUser.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(getUser.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getUser.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.usersInfo = action.payload
			})
			.addCase(getUser.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
	},
	
})

export const {reset} = userInfoSlice.actions
export default userInfoSlice.reducer
