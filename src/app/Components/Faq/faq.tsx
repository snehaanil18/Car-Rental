"use client";
import styles from './faq.module.css'
import expand from '../../../../public/Images/xmark.svg'
import close from '../../../../public/Images/close.svg'
import { useState } from 'react';
import Image from 'next/image';


export default function Faq(){
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (id: number) => {
        setOpenIndex(openIndex === id ? null : id);
    };
    type faq = {
        id:number,
        question:string,
        answer:string
    }

    const details:faq[] = [
        {id:1 ,question:"What is my eligibility to book a car?" , answer:"You should be 18 years old or above and you must possess a valid driving license."},
        {id:2 , question:"Can I opt car for a longer period?" , answer:"You should be 18 years old or above and you must possess a valid driving license."},
        {id:3 ,question:"Can I book one-way trip?" , answer:"You should be 18 years old or above and you must possess a valid driving license."},
        {id:4 ,question:"Is there home delivery option available?" , answer:"You should be 18 years old or above and you must possess a valid driving license."},
        {id:5 ,question:"How can i make the payment?" , answer:"You should be 18 years old or above and you must possess a valid driving license."},
    ]

    return(
        <div className={styles.questions}>
          <h2>Frequently asked questions</h2>

        {details.map(faq => 
          <div key={faq.id} className={styles.faq}>
            <div className={styles.questionRow}>
              <p className="question">{faq.question}</p>
              <div>
                <button onClick={() => toggleAccordion(faq.id)} className={styles.accordion}>
                    <Image src={openIndex === faq.id ? close : expand} alt={openIndex === faq.id ? 'close button' : 'expand button'} width={15} height={15} />
                </button>
              </div>
            </div>
            {openIndex === faq.id && (
                <div className={styles.answer}>
                    <p className="license">
                        {faq.answer}
                    </p>
                </div>
            )}
          </div>
        )}
        </div>

    )
}