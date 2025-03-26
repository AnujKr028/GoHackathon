import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSearch } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";
import Hackathons from "@/components/Hacktahons";
import WhysUs from "@/components/WhysUs";


export default function Home() {
  return (
    <>
      <Navbar />
      
      <div className="text-3xl font-mono text-gray-900 text-center mt-6  mb-2">upcoming hackathons</div>
      <Hackathons/> 
      <WhysUs/>
    </>
  );
}
