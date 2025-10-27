import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

const Topbar=()=>{
    return <div className=" bg-[#ea2e0e] text-white ">
        <div className="container mx-auto flex justify-between items-center py-2 px-4 text-sm">
            <div className="hidden md:flex items-center space-x-4">
                <a href="#" className="hover:text-gray-300">
                    <TbBrandMeta className="h-5 w-5"/>
                </a><a href="#" className="hover:text-gray-300">
                    <IoLogoInstagram className="h-5 w-5"/>
                </a><a href="#" className="hover:text-gray-300">
                    <RiTwitterXLine className="h-4 w-4"/>
                </a>
            </div>
            <div className="text-sm text-center flex-g">
                <span>We Ship world wide - Fast and reliable shipping!</span>
            </div>
            <div className="text-sm hidden md:block">
                <a href="tel:+21372901" className="hover:text-gray-300">
                    +1 (234) 567-8901
                </a>
                 </div>
        </div>
        
    </div>
};
export default Topbar  