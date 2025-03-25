import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSearch } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <div> 
        <div className="text-center mt-10 pt-5">
          <h1 className="text-3xl text-gray-900 font-mono">hackathons</h1>
          <p className="text-md font-serif text-gray-800 mt-2">
            become an innovator and a builder, build something.
          </p>
        </div>

        <div className="flex justify-center mt-10">
  <div className="relative w-full max-w-xl">
    {/* Search Icon Inside Input */}
    <FontAwesomeIcon
      icon={faSearch}
      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 text-gray-900"
    />
    <input
      type="text"
      placeholder="Search hackathons..."
      className="w-full text-sm text-black rounded px-8 py-2 shadow-md 
                 focus:outline-none focus:ring-1 focus:ring-gray-300 
                 placeholder:font-mono placeholder:text-xs placeholder:text-gray-900 "
    />
  </div> 

   
</div>

<div className="flex justify-center mt-5">
  <select 
    name="filter" 
    id="filter" 
    className="text-gray-900 rounded px-4 py-1 shadow-md text-xs cursor-pointer
               focus:outline-none focus:ring-1 focus:ring-gray-300 mr-2
               hover:border hover:border-blue-500 font-mono"> 
    <option value="newest first">newest first</option>
    <option value="oldest first">oldest first</option>
    <option value="a to z">a to z</option>
    <option value="z to a">z to a</option>
  </select>
  
  <select 
    name="filter" 
    id="filter"  
    className="text-gray-900 rounded px-4 py-1 shadow-md text-xs cursor-pointer
               focus:outline-none focus:ring-1 focus:ring-gray-300 ml-2
               hover:border hover:border-blue-500"> 
    <option value="active hackathons">active hackathons</option>
    <option value="closed hackathons">closed hackathons</option>
    <option value="enrolled hackathons">enrolled hackathons</option>
    <option value="all hackathons">all hackathons</option>
  </select>
</div>


      </div>
    </>
  );
}
