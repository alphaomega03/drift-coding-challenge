import styles from '../../styles/Home.module.css'
export default function LearnMore() {
  return (
    <div className={styles.learnMore}>
      <h2>Learn More</h2>
      <div className={styles.linksContainer}>
        <div className={styles.linkContainer}></div>
        <div className={styles.linkContainer}></div>
      </div>
    </div>
  )
}