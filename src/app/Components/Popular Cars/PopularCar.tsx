import Image, { StaticImageData } from "next/image";
import car1 from '../../../../public/Images/car1.svg'
import car2 from '../../../../public/Images/car2.svg'
import feature1 from '../../../../public/Images/features1.svg'
import feature2 from '../../../../public/Images/features2.svg'
import phonefeature from '../../../../public/Images/phone-feature.svg'
import styles from './popularCar.module.css'

export default function PopularCars(){

    type CarData = {
        src:StaticImageData,
        alt:string,
        name:string,
        details:string,
        feature:StaticImageData,
        amount:string
    }

    const cars:CarData[] = [
        {src:car1,alt:"Mitsubishi Eclipse",name:"Mitsubishi Eclipse",details:"Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology and driving confidence.",feature:feature1,amount:"AED 2700/ Monthly"},
        {src:car2,alt:"Jac J7",name:"Jac J7",details:"S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact & Whipping test.",feature:feature2,amount:"AED 2700/ Monthly"}
    ]

    return(

        <div className={styles.popularCars}>
          <h2>Most Popular Cars</h2>

          <div className={styles.cards}>

            {cars.map((car,index) => 
            <div key={index} className={styles.carCards}>
              <Image src={car.src} alt={car.alt} height={290} width={360} />
              <div className={styles.cardContent}>
                <h3>{car.name}</h3>
                <p>
                    {car.details}
                </p>
                <div className={styles.features}>
                  <Image className={styles.featureImg} src={car.feature} alt={car.alt} width={300}  />
                  {/* <Image id="feature-phone" src="./Images/phone-feature.svg" alt="" /> */}
                </div>
                <div className={styles.bookingPart}>
                  <p>{car.amount} </p>
                  <button>Book Now</button>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>

    );
}