import React from "react";
import { IoLogoInstagram, IoLogoTiktok, IoLogoYoutube } from "react-icons/io5";
import Footer from "../components/Layouts/Footer";
import CardAnggota, { CardAnggotaData } from "../components/Cards/CardAnggota";
import CardDestinasi, {
  CardDestinasiData,
} from "../components/Cards/CardDestinasi";
import Button from "../components/Buttons/Button";
// import Carousel from "../components/Layouts/Carousel";

const HomePage = () => {
  return (
    <>
      <section>
        <div className="bg-[url(/public/images/dumai.jpg)] bg-no-repeat bg-cover">
          <div className="bg-black bg-opacity-50">
            {/* <Carousel /> */}
            <div className="min-h-screen flex flex-col justify-center items-center  space-y-4 ">
              <h4 className="text-white">Welcome to</h4>
              <h1 className="text-white">GenPI Dumai</h1>
              <q className="text-3xl text-white italic font-secondary ">
                Mohlah Ke Dumai
              </q>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[120px] px-[10%]  ">
        <div>
          <h2 className="text-center">About GenPI</h2>
          <div className="flex flex-wrap justify-between items-center">
            <div className="sm:w-[60%] w-full">
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                asperiores eius facere deleniti error rerum non cumque quasi,
                vero repellendus, quo cum culpa, veniam sed eligendi sint.
                Doloremque, rem in ducimus at placeat reiciendis exercitationem
                temporibus fuga id neque hic nobis laboriosam accusamus earum et
                incidunt? Impedit veniam provident sit!
              </p>
            </div>
            <div className="sm:w-[40%] max-w-xs">
              <img
                src="/public/images/Logo-GenPI.jpg"
                alt=""
                className="h-[400px]"
              />
            </div>
          </div>
          <h2 className="text-center mt-6 mb-6">Pengurus GenPI</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {CardAnggotaData.map(({ images, name, email, position, id }) => (
              <CardAnggota id={id}>
                <CardAnggota.Header images={images} />
                <CardAnggota.Body name={name} email={email} />
                <CardAnggota.Footer position={position} />
              </CardAnggota>
            ))}
          </div>
          <Button to={"/anggota"} target={"_blank"}>
            Learn more
          </Button>
        </div>
      </section>
      <section className="py-[120px] px-[10%] bg-white">
        <h2 className="text-center mb-8">Destinasi Wisata</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CardDestinasiData.map(({ images, name, desc, id, to }) => (
            <CardDestinasi id={id}>
              <CardDestinasi.Header images={images} />
              <CardDestinasi.Body name={name} desc={desc} />
              <CardDestinasi.Footer to={to} />
            </CardDestinasi>
          ))}
        </div>
        <Button to={"/destinasi"} target={"_blank"}>
          Learn more
        </Button>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
