import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";
import Hackathons from "@/components/Hacktahons";
import WhysUs from "@/components/WhysUs";
import { Carousel } from "@/components/ui/carousel"; 
import Footer from "@/components/Footer"; 
import { Boxes } from "@/components/ui/background"; 
import Link from "next/link";



export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className="md:text-5xl text-xl text-gray-100 font-mono relative z-20">
      welcome to Go Hackathon
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20 font-mono">
      equipping top builders and innovators with the best tools
      </p>
    </div>
  );
}

export default function Home() {
  //  Define slides inside the component
  const slides = [
    {
      photo: "/user1.jpg",
      name: "ken williamz",
      college: "University of texas",
      review: "this platform helped me a lot in preparing for hackathons!"
    },
    {
      photo: "/user2.jpg",
      name: "wornor gely",
      college: "Boston University",
      review: "got to know about this platform from my friend and it's amazing!"
    },
    {
      photo: "/user3.jpg",
      name: "jame norton",
      college: "Princeton University",
      review: "people usually don't know about this platform but it's really helpful!"
    },
    {
      photo: "/user4.jpg",
      name: "lisa yu",
      college: "Stanford University",
      review: "this platform is really helpful for beginners!"
    },
  ];

  return (
    <>
      <Navbar />
      
        {/*  background section */}
        <div className="pt-5 pb-5">

        <BackgroundBoxesDemo />
        </div>
       

      <div className="text-3xl font-mono text-gray-900 text-center mt-10 mb-2">
        Upcoming Hackathons
      </div>

      <Hackathons />
      
      <div className="text-sky-800 text-center text-xl font-mono ">
      <Link  href="/hackathons"> see all<FontAwesomeIcon icon={faArrowRight} className="text-sm pl-5 hover:underline hover:underline-offset-1"/></Link>
       
      </div>
      
      <WhysUs />

      <div className="text-gray-900 text-center text-2xl mt-10 mb-5 font-mono gap-4">
        What Our Users Say
      </div>

      <div className="flex justify-center items-center overflow-hidden">
        <Carousel slides={slides} /> 
      </div>

    

      <Footer />
    </>
  );
}
