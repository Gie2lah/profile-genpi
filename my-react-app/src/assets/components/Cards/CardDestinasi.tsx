import React from "react";
import { IconType } from "react-icons";

export const CardDestinasiData = [
  {
    id: 1,
    images: "/public/images/Logo-GenPI.jpg",
    name: "Pantai Koneng",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus id,
        enim doloremque...`,
    to: "/destinasi",
  },
  {
    id: 1,
    images: "/public/images/Logo-GenPI.jpg",
    name: "Pantai Koneng",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus id,
        enim doloremque...`,
    to: "/destinasi",
  },
  {
    id: 1,
    images: "/public/images/Logo-GenPI.jpg",
    name: "Pantai Koneng",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus id,
        enim doloremque...`,
    to: "/destinasi",
  },
];

interface CardType {
  children?: React.ReactNode;
  icon?: IconType;
}

const CardDestinasi = ({ children, id }) => {
  return (
    <div className="shadow-md drop-shadow-xl border-black bg-sky-700 rounded max-w-md flex flex-col  text-start space-y-2 text-white ">
      {children}
    </div>
  );
};

const Header = ({ images }) => {
  return (
    <div>
      <img src={images} alt="" className="h-[200px] w-[800px] block" />
    </div>
  );
};

const Body = ({ name, desc }) => {
  return (
    <div className="px-4 py-2">
      <h4>{name}</h4>
      <p>{desc}</p>
    </div>
  );
};

const Footer = ({ to }) => {
  return (
    <div>
      <p>
        <a href={to} className="hover:text-sky-500">
          Baca selengkapnya
        </a>
      </p>
    </div>
  );
};

CardDestinasi.Header = Header;
CardDestinasi.Body = Body;
CardDestinasi.Footer = Footer;

export default CardDestinasi;
