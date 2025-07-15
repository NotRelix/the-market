import styles from "./Root.module.css"
import { Outlet } from "react-router-dom"

const Root = () => {
  return (
    <div className={styles.container}>
      <h1>Navbar up here</h1>
      <Outlet />
      <h1>Footer down here</h1>
    </div>
  )
}

export default Root