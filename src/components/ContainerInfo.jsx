import React from "react";
import Buton from "./Buton";
import Card from "./Card";
import planeta from "../assets/planeta1.png";

const ContainerInfo = ({ quote, handleChange }) => {
  return (
    <>
      <section className="px-3 sm:px-10 md:w-[600px] flex flex-col gap-6 relative z-20">
        <h1 className="title font-digitalNumbers text-[32px] text-center gap-5 text-white">
          INFOGALAX
        </h1>
        <Card quote={quote} />
        <Buton handleChange={handleChange} />
      </section>
      <img className=" absolute bottom-0 z-0" src={planeta} alt="" />

      <p className=" font-fredoka text-white text-center text-base absolute bottom-2">
        Fuente: {quote.author}
      </p>
    </>
  );
};

export default ContainerInfo;
