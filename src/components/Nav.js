import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import c from 'classnames';

function Nav() {
    const [activeLink, setActiveLink] = useState(null);
    const [activeHamburgerLink, setActiveHamburgerLink] = useState(null);
    const [menuClicked, setMenuClicked] = useState(false);
    const [initialLoad, setInitialLoad] = useState(false);
    const [pageLoaded, setpageLoaded] = useState(false);
    const [navigationText, setNavigationText] = useState(false);
    const location = useLocation();

    const linkClassNames = (link) =>
        c('hover:text-black', {
            'text-[#00A3FF]': activeLink === link && activeLink !== null
        });

    const underlineClassNames = (link) =>
        c('h-[1px] bg-[#00A3FF] duration-300 relative top-[1px]', {
            'w-[100%]': activeLink === link || location.pathname === link,
            'w-0': activeLink !== link && location.pathname !== link
        });

    useEffect(() => {
        setTimeout(() => {
            setInitialLoad(true);
        }, 100);
        setTimeout(() => {
            setpageLoaded(true);
        }, 300);
    }, []);

    useEffect(() => {
        if (menuClicked) {
            setTimeout(() => {
                setNavigationText(true);
            }, 500);
        } else {
            setNavigationText(false);
        }
    }, [menuClicked]);

    return (
        <>
            <div
                className={c(
                    'h-[3px] bg-[#333333] duration-700 ease-in relative z-20',
                    initialLoad
                        ? 'w-full duration-700'
                        : 'w-0 duration-1000 left-0',
                    pageLoaded
                        ? 'opacity-0 duration-700'
                        : 'opacity-1 duration-700'
                )}></div>
            <nav className="w-full mt-[83px] h-[66px] flex justify-between items-center">
                <div>
                    <Link to="/">
                        <div className="grid place-items-center rounded-full w-[65px] h-[65px] ml-[50%] md:ml-[100px] bg-black hover:bg-[#0094FF] group">
                            <div className="bg-[#F9F7F2] w-[61px] h-[61px] rounded-full group-hover:h-0 group-hover:w-0 duration-300 relative">
                                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[42px] font-light pointer-events-none duration-300 group-hover:text-[#F9F7F2]">
                                    J
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="justify-between mr-[152px] items-center text-xs hidden md:flex">
                    <div className=" group hover:text-[#a0a0a0] w-[400px] flex justify-between items-center duration-300 font-semibold text-[14px]">
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
                            <div
                                className={underlineClassNames('/about')}></div>
                        </Link>
                        <Link
                            to="/contact"
                            className={linkClassNames('/contact')}
                            onMouseEnter={() => setActiveLink('/contact')}
                            onMouseLeave={() => setActiveLink(null)}>
                            <p>CONTACT</p>
                            <div
                                className={underlineClassNames(
                                    '/contact'
                                )}></div>
                        </Link>
                        <a
                            className="bg-[#373737] text-[#F9F7F2] grid place-content-center border-[1px] hover:text-black hover:bg-[#F9F7F2] hover:border-[1px] duration-300 border-[#373737] py-2 px-4"
                            href="https://docs.google.com/document/d/1JdSuQ0_cHch6DIrJgT5rn2y2O_9ECBs2zPuc2gsoOkc/edit?usp=sharing"
                            target="_blank"
                            rel="noreferrer">
                            RESUME
                        </a>
                    </div>
                </div>
                {/* hamburger menu */}
                <div className="z-50 md:hidden">
                    <div
                        className={c(
                            'fixed text-2xl left-6 duration-500 -mt-2 top-[110px]',
                            navigationText
                                ? 'opacity-100 z-40'
                                : 'opacity-0 -z-10'
                        )}>
                        Navigation
                    </div>

                    <div
                        className={c(
                            'w-[23px] mr-[59px] grid grid-rows-3 items-between h-[19px] cursor-pointer mt-1',
                            menuClicked ? 'fixed top-[110px] right-[0px]' : ''
                        )}
                        onClick={() => setMenuClicked(!menuClicked)}>
                        <div
                            className={c(
                                'w-full h-[1px] bg-[#5a5a5a]  ease-in-out relative',
                                menuClicked
                                    ? '-rotate-45 -bottom-[2px] duration-500'
                                    : 'rotate-0 duration-300'
                            )}></div>
                        <div
                            className={c(
                                'w-full h-[1px] bg-[#5a5a5a]',
                                menuClicked ? 'hidden' : 'block'
                            )}></div>
                        <div
                            className={c(
                                'w-full h-[1px] bg-[#5a5a5a]  ease-in-out relative',
                                menuClicked
                                    ? 'rotate-45 -top-[4px] duration-500'
                                    : 'rotate-0 duration-300'
                            )}></div>
                    </div>
                </div>
                <div
                    className={c(
                        'fixed top-0 left-0 w-full h-screen bg-opacity-[96%] duration-500 ease-in-out ',
                        menuClicked
                            ? 'bg-[#F9F7F2] opacity-100 z-40'
                            : 'opacity-0 -z-10'
                    )}
                    onClick={() => setMenuClicked(false)}>
                    <div className="w-11/12 mx-auto relative top-[180px]">
                        <div className="w-full bg-[#5a5a5a71] h-[1px] "></div>
                        <Link
                            to="/"
                            className="flex flex-wrap items-center w-full mt-6 cursor-pointer"
                            onMouseEnter={() => setActiveHamburgerLink('works')}
                            onMouseLeave={() => setActiveHamburgerLink(null)}>
                            <div className="border-[1px] border-black w-[20px] h-[20px] grid place-content-center">
                                <div
                                    className={c(
                                        'bg-black h-[1px] w-0 duration-200 rotate-45',
                                        activeHamburgerLink === 'works'
                                            ? 'w-[26px]'
                                            : ''
                                    )}></div>
                                <div
                                    className={c(
                                        'bg-black h-[1px] w-0 duration-200 -rotate-45',
                                        activeHamburgerLink === 'works'
                                            ? 'w-[26px]'
                                            : ''
                                    )}></div>
                            </div>
                            <p className="text-[20px] ml-3">Works</p>
                        </Link>
                        <Link
                            to="/about"
                            className="flex flex-wrap items-center w-full mt-6 cursor-pointer"
                            onMouseEnter={() => setActiveHamburgerLink('about')}
                            onMouseLeave={() => setActiveHamburgerLink(null)}>
                            <div className="border-[1px] border-black w-[20px] h-[20px] grid place-content-center">
                                {' '}
                                <div
                                    className={c(
                                        'bg-black h-[1px] w-0 duration-200 rotate-45',
                                        activeHamburgerLink === 'about'
                                            ? 'w-[26px]'
                                            : ''
                                    )}></div>
                                <div
                                    className={c(
                                        'bg-black h-[1px] w-0 duration-200 -rotate-45',
                                        activeHamburgerLink === 'about'
                                            ? 'w-[26px]'
                                            : ''
                                    )}></div>
                            </div>
                            <p className="text-[20px] ml-3">About</p>
                        </Link>
                        <Link
                            to="contact"
                            className="flex flex-wrap items-center w-full mt-6 cursor-pointer"
                            onMouseEnter={() =>
                                setActiveHamburgerLink('contact')
                            }
                            onMouseLeave={() => setActiveHamburgerLink(null)}>
                            <div className="border-[1px] border-black w-[20px] h-[20px] grid place-content-center">
                                {' '}
                                <div
                                    className={c(
                                        'bg-black h-[1px] w-0 duration-200 rotate-45',
                                        activeHamburgerLink === 'contact'
                                            ? 'w-[26px]'
                                            : ''
                                    )}></div>
                                <div
                                    className={c(
                                        'bg-black h-[1px] w-0 duration-200 -rotate-45',
                                        activeHamburgerLink === 'contact'
                                            ? 'w-[26px]'
                                            : ''
                                    )}></div>
                            </div>
                            <p className="text-[20px] ml-3">Contact</p>
                        </Link>
                        <a
                            href="https://docs.google.com/document/d/1JdSuQ0_cHch6DIrJgT5rn2y2O_9ECBs2zPuc2gsoOkc/edit?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-wrap items-center w-full mt-16 cursor-pointer"
                            onMouseEnter={() =>
                                setActiveHamburgerLink('resume')
                            }
                            onMouseLeave={() => setActiveHamburgerLink(null)}>
                            <div className="border-[1px] border-black w-[20px] h-[20px] grid place-content-center">
                                {' '}
                                <div
                                    className={c(
                                        'bg-black h-[1px] w-0 duration-200 rotate-45',
                                        activeHamburgerLink === 'resume'
                                            ? 'w-[26px]'
                                            : ''
                                    )}></div>
                                <div
                                    className={c(
                                        'bg-black h-[1px] w-0 duration-200 -rotate-45',
                                        activeHamburgerLink === 'resume'
                                            ? 'w-[26px]'
                                            : ''
                                    )}></div>
                            </div>
                            <p className="text-[20px] ml-3">Resume</p>
                        </a>
                        <a
                            href="https://github.com/JadenFicklin"
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-wrap items-center w-full mt-6 cursor-pointer"
                            onMouseEnter={() =>
                                setActiveHamburgerLink('github')
                            }
                            onMouseLeave={() => setActiveHamburgerLink(null)}>
                            <div className="border-[1px] border-black w-[20px] h-[20px] grid place-content-center">
                                {' '}
                                <div
                                    className={c(
                                        'bg-black h-[1px] w-0 duration-200 rotate-45',
                                        activeHamburgerLink === 'github'
                                            ? 'w-[26px]'
                                            : ''
                                    )}></div>
                                <div
                                    className={c(
                                        'bg-black h-[1px] w-0 duration-200 -rotate-45',
                                        activeHamburgerLink === 'github'
                                            ? 'w-[26px]'
                                            : ''
                                    )}></div>
                            </div>
                            <p className="text-[20px] ml-3">Github</p>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jaden-ficklin-b1686a21a/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-wrap items-center w-full mt-6 cursor-pointer"
                            onMouseEnter={() =>
                                setActiveHamburgerLink('linkedin')
                            }
                            onMouseLeave={() => setActiveHamburgerLink(null)}>
                            <div className="border-[1px] border-black w-[20px] h-[20px] grid place-content-center">
                                {' '}
                                <div
                                    className={c(
                                        'bg-black h-[1px] w-0 duration-200 rotate-45',
                                        activeHamburgerLink === 'linkedin'
                                            ? 'w-[26px]'
                                            : ''
                                    )}></div>
                                <div
                                    className={c(
                                        'bg-black h-[1px] w-0 duration-200 -rotate-45',
                                        activeHamburgerLink === 'linkedin'
                                            ? 'w-[26px]'
                                            : ''
                                    )}></div>
                            </div>
                            <p className="text-[20px] ml-3">Linkedin</p>
                        </a>
                        <a
                            href="https://www.facebook.com/jaden.ficklin/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-wrap items-center w-full mt-6 cursor-pointer"
                            onMouseEnter={() =>
                                setActiveHamburgerLink('facebook')
                            }
                            onMouseLeave={() => setActiveHamburgerLink(null)}>
                            <div className="border-[1px] border-black w-[20px] h-[20px] grid place-content-center">
                                {' '}
                                <div
                                    className={c(
                                        'bg-black h-[1px] w-0 duration-200 rotate-45',
                                        activeHamburgerLink === 'facebook'
                                            ? 'w-[26px]'
                                            : ''
                                    )}></div>
                                <div
                                    className={c(
                                        'bg-black h-[1px] w-0 duration-200 -rotate-45',
                                        activeHamburgerLink === 'facebook'
                                            ? 'w-[26px]'
                                            : ''
                                    )}></div>
                            </div>
                            <p className="text-[20px] ml-3">Facebook</p>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
