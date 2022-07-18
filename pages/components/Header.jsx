import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'

export default function Header() {
  const { wallet } = useWallet()
  return (
    <div className={styles.header}>
      <Image
        className={styles.logo}
        src="/drift-logo.png"
        width={77.35}
        height={22.17}
        alt="Drift Logo"
      />
      {
        wallet ?
        <WalletMultiButton></WalletMultiButton> :
        <WalletMultiButton className={styles.connectWallet}>Connect Wallet</WalletMultiButton>
      }
    </div>
  )
}