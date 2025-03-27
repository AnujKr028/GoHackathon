import { faInstagram, faInstagramSquare, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
const Footer = () => {
  return (
    
<div className="flex flex-row items-center justify-between bg-gray-100 px-4 py-1 mt-10 p-4">
<div className="flex flex-row p-2 gap-3"> 
    <Link href="" className="text-black"><FontAwesomeIcon icon={faInstagram}/></Link>
    <Link href=""  className="text-black"><FontAwesomeIcon icon={faLinkedin}/></Link>
</div>

   <div className="flex flex-row p-2 gap-3"> 
   <Link href="" className="text-black font-mono text-xs">Privacy</Link>
   <Link href="" className="text-black font-mono text-xs">Terms</Link>
   </div>


   </div>
  )
}

export default Footer