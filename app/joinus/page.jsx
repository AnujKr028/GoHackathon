"use client";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "@/components/Navbar";
import { auth, provider } from "@/firbase-config";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/AuthContext";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const router = useRouter() ; 
  const {user} = useAuth() ;  

  useEffect(() => { 
    if(user) { 
      router.push("/");
    }
  }, [user]) ; 


  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("user registered:", userCredential.user);
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google user:", result.user);
    } catch (error) {
      console.error("Google Sign-in error:", error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen ">
        <div className="flex flex-col border border-gray-300 w-[300px] p-5 gap-4 bg-white shadow-lg rounded-lg">
          <div className="text-gray-900 text-left">
            <p className="text-lg font-bold font-serif">register</p>
            <p className="text-[12px] text-gray-600 font-mono">create your account</p>
          </div>

          <form className="flex flex-col gap-3" onSubmit={handleRegister}>
            <label htmlFor="email" className="text-xs text-gray-700 font-mono">
              email
            </label>
            <input
              type="text"
              placeholder="name@example.com"
              className="text-gray-700 border border-gray-600 rounded-md placeholder:text-gray-700 placeholder:text-[11px] pl-2"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className="text-xs text-gray-700 font-mono">
              password
            </label>
            <input
              type="password"
              placeholder="password"
              className="text-gray-700 border border-gray-600 rounded-md placeholder:text-gray-700 placeholder:text-[11px] pl-2"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="mt-3 text-[11px] border border-gray-200 text-gray-900 rounded hover:bg-gray-100 cursor-pointer pt-1 pb-1 font-mono"
            >
              register
            </button>

            <p className="text-gray-900 text-[11px] font-mono text-center">or</p>

            <button
              type="button"
              onClick={handleGoogleRegister}
              className="text-[11px] border border-gray-200 text-gray-900 rounded hover:bg-gray-100 cursor-pointer pt-1 pb-1 font-mono"
            >
              <FontAwesomeIcon icon={faGoogle} /> register with google
            </button>

            <p className="text-gray-900 text-[11px] text-center leading-7 gap-4 font-mono">
              already have an account? <span className="underline cursor-pointer">login</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
