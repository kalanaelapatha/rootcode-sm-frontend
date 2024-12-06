import { Typography } from 'antd'
import styles from './Header.module.scss'
const { Title } = Typography
const Header = () => {
  return (
    <header>
       <div className={styles.container}>
          <Title level={2}>Home</Title>
       </div>
    </header>
  )
}

export default Header
