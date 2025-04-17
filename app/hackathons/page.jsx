"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faTrophy, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

const Hackathons = () => {
  const [query, setQuery] = useState("");

  // Hackathons data
  const hackathons = [
    { name: "nights", desc: "Nights Season 1 is an exciting event where people from all fields come together to work on their ideas and create amazing projects...", img: "/a.png" },
    { name: "gpt wrapper hackathon", desc: "The gpt wrapper hackathon is a global online competition where participants build innovative AI applications...", img: "/b.png" },
    { name: "nexathon", desc: "Enter the metagame of hackathons...", img: "/c.png" },
    { name: "screenpipe computer use hackathon", desc: "A hackathon focused on innovative screen sharing solutions...", img: "/d.png" },
  ];

  // Filter the hackathons based on query
  const filteredItems = hackathons.filter(hackathon =>
    hackathon.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div>
        <div className="text-center mt-10 pt-5">
          <h1 className="text-3xl text-gray-900 font-mono">Hackathons</h1>
          <p className="text-md font-serif text-gray-800 mt-2">
            Become an innovator and a builder, build something.
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
                         placeholder:font-mono placeholder:text-xs placeholder:text-gray-900"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center mt-20">
          <div className="flex flex-col gap-5 p-9 items-center justify-center">
            {/* Display filtered hackathons */}
            {filteredItems.length > 0 ? (
              filteredItems.map((hackathon, index) => (
                <a
                  key={index}
                  href={`/hackathon-pages/${hackathon.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex border border-gray-300 rounded-lg p-5 w-[700px] gap-4 items-center hover:bg-gray-100 cursor-pointer"
                >
                  <img src={hackathon.img} alt="Hackathon" className="w-30 h-30 rounded-lg" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 font-mono pb-3">{hackathon.name}</p>
                    <p className="text-[11px] text-gray-600 leading-4 font-mono">
                      {hackathon.desc}
                    </p>
                    <p className="text-[11px] text-gray-700 mt-5 text-mono">
                      <FontAwesomeIcon icon={faCalendar} className="text-[11px] pr-2" /> 2/4/2025 - 5/4/2025
                    </p>
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] text-sky-700 pt-2 pb-2">
                      <FontAwesomeIcon icon={faTrophy} className='pr-2' /> $500
                    </p>
                    <p className="text-[11px] text-gray-700 pt-2 pb-2">
                      <FontAwesomeIcon icon={faDiagramProject} className='pr-2' /> 1 Project
                    </p>
                    <p className="text-[11px] text-gray-700 pt-2 pb-2">
                      <FontAwesomeIcon icon={faUsers} className='pr-2' /> 35 Participants
                    </p>
                  </div>
                </a>
              ))
            ) : (
              <p className="text-gray-500 text-center">No hackathons found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hackathons;
