import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

function Nav() {
    const [activeLink, setActiveLink] = useState(null);
    const location = useLocation();

    const linkClassNames = (link) =>
        classNames('hover:text-black', {
            'text-blue-500': activeLink === link && activeLink !== null
        });

    const underlineClassNames = (link) =>
        classNames('h-[1px] bg-blue-500 duration-300 relative top-[1px]', {
            'w-full': activeLink === link || location.pathname === link,
            'w-0': activeLink !== link && location.pathname !== link
        });

    return (
        <nav className="w-full mt-[83px] h-[66px] flex justify-between">
            <div>
                <Link to="/">
                    <div className="text-[42px] font-light grid place-items-center border-[3px] border-black rounded-full w-[65px] h-[65px] ml-[100px]">
                        <p className="-ml-[1px] -mt-[1px]">J</p>
                    </div>
                </Link>
            </div>
            <div className="flex justify-between mr-[152px] items-center text-xs">
                <div className="group hover:text-[#a0a0a0] w-[356px] flex justify-between items-center duration-300 font-semibold">
                    <Link
                        to="/"
                        className={linkClassNames('/')}
                        onMouseEnter={() => setActiveLink('/')}
                        onMouseLeave={() => setActiveLink(null)}>
                        <p>WORKS</p>
                        <div className={underlineClassNames('/')}></div>
                    </Link>
                    <Link
                        to="/about"
                        className={linkClassNames('/about')}
                        onMouseEnter={() => setActiveLink('/about')}
                        onMouseLeave={() => setActiveLink(null)}>
                        <p>ABOUT</p>
                        <div className={underlineClassNames('/about')}></div>
                    </Link>
                    <Link
                        to="/contact"
                        className={linkClassNames('/contact')}
                        onMouseEnter={() => setActiveLink('/contact')}
                        onMouseLeave={() => setActiveLink(null)}>
                        <p>CONTACT</p>
                        <div className={underlineClassNames('/contact')}></div>
                    </Link>
                    <a
                        className="bg-[#373737] text-[#F9F7F2] w-[61px] h-[18px] grid place-content-center hover:text-black hover:bg-[#F9F7F2] hover:border-[1px] duration-300 border-[#373737]"
                        href="https://docs.google.com/document/d/1JdSuQ0_cHch6DIrJgT5rn2y2O_9ECBs2zPuc2gsoOkc/edit?usp=sharing"
                        target="_blank"
                        rel="noreferrer">
                        RESUME
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
