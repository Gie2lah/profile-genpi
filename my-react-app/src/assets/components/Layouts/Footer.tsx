import React from "react";
import {
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoTiktok,
  IoLocationOutline,
  IoMailOutline,
  IoCallOutline,
} from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="py-10 px-[10%] bg-sky-600">
        <hr />
        <h3 className="text-center mb-8 mt-6">Follow US</h3>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-sky-500">
            <IoLogoInstagram size={30} />
          </a>
          <a href="#" className="hover:text-sky-500">
            <IoLogoYoutube size={30} />
          </a>
          <a href="#" className="hover:text-sky-500">
            <IoLogoTiktok size={30} />
          </a>
        </div>
        <div className="bg-sky-600">
          <div className="flex flex-col md:flex-row justify-between mt-8 gap-6">
            <div className="max-w-lg">
              <h4>Contact US</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, nostrum.
              </p>
              <p className="flex items-center gap-2">
                <IoLocationOutline size={30} /> JL. Teratai, Dumai Kota,
                Kecamatan Dumai Kota, Kota Dumai, Riau 28811
              </p>
              <p className="flex items-center gap-2">
                <IoCallOutline size={30} /> 0811-2030-0320
              </p>
              <p className="flex items-center gap-2">
                <IoMailOutline size={30} />{" "}
                <a href="#" className="text-black hover:text-sky-500">
                  genpidumai@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h4>Our Other Site</h4>
              <p>
                <a href="#">Home</a>
              </p>
              <p>
                <a href="#">About GenPI</a>
              </p>
              <p>
                <a href="#">Destinasi</a>
              </p>
            </div>
            <div className="flex items-center">
              <img
                src="/public/images/Logo-GenPI.jpg"
                alt=""
                className="h-[150px] rounded-full"
              />
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-black px-[10%] py-4 flex justify-between text-white font-semibold flex-wrap">
        <p className="">© GenPI Dumai {new Date().getFullYear()}</p>
        <div className="flex gap-4 font-semibold">
          <p>Contact</p>
          <p>Tentang Kami!</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
