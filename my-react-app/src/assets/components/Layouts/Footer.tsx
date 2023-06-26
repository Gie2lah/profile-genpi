import React from "react";
import {
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoTiktok,
  IoLocationOutline,
  IoMailOutline,
  IoCallOutline,
} from "react-icons/io5";
import UnstyledLink from "../Links/UnstyledLink";

const socialMedia = [
  {
    icon: <IoLogoInstagram />,
    to: "https://www.instagram.com/genpidumai/",
    target: "_blank",
  },
  {
    icon: <IoLogoYoutube />,
    to: "/instagram",
    target: "_blank",
  },
  {
    icon: <IoLogoTiktok />,
    to: "/instagram",
    target: "_blank",
  },
];

const contact = [
  {
    icon: <IoLocationOutline />,
    desc: `JL. Teratai, Dumai Kota,
    Kecamatan Dumai Kota, Kota Dumai, Riau 28811`,
  },
  {
    icon: <IoCallOutline />,
    desc: "0811-2030-0320",
  },
  {
    icon: <IoMailOutline />,
    desc: "genpidumai@gmail.com",
  },
];

const site = [
  {
    name: "Home",
    to: "/home",
  },
  {
    name: "About GenPI",
    to: "/about-genpi",
  },
  {
    name: "Destinasi",
    to: "/destinasi",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="py-10 px-[10%] bg-white">
        <hr className="bg-black" />
        <h3 className="text-center mb-6 mt-6">Follow US</h3>
        <div className="flex justify-center space-x-4">
          {socialMedia.map(({ icon, to, target }) => (
            <a
              href={to}
              target={target}
              className="hover:text-gray-700 text-black text-3xl"
            >
              {icon}
            </a>
          ))}
        </div>
        <div className="">
          <div className="flex flex-col md:flex-row justify-between mt-8 gap-6">
            <div className="max-w-lg space-y-3">
              <h4>Contact US</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, nostrum.
              </p>
              {contact.map(({ icon, desc }) => (
                <p className="flex items-center gap-2">
                  <span className="text-3xl">{icon}</span>
                  {desc}
                </p>
              ))}
            </div>
            <div className="space-y-3">
              <h4>Our Other Site</h4>
              {site.map(({ to, name }) => (
                <p>
                  <a href={to}>{name}</a>
                </p>
              ))}
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
          <UnstyledLink to="/contact" target="_blank">
            Contact
          </UnstyledLink>
          <UnstyledLink to="/tentang-kami" target="_blank">
            Tentang kami
          </UnstyledLink>
        </div>
      </div>
    </>
  );
};

export default Footer;
