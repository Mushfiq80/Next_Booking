import React from 'react';
import { FaMailBulk, FaLinkedin } from 'react-icons/fa'; // Import mail and LinkedIn icons
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 py-4">
            <div className="container mx-auto flex justify-around items-center text-white">
                {/* First Part */}
                <Link to='/'>
                    <div className="text-xl font-bold flex items-center space-x-2">
                        <span className="text-rose-500">NEXT</span>
                        <span className="text-purple-500">Booking</span>
                    </div>
                    <p><small>Go to Homepage</small></p>
                </Link>

                {/* Second Part */}
                <div className="text-slate-300">
                    Developer Info: <br /> Mushfiq Us Saleheen<br />
                    Position: Frontend Developer I<br /><br />
                    <span className="flex items-center space-x-2">
                        <FaMailBulk />
                        <span>aurpon10@gmail.com</span>
                    </span>
                    <span className="flex items-center space-x-2">
                        <FaLinkedin />
                        <a href="https://www.linkedin.com/in/mushfiq80/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
