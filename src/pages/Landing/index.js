import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import HoverImage from '../../customComponents/HoverImage';

import devmountain from './images/devmountain.JPG';
import devmountainCertificate from './images/devmountainCertificate.JPG';

function Landing() {
    return (
        <>
            <div className="relative w-full h-screen">
                <Nav />
                <div className="w-full absolute bottom-0 h-[60%]  flex flex-wrap content-start px-8 md:px-32 max-w-[1200px] mx-auto lg:left-1/2 lg:-ml-[600px] lg:content-end lg:mb-48 ">
                    <p className="w-full h-min text-[14px] xs:text-[17px] lg:text-[22px] font-light">
                        Website Developer
                    </p>
                    <p className="w-full h-min text-[46px] xs:text-[50px] mb-3 lg:text-[86px] font-medium">
                        Jaden{' '}
                        <span className="relative -top-4 xs:top-0">
                            {' '}
                            Ficklin
                        </span>
                    </p>
                    <p className="w-full h-min text-[16px] xs:text-[20px] relative -top-3 xs:-top-1 lg:text-[33px] ">
                        <span className="font-medium cursor-pointer">
                            <HoverImage
                                image={devmountain}
                                width="270px"
                                height="138px"
                                offsetX={-135}
                                offsetY={-170}>
                                <a
                                    href="https://devmountain.com/"
                                    target="_blank"
                                    rel="noreferrer">
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
                                    rel="noreferrer">
                                    graduate
                                </a>
                            </HoverImage>{' '}
                        </span>
                        with a deep-seated passion for frontend development, I
                        am driven to learn and eager to assist those around me
                        in achieving success.
                    </p>
                    <Link
                        to="/about"
                        className="w-full h-min text-[16px] xs:text-[18px] text-[#0094FF] mt-1 lg:text-[28px] ">
                        Read More
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Landing;
