import React from "react";
import { IconType } from "react-icons";

export const CardAnggotaData = [
  {
    id: 1,
    images: "/public/images/Logo-GenPI.jpg",
    name: "Yogi Mulyana",
    email: "yogimulyana@gmail.com",
    position: "Anggota 1",
  },
  {
    id: 2,
    images: "/public/images/Logo-GenPI.jpg",
    name: "Yogi Mulyana",
    email: "yogimulyana@gmail.com",
    position: "Anggota 1",
  },
  {
    id: 3,
    images: "/public/images/Logo-GenPI.jpg",
    name: "Yogi Mulyana",
    email: "yogimulyana@gmail.com",
    position: "Anggota 1",
  },
];

interface CardType {
  children?: React.ReactNode;
  icon?: IconType;
}

const CardAnggota = ({ children, id }) => {
  return (
    <div className="shadow-md drop-shadow-xl border rounded px-0 pt-8 max-w-xs text-center block space-y-2 text-black ">
      {children}
    </div>
  );
};

const Header = ({ images }) => {
  return (
    <div className="mb-6">
      <img
        src={images}
        alt=""
        className="h-[200px] rounded-full block mx-auto border"
      />
    </div>
  );
};

const Body = ({ name, email }) => {
  return (
    <div className="space-y-2">
      <h4>{name}</h4>
      <p>{email}</p>
    </div>
  );
};

const Footer = ({ position }) => {
  return (
    <div className="">
      <hr className=" bg-black" />
      <p className="py-3 font-semibold">{position}</p>
    </div>
  );
};

CardAnggota.Header = Header;
CardAnggota.Body = Body;
CardAnggota.Footer = Footer;

export default CardAnggota;
