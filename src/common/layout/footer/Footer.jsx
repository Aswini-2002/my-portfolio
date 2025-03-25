import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <hr />
            <div className="flex md:flex-row flex-col justify-between py-8 md:px-32 px-4">
                <div className="">
                    <p className="text-2xl">Get In Touch</p>
                    <p className="mt-2">2002aswinirath@gmail.com</p>
                </div>
                <div className="flex items-center md:mt-0 mt-4">
                    <p>&copy; 2025 Aswini Prabha Rath. All rights reserved</p>
                </div>
            </div>
        </>
    )
}
export default Footer;