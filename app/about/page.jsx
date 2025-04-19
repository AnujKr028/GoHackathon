"use client"
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <> 
      <Navbar/>
      <div className="flex flex-col justify-center items-center p-5 bg-gray-50 min-h-screen">

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-sky-900 font-serif text-4xl md:text-5xl font-bold">Go Hackathon</h1>
          <p className="text-gray-600 mt-2 text-sm">The platform to host, participate, and innovate!</p>
        </div>

        {/* Card Section for Description */}
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <h2 className="text-2xl font-serif text-sky-900 mb-4">About Go Hackathon</h2>
          <p className="text-gray-800 font-mono text-[14px]">
            Go Hackathon is a versatile platform designed to simplify the process of hosting and participating in hackathons for colleges and institutions. Whether you're an organizer looking to post your upcoming events or a student eager to join a team, our site provides a streamlined experience. Colleges can use Go Hackathon to create, manage, and showcase their hackathons, while students can easily find teams based on availability and interests. 
            <br /><br />
            With the ability to view ongoing and upcoming hackathons, students can explore opportunities, form teams, and participate in events all in one place. Go Hackathon aims to connect students and foster collaboration, providing a central hub for tech enthusiasts to come together and innovate. Whether you're an organizer or participant, Go Hackathon is your go-to platform for all things hackathon-related.
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 w-full max-w-md text-center">
          <h3 className="text-2xl font-semibold text-sky-800 mb-4">Ready to Start?</h3>
          <p className="text-gray-600 text-lg mb-6">
            Whether you're organizing a hackathon or looking to participate, get started today and join the vibrant community of innovators!
          </p>
          <a href="hosthackathonform" className="bg-sky-800 text-white px-6 py-2 rounded-full text-lg font-mono transition-all hover:bg-sky-900 hover:scale-105 duration-300 ease-in-out">Host a Hackathon</a>
        </div>

      </div>
    </>
  );
}

export default Page;
