"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';


const Hackathons = () => {
  return (
    <div className="flex flex-col gap-5 p-9 items-center justify-center">
      {/* Card */}
      <div className="flex border border-gray-300 rounded-lg p-5  w-[700px] gap-4 items-center hover:bg-gray-100 cursor-pointer">
        {/* Left - Image */}
        <img src="/a.png" alt="Hackathon" className="w-30 h-30  rounded-lg" />

        {/* Middle - Details */}
        <div className="flex-1">
          <p className="text-sm text-gray-900 font-mono pb-3">nights</p>
          <p className="text-[11px] text-gray-600 leading-4 font-mono">
            Nights Season 1 is an exciting event where people from all fields come together to work on their ideas and create amazing projects...
          </p>
          <p className="text-[11px] text-gray-700 mt-5 text-mono"><FontAwesomeIcon icon={faCalendar} className="text-[11px] pr-2" /> 2/4/2025 - 5/4/2025</p>
        </div>

        {/* Right - Prizes & Stats */}
        <div className="text-left">
        <p className="text-[11px] text-sky-700  pt-2 pb-2"><FontAwesomeIcon icon={faTrophy} className='pr-2'/> $500</p>
          <p className="text-[11px] text-gray-700  pt-2 pb-2"><FontAwesomeIcon icon={faDiagramProject} className='pr-2'/>1 Project</p>
          <p className="text-[11px] text-gray-700  pt-2 pb-2"><FontAwesomeIcon icon={faUsers} className='pr-2' />35 Participants</p>
        </div>
      </div>



      {/*  Card 2 */}
      <div className="flex border border-gray-300 rounded-lg p-5 w-[700px] gap-4 items-center hover:bg-gray-100 cursor-pointer">
        <img src="/b.png" alt="Hackathon" className="w-30 h-30  rounded-lg" />
        <div className="flex-1">
          <p className="text-sm  text-gray-900 font-mono pb-3 ">gpt wrapper hackathon</p>
          <p className="text-[11px] text-gray-600 leading-4 font-mono">
          the gpt wrapper hackathon is a global online competition where participants build innovative ai applications...
          </p>
          <p className="text-[11px] text-gray-700 mt-5 text-mono"><FontAwesomeIcon icon={faCalendar} className="text-[11px] pr-2" /> 2/4/2025 - 5/4/2025</p>
        </div>
        <div className="text-left">
          <p className="text-[11px] text-sky-700  pt-2 pb-2"><FontAwesomeIcon icon={faTrophy} className='pr-2'/> $500</p>
          <p className="text-[11px] text-gray-700  pt-2 pb-2"><FontAwesomeIcon icon={faDiagramProject} className='pr-2'/>1 Project</p>
          <p className="text-[11px] text-gray-700  pt-2 pb-2"><FontAwesomeIcon icon={faUsers} className='pr-2' />35 Participants</p>
        </div>
      </div>



        {/*  Card 3 */}
        <div className="flex border border-gray-300 rounded-lg p-5  w-[700px] gap-4 items-center hover:bg-gray-100 cursor-pointer">
        <img src="/c.png" alt="Hackathon" className="w-30 h-30  rounded-lg" />
        <div className="flex-1">
          <p className="text-sm  text-gray-900 font-mono pb-3 ">nexathon</p>
          <p className="text-[11px] text-gray-600 leading-4 font-mono">
          enter the metagame of hackathons...
          </p>
          <p className="text-[11px] text-gray-700 mt-5 text-mono"><FontAwesomeIcon icon={faCalendar} className="text-[11px] pr-2" /> 2/4/2025 - 5/4/2025</p>
        </div>
        <div className="text-left">
          <p className="text-[11px] text-sky-700  pt-2 pb-2"><FontAwesomeIcon icon={faTrophy} className='pr-2'/> $500</p>
          <p className="text-[11px] text-gray-700  pt-2 pb-2"><FontAwesomeIcon icon={faDiagramProject} className='pr-2'/>1 Project</p>
          <p className="text-[11px] text-gray-700  pt-2 pb-2"><FontAwesomeIcon icon={faUsers} className='pr-2' />35 Participants</p>
        </div>
      </div>
    </div>
  );
};

export default Hackathons;
