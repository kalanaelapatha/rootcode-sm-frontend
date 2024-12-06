import { AxiosResponse } from "axios";
import { Post } from "../interface/post";
import { axiosPrivateInstance } from ".";


const getAllPosts = async (): Promise<AxiosResponse<Post[]>> => {
  try {
    const res: AxiosResponse<Post[]> = await axiosPrivateInstance.get('/post');
    return res;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const postService = {
  getAllPosts
}