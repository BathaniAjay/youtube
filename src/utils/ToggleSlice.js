import { createSlice } from "@reduxjs/toolkit"

const ToggleSlice  = createSlice({
    name:'toggle',
    initialState:{
        isNavVisible:true,
    },
    reducers:{
        hamToggle:(state)=>{

            state.isNavVisible = !state.isNavVisible;
        },
        closeSideBar:(state)=>{
            state.isNavVisible = false;
        }
    }
})

export const {hamToggle, closeSideBar} = ToggleSlice.actions
export default ToggleSlice.reducer;