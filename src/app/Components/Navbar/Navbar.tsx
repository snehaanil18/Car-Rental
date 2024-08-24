"use client"
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.css'; 
import Link from 'next/link';
import fbicon from '../../../../public/Images/fb.svg'
import igicon from '../../../../public/Images/instagram.svg'
import xicon from '../../../../public/Images/x.svg'
import linkedinicon from '../../../../public/Images/linkedin.svg'
import logo from '../../../../public/Images/logo-1.png'
import notification from '../../../../public/Images/notification_1.svg'
import menu from '../../../../public/Images/menu.svg'
import close from '../../../../public/Images/close.svg'

export default function Navbar(){

    // state to track click event
    const [isOpen,setIsOpen] = useState(false)

    // type for social media array
    type social = {
        href:string,
        src: StaticImageData;
        alt: string;
    }

    // type navbar elements
    type navArray ={
        href: string;
        text: string;
    }

    // content of navbar
    const navElements : navArray[] = [
        {href:'/',text:"About"},
        {href:'/',text:"Offers"},
        {href:'/',text:"Coporate"},
        {href:'/',text:"Personal"},
        {href:'/',text:"Locations"},
        {href:'/',text:"Contact Us"},
    ]

    // social media links
    const socialMedia: social[] = [
        {href:'https://www.facebook.com/',src:fbicon , alt: "Facebook"},
        {href:'https://www.instagram.com/',src:igicon, alt:'Instagram'},
        {href:'https://x.com/',src:xicon, alt: "x"},
        {href:'https://www.linkedin.com/',src:linkedinicon , alt: "Linkedin"},
    ]

    // click event for opening sidenav
    const openNav = () => {
        setIsOpen(true)
    }

    // click event for closing sidenav
    const closeNav = () => {
        setIsOpen(false)
    }

    return (
        <section>
            <div className={styles.navbar}>
                <div className={styles.socialMedia}>
                    {/* map social media links */}
                    <ul>
                        {socialMedia.map((item,index) => 
                        <li key={index}>
                            <a href={item.href} target='_blank'>
                                <Image src={item.src} alt={item.alt} width={17} height={17} layout='responsive' />
                            </a>
                        </li>
                        )}
                    </ul>
                </div>

                <div className={styles.navElements}>
                    {/* logo */}
                    <div className={styles.logo}>
                        <Image src={logo} alt='logo' height={53} width={355} />
                    </div>

                    <div className={styles.navMenu}>
                        <ul id={styles.navList}>
                            {navElements.map((listItem,index) => 
                            // map navbar links for different pages
                            <li key={index}><Link href={listItem.href}>{listItem.text}</Link></li>)}
                            <li id={styles.navMenuButtons}>
                                <button id={styles.notifications}>
                                    <Image src={notification} alt="notification" height={20} width={20} />
                                </button>
                                <button id={styles.user}>
                                    <span id={styles.letter}>J</span><span id={styles.name}>John Doe</span>
                                </button>
                            </li>
                        </ul>

                        {/* menu icon for mobile devices  */}
                        <div className={styles.menuButton}>
                            <button id={styles.menu} onClick={()=> openNav()}>
                                <Image src={menu} alt='menu' height={20} width={20} />
                            </button>
                        </div>

                    </div>
                </div>

                {/* moving text */}
                <div className={styles.text}>
                    <p>Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand
                        Sales Counters | All Rates inclusive of VAT. T&C’s apply | Follow us
                        on Social Media for New Offers</p>
                </div>
            </div>

            {/* navbar  for mobile devices*/}
            <div id={styles.sidebar} className={`${styles.menuSidebar} ${isOpen ? styles.active : styles.menuSidebar}`}>
                <button id={styles.closeButton} onClick={()=> closeNav()}>
                    <Image  src={close} alt="close" width={18} height={18}/>
                </button>
                <div className={styles.sidenavMenuItems}>
                
                    {navElements.map((menuItem,index) => 
                    <div key={index}>
                    <Link href={menuItem.href}>{menuItem.text}</Link>
                    <hr />
                    </div>
                    )}
                    <button id={styles.loginSignup}>Login / Sign Up</button>
                </div>
            </div>

        </section>
    );
};


