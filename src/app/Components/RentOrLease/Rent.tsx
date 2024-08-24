import Image ,{StaticImageData} from "next/image";
import styles from './Rent.module.css'
import step1icon from '../../../../public/Images/step1.svg'
import step2icon from '../../../../public/Images/step2.svg'
import step3icon from '../../../../public/Images/step3.svg'

export default function Rent() {

  // type for array
  type steps = {
    no:string,
    src: StaticImageData,
    alt:string,
    content:string
  }

  // steps for renting
  const rentSteps:steps[] = [
    { no: "01", src: step1icon, alt: "step 1 icon", content: "Select the location. Browse through our available options and find the perfect car to suit your needs." },
    { no: "02", src: step2icon, alt: "step 2 icon", content: "Choose your desired Pick-Up date and time." },
    { no: "03", src: step3icon, alt: "step 3 icon", content: "Make payment and book the car. Select an option to either have the car delivered to your location or pick it up directly from us." },
  ]
  return (

      <div className={styles.rentLease}>
        <h2>Rent/Lease In three easy steps</h2>
        <div className={styles.threeSteps}>
          {/* map the steps */}
          {rentSteps.map(step =>
            <div className={styles.steps}>
              <h3 className="stepNumber">{step.no}</h3>
              <div className={styles.stepContent}>

                <Image src={step.src} alt={step.alt} height={64} width={64} />
                <p>
                  {step.content}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

  );
}