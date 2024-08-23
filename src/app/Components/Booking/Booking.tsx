"use client";
import styles from './booking.module.css'
import { useState } from 'react';
import Image from 'next/image';
import location from '../../../../public/Images/location.svg'
import dropdown from '../../../../public/Images/drop-down.svg'
import calender from '../../../../public/Images/calendar-green.svg'

export default function Booking(){
    const [activeTab, setActiveTab] = useState('tab1')
    const [clicked,setClicked] = useState(false)

    const switchTabs = (tab: string) => {
        setActiveTab(tab)
    }

    return(
        <div className={styles.bookingPart}>
            <div className={styles.bookingPhone}>
                <button id={styles.booking} onClick={() => setClicked(!clicked)}>Book a Car</button>
                <button id={styles.quickBook}>Quick Book</button>
            </div>

            {clicked && (
            <div className="search">
                <div className={styles.searchLabels}>
                    <button onClick={() => switchTabs('tab1')} className={`tab ${activeTab === 'tab1' ? styles.active : ''}`}>
                        Same as Pick up
                    </button>

                    <button onClick={() => switchTabs('tab2')} className={`tab ${activeTab === 'tab2' ? styles.active : ''}`}>
                        Different Drop-Off
                    </button>

                    <button onClick={() => switchTabs('tab3')} className={activeTab == 'tab3' ? 'activeTab' : ''}>
                        <select name="" id="">
                            <option value="">Select Vehicle Type</option>
                        </select>
                    </button>
                </div>


                <div>
                    {activeTab == 'tab1' && (
                        <div className={styles.inputFields}>
                            <div className={styles.location}>
                                <Image id={styles.locationIcon} src={location} alt='location' width={9} height={12} />
                                <select name="" id="">
                                    <option value="">Al Quoz</option>
                                    <option value="">Al Quoz</option>
                                </select>
                                <Image id={styles.dropDown} src={dropdown} alt='drop down' width={7} height={5} />
                            </div>

                            <div className={styles.dateTime}>
                                <Image id={styles.calender} src={calender} alt='calendat' width={12} height={12} />
                                <input type="datetime-local" name="" id="" />
                            </div>


                            <div className={styles.dateTime}>
                                <Image id={styles.calender} src={calender} alt='calendat' width={12} height={12} />
                                <input type="datetime-local" name="" id="" />
                            </div>

                        </div>
                    )}
                </div>

                <div>
                    {activeTab == 'tab2' && (
                        <div className={styles.inputFields}>
                            <div className={styles.location}>
                                <Image id={styles.locationIcon} src={location} alt='location' width={9} height={12} />
                                <select name="" id="">
                                    <option value="">Al Quoz</option>
                                    <option value="">Al Quoz</option>
                                </select>
                                <Image id={styles.dropDown} src={dropdown} alt='drop down' width={7} height={5} />
                            </div>

                            <div className={styles.location}>
                                <Image id={styles.locationIcon} src={location} alt='location' width={9} height={12} />
                                <select name="" id="">
                                    <option value="">Al Quoz</option>
                                    <option value="">Al Quoz</option>
                                </select>
                                <Image id={styles.dropDown} src={dropdown} alt='drop down' width={7} height={5} />
                            </div>

                            <div className={styles.dateTime}>
                                <Image id={styles.calender} src={calender} alt='calendat' width={12} height={12} />
                                <input type="datetime-local" name="" id="" />
                            </div>


                            <div className={styles.dateTime}>
                                <Image id={styles.calender} src={calender} alt='calendat' width={12} height={12} />
                                <input type="datetime-local" name="" id="" />
                            </div>

                        </div>
                    )}
                </div>

            </div>
            )}
        </div>
    )
}