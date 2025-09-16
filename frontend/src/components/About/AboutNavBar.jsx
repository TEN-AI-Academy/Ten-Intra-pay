import { Link } from "react-router-dom"


const AboutNavBar=()=>{

    return(
        <div className="bg-[#2e63af] h-30 p-8 pl-5 md:pl-40">
           <div className="flex">
            <Link to="/" className="text-white">Home</Link>
            <p>/About</p>
           </div>
           <h3 className="text-white text-2xl mt-3 font-medium">About</h3>
         </div>
    )
}
export default AboutNavBar