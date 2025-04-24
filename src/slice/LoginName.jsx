import {createSlice} from '@reduxjs/toolkit';
const initialState={
	uName:"",
}

const LoginName = createSlice({
	name:'uName',
	initialState,
	reducers:{
    setName:(state,action)=>{
    state.uName = action.payload
    }
    }
})

export const {setName} = LoginName.actions;
export default LoginName.reducer;