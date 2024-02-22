import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full bg-[#002060]  text-white">
      <div className="flex  justify-between  px-32 items-center py-12">
        <div className="capitalize flex flex-col gap-4">
          <div>
            <Link to={"/"}>
              <h1 className="text-4xl font-bold cursor-pointer uppercase ">
                Mech <span className="text-[#595959]">fusion</span>
              </h1>
            </Link>
            <h1 className="text-2xl">Engineering Solution</h1>
          </div>
          <h1>
            Santhosh nagar <br />
            Attur layout <br />
            Yelahanka Newtown<br />
            Bangalore <br />
            Karnataka India – 560064
          </h1>
          <div className="flex text-4xl gap-4">
            <FaInstagram className="border-2 hover:border border-[#595959] rounded-full p-1" />
            <FaYoutube className="border-2 hover:border border-[#595959] rounded-full p-1" />
            <IoLogoFacebook className="border-2 hover:border border-[#595959] rounded-full p-1" />
            <IoIosMail className="border-2 hover:border border-[#595959] rounded-full p-1" />
          </div>
        </div>
        <div>
          <h1 className="text-xl">contact</h1>
          <h1>+91 00000 00000</h1>
          <h1 className="">mailtomechfusion@gmail.com</h1>
          <h1>instagram</h1>
          <h1>linkedIn</h1>
        </div>
      </div>
      <div className="h-20 border-t flex justify-center items-center">
        copyright@mechfusion.com
      </div>
    </div>
  );
}

export default Footer;
