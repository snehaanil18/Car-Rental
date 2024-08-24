import Image,{StaticImageData} from "next/image";
import Link from "next/link";
import styles from "./footer.module.css"
import fb from '../../../../public/Images/fb-white.svg'
import x from '../../../../public/Images/x-white.svg'
import ig from '../../../../public/Images/ig-white.svg'
import linkedin from '../../../../public/Images/linkedin-white.svg'
import youtube from '../../../../public/Images/youtube-white.svg'
import logo from '../../../../public/Images/logo.svg'
import fb1 from '../../../../public/Images/fb-black.svg'
import x1 from '../../../../public/Images/x-black.svg'
import ig1 from '../../../../public/Images/ig-black.svg'
import linked from '../../../../public/Images/linkedin-black.svg' 
import ytube from '../../../../public/Images/youtube-black.svg'


export default function Footer() {
  // set type for content in social media part
  type social ={
    href: string,
    src: StaticImageData,
    alt:string
  }

  // contents for desktop
  const socialMedia:social[] = [
    {href:"https://www.facebook.com/",src:fb,alt:"facebook"},
    {href:"https://x.com/",src:x,alt:"x"},
    {href:"https://www.instagram.com/",src:ig,alt:"instagram"},
    {href:"https://www.linkedin.com/",src:linkedin,alt:"linkedin"},
    {href:"https://www.youtube.com/",src:youtube,alt:"youtube"},
  ]

  // contents for phone
  const socialPhone:social[] = [
    {href:"https://www.facebook.com/",src:fb1 ,alt:"facebook"},
    {href:"https://x.com/",src:x1 ,alt:"x"},
    {href:"https://www.instagram.com/",src:ig1, alt:"instagram"},
    {href:"https://www.linkedin.com/",src:linked, alt:"linkedin"},
    {href:"https://www.youtube.com/",src:ytube,alt:"youtube"},
  ]

  // features array
  const others:string[] = ['Hospitality','Real Estate','Education','Publishing','Automotive','Vehicle Leasing']

  return (
    <section>

      <div className={styles.footer}>
        <div className={styles.footerLinks}>

          {/* logo */}
          <div className={styles.logoFooter}>
            <Image src={logo} alt="" height={66} width={57} />
            <p>Member of the Al Habtoor Group</p>
          </div>


          {/* links to other pages */}
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

            {/* listed features */}
            <div className={styles.other}>
              <ul>
                {others.map((item,index) => (
                <li key={index}>{item}</li>
              ))}
              </ul>
            </div>
          </div>

              {/* social media links */}
          <div className={styles.socialFooter}>
            <p>FOLLOW US ON</p>
            <div className={styles.socialMediaFooter}>
              {socialMedia.map((item , index)=>
              <a href={item.href} key={index} target="_blank"><Image src={item.src} alt={item.alt} width={16} height={16} /></a>
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
        {/* logo */}
        <div className={styles.logoSocial}>
          <div className={styles.logoFooterPhone}>
            <Image src="\Images\footer-logo.svg" height={24} width={40} alt="" />
            <p>Member of the Al Habtoor Group</p>
          </div>

          {/* links to social media */}
          <div className={styles.socialMediaFooter}>
            {socialPhone.map((tag,index) => (
            <a key={index} target="_blank" href={tag.href}><Image src={tag.src} alt={tag.alt} width={16} height={16} /></a>
          ))}

          </div>
        </div>

          {/* links to other sections */}
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
            {others.map((item,index) => (
                <li key={index}>{item}</li>
              ))}
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