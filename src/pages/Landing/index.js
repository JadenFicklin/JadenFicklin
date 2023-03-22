import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Links from '../../components/Links';
import Nav from '../../components/Nav';
import HoverImage from '../../customComponents/HoverImage';
import CursorFollower from '../../customComponents/CursorFollower';

import devmountain from './images/devmountain.JPG';
import devmountainCertificate from './images/devmountainCertificate.JPG';

function Landing() {
    const [opacity, setOpacity] = useState(1);

    const handleMouseEnter = () => {
        setOpacity(0.1);
        const cursorFollower = document.querySelector('.cursor-follower');
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)'; // Animate the size using scale
    };

    const handleMouseLeave = () => {
        setOpacity(1);
        const cursorFollower = document.querySelector('.cursor-follower');
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(0)'; // Reset the size using scale
    };

    return (
        <>
            <div className="relative w-full h-screen">
                <div style={{ opacity }} className="duration-500 ">
                    <Nav />
                    <Links />
                </div>
                <CursorFollower />
                <div
                    id="text-section"
                    className="w-full absolute bottom-0 xl:h-[60%]  flex flex-wrap content-start px-8  mx-auto md:ml-[15%] md:w-[70%] xl:w-[66%] xl:left-1/2 xl:-ml-[33%] xl:content-end xl:mb-36  h-[60%] md:h-[50%] ">
                    <p
                        className="w-full h-min text-[14px] xs:text-[17px] xl:text-[22px] font-light duration-500"
                        style={{ opacity }}>
                        Website Developer
                    </p>
                    <p
                        className="w-full h-min text-[46px] xs:text-[50px] mb-3 xl:text-[86px] font-medium duration-500"
                        style={{ opacity }}>
                        Jaden{' '}
                        <span className="relative -top-4 xs:top-0">
                            {' '}
                            Ficklin
                        </span>
                    </p>
                    <p
                        className="w-full h-min text-[16px] xs:text-[20px] relative -top-3 xs:-top-1 xl:text-[33px] duration-500"
                        style={{ opacity }}>
                        As a dedicated
                        <span className="font-medium cursor-pointer">
                            {' '}
                            <HoverImage
                                image={devmountain}
                                width="270px"
                                height="138px"
                                offsetX={-135}
                                offsetY={-170}>
                                <a
                                    href="https://devmountain.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-[#0094FF]">
                                    Devmountain
                                </a>
                            </HoverImage>{' '}
                            <HoverImage
                                image={devmountainCertificate}
                                width="270px"
                                height="200px"
                                offsetX={-135}
                                offsetY={-230}>
                                <a
                                    href="https://www.linkedin.com/feed/update/urn:li:activity:6918308644237312000/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-[#0094FF]">
                                    graduate
                                </a>
                            </HoverImage>{' '}
                        </span>
                        with a deep-seated passion for frontend development. I
                        thrive in supporting my team members in achieving our
                        shared professional goals.
                    </p>
                    <Link
                        to="/about"
                        className=" h-min text-[16px] xs:text-[18px] text-[#0094FF] mt-1 xl:text-[28px] duration-300 hover:text-white relative z-20"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        See my work
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Landing;
