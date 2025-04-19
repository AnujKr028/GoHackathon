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
    }
  };

  const filteredPosts = posts.filter((post) =>
    post.postContent.toLowerCase().includes(query.toLowerCase()) ||
    post.postText.toLowerCase().includes(query.toLowerCase()) ||
    post.username.toLowerCase().includes(query.toLowerCase())
  );

  // 👇 Show alert if user not logged in
  const handlePostButtonClick = () => {
    if (!user) {
      alert("You need to login to post!");
      return;
    }
    setNewPost(" ");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        <div className="flex flex-col items-start w-[420px]">
          <p className="text-gray-900 text-lg font-bold font-serif">feed and your Views</p>

          {/* ✅ Enhanced button with login alert */}
          <button
            onClick={handlePostButtonClick}
            className="text-[11px] border border-sky-400 text-sky-800 rounded px-3 py-1 font-mono cursor-pointer transition"
          >
            + new post
          </button>

          <div className="mb-6">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="🔭 search post"
              className="w-full max-w-md mt-4 text-[11px] border border-sky-400 rounded px-3 py-1 focus:outline-none focus:ring-1 focus:ring-sky-800 placeholder:text-sky-800 placeholder:pl-2 text-gray-900"
            />
          </div>

          {/* Post form - only visible if user is logged in and +new post is clicked */}
          {user && newPost !== "" && (
            <div className="mb-6 w-full max-w-md">
              <input
                type="text"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="What's the post content?"
                className="w-full text-[13px] text-gray-900 border border-sky-400 rounded px-4 py-2 mt-4 focus:outline-none focus:ring-1 focus:ring-sky-800 placeholder:text-sky-800"
              />
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="What's on your mind!"
                className="w-full mt-4 text-[13px] text-gray-900 border border-sky-400 bg-white px-4 py-2 rounded-md font-mono focus:outline-none focus:ring-1 focus:ring-sky-800 placeholder:text-sky-600"
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

        {/* Display filtered posts */}
        {filteredPosts.map((post) => (
          <div key={post.id} className="flex flex-col gap-4 border border-gray-200 w-[420px] p-4 bg-white shadow-xl rounded-xl mt-6">
            <div className="flex items-center gap-4">
              <img src={post.profileImage} alt="Profile" className="w-8 h-8 rounded-full border" />
              <div className="flex flex-col">
                <p className="text-gray-800 font-mono">{post.username}</p>
                <p className="text-sm text-gray-500 font-mono text-[10px]">{post.time}</p>
              </div>
              <button className="ml-auto text-gray-500 text-xs font-mono border border-gray-500 px-2 py-1 rounded-md hover:bg-gray-100 transition cursor-pointer">
                Follow +
              </button>
            </div>

            <div className="mt-2">
              <p className="text-sm font-mono text-gray-900 font-semibold">{post.postContent}</p>
              <p className="text-gray-700 mt-2 text-xs font-mono">{post.postText}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
