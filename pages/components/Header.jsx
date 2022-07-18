import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <Image
        className={styles.logo}
        src="/drift-logo.png"
        width={77.35}
        height={22.17}
        alt="Drift Logo"
      />
      <button className={styles.connectWallet}>Connect Wallet</button>
    </div>
  )
}