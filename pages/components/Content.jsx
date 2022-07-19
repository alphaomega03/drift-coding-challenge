import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Verify from './Verify'

export default function Content() {
  const { wallet } = useWallet()
  return (
    <div className={styles.content}>
      <h2>Verify Identity</h2>
      <div className={styles.connectContainer}>
        <div className={wallet ? styles.wallet : styles.buttonContainer}>
          {
            wallet ?
            <Verify /> :
            <div>
              <WalletMultiButton>
                <Image
                  src="/wallet-icon.png"
                  height={18}
                  width={18}
                  alt="Wallet Icon"
                />
                <p className={styles.connectWalletContent}>Connect Wallet</p>
              </WalletMultiButton>
            </div>
          }
        </div>
      </div>
    </div>
  )
}