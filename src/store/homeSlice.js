import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
  name: 'home',
  initialState:{
url:{},
genres:{}

  },
  reducers: {
   getApiConfiguration:(state,action)=>{
  },
}
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer