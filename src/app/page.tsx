import Rent from "./Components/RentOrLease/Rent";
import Location from "./Components/Location/Locations";
import Faq from "./Components/Faq/faq";
import PopularCars from "./Components/Popular Cars/PopularCar";
import Subscription from "./Components/Subscription/Subscription";
import Banner from "./Components/Banner/Banner";
import Search from "./Components/Search/Search";
import phoneicon from '../../public/Images/phone-icon.svg'
import sideicon from '../../public/Images/side-icon.svg'
import bg from '../../public/Images/white.svg'
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="page">
        <div className="icons">
          <button>
            <Image src={phoneicon} alt='phone' width={48} height={45} />
          </button>
          <button>
            <div className="sideIcon">
            <Image id="white" src={bg} alt='phone' width={48} height={45} />
            <Image id="icon" src={sideicon} alt='phone' width={30} height={35} />
            </div>
            
          </button>
        </div>
        <Search />
        <Banner />
      </div>
      <PopularCars />
      <div className="main">
        <Subscription />
        <Rent />
        <Location />
        <Faq />
      </div>
    </div>
  );
}
