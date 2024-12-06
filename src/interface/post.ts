export interface Post {
    id: number
    title: string
    description: string
    titleColor: string
    comments: PostComment[]
  }

  export interface PostComment {
    id: number
    content: string
  }

  export interface PostState {
    isLoading: boolean
    status: APP_STATUS
    message: string
    allPosts: Post[]
  }

  export enum APP_STATUS {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    INITIAL = 'INITIAL'
}