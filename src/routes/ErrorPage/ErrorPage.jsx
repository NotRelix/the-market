import styles from "./ErrorPage.module.css"

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error occured.</p>
    </div>
  )
}

export default ErrorPage