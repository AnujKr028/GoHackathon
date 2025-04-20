"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { useAuth } from "@/AuthContext";

const Page = () => {
  const [newUser, setNewUser] = useState("");

  const getUserNameFromEmail = (email) => {
    if (!email) return null;
    return email.split("@")[0];
  };

  const { user } = useAuth();

  useEffect(() => {
    if (user?.email) {
      const name = getUserNameFromEmail(user.email);
      setNewUser(name);
    }
  }, [user]);

  const [query, setQuery] = useState("");
  const [newPost, setNewPost] = useState("");
  const [postContent, setPostContent] = useState("");
  const [showPostForm, setShowPostForm] = useState(false);

  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "azer",
      time: "Mar 24, 2025 - 5:35 PM",
      profileImage: "/b.png",
      postContent: "I'm reviewing the title of this hackathon",
      postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellat fuga labore, nam eaque dolores.",
    },
    {
      id: 2,
      username: "ken",
      time: "Mar 24, 2025 - 5:35 PM",
      profileImage: "/b.png",
      postContent: "detoxify_yt",
      postText: "Check out this amazing project I built called Detoxify! It's a Chrome extension that transforms your YouTube experience by using Google's Gemini AI...",
    },
    {
      id: 3,
      username: "sam_dev",
      time: "Mar 25, 2025 - 10:15 AM",
      profileImage: "/b.png",
      postContent: "Just launched my new portfolio! 🚀",
      postText: "Super excited to share my latest project! Built using Next.js, Tailwind CSS, and deployed on Vercel. Would love to hear your feedback! 🔥",
    },
    {
      id: 4,
      username: "mira_ui",
      time: "Apr 01, 2025 - 4:20 PM",
      profileImage: "/b.png",
      postContent: "Redesigning my dashboard 💻",
      postText: "Tried glassmorphism and neumorphism mix on my latest UI work. Thoughts?",
    },
    {
      id: 5,
      username: "codey",
      time: "Apr 02, 2025 - 11:00 AM",
      profileImage: "/b.png",
      postContent: "TypeScript > JavaScript?",
      postText: "Switched to TypeScript fully. My code feels safer and more structured now.",
    },
    {
      id: 6,
      username: "zoya_data",
      time: "Apr 03, 2025 - 9:47 AM",
      profileImage: "/b.png",
      postContent: "My ML model predicted accurately!",
      postText: "Trained a model to predict startup success. Got 90% accuracy on test data! 📊",
    },
    {
      id: 7,
      username: "adi_dev",
      time: "Apr 04, 2025 - 7:32 PM",
      profileImage: "/b.png",
      postContent: "Quick VS Code tip 💡",
      postText: "Press `Cmd + P` to quickly open any file. Game changer!",
    }
  ]);

  const handleNewPost = () => {
    if (newPost.trim() !== "" && postContent.trim() !== "") {
      const newPostData = {
        id: posts.length + 1,
        username: newUser,
        time: new Date().toLocaleString('en-US', {
          year: "numeric",
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }),
        profileImage: "/b.png",
        postContent: postContent,
        postText: newPost,
      };
      setPosts([newPostData, ...posts]);
      setPostContent("");
      setNewPost("");
      setShowPostForm(false);
    }
  };

  const filteredPosts = posts.filter((post) =>
    post.postContent.toLowerCase().includes(query.toLowerCase()) ||
    post.postText.toLowerCase().includes(query.toLowerCase()) ||
    post.username.toLowerCase().includes(query.toLowerCase())
  );

  const handlePostButtonClick = () => {
    if (!user) {
      alert("You need to login to post!");
      return;
    }
    setShowPostForm(true);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 text-black flex flex-col items-center justify-center min-h-screen p-4 sm:p-6">
        <div className="flex flex-col items-start w-full max-w-md sm:w-[420px]">
          <p className="text-base sm:text-lg font-bold font-serif">feed and your Views</p>

          <button
            onClick={handlePostButtonClick}
            className="text-[11px] border border-sky-400 text-sky-800 rounded px-3 py-1 font-mono cursor-pointer transition mt-2"
          >
            + new post
          </button>

          <div className="mb-6 w-full">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="🔭 search post"
              className="w-full mt-4 text-[11px] border border-sky-400 rounded px-3 py-1 focus:outline-none focus:ring-1 focus:ring-sky-800 placeholder:text-sky-800 placeholder:pl-2 text-gray-900"
            />
          </div>

          {user && showPostForm && (
            <div className="mb-6 w-full">
              <input
                type="text"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="what is on you mind ?"
                className="w-full text-[13px] text-gray-900 border border-sky-400 rounded px-4 py-2 mt-4 focus:outline-none focus:ring-1 focus:ring-sky-800 placeholder:text-[13px] placeholder:text-sky-800 placeholder:font-mono"
              />
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="w-full text-[13px] text-gray-900 border border-sky-400 rounded px-4 py-2 mt-4 focus:outline-none focus:ring-1 focus:ring-sky-800"
              />
              <button
                onClick={handleNewPost}
                className="mt-4 text-white bg-sky-800 px-4 py-2 rounded-md font-mono"
              >
                Post
              </button>
            </div>
          )}
        </div>

        {filteredPosts.map((post) => (
          <div key={post.id} className="flex flex-col gap-4 border border-gray-200 bg-white text-black w-full max-w-md sm:w-[420px] p-4 shadow-xl rounded-xl mt-6">
            <div className="flex items-center gap-4">
              <img src={post.profileImage} alt="Profile" className="w-8 h-8 rounded-full border" />
              <div className="flex flex-col">
                <p className="font-mono">{post.username}</p>
                <p className="text-sm text-gray-500 font-mono text-[10px]">{post.time}</p>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm font-mono font-semibold">{post.postContent}</p>
              <p className="mt-2 text-xs font-mono">{post.postText}</p>
            </div>
          </div>
        ))}

        {/* Footer */}
        <footer className="mt-12 w-full flex justify-center">
          <div className="w-full max-w-md sm:w-[420px] text-center text-[11px] text-gray-800 font-mono py-3 px-4 border-t border-gray-200 backdrop-blur-md bg-white/60 shadow-md rounded-b-xl">
            created with ❤️ by <span className="font-bold text-sky-800">anuj</span> — where dev meets vibes ✨
          </div>
        </footer>
      </div>
    </>
  );
};

export default Page;
