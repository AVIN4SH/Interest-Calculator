import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="hero min-h-[86vh] bg-interest-img bg-cover">
      <div className="hero-overlay bg-slate-200 sm:bg-[#181818]"></div>
      <div className="sm:bg-[#dbdbdb] shadow-sm shadow-white text-black hero-content text-center md:border md:p-16 md:rounded-lg md:w-4/12">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">Interest Calculator</h1>
          <p className="mb-5 text-lg">
            Our Platform provides functionality to calculate both Simple & Compound Interest !!
            <br />
            Click on below option as per your need
          </p>
          <button className="m-2 btn btn-wide md:btn-lg md:text-xl btn-outline hover:bg-black text-white bg-[#202020] hover:text-white"><Link to='/si'> Simple Interest </Link></button>
          <button className="m-2 btn btn-wide md:btn-lg md:text-xl btn-outline hover:bg-black text-white bg-[#202020] hover:text-white"><Link to='/ci'> Compound Interest </Link></button>
        </div>
      </div>
    </div>
  );
}

export default Home;