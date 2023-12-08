import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './style.module.css';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div className={style.container}>
      <div className="absolute overflow-auto">
        <Header />
        <div className={`${style.text} flex items-center justify-center gap-4 text-lg`}>
          <Link to="dashboard/pricelist">PriceList</Link>
          <Link to="/terms">terms</Link>
          <Link to="/us">us</Link>
        </div>
        <div className={`flex items-center justify-center ${style.content}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
