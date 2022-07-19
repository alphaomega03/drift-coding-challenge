import { useWallet } from '@solana/wallet-adapter-react'
import { createAvatar } from '@dicebear/avatars'
import Image from 'next/image'
import * as style from '@dicebear/avatars-jdenticon-sprites'
import styles from '../../styles/Home.module.css'
import { useCallback, useEffect, useState } from 'react'
import { sign } from 'tweetnacl'
import DiscordOauth2 from 'discord-oauth2'
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Link from 'next/link'
import axios from 'axios'
import { deleteUser, getUser } from '../../requests'

export default function Verify() {
  const { wallet, publicKey, signMessage } = useWallet()
  const [ hasSigned, setHasSigned ] = useState(true)
  const [ user, setUser ] = useState(undefined)

  useEffect(() => {
    if(publicKey) {
      getUser(publicKey).then((res) => {
        console.log('res', res)
        if(res.data.length > 0) {
          setUser(res.data[0])
        }
      })
    }
  }, [publicKey])

  const onSignIn = useCallback( async () => {
    try {
      if(!signMessage) throw new Error('Wallet does not support message signing!')
      const message = new TextEncoder().encode(`
        Sign in with Drift Protocol.
        
        No password needed.  
        
        Click Sign or Approve to prove that this wallet is yours
        
        This request will not trigger any blockchain transaction or cost any gas fee
      `)

      const signature = await signMessage(message)
      if (!sign.detached.verify(message, signature, publicKey.toBytes())) throw new Error('Invalid signature!')
      setHasSigned(true)
    } catch (error) {
      alert(`Signing failed due to error: ${error.message}`)
    }
  }, [publicKey, signMessage])

  const onUnlink = useCallback( async () => {
    deleteUser(publicKey).then(() => {
      setUser(undefined)
    })
  })

  return (
    <div className={styles.verify}>
      <div className={styles.avatars}>
        <Image
          src={`https://avatars.dicebear.com/api/jdenticon/${publicKey || 'default'}.svg`}
          width={100}
          height={100}
          alt="Avatar"
        />
        {user && <div className={styles.handshake}>🤝</div>}
        {user && (
          <Image
            src={`${user.avatar}`}
            width={100}
            height={100}
            alt="Avatar"
          />
        )}
      </div>

      <div>
        {wallet && (
          <div className={styles.buttonContainer}>
            <WalletMultiButton className={styles.signIn}></WalletMultiButton>
          </div>
          )
        }
        {signMessage && !hasSigned && (
          <div className={styles.buttonContainer}>
            <button className={styles.signIn} onClick={onSignIn}>Sign In</button>
          </div>
        )}
        {hasSigned && publicKey && !user && (
          <div className={styles.buttonContainer}>
            <Link href={`/api/auth/login?address=${publicKey}`} passHref>
              <button className={styles.signIn}>Link with Discord</button>
            </Link>
          </div>
        )}
        {wallet && publicKey && user && (
            <div className={styles.buttonContainer}>
              <button className={styles.signOut} onClick={onUnlink}>Unlink with Discord</button>
            </div>
          )
        }
      </div>
    </div>
  )
}