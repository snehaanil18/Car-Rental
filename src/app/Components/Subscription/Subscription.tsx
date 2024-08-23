import Image from "next/image";
import mobile from '../../../../public/Images/mobile-desktop.svg'
import play from '../../../../public/Images/play-store-white.svg'
import app from '../../../../public/Images/app-store-white.svg'
import styles from './Subscription.module.css'

export default function Subscription(){
    return(

        <div className={styles.subscribe}>
          <div className={styles.subscribeForm}>
            <h2>Subscribe here for exclusive offers and updates!</h2>

            <div className={styles.inputForm}>
              <input placeholder="Name" type="text" />
              <input placeholder="Email" type="text" />
            </div>
            <div className={styles.phonePara}>
              Please select the ways you would like to hear from Diamondlease,
              and confirm that you’re happy for us to store your data in line
              with our Privacy Policy.
            </div>
            <p>
              Don't miss out! enter your email and your name, then hit
              subscribe to unlock a world of special offers and details.
            </p>
            <button>Subscribe</button>
          </div>


          <div className={styles.linkSection}>
            <div className={styles.mobileImg}>
              <Image src={mobile} alt="mobile" width={231} height={417} />
            </div>
            <div className={styles.linkForm}>
              <div className="userPart">
                <p>
                  Enter your number and receive a direct link to download the
                  app
                </p>
                <div className="desktopInput">
                  <input placeholder="Enter Phone Number" type="text" />
                  <button>Get Link</button>
                </div>
              </div>
              <div className="storeLinks">
                <p id={styles.playStores}>Get in on</p>
                <div className={styles.appImg}>
                  <button><Image src={app} alt="app store" width={100} height={30}/></button>
                  <button><Image src={play} alt="play store" width={100} height={30} /></button>
                </div>
              </div>
            </div>
          </div>


          <div className={styles.linkSectionPhone}>
            <div className={styles.storeImgPhone}>
              <Image id={styles.mobileLogo} src={mobile} alt="" height={245} width={136} />
              <div className={styles.linkLabelsPhone}>
                <div className="playstorePhone">
                  <p>Get it on</p>
                  <div className={styles.appImg}>
                    <Image src={app} alt="" width={103} height={30} />
                    <Image src={play} alt="" width={103} height={30} />
                  </div>
                </div>

                <div className="mobileNum">
                  <p id={styles.messageLabel}>
                    Enter your number and receive a direct link to download
                    the app
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.inputLinkPhone}>
              <input placeholder="Enter Phone Number" type="text" />
              <button>Get Link</button>
            </div>
          </div>
        </div>

    );
}