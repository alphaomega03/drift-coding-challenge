import styles from '../../styles/Home.module.css'
import { SocialIcon } from 'react-social-icons'
import Solana from '../../public/solana.svg'

/*
https://solana.com/
https://discord.com/invite/fMcZBH8ErM
https://twitter.com/DriftProtocol
https://driftprotocol.medium.com/
*/

const style = {
  icon: {
    width: 20,
    height: 20,
    paddingLeft: '10px',
    paddingRight: '10px'
  }
}
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerText}>POWERED BY</div>
      <a href="https://solana.com/" className={styles.solanaIcon}>
        <Solana />
      </a>
      <div className={styles.socials}>
        <SocialIcon
          url="https://discord.com/invite/fMcZBH8ErM"
          bgColor="white"
          fgColor='transparent'
          style={style.icon}
        />
        <SocialIcon
          url="https://twitter.com/DriftProtocol"
          bgColor="transparent"
          fgColor='white'
          style={style.icon}
        />
        <SocialIcon
          url="https://driftprotocol.medium.com/"
          bgColor="transparent"
          fgColor='white'
          style={style.icon}
      />
      </div>

    </div>
  )
}