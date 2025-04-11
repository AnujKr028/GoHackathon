"use client"
import Link from "next/link"
import { useState } from "react"

const Page = () => {
  const [query, setQuery] = useState("")

  // Hackathon winners data
  const winners = [
    {
      name: "NASA Space Apps Challenge 2024",
      team: "Global Winners",
      problem: "Addressing various challenges related to Earth and space sciences, including climate change, space exploration, and planetary science.",
      solution: "Developed innovative solutions leveraging NASA's open data to tackle pressing issues in Earth and space sciences.",
      tags: ["Space", "Earth Science", "NASA Data"],
      status: "Global Winner",
      link: "https://www.spaceappschallenge.org/nasa-space-apps-2024/awards/global-winners/"
    },
    {
      name: "SAS Hackathon 2024",
      team: "StaSASticians",
      problem: "Construction workers face high risks of heat stroke, especially in regions with extreme temperatures, and existing safety measures lack real-time monitoring.",
      solution: "Developed an AI-enabled Heat Stroke Prevention System using SAS Viya, Python, and IoT-equipped smart helmets. The system analyzes real-time weather data and sensor information, providing immediate warnings to protect high-risk workers.",
      tags: ["AI", "IoT", "SAS Viya"],
      status: "Winner",
      link:"https://communities.sas.com/t5/SAS-Hacker-s-Hub/AI-Enabled-Heat-Stroke-Prevention-System-for-Construction/ta-p/941623",
    },
    {
      name: "Smart India Hackathon 2024",
      team: "Code Crusher",
      problem: "Traditional methods of monitoring and managing power consumption in educational institutions are inefficient and lack real-time data analysis.",
      solution: "Developed a system to monitor and analyze power consumption in real-time, providing actionable insights to reduce energy usage and costs.",
      tags: ["Data Analytics", "IoT", "Real Time Monitoring"],
      status: "Winner",
      link:"https://sih.gov.in/sih2024/screeningresult?utm_source",
    },
    {
      name: "Codegeist 2024",
      team: "Glance",
      problem: "Users struggle to keep track of multiple notifications and updates across various platforms, leading to decreased productivity.",
      solution: "Created a centralized notification system that aggregates updates from different platforms, allowing users to manage and respond to notifications efficiently.",
      tags: ["Atlassian Forge", "JavaScript", "API Integrations"],
      status: "Winner",
      link:"https://www.atlassian.com/blog/developer/codegeist-2024-winners",
    },

    {
      "name": "DigiEduHack 2024",
      "team": "Team Tec Guadalajara",
      "problem": "Educators face challenges in creating personalized and engaging learning materials for diverse student needs.",
      "solution": "Developed EduMind, an AI-powered platform that assists educators in crafting interactive, personalized materials to enhance student engagement and learning outcomes.",
      "tags": ["AI", "Education", "Personalized Learning"],
      "status": "Global Winner",
      "link": "https://education.ec.europa.eu/news/meet-the-global-winners-of-digieduhack-2024"
    }
    
  ]

  // Filter the search
  const filteredItems = winners.filter((winner) =>
    winner.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl text-gray-800 mb-8 font-medium">Hackathon Hall of Fame 🏆</h1>

        {/* Search Input */}
        
        <div className="mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search hackathons by name..."
            className="w-full max-w-md p-2 text-[11px] border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 placeholder:text-gray-900 placeholder:pl-2 text-gray-900 "
          />
        </div>

        <div className="flex flex-col gap-4 w-full">
          {/* Dynamically Render Hackathon Cards */}
          {filteredItems.map((winner, index) => (
            <div
              key={index}
              className="w-full p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-full">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-black font-mono">{winner.name}</h3>
                  <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-full">
                    {winner.status}
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-3">
                  <div className="group">
                    <p className="text-black text-[11px] font-medium uppercase tracking-wider font-mono">
                      Team
                    </p>
                    <p className="text-black text-[11px] mt-1 group-hover:text-sky-700 transition-colors font-mono">
                      {winner.team}
                    </p>
                  </div>

                  <div className="group">
                    <p className="text-black text-[11px] font-medium uppercase tracking-wider font-mono">
                      Problem
                    </p>
                    <p className="text-black text-[11px] mt-1 group-hover:text-gray-700 transition-colors font-mono">
                      {winner.problem}
                    </p>
                  </div>

                  <div className="group">
                    <p className="text-black text-[11px] font-medium uppercase tracking-wider font-mono">
                      Solution
                    </p>
                    <p className="text-black text-[11px] mt-1 group-hover:text-gray-700 transition-colors font-mono">
                      {winner.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <div className="flex gap-1.5">
                    {winner.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[10px] bg-gray-100 text-black px-1.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={winner.link}
                    className="inline-flex items-center text-blue-600 text-[11px] font-medium hover:text-blue-800 transition-colors group"
                  >
                    View details
                    <svg
                      className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page