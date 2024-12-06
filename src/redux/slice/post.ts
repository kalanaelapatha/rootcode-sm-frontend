import { createSlice } from "@reduxjs/toolkit";
import { APP_STATUS, PostState } from "../../interface/post";
import { getAllPosts } from "../action";

const initialState: PostState = {
  isLoading: false,
  message: '',
  status: APP_STATUS.INITIAL,
  allPosts: []
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = APP_STATUS.INITIAL
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAllPosts.pending, (state) => {
      state.allPosts = []
      state.isLoading = true
    })
    .addCase(getAllPosts.fulfilled, (state, action) => {
      state.allPosts = action.payload.data
      state.isLoading = false
    })
    .addCase(getAllPosts.rejected, (state) => {
      state.allPosts = []
      state.isLoading = false
    })
  }
})

export const {
  resetStatus
} = postSlice.actions

export default postSlice.reducer