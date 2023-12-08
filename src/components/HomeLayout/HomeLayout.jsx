import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom';
import bgImage from "../../images/bg-image.jpg";

const HomeLayout = () => {
  return (
    <div className="relative">
      <div className="fixed inset-0 z-1 overflow-hidden">
        <img
          src={bgImage}
          alt=""
          className="fixed-bg object-cover w-full h-full"
          style={{ filter: 'brightness(0.7)' }} // Adjust brightness as needed
        />
      </div>
      <div className="fixed inset-0 z-0 overflow-hidden mt-20">
        <img
          src={bgImage}
          alt=""
          className="fixed-bg object-cover w-full h-full"
          style={{ filter: 'brightness(0.7)' }} // Adjust brightness as needed
        />
      </div>
      <div className="absolute z-2 top-0">
        <Header />
        <div className="text-white flex items-center justify-center gap-4 text-lg">
          <Link to="dashboard/pricelist">PriceList</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/us">Us</Link>
        </div>
        <div className="flex items-center justify-center py-7 px-2 md:px-[100px] lg:px-[200px] text-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
