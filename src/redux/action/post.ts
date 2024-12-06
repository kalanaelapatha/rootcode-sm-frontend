/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { postService } from "../../service/post";


export const getAllPosts = createAsyncThunk(
  'post/all-post',
  async () => {
    try {
      const allPostsResponse = await postService.getAllPosts()
      return allPostsResponse.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
)


export const postAction = {
  getAllPosts
}