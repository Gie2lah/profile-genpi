import React from "react";
import Footer from "../components/Layouts/Footer";

const ErrorElement = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-slate-800">
        <h1 className="font-bold text-3xl">404</h1>
      </div>
      <Footer />
    </>
  );
};

export default ErrorElement;
