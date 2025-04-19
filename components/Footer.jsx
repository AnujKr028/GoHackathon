import { faInstagram, faInstagramSquare, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
const Footer = () => {
  return (
    
<div className="flex flex-row items-center justify-between bg-gray-100 px-4 py-1 mt-10 p-4">
<div className="flex flex-row p-2 gap-3"> 
    <Link href="https://x.com/AnujKr028" className="text-black"><FontAwesomeIcon icon={faTwitter}/></Link>
    <Link href="https://www.linkedin.com/in/anuj-kumar-3a3242359/"  className="text-black"><FontAwesomeIcon icon={faLinkedin}/></Link>
</div>

   <div className="flex flex-row p-2 gap-3"> 
   <Link href="about" className="text-black font-mono text-xs">About</Link>
   <Link href="" className="text-black font-mono text-xs">Terms</Link>
   </div>


   </div>
  )
}

export default Footer