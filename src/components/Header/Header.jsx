import React from 'react';
import { Link, useLocation ,  } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    return (
        <div className='sticky top-0 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 p-6'>
            
            <div className='flex gap-10 justify-center text-2xl font-semibold'>

            <Link to="/hotel" className={location.pathname === '/hotel' ? 'text-blue-400 text-3xl' : ''}>Hotel</Link>
            <Link to="/flight" className={location.pathname === '/flight' ? 'text-blue-400 text-3xl' : ''}>Flight</Link>
            </div>
        </div>
    );
};

export default Header;