import Image from "next/image";
import Rent from "./Components/RentOrLease/Rent";
import Location from "./Components/Location/Locations";

export default function Home() {
  return (
    <div>
      <div className="main">
        <Rent />
        <Location />
      </div>
    </div>
  );
}
