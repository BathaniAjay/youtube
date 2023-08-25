import { createSlice } from "@reduxjs/toolkit";

const CommentsSlice = createSlice({

    name:'cmt',
    initialState:{
        comments : [],
    },
    reducers:{

        addComment:(state,action)=>{

            state.comments.splice(100,1)
            state.comments.unshift(action.payload);
        }
    }
})

export default CommentsSlice.reducer;
export const {addComment} = CommentsSlice.actions;