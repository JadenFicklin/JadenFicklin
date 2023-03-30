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
                    I love building websites using modular, clean, and reusable
                    code that is easy to reconstruct if needed.<br></br>
                    <br></br> I'm constantly learning new ways to make my code
                    better and more efficient. Working in a team environment is
                    my favorite part of the job, and I thrive on collaborating
                    with others to achieve great results.<br></br>
                    <br></br> My passion for web development drives me to stay
                    up-to-date with the latest technologies and best practices.
                    I believe that my dedication to producing high-quality work
                    makes me a valuable asset to any web development project.
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
