"use client" 
"use client";
import { faGofore, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "@/components/Navbar";
const Page = () => {
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center h-screen ">
      <div className="flex flex-col border border-gray-300 w-[300px] p-5 gap-4 bg-white shadow-lg rounded-lg">
        <div className="text-gray-900 text-left">
          <p className="text-lg font-bold font-serif">register</p>
          <p className="text-[12px] text-gray-600 font-mono">create your account</p>
        </div>

        <form className="flex flex-col gap-3">
          <label htmlFor="email" className="text-xs text-gray-700 font-mono">email</label>
          <input type="text"
          placeholder="name@example.com"
          className="border border-gray-600  rounded-md placeholder:text-gray-700 placeholder:text-[10px] pl-2" 
          />

          <label htmlFor="password" className="text-xs text-gray-700 font-mono">password</label>
          <input type="password" className="border border-gray-700 rounded-md" />

          <button className="mt-3 text-[11px]  border border-gray-200 text-gray-900  rounded hover:bg-gray-100 cursor-pointer pt-1 pb-1 font-mono ">register</button>
        <p className="text-gray-900 text-[11px] font-mono text-center">or</p>
        <button className=" text-[11px]  border border-gray-200 text-gray-900  rounded hover:bg-gray-100 cursor-pointer pt-1 pb-1 font-mono "><FontAwesomeIcon icon={faGoogle}/> register with google</button>
        <p className="text-gray-900 text-[11px] text-center leading-7 gap-4 font-mono">already have an account? <span className="underline cursor-pointer">login</span></p>
        </form>
      </div>
    </div>
    </>
  );
};

export default Page;
