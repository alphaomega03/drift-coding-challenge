import Image from 'next/image'
import styles from '../../styles/Home.module.css'
/*
https://driftprotocol.medium.com/
https://discord.com/invite/fMcZBH8ErM
https://github.com/drift-labs/protocol-v1
*/
export default function LearnMore() {
  return (
    <div className={styles.learnMore}>
      <h2>Learn More</h2>
      <div className={styles.linksContainer}>
        <div className={styles.linkContainer}>
          <div className={styles.linkContent}>
            <Image
              src="/blog-icon.png"
              height={106}
              width={106}
              alt="Blog Icon"
            />
            <div className={styles.linkText}>
              <h2>Have questions?</h2>
              <p>Visit us on medium or Discord to learn more or join the conversation</p>
            </div>
          </div>
          <div className={styles.links}>
            <div>
              <a href='https://driftprotocol.medium.com/'>
                Learn More
              </a>
              <Image
                className={styles.linkImage}
                src="/up-right-icon.png"
                height={10}
                width={10}
                alt="Up Right Icon"
              />
            </div>
            <div>
              <a href='https://discord.com/invite/fMcZBH8ErM'>
                Discord
              </a>
              <Image
                className={styles.linkImage}
                src="/up-right-icon.png"
                height={10}
                width={10}
                alt="Up Right Icon"
              />
            </div>
          </div>
        </div>
        <div className={styles.linkContainer}>
        <div className={styles.linkContent}>
            <Image
              src="/code-icon.png"
              height={106}
              width={106}
              alt="Blog Icon"
            />
            <div className={styles.linkText}>
              <h2>Review The Code</h2>
              <p>Check out the code for the Drift Protocol.</p>
            </div>
          </div>
          <div className={styles.links}>
            <div>
              <a href='https://github.com/drift-labs/protocol-v1'>
                Github
              </a>
              <Image
                className={styles.linkImage}
                src="/up-right-icon.png"
                height={10}
                width={10}
                alt="Up Right Icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}