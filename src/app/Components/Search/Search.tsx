"use client";
import Image from 'next/image';
import styles from './search.module.css'
import { useState } from 'react';
import location from '../../../../public/Images/location.svg'
import dropdown from '../../../../public/Images/drop-down.svg'
import search from '../../../../public/Images/magnifier.svg'
import app from '../../../../public/Images/appstore.svg'
import play from '../../../../public/Images/googleplay.svg'
import calender from '../../../../public/Images/calendar-green.svg'
import phoneicon from '../../../../public/Images/phone-icon.svg'
import Booking from '../Booking/Booking';

export default function Search() {

    // state to store active tab
    const [activeTab, setActiveTab] = useState('tab1')

    // switch tab based on button click
    const switchTabs = (tab: string) => {
        setActiveTab(tab)
    }

    return (
        <div>
            <div className={styles.search}>
                <div className={styles.searchLabels}>
                    {/* labels for tabs */}
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

                {/* content of tab1 */}
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

                            <button id={styles.searchButton}>
                                <Image src={search} alt='search' width={26} height={26} />
                            </button>

                            <div className={styles.divider}></div>

                            <button id={styles.quickBook}>Quick Book</button>

                        </div>
                    )}
                </div>

                    {/* content of tab2 */}
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

                            <input type="datetime-local" name="" id="" />

                            <input type="datetime-local" name="" id="" />

                            <button id={styles.searchButton}>
                                <Image src={search} alt='search' width={26} height={26} />
                            </button>

                            <div className={styles.divider}></div>

                            <button id={styles.quickBook}>Quick Book</button>

                        </div>
                    )}
                </div>

                    {/* links to download */}
                <div className={styles.downloadLinks}>
                    <p>Download our App for easy accessibility anytime, anywhere!</p>
                    <div className={styles.stores}>
                        <button><Image src={app} alt='app-store' width={108} height={32} /></button>
                        <button><Image src={play} alt='play-store' width={108} height={32} /></button>
                    </div>
                </div>
            </div>

            <Booking />
        </div>
    )
}