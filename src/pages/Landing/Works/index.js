import React, { useState } from 'react';

import banner from '../images/banner.svg';
import arrowNe from '../images/arrow-ne.svg';
import svgApp from '../images/svgApp.png';
import oakandstone from '../images/oakandstone.png';

function Works() {
    const [projectNumber, setProjectNumber] = useState(0);
    const projects = [
        {
            image: svgApp,
            name: 'SVG Library',
            subtext: 'Choose from a selection of highly customizable SVG icons',
            viewSite: 'https://tablericons.com/',
            viewCode: 'github.com',
            moreInfo: 'this is a project that used xyz..',
            languagesUsed: [
                'React',
                'Javascript',
                'Tailwind',
                'Firebase',
                'Zustand'
            ]
        },
        {
            image: oakandstone,
            name: 'Oak and Stone',
            subtext:
                'Freelance project for a cabinet remodel construction business.',
            viewSite: 'https://oakandstone.netlify.app/',
            viewCode: 'https://github.com/JadenFicklin/Oak-n-stone',
            moreInfo: 'this is a project that used xyz..',
            languagesUsed: ['React', 'Javascript', 'Netlify']
        }
    ];

    return (
        <div className="w-full mb-[10vh] md:mb-[35vh]">
            <div
                className="w-full bg-center bg-no-repeat bg-cover h-[300px]"
                style={{ backgroundImage: `url(${banner})` }}>
                <div className="w-[80vw] sm:w-[70vw] ml-[10vw] sm:ml-[15vw] pt-12 text-white  flex justify-between items-end ">
                    <h2 className=" text-[50px] font-medium">Works</h2>
                    <div className="mb-3">
                        <p>Project 0{projectNumber + 1}/02</p>
                        {projectNumber === 0 && (
                            <button onClick={() => setProjectNumber(1)}>
                                Next
                            </button>
                        )}
                        {projectNumber === 1 && (
                            <button onClick={() => setProjectNumber(0)}>
                                Previous
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className="z-20 grid w-full grid-cols-1 h-min md:grid-cols-2 md:w-9/12 md:mx-auto ">
                <a
                    href={projects[projectNumber].viewSite}
                    target="_blank"
                    rel="noreferrer"
                    className="md:order-2">
                    <div
                        style={{
                            backgroundImage: `url(${projects[projectNumber].image})`,
                            paddingTop: '56.25%', // Use the aspect ratio of your image (9/16 = 0.5625 * 100 = 56.25% for a 16:9 aspect ratio)
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                        className="mx-auto -mt-32 w-[90%] md:m-auto md:mt-20 md:scale-125 xl:mt-5 xl:scale-[135%] relative">
                        <div className="absolute w-8/12 ml-2 h-min -bottom-6 xs:-bottom-1 xs:w-10/12 -left-8 flex md:-bottom-6 lg:-bottom-0 lg:-left-12 text-[10px] flex-wrap justify-end">
                            {projects[projectNumber].languagesUsed.map(
                                (item) => {
                                    return (
                                        <p className="bg-[#2F4955] mx-[1px] my-[1px] px-[2px] text-white lg:mx-1">
                                            {item}
                                        </p>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </a>
                <div className="w-9/12 mx-auto mt-10 xl:scale-125 xl:ml-32">
                    {projects.map(
                        (item, index) =>
                            index === projectNumber && (
                                <>
                                    <h3 className="text-4xl">{item.name}</h3>
                                    <p className=" text-[26px] mt-6 max-w-[300px]">
                                        {item.subtext}
                                    </p>
                                    <div className="text-[23px] font-semibold flex flex-wrap mt-6">
                                        <a
                                            href={item.viewSite}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-full">
                                            View Site{' '}
                                            <span>
                                                <img
                                                    src={arrowNe}
                                                    alt="go to project"
                                                    className="inline ml-8"
                                                />
                                            </span>
                                        </a>
                                        <a
                                            href={item.viewCode}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-full">
                                            View Code
                                            <span>
                                                <img
                                                    src={arrowNe}
                                                    alt="go to project"
                                                    className="inline ml-5"
                                                />
                                            </span>
                                        </a>
                                        <button className="flex self-start w-full ">
                                            More Info
                                            <span>
                                                <img
                                                    src={arrowNe}
                                                    alt="go to project"
                                                    className="inline ml-9"
                                                />
                                            </span>
                                        </button>
                                    </div>
                                </>
                            )
                    )}
                </div>
            </div>
        </div>
    );
}

export default Works;
