"use client";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        {/* Left-Aligned Heading & Button */}
        <div className="flex flex-col items-start w-[420px]">
          <p className="text-gray-900 text-lg font-bold font-serif">feed and your Views</p>
          <button className="text-[11px] border border-sky-400 text-sky-800 rounded px-3 py-1 font-mono  cursor-pointer transition">
           + new post
          </button>
        </div>

        {/* Post 1 */}
        <div className="flex flex-col gap-4 border border-gray-200 w-[420px] p-4 bg-white shadow-xl rounded-xl mt-6">
          {/* Profile Section */}
          <div className="flex items-center gap-4">
            <img src="/b.png" alt="Profile" className="w-8 h-8 rounded-full border" />
            <div className="flex flex-col">
              <p className="text-gray-800 font-mono">azer</p>
              <p className="text-sm text-gray-500 font-mono text-[10px]">Mar 24, 2025 - 5:35 PM</p>
            </div>
            <button className="ml-auto text-gray-500 text-xs font-mono border border-gray-500 px-2 py-1 rounded-md hover:bg-gray-100 transition cursor-pointer">
              Follow +
            </button>
          </div>

          {/* Post Content */}
          <div className="mt-2">
            <p className="text-sm font-mono text-gray-900 font-semibold">I'm reviewing the title of this hackathon</p>
            <p className="text-gray-700 mt-2 text-xs font-mono">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellat fuga labore, nam eaque dolores.
            </p>
          </div>
        </div>

        {/* Post 2 */}
        <div className="flex flex-col gap-4 border border-gray-200 w-[420px] p-4 bg-white shadow-xl rounded-xl mt-6">
          {/* Profile Section */}
          <div className="flex items-center gap-4">
            <img src="/b.png" alt="Profile" className="w-8 h-8 rounded-full border" />
            <div className="flex flex-col">
              <p className="text-gray-800 font-mono">ken</p>
              <p className="text-sm text-gray-500 font-mono text-[10px]">Mar 24, 2025 - 5:35 PM</p>
            </div>
            <button className="ml-auto text-gray-500 text-xs font-mono border border-gray-500 px-2 py-1 rounded-md hover:bg-gray-100 transition cursor-pointer">
              Follow +
            </button>
          </div>

          {/* Post Content */}
          <div className="mt-2">
            <p className="text-sm font-mono text-gray-900 font-semibold">detoxify_yt</p>
            <p className="text-gray-700 mt-2 text-xs font-mono">
              Check out this amazing project I built called Detoxify! It’s a Chrome extension that transforms your YouTube experience by using Google’s Gemini AI...
            </p>
          </div>
        </div>

                {/* Post 3 */}
                <div className="flex flex-col gap-4 border border-gray-200 w-[420px] p-4 bg-white shadow-xl rounded-xl mt-6">
          {/* Profile Section */}
          <div className="flex items-center gap-4">
            <img src="/b.png" alt="Profile" className="w-8 h-8 rounded-full border" />
            <div className="flex flex-col">
              <p className="text-gray-800 font-mono">sam_dev</p>
              <p className="text-sm text-gray-500 font-mono text-[10px]">Mar 25, 2025 - 10:15 AM</p>
            </div>
            <button className="ml-auto text-gray-500 text-xs font-mono border border-gray-500 px-2 py-1 rounded-md hover:bg-gray-100 transition cursor-pointer">
              Follow +
            </button>
          </div>

          {/* Post Content */}
          <div className="mt-2">
            <p className="text-sm font-mono text-gray-900 font-semibold">Just launched my new portfolio! 🚀</p>
            <p className="text-gray-700 mt-2 text-xs font-mono">
              Super excited to share my latest project! Built using Next.js, Tailwind CSS, and deployed on Vercel. Would love to hear your feedback! 🔥
            </p>
          </div>
        </div>
    
      </div>
    </>
  );
};

export default Page;
