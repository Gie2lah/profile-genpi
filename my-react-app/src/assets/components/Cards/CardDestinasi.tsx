import React from "react";
import { IconType } from "react-icons";

export const CardDestinasiData = [
  {
    id: 1,
    images: "/public/images/pantai-koneng.jpg",
    name: "Pantai Koneng",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus id,
        enim doloremque...`,
    to: "/destinasi/pantai-koneng",
  },
  {
    id: 2,
    images: "/public/images/kampung-teratai.jpg",
    name: "Kampung Teratai",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus id,
        enim doloremque...`,
    to: "/destinasi/kampung-teratai",
  },
  {
    id: 3,
    images: "/public/images/pantai-bahterah.jpg",
    name: "Pantai Bahterah Alam Guntung",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus id,
    enim doloremque...`,
    to: "/destinasi/pantai-bahterah-alam-guntung",
  },
  {
    id: 4,
    images: "/public/images/la-marina-cafe.jpg",
    name: "La Marina Cafe",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus id,
    enim doloremque...`,
    to: "/destinasi/la-marina-cafe",
  },
  {
    id: 5,
    images: "/public/images/pesona-mundam.jpg",
    name: "Pesona Mundam",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus id,
    enim doloremque...`,
    to: "/destinasi/pesona-mundam",
  },
  {
    id: 6,
    images: "/public/images/rumah-pohon.jpg",
    name: "Rumah Pohon Bagan Besar",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus id,
    enim doloremque...`,
    to: "/destinasi/rumah-pohon-bagan-besar",
  },
];

interface CardType {
  children?: React.ReactNode;
  icon?: IconType;
}

const CardDestinasi = ({ children, id }) => {
  return (
    <div className="shadow-md drop-shadow-xl border-black bg-white rounded-md md:max-w-[500px] text-start space-y-2 text-black ">
      {children}
    </div>
  );
};

const Header = ({ images }) => {
  return (
    <div className="">
      <img
        src={images}
        alt=""
        className="h-[150px] w-[600px] rounded-t-md object-cover"
      />
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
    <div className="px-4 pb-4">
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
