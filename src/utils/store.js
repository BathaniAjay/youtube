import { configureStore } from "@reduxjs/toolkit";
import ToggleSlice from "./ToggleSlice";
import SearchSlice from "./SearchSlice";
import CommentsSlice from "./CommentsSlice";

const store = configureStore({
    reducer:{

        toggle:ToggleSlice,
        cache:SearchSlice,
        cmt: CommentsSlice,
    }
})

export default store;