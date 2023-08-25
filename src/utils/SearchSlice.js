import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({

    name:'cache',
    initialState:{
        searchCache:{

        }
    },

    reducers:{

        updateCache :(state,action)=>{

            state.searchCache = Object.assign(state.searchCache, action.payload)
        }
    }
})

export const {updateCache} = SearchSlice.actions;
export default SearchSlice.reducer;
