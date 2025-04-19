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
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          role: formData.role,
          team: formData.team,
        }),
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
    <div className="font-mono max-w-6xl mx-auto p-6 bg-white text-black">
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg z-50 transition-all">
          Success! Your team registration has been submitted.
        </div>
      )}

      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 font-serif">ScreenPipe Computer </h1>
        <p className="text-sm font-mono">Pushing the boundaries of innovation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="col-span-2">
          <h2 className="text-xl font-mono mb-4 border-b pb-2 text-sky-800">about the hackathon</h2>
          <p className="mb-4 text-[11px]">Nights 2025 is the premier hackathon for developers, designers, and innovators. Join us for 48 hours of 
            coding, collaboration, and creativity as you build solutions to real-world problems. This year's focus is on 
            sustainable technology and AI solutions that can help address climate challenges.</p>
          <p className="mb-4  text-[11px]">Whether you're a seasoned developer or just starting your tech journey, TechInnovate welcomes participants 
            of all experience levels. Form teams of up to 4 members and compete for exciting prizes while networking 
            with industry professionals.</p>
          <p className="mb-4  text-[11px]"> All projects will be judged based on innovation, technical complexity, user experience, and potential impact.
          The top three teams will present their projects to our panel of industry experts during the closing ceremony.</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-lg  mb-4 border-b pb-2 text-sky-800">event details</h2>
          <div className="space-y-4">
            <div><p className="text-[12px] text-sky-800">Start Date:</p><p className='text-[11px] font-semibold text-gray-800'>June 15, 2025 - 10:00 AM</p></div>
            <div><p className="text-[12px] text-sky-800">End Date:</p><p className='text-[11px] font-semibold text-gray-800'>June 17, 2025 - 4:00 PM</p></div>
            <div><p className="text-[12px] text-sky-800">Location:</p><p className='text-[11px] font-semibold text-gray-800'>Tech Innovation Hub</p></div>
            <div><p className="text-[12px] text-sky-800">Participants:</p><p className='text-[11px] font-semibold text-gray-800'>Limited to 200 participants</p></div>
            <div><p className="text-[12px] text-sky-800">Prize Pool:</p><p className='text-[11px] font-semibold text-gray-800'>$25,000 in cash and prizes</p></div>
            <div>
              <p className="text-[12px] text-sky-800">positions opened</p>
              <ul>
                <li className='text-[11px] font-semibold text-gray-800'>Team noloar: need 1 frontend dev</li>
                <li className='text-[11px] font-semibold text-gray-800'>Team isac: need 1 frontend dev, 1 ml dev</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Team Formation Section */}
      <div className="bg-white p-8 rounded-2xl mb-12 shadow-xl border border-gray-200 max-w-md mx-auto font-mono">
        <h2 className="text-lg mb-6 text-center text-gray-800">make your team</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm text-gray-900" htmlFor="name">participant name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 transition placeholder:text-[11px]" required placeholder='enter your full name' />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-900" htmlFor="role">your role</label>
            <select id="role" name="role" value={formData.role} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 transition text-xs text-gray-900" required>
              <option value="">select your role</option>
              <option value="frontend">frontend developer</option>
              <option value="backend">backend developer</option>
              <option value="fullstack">full stack developer</option>
              <option value="designer">ui/ux designer</option>
              <option value="pm">project manager</option>
              <option value="other">other</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-900" htmlFor="team">team</label>
            <input type="text" id="team" name="team" value={formData.team} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 transition placeholder:text-[11px]" required placeholder='enter the team you want to join' />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-900" htmlFor="email">email address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 transition placeholder:text-[11px]" required placeholder='enter your email' />
          </div>

          <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow">Submit</button>
          </div>
        </form>
      </div>

      <div className="mb-12 mt-20">
        <h2 className="text-2xl font-mono text-center mb-6 font-normal text-sky-800 tracking-wide">Important Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-mono text-center mb-4 font-normal text-sky-800 lowercase tracking-wide">Schedule</h3>
            <ul className="space-y-2 text-gray-900 font-mono text-[12px]">
              <li><span className="font-normal">Day 1:</span> Registration, Team Formation, Kickoff</li>
              <li><span className="font-normal">Day 2:</span> Full-day Coding, Workshops</li>
              <li><span className="font-normal">Day 3:</span> Final Submissions, Judging, Awards</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-mono text-center mb-4 font-normal text-sky-800 lowercase tracking-wide">What to Bring</h3>
            <ul className="space-y-2 text-gray-900 font-mono text-[12px]">
              <li>Laptop and charger</li>
              <li>Student/Professional ID</li>
              <li>Water bottle</li>
              <li>Any required peripherals</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-16">
        <p>For questions, contact: techinnovate2025@example.com</p>
      </div>
    </div>
  )
}

export default HackathonPage
