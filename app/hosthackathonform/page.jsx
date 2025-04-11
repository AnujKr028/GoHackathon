"use client";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Center the form */}
      <div className="flex flex-1 items-center justify-center mt-10 mb-10">
        <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md flex flex-col font-mono">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-8">
            student/organisation details
          </h2>
          <form action="" className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-black text-xs mb-2">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-transparent placeholder:text-gray-700 placeholder:text-[10px]"
              />
            </div>

            {/* Email */}
            <label htmlFor="email" className="text-black text-xs mb-2">Email</label>
            <input
              type="text"
              id="email"
              className="border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-transparent placeholder:text-gray-700 placeholder:text-[11px]"
            />

            {/* Organisation */}
            <label htmlFor="organisation" className="text-black text-xs mb-2">Organisation</label>
            <input
              type="text"
              id="organisation"
              className="border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-transparent placeholder:text-gray-700 placeholder:text-[11px]"
            />

            {/* Message */}
            <label htmlFor="message" className="text-black text-xs mb-2">Message</label>
            <input
              type="text"
              id="message"
              className="border border-gray-300 rounded-lg px-3 py-4 focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-transparent placeholder:text-gray-700 placeholder:text-[11px]"
            />

            <button
              type="submit"
              className="bg-white border border-gray-600 text-black py-2 rounded-lg hover:bg-gray-200 transition font-mono cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
