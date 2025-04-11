"use client" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faCode, faUsersGear } from '@fortawesome/free-solid-svg-icons';
const WhysUs = () => {
  return (
    <>
    <div className=''> 
        <div className="">
            <p className="text-gray-900 text-center text-2xl mt-10 mb-5 font-mono gap-4 ">Why GoHackathon?</p>
        </div> 
</div> 

<div className='flex flex-row p-5 gap-5 justify-center'>
  <div className='flex flex-col w-[300px] bg-white shadow-lg mb-5 text-left p-5 rounded-lg transition duration-300 hover:bg-gray-100'>
    <p className='text-sky-600 pt-1 pb-1 pl-2'><FontAwesomeIcon icon={faDiscord}/> </p> 
    <p className='text-gray-900 text-sm font-sans pl-2 pt-3 pb-1'>active community</p> 
    <p className='text-gray-600 text-[11px] font-mono pt-1 pl-2 pb-8'>join our community of builders and creators</p>
  </div>

  <div className='flex flex-col w-[300px] bg-white shadow-lg mb-5 text-left p-5 rounded-lg transition duration-300 hover:bg-gray-100'>
    <p className='text-sky-600 pt-1 pb-1 pl-2'><FontAwesomeIcon icon={faCode}/> </p> 
    <p className='text-gray-900 text-sm font-sans pl-2 pt-3 pb-1'>engaging hackathons</p> 
    <p className='text-gray-600 text-[11px] font-mono pt-1 pl-2 pb-8'>join our hackathons for an engaging building experience</p>
  </div>

  <div className='flex flex-col w-[300px] bg-white shadow-lg mb-5 text-left p-5 rounded-lg transition duration-300 hover:bg-gray-100'>
    <p className='text-sky-600 pt-1 pb-1 pl-2'><FontAwesomeIcon icon={faUsersGear}/> </p> 
    <p className='text-gray-600 text-sm font-sans  pl-2 pt-3 pb-1'>networking opportunities</p> 
    <p className='text-gray-600 text-[11px] font-mono pt-1 pl-2 pb-8'>network with hackathon sponsors and participants</p>
  </div>

    </div>

    </>
  )
}

export default WhysUs