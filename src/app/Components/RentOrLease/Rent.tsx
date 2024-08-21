import Image from "next/image";
import styles from './Rent.module.css'

export default function Rent(){
    return(
        <section>
        <div className={styles.rentLease}>
          <h2>Rent/Lease In three easy steps</h2>
          <div className={styles.threeSteps}>
            <div className={styles.steps}>
              <h3 className="stepNumber">01</h3>
              <div className={styles.stepContent}>

                <Image src="\Images\step1.svg" alt="" height={64} width={64}/>
                <p>
                  Select the location. Browse through our available options
                  and find the perfect car to suit your needs.
                </p>
              </div>
            </div>

            <div className={styles.steps}>
              <h3 className="stepNumber">02</h3>
              <div className={styles.stepContent}>
                <Image src="\Images\step2.svg" alt="" height={64} width={64} />
                <p>Choose your desired Pick-Up date and time.</p>
              </div>
            </div>

            <div className={styles.steps}>
              <h3>03</h3>
              <div className={styles.stepContent}>
                <Image src="\Images\step3.svg" alt="" height={64} width={64}/>
                <p>
                  Make payment and book the car. Select an option to either
                  have the car delivered to your location or pick it up
                  directly from us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}