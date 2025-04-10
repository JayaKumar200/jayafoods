import {createSlice} from '@reduxjs/toolkit'

const initialState={
	userData:[],
}

export const SigninSlice = createSlice({
	name:'userData',
	initialState,
	reducers:{
		setData:(state,action)=>{
			state.userData=[...state.userData,action.payload]
		},
	},
})

export const {setData} = SigninSlice.actions;
export default SigninSlice.reducer;