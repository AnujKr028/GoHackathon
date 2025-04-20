"use client"

import React, { useState } from 'react'

const HackathonPage = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    team: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-team-emailform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setShowNotification(true);
        setFormData({ name: '', role: '', email: '', team: '' });

        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
      } else {
        console.error('Failed to register:', result.error);
        alert("Something went wrong! Please try again.");
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="font-mono w-full max-w-6xl mx-auto p-4 sm:p-6 bg-white text-black text-sm md:text-base lg:text-lg">
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg z-50 transition-all text-sm md:text-base">
          Success! Your team registration has been submitted.
        </div>
      )}

      <div className="mb-6 md:mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-gray-800 font-serif">Screen Pipe Computer</h1>
        <p className="text-xs sm:text-sm lg:text-base font-mono">Pushing the boundaries of innovation</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
        <div className="lg:col-span-2">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-mono mb-4 border-b pb-2 text-sky-800">about the hackathon</h2>
          <p className="mb-4 text-[11px] sm:text-sm lg:text-base">Screen Pipe is the premier hackathon for developers, designers, and innovators. Join us for 48 hours of 
             coding, collaboration, and creativity as you build solutions to real-world problems. This year's focus is on 
            sustainable technology and AI solutions that can help address climate challenges.</p>
          <p className="mb-4 text-[11px] sm:text-sm lg:text-base">Whether you're a seasoned developer or just starting your tech journey, TechInnovate welcomes participants 
            of all experience levels. Form teams of up to 4 members and compete for exciting prizes while networking 
            with industry professionals</p>
          <p className="mb-4 text-[11px] sm:text-sm lg:text-base">All projects will be judged based on innovation, technical complexity, user experience, and potential impact.
                    The top three teams will present their projects to our panel of industry experts during the closing ceremony.</p>
        </div>

        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg h-full">
          <h2 className="text-base sm:text-lg lg:text-xl mb-4 border-b pb-2 text-sky-800">event details</h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              ["Start Date", "June 15, 2025 - 10:00 AM"],
              ["End Date", "June 17, 2025 - 4:00 PM"],
              ["Location", "Tech Innovation Hub"],
              ["Participants", "Limited to 200 participants"],
              ["Prize Pool", "$25,000 in cash and prizes"],
            ].map(([title, desc]) => (
              <div key={title}>
                <p className="text-[12px] sm:text-sm lg:text-base text-sky-800">{title}:</p>
                <p className="text-[11px] sm:text-sm lg:text-base font-semibold text-gray-800">{desc}</p>
              </div>
            ))}
            <div>
              <p className="text-[12px] sm:text-sm lg:text-base text-sky-800">positions opened</p>
              <ul className="pl-4">
                <li className='text-[11px] sm:text-sm lg:text-base font-semibold text-gray-800'>Team prakriti: need 1 frontend dev</li>
                <li className='text-[11px] sm:text-sm lg:text-base font-semibold text-gray-800'>Team operak: need 1 backend dev, 1 ml dev</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Team Formation Section */}
      <div className="bg-white p-4 sm:p-8 lg:p-10 rounded-2xl mb-12 shadow-xl border border-gray-200 w-full mx-auto font-mono">
        <h2 className="text-base sm:text-lg lg:text-xl mb-6 text-center text-gray-800">make your team</h2>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 max-w-md mx-auto">
          {[
            { label: "participant name", name: "name", type: "text", placeholder: "enter your full name" },
            { label: "team", name: "team", type: "text", placeholder: "enter the team you want to join" },
            { label: "email address", name: "email", type: "email", placeholder: "enter your email" }
          ].map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label htmlFor={name} className="block mb-1 text-xs sm:text-sm lg:text-base text-gray-900">{label}</label>
              <input
                id={name}
                name={name}
                type={type}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                required
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 transition placeholder:text-xs sm:placeholder:text-sm lg:placeholder:text-base"
              />
            </div>
          ))}
          <div>
            <label htmlFor="role" className="block mb-1 text-xs sm:text-sm lg:text-base text-gray-900">your role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 transition text-xs sm:text-sm lg:text-base text-gray-900"
            >
              <option value="">select your role</option>
              <option value="frontend">frontend developer</option>
              <option value="backend">backend developer</option>
              <option value="fullstack">full stack developer</option>
              <option value="machinelearning">machine learning dev</option>
              <option value="designer">ui/ux designer</option>
              <option value="pm">project manager</option>
              <option value="other">other</option>
            </select>
          </div>
          <div className="text-center pt-2">
            <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow text-sm sm:text-base lg:text-lg">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="mb-12 mt-16 sm:mt-20">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-mono text-center mb-6 font-normal text-sky-800 tracking-wide">Important Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {[
            {
              title: "Schedule",
              items: ["Day 1: Registration, Team Formation, Kickoff", "Day 2: Full-day Coding, Workshops", "Day 3: Final Submissions, Judging, Awards"]
            },
            {
              title: "What to Bring",
              items: ["Laptop and charger", "Student/Professional ID", "Water bottle", "Any required peripherals"]
            }
          ].map(({ title, items }) => (
            <div key={title} className="bg-gray-50 p-4 sm:p-6 rounded-lg h-full">
              <h3 className="text-base sm:text-lg lg:text-xl font-mono text-center mb-4 font-normal text-sky-800 lowercase tracking-wide">{title}</h3>
              <ul className="space-y-2 text-gray-900 font-mono text-xs sm:text-sm lg:text-base">
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12 sm:mt-16 text-xs sm:text-sm lg:text-base">
        <p>For questions, contact: anujkr028@gmail.com</p>
      </div>
    </div>
  )
}

export default HackathonPage;
