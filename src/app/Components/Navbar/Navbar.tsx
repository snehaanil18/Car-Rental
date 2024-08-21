"use client"
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.css'; // Import your CSS module
import Link from 'next/link';


export default function Navbar(){

    const [isOpen,setIsOpen] = useState(false)

    const openNav = () => {
        setIsOpen(true)
    }

    const closeNav = () => {
        console.log('closed');
        setIsOpen(false)
    }

    return (
        <section>
            <div className={styles.navbar}>
                <div className={styles.socialMedia}>
                    <ul>
                        <li>
                            <a href="">
                                <Image src="\Images\fb.svg" alt='' width={17} height={17} layout='responsive' />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Image src="\Images\instagram.svg" alt='' width={17} height={17} layout='responsive' />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Image src="\Images\x.svg" alt='' width={17} height={17} layout='responsive' />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Image src="\Images\linkedin.svg" alt='' width={17} height={17} layout='responsive' />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={styles.navElements}>
                    <div className={styles.logo}>
                        <Image src="/Images/logo-1.png" alt='logo' height={53} width={355} />
                    </div>

                    <div className={styles.navMenu}>
                        <ul id={styles.navList}>
                            <li><Link href={'/'}>About</Link></li>
                            <li><Link href={'/'}>Offers</Link></li>
                            <li><Link href={'/'}>Coporate</Link></li>
                            <li><Link href={'/'}>Personal</Link></li>
                            <li><Link href={'/'}>Locations</Link></li>
                            <li><Link href={'/'}>Contact Us</Link></li>
                            <li id={styles.navMenuButtons}>
                                <button id={styles.notifications}>
                                    <Image src='\Images\notification_1.svg' alt="" height={20} width={20} />
                                </button>
                                <button id={styles.user}>
                                    <span id={styles.letter}>J</span><span id={styles.name}>John Doe</span>
                                </button>
                            </li>
                        </ul>

                        {/* menu icon for mobile devices  */}
                        <div className={styles.menuButton}>
                            <button id={styles.menu} onClick={()=> openNav()}>
                                <Image src='\Images\menu.svg' alt='' height={20} width={20} />
                            </button>
                        </div>

                    </div>
                </div>

                <div className={styles.text}>
                    <p>Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand
                        Sales Counters | All Rates inclusive of VAT. T&C’s apply | Follow us
                        on Social Media for New Offers</p>
                </div>
            </div>

            {/* navbar  for mobile devices*/}
            <div id={styles.sidebar} className={`${styles.menuSidebar} ${isOpen ? styles.active : styles.menuSidebar}`}>
                <button id={styles.closeButton} onClick={()=> closeNav()}>
                    <Image  src="\Images\close.svg" alt="" width={18} height={18}/>
                </button>
                <div className={styles.sidenavMenuItems}>
                    <Link href={'/'}>About</Link>
                    <hr />
                    <Link href={'/'}>Offers</Link>
                    <hr />
                    <Link href={'/'}>Coporate</Link>
                    <hr />
                    <Link href={'/'}>Personal</Link>
                    <hr />
                    <Link href={'/'}>Locations</Link>
                    <hr />
                    <Link href={'/'}>Contact Us</Link>
                    <hr />
                    <button id={styles.loginSignup}>Login / Sign Up</button>
                </div>
            </div>

        </section>
    );
};


