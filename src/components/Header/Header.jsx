import React from 'react';
import { Link, useLocation, } from 'react-router-dom';
import { RiHotelLine } from "react-icons/ri";
import { MdFlight } from "react-icons/md";
import clsx from 'clsx';

const Header = () => {
    const location = useLocation();
    return (
        <div className={clsx(
            'sticky top-0 p-6',
            {
                'sticky bg-gradient-to-r from-lime-700 via-lime-500 to-white': location.pathname === '/flight',
                'sticky bg-gradient-to-r from-purple-700 via-purple-500 to-white': location.pathname === '/hotel',
                'hidden': location.pathname === '/',
                
            }
        )}>

       
            < div className='flex gap-10 justify-center text-2xl font-semibold' >

                <Link to="/hotel" className={location.pathname === '/hotel' ? 'text-white text-3xl flex items-center' : 'flex items-center text-slate-300'}><RiHotelLine /> Hotel </Link>

                <Link to="/flight" className={location.pathname === '/flight' ? 'text-white text-3xl flex items-center' : 'flex items-center text-slate-300'}>Flight <MdFlight /></Link>
            </div >
        </div >
    );
};

export default Header;