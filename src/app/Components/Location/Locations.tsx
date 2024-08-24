import Image from "next/image";
import styles from './Location.module.css'
import location from '../../../../public/Images/red location.svg'

export default function Location(){
  // array of location
  const places:string[] = ["Dubai","Abu Dhabi","Sharjah","Fujairah","Ras Al Khaimah"];

return(

  <div className={styles.locations}>
    <h2>Locations</h2>
    <div className={styles.places}>
      {places.map((place, index) => (
        // array mapping
        <div className={styles.placeName} key={place}>
          <div className={styles.placeBox}>
          <Image src={location} alt="" width={22} height={28} />
          <p>{place}</p>
          </div>
          {/* add a divider after each map except the last element of array */}
          {index < places.length - 1 && ( 
            <div className={styles.divider}></div>
          )}
        </div>
      ))}
    </div>
  </div>

);
}