import React from "react";
import { IoLogoInstagram, IoLogoTiktok, IoLogoYoutube } from "react-icons/io5";
import Footer from "../components/Layouts/Footer";
import CardAnggota, { CardAnggotaData } from "../components/Cards/CardAnggota";
import CardDestinasi, {
  CardDestinasiData,
} from "../components/Cards/CardDestinasi";

const HomePage = () => {
  return (
    <>
      <section>
        <div className="bg-[url(/public/images/dumai.jpg)] bg-no-repeat bg-cover brightness-50">
          <div className="min-h-screen flex flex-col justify-center items-center  space-y-4 ">
            <h4 className="text-white">Welcome to</h4>
            <h1 className="text-white">GenPI Dumai</h1>
            <p className="text-white">
              <q className="text-xl">Mohlah Ke Dumai</q>
            </p>
          </div>
        </div>
      </section>
      <section className="py-[120px] px-[10%]  ">
        <div>
          <h2 className="text-center">About GenPI</h2>
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-[50%]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                asperiores eius facere deleniti error rerum non cumque quasi,
                vero repellendus, quo cum culpa, veniam sed eligendi sint.
                Doloremque, rem in ducimus at placeat reiciendis exercitationem
                temporibus fuga id neque hic nobis laboriosam accusamus earum et
                incidunt? Impedit veniam provident sit!
              </p>
            </div>
            <div>
              <img
                src="/public/images/Logo-GenPI.jpg"
                alt=""
                className="h-[400px]"
              />
            </div>
          </div>
          <h2 className="text-center mt-6 mb-6">Pengurus GenPI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
            {CardAnggotaData.map(({ images, name, email, position, id }) => (
              <CardAnggota id={id}>
                <CardAnggota.Header images={images} />
                <CardAnggota.Body name={name} email={email} />
                <CardAnggota.Footer position={position} />
              </CardAnggota>
            ))}
          </div>
          <button className="bg-white border-2 rounded py-2 px-4 font-bold text-black hover:bg-gray-100 mt-4">
            Learn more
          </button>
        </div>
      </section>
      <section className="px-[120px] py-[10%] bg-sky-600">
        <h2 className="text-center mb-8">Destinasi Wisata</h2>
        <div className="flex flex-wrap items-center gap-4">
          {CardDestinasiData.map(({ images, name, desc, id, to }) => (
            <CardDestinasi id={id}>
              <CardDestinasi.Header images={images} />
              <CardDestinasi.Body name={name} desc={desc} />
              <CardDestinasi.Footer to={to} />
            </CardDestinasi>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
