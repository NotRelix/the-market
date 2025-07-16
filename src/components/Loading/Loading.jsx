import styles from './Loading.module.css'

const Loading = () => {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
      <span>Please Wait</span>
    </div>
  )
}

export default Loading