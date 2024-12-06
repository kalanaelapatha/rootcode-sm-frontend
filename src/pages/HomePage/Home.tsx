import { Button } from 'antd'
import React from 'react'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <Button color="default" variant="solid">Create New Post</Button>
    </div>
  )
}

export default Home
