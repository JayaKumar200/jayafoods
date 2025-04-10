import {createSlice} from '@reduxjs/toolkit'

const initialState ={
	count:0,
}

export const Slice = createSlice({
	name:'count',
	initialState,
	reducers:{
		setIncrease:(state,action)=>{
			state.count +=1;
		},
		setDiscrease:(state,action)=>{
			state.count -=1;
		}, 
	}
})

export const{setIncrease,setDiscrease}=Slice.actions;
export default  Slice.reducer;