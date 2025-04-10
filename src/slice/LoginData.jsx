import {createSlice} from '@reduxjs/toolkit';
const initialState ={
	loginData:[],
}

const LoginData = createSlice({
	name:'loginData',
	initialState,
	reducers:{
		setLogin:(state,action)=>{
			state.loginData = [...state.loginData,action.payload];
		}
	}
})


export const {setLogin} = LoginData.actions;
export default LoginData.reducer;