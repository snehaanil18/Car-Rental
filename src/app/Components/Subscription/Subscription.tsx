"use client";
import Image from "next/image";
import mobile from '../../../../public/Images/mobile-desktop.svg'
import play from '../../../../public/Images/play-store-white.svg'
import app from '../../../../public/Images/app-store-white.svg'
import styles from './Subscription.module.css'
import { ChangeEvent, useEffect, useState } from "react";


export default function Subscription(){
  // type for subscription form
  type formDetails = {
    name:string,
    email:string
  }

  // type for form errors
  type formError = {
    name?:string,
    email?:string
  }

  // state to store user input
  const [formData, setFormData] = useState<formDetails>({
    name: "",
    email: "",
  });

  // state to store phone number
  const [phone, setPhone] = useState<string>("");

  // store phone number errors
  const [phoneError, setPhoneError] = useState<string | null>(null);;

  // store errors in form data
  const [errors, setErrors] = useState<formError>({});

  // /based on onChange event store data to formData state
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setErrors({})
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 
  // check if phone number entered id valid
  const validatePhoneNumber = (value: string): string | null => {
    if (/^\d{10}$/.test(value)) {
      return null; // Valid phone number
    }
    return "Phone number must be exactly 10 digits";
  };

  // submit function of getLink button
  const handlePhone = () => {
    // call validate function 
    const validationError = validatePhoneNumber(phone);
    if (validationError) {
      setPhoneError(validationError);
    } else {
      setPhoneError(null); // Clear any previous error
      alert('Link sent');
      setPhone("")
    }
  };
  
  // check inputs entered
  const validateInputs = () => {
      // store error
      const newError:formError = {}

      // check name is enterd
      if (!formData.name.trim()) {
        newError.name = "Name is required";
      } 
      // check only string is entered
      else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
        newError.name = "Name must contain only letters";
      }

      // check if email is entered
      if (!formData.email.trim()) {
        newError.email = "Email is required";
      } 
      // check if entered data match email pattern
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newError.email = "Invalid email format";
      }

      // set the errors to state
      setErrors(newError);
      // if newError is empty function is returned
      return Object.keys(newError).length === 0;
  }


  const handleSubmit = () => {
    // check if validate function is returned
    if (validateInputs()) {
      alert("Subscribed successfully!");
      setFormData({
        name: "",
        email: "",
      });
    }
  }

    return(

        <div className={styles.subscribe}>
          <div className={styles.subscribeForm}>
            <h2>Subscribe here for exclusive offers and updates!</h2>

            {/* /input fields for formData */}
            <div className={styles.inputForm}>
              <div className="inputs">
              <input placeholder="Name" value={formData.name} name="name" onChange={handleChange} type="text" />
              {errors.name && <div className={styles.error}>{errors.name}</div>}
              </div>
              <div className="inputs">
              <input placeholder="Email" name="email" value={formData.email}  onChange={handleChange} type="text" />
              {errors.email && <div className={styles.error}>{errors.email}</div>}
              </div>
            </div>
            <div className={styles.phonePara}>
              Please select the ways you would like to hear from Diamondlease,
              and confirm that you&apos;re happy for us to store your data in line
              with our Privacy Policy.
            </div>
            <p>
              Don&apos;t miss out! enter your email and your name, then hit
              subscribe to unlock a world of special offers and details.
            </p>
            <button onClick={() => handleSubmit()}>Subscribe</button>
          </div>


          {/* desktop view */}
          <div className={styles.linkSection}>
            <div className={styles.mobileImg}>
              <Image src={mobile} alt="mobile" width={231} height={417} />
            </div>
            <div className={styles.linkForm}>
              <div className="userPart">
                <p>
                  Enter your number and receive a direct link to download the
                  app
                </p>
                <div className="desktopInput">
                  <input placeholder="Enter Phone Number" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  {phoneError && <div className={styles.phoneError}>{phoneError}</div>}
                  <button onClick={() => handlePhone()}>Get Link</button>
                </div>
              </div>
              <div className="storeLinks">
                <p id={styles.playStores}>Get in on</p>
                <div className={styles.appImg}>
                  <button><Image src={app} alt="app store" width={100} height={30}/></button>
                  <button><Image src={play} alt="play store" width={100} height={30} /></button>
                </div>
              </div>
            </div>
          </div>


          {/* phone view */}
          <div className={styles.linkSectionPhone}>
            <div className={styles.storeImgPhone}>
              <Image id={styles.mobileLogo} src={mobile} alt="" height={245} width={136} />
              <div className={styles.linkLabelsPhone}>
                <div className="playstorePhone">
                  <p>Get it on</p>
                  <div className={styles.appImg}>
                    <Image src={app} alt="" width={103} height={30} />
                    <Image src={play} alt="" width={103} height={30} />
                  </div>
                </div>

                <div className="mobileNum">
                  <p id={styles.messageLabel}>
                    Enter your number and receive a direct link to download
                    the app
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.inputLinkPhone}>
              <input placeholder="Enter Phone Number" type="text" />
              <button>Get Link</button>
            </div>
          </div>
        </div>

    );
}