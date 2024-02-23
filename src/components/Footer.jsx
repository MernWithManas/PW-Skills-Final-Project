
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";

const Footer = () => {
    const newDate = new Date();
    const year = newDate.getFullYear();
  return (
    <footer className='relative left-0 bottom-0 h-[10vh] py-5 sm:flex-row items-center sm:px-20 text-white bg-gray-800 justify-between flex flex-col'>
        <section>
            Copyright {year} | All rights reserved
        </section>

        <section className='flex items-center justify-center gap-5 text-2xl text-white'>
            <a href="#" className="transition-all duration-300 ease-in-out hover:text-yellow-500">
                <BsFacebook/>
            </a>
            <a href="#" className="transition-all duration-300 ease-in-out hover:text-yellow-500">
                <BsInstagram/>
            </a>
            <a href="#" className="transition-all duration-300 ease-in-out hover:text-yellow-500">
                <BsLinkedin/>
            </a>
            <a href="#" className="transition-all duration-300 ease-in-out hover:text-yellow-500">
                <BsTwitter/>
            </a>
        </section>
    </footer>
  )
}

export default Footer