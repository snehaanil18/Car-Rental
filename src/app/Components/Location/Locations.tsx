import Image from "next/image";
import styles from './Location.module.css'

export default function Location(){
return(
    <section>
    <div className={styles.locations}>
      <h2>Locations</h2>
      <div className={styles.places}>

        <div className={styles.placeName}>
          <Image src="\Images\red location.svg" alt="" width={22} height={28}/>
          <p>Dubai</p>
        </div>

        <div className={styles.divider}></div>
        
        <div className={styles.placeName}>
          <Image src="\Images\red location.svg" alt="" width={22} height={28} />
          <p>Abu Dhabi</p>
        </div>

        <div className={styles.divider}></div>
        <div className={styles.placeName}>
          <Image src="\Images\red location.svg" alt="" width={22} height={28} />
          <p>Sharjah</p>
        </div>

        <div className={styles.divider}></div>
        <div className={styles.placeName}>
          <Image src="\Images\red location.svg" alt="" width={22} height={28} />
          <p>Fujairah</p>
        </div>

        <div className={styles.divider}></div>
        <div className={styles.placeName}>
          <Image src="\Images\red location.svg" alt="" width={22} height={28} />
          <p>Ras Al Khaimah</p>
        </div>

      </div>
    </div>
  </section>
);
}