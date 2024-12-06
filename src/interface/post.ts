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