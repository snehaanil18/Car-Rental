import Image,{StaticImageData} from "next/image";
import Link from "next/link";
import styles from "./footer.module.css"
import fb from '../../../../public/Images/fb-white.svg'
import x from '../../../../public/Images/x-white.svg'
import ig from '../../../../public/Images/ig-white.svg'
import linkedin from '../../../../public/Images/linkedin-white.svg'
import youtube from '../../../../public/Images/youtube-white.svg'


export default function Footer() {
  type social ={
    href: string,
    src: StaticImageData,
    alt:string
  }

  const socialMedia:social[] = [
    {href:"https://www.facebook.com/",src:fb,alt:"facebook"},
    {href:"https://x.com/",src:x,alt:"x"},
    {href:"https://www.instagram.com/",src:ig,alt:"instagram"},
    {href:"https://www.linkedin.com/",src:linkedin,alt:"linkedin"},
    {href:"https://www.youtube.com/",src:youtube,alt:"youtube"},
  ]

  return (
    <section>

      <div className={styles.footer}>
        <div className={styles.footerLinks}>

          <div className={styles.logoFooter}>
            <Image src="\Images\logo.svg" alt="" height={66} width={57} />
            <p>Member of the Al Habtoor Group</p>
          </div>


          <div className={styles.footerContent}>
            <div className={styles.listedContents}>
              <ul>
                <li><Link href="">Home</Link></li>
                <li><Link href="">About Us</Link></li>
                <li><Link href="">Services</Link></li>
              </ul>

              <ul>
                <li><Link href="">Offers</Link></li>
                <li><Link href="">Locations</Link></li>
                <li><Link href="">Contact Us</Link></li>
              </ul>

              <ul>
                <li><Link href="">FAQ</Link></li>
                <li><Link href="">Privacy Policy</Link></li>
                <li><Link href="">Service Request</Link></li>
              </ul>

              <ul>
                <li><Link href="">Career</Link></li>
                <li><Link href="">Terms & Condfitions</Link></li>
              </ul>
            </div>
            <div className="company">
              Al Habtoor Companies
            </div>

            <div className={styles.other}>
              <ul>
                <li>Hospitality</li>
                <li>Real Estate</li>
                <li>Education</li>
                <li>Publishing</li>
                <li>Automotive</li>
                <li>Vehicle Leasing</li>
              </ul>
            </div>
          </div>


          <div className={styles.socialFooter}>
            <p>FOLLOW US ON</p>
            <div className={styles.socialMediaFooter}>
              {socialMedia.map(item =>
              <a href={item.href} target="_blank"><Image src={item.src} alt={item.alt} width={16} height={16} /></a>
            )}

            </div>
            <Image id={styles.secureImg} height={24} width={64} src="\Images\secure.svg" alt="" />
          </div>
        </div>

        <hr />
        <div className={styles.footerLegal}>
          <p>© 2018 Car rental LLC - All Rights Reserved.</p>
        </div>
      </div>


      <div className={styles.footerPhone}>
        <div className={styles.logoSocial}>
          <div className={styles.logoFooterPhone}>
            <Image src="\Images\footer-logo.svg" height={24} width={40} alt="" />
            <p>Member of the Al Habtoor Group</p>
          </div>
          <div className={styles.socialMediaFooter}>
            <a href=""><Image src="\Images\fb-black.svg" alt="" width={16} height={16} /></a>
            <a href=""><Image src="\Images\x-black.svg" alt="" width={16} height={16} /></a>
            <a href=""><Image src="\Images\ig-black.svg" alt="" width={16} height={16} /></a>
            <a href=""><Image src="\Images\linkedin-black.svg" alt="" width={16} height={16} /></a>
            <a href=""><Image src="\Images\youtube-black.svg" alt="" width={16} height={16} /></a>
          </div>
        </div>

        <div className={styles.ulListedPhone}>
          <ul>
            <li><Link href="">Home</Link></li>
            <li><Link href="">Offers</Link></li>
            <li><Link href="">Career</Link></li>
            <li><Link href="">About Us</Link></li>
            <li><Link href="">Locations</Link></li>
          </ul>
          <ul>
            <li><Link href="">FAQ</Link></li>
            <li><Link href="">Terms & Condfitions</Link></li>
            <li><Link href="">Service Request</Link></li>
          </ul>
          <ul>
            <li><Link href="">Privacy Policy</Link></li>
            <li><Link href="">Services</Link></li>
            <li><Link href="">Contact Us</Link></li>
          </ul>
        </div>

        <div className={styles.otherContent}>
          <div className={styles.companyPhone}>
            Al Habtoor Companies
          </div>

          <div className={styles.otherFeatures}>
            <ul>
              <li>Hospitality</li>
              <li>Real Estate</li>
              <li>Publishing</li>
              <li>Automotive</li>
              <li>Vehicle Leasing</li>
            </ul>
          </div>

          <Image id="securePhone" src="\Images\secure-white.svg" height={27} width={59} alt="" />

          <hr />

          <div className={styles.footerLegalPhone}>
            <p>© 2018 Car rental LLC - All Rights Reserved.</p>
          </div>

        </div>
      </div>

    </section>
  );
}