import React from 'react';

import portrait from '../images/Jaden.jpg';

import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Introduction() {
    return (
        <div className="grid w-9/12 grid-cols-1 mx-auto lg:grid-cols-2 lg:mt-24 xl:w-8/12 xl:relative xl:-left-[5%]">
            <div className="relative w-full lg:grid lg:justify-content-center">
                <img
                    src={portrait}
                    alt="picture of Jaden"
                    className=" mt-10 max-w-[330px] w-[90%] lg:absolute lg:right-[30%] xl:right-[20%] "
                />
            </div>
            <div className="w-full">
                {/* introduction text */}
                <h1 className="text-[18px] mt-6 font-medium xs:text-[22px] md:text-[28px] ">
                    <p>Hello!</p>
                    <p className="mt-3">My name is Jaden Ficklin</p>
                </h1>
                <p className="mt-7 md:text-[16px]">
                    I'm passionate about crafting websites using modular, clean,
                    and reusable code. <br></br>
                    <br></br> I find that I am constantly coding in my free
                    time. This propels me towards continuous learning and
                    self-improvement. I have 3 older brothers who are also
                    website developers, their encouragement inspires me to push
                    the boundaries of programming. <br></br>
                    <br></br>
                    Above all, I firmly believe in the power of collaboration
                    and learning from fellow developers. Embracing guidance and
                    exchanging ideas with others will lead to mutual growth and
                    ultimately, better results.
                </p>
                {/* links */}
                <div className="flex flex-wrap mt-6 font-semibold">
                    <Link
                        to="/contact"
                        className="w-full hover:text-[#0094FF] relative ease-in-out duration-200">
                        Contact me
                        <span>
                            <BsFillArrowUpRightCircleFill className="inline ml-3 -mt-1" />
                        </span>
                    </Link>
                    <a
                        href="https://www.linkedin.com/in/jaden-ficklin-b1686a21a/"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full hover:text-[#0094FF] relative ease-in-out duration-200">
                        LinkedIn
                        <span>
                            <BsFillArrowUpRightCircleFill className="inline ml-3 -mt-1" />
                        </span>
                    </a>
                    <a
                        href="https://docs.google.com/document/d/1JdSuQ0_cHch6DIrJgT5rn2y2O_9ECBs2zPuc2gsoOkc/edit?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full hover:text-[#0094FF] relative ease-in-out duration-200">
                        Resume
                        <span>
                            <BsFillArrowUpRightCircleFill className="inline ml-3 -mt-1" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
