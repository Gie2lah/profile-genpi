import React from "react";
import { IoLogoInstagram, IoLogoTiktok, IoLogoYoutube } from "react-icons/io5";

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
      <section className="py-[120px] px-[10%] min-h-screen ">
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
          <h2 className="text-center mt-6 mb-4">Pengurus GenPI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="bg-slate-800 border rounded px-4 py-8 max-w-xs text-center flex flex-col items-center space-y-2 text-white ">
              <img
                src="/public/images/Logo-GenPI.jpg"
                alt=""
                className="h-[200px] rounded-full block"
              />
              <h4>Ucu Mat</h4>
              <p>ucumat@gmail.com</p>
              <hr />
              <p>Pembina 1</p>
            </div>
            <div className="bg-slate-800 border rounded px-4 py-8 max-w-xs text-center flex flex-col items-center space-y-2 text-white ">
              <img
                src="/public/images/Logo-GenPI.jpg"
                alt=""
                className="h-[200px] rounded-full block"
              />
              <h4>Ucu Mat</h4>
              <p>ucumat@gmail.com</p>
              <hr />
              <p>Pembina 1</p>
            </div>
            <div className="bg-slate-800 border rounded px-4 py-8 max-w-xs text-center flex flex-col items-center space-y-2 text-white ">
              <img
                src="/public/images/Logo-GenPI.jpg"
                alt=""
                className="h-[200px] rounded-full block"
              />
              <h4>Ucu Mat</h4>
              <p>ucumat@gmail.com</p>
              <hr />
              <p>Pembina 1</p>
            </div>
            <div className="bg-slate-800 border rounded px-4 py-8 max-w-xs text-center flex flex-col items-center space-y-2 text-white ">
              <img
                src="/public/images/Logo-GenPI.jpg"
                alt=""
                className="h-[200px] rounded-full block"
              />
              <h4>Ucu Mat</h4>
              <p>ucumat@gmail.com</p>
              <hr />
              <p>Pembina 1</p>
            </div>
            <div className="bg-slate-800 border rounded px-4 py-8 max-w-xs text-center flex flex-col items-center space-y-2 text-white ">
              <img
                src="/public/images/Logo-GenPI.jpg"
                alt=""
                className="h-[200px] rounded-full block"
              />
              <h4>Ucu Mat</h4>
              <p>ucumat@gmail.com</p>
              <hr />
              <p>Pembina 1</p>
            </div>
            <div className="bg-slate-800 border rounded px-4 py-8 max-w-xs text-center flex flex-col items-center space-y-2 text-white ">
              <img
                src="/public/images/Logo-GenPI.jpg"
                alt=""
                className="h-[200px] rounded-full block"
              />
              <h4>Ucu Mat</h4>
              <p>ucumat@gmail.com</p>
              <hr />
              <p>Pembina 1</p>
            </div>
          </div>
          <button className="bg-sky-600 border rounded py-2 px-4 font-bold hover:bg-sky-400 mt-4">
            Learn more
          </button>
        </div>
      </section>
      <section className="px-[120px] py-[10%]">
        <h2 className="text-center mb-8">Destinasi Wisata</h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="bg-slate-800 border rounded px-4 py-8 max-w-md flex flex-col  text-start space-y-2 text-white ">
            <img
              src="/public/images/pantai-koneng.jpg"
              alt=""
              className="h-[200px] w-[800px] rounded block"
            />
            <h4>Pantai Koneng</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              id, enim doloremque...
            </p>
            <p>
              <a href="#" className="hover:text-sky-500">
                Baca selengkapnya
              </a>
            </p>
          </div>
          <div className="bg-slate-800 border rounded px-4 py-8 max-w-md flex flex-col  text-start space-y-2 text-white ">
            <img
              src="/public/images/Logo-GenPI.jpg"
              alt=""
              className="h-[200px] w-[800px] rounded block"
            />
            <h4>Pantai Koneng</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              id, enim doloremque...
            </p>
            <p>
              <a href="#" className="hover:text-sky-500">
                Baca selengkapnya
              </a>
            </p>
          </div>
        </div>
      </section>
      <footer className="mb-20">
        <h3 className="text-center mb-8">Follow US</h3>
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
      </footer>
    </>
  );
};

export default HomePage;
