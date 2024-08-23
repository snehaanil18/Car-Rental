"use client";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import slide from '../../../../public/Images/banner.svg';
import styles from './banner.module.css';

export default function Banner() {

    type bannerData = {
        id: string,
        src: StaticImageData,
    }

    const banner: bannerData[] = [
        { id: "slide1", src: slide },
        { id: "slide2", src: slide},
        { id: "slide3", src: slide },
    ];

    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % banner.length);
        }, 3000); 

        return () => clearInterval(interval); 
    }, [banner.length]);

    return (
        <div className={styles.bannerContainer}>
            {banner.map((data, index) => (
                <div
                    key={data.id}
                    className={`${styles.slideContainer} ${index === activeSlide ? styles.active : styles.inactive}`}
                >
                    <Image  priority={true} id={styles.bannerImg} src={data.src} alt="banner" layout="responsive"  />
                    <div className={styles.bannerText}>
                        Receive guaranteed <button>GIFT VOUCHER</button>
                        <div>on a monthly hire or lease.</div>
                    </div>

                    <div className={styles.indicator}>
                        {banner.map((_,index)=> 
                            <button key={index} className={`${index===activeSlide?styles.activeIndicator:styles.inactiveIndicator}`}></button>
                        )}
                        
                    </div>
                </div>
            ))}
        </div>
    );
}
