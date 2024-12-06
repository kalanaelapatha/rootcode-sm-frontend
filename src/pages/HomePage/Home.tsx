import { Button } from 'antd'
import React, { useEffect } from 'react'
import styles from './Home.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { postAction } from '../../redux'
import PostCard from '../../components/PostManagement/PostCard/PostCard'

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const allPosts = useSelector((state:RootState)=>state.post.allPosts)

  useEffect(()=>{
    dispatch(postAction.getAllPosts())
  },[])

  return (
    <div className={styles.container}>
      <Button size='large' color="default" variant="solid">Create New Post</Button>
     
      {allPosts.map((post)=>(<div className={styles.cardContainer}><PostCard {...post} /></div>))}
     
    </div>
  )
}

export default Home
