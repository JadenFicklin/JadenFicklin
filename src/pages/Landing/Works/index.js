import React, { useState } from 'react';

import banner from '../images/banner.svg';
import arrowNe from '../images/arrow-ne.svg';
import svgApp from '../images/svgApp.png';
import oakandstone from '../images/oakandstone.png';

function Works() {
    const [projectNumber, setProjectNumber] = useState(1);
    const projects = [
        {
            image: svgApp,
            name: 'SVG Library',
            subtext: 'Choose from a selection of highly customizable SVG icons',
            viewSite: 'svglibrary.com',
            viewCode: 'github.com',
            moreInfo: 'this is a project that used xyz..'
        },
        {
            image: svgApp,
            name: 'Oak and Stone',
            subtext:
                'Freelance project for a cabinet remodel construction business.',
            viewSite: 'oakandstone.com',
            viewCode: 'github.com',
            moreInfo: 'this is a project that used xyz..'
        }
    ];

    return (
        <div className="w-full h-screen">
            <div
                className="w-full bg-center bg-no-repeat bg-cover h-[300px]"
                style={{ backgroundImage: `url(${banner})` }}>
                <div className="w-[80vw] sm:w-[70vw] ml-[10vw] sm:ml-[15vw] pt-12 text-white  flex justify-between items-end ">
                    <h2 className=" text-[50px] font-medium">Works</h2>
                    <div className="mb-3">
                        <p>Project 0{projectNumber}/02</p>
                        {projectNumber === 1 && (
                            <button onClick={() => setProjectNumber(2)}>
                                Next
                            </button>
                        )}
                        {projectNumber === 2 && (
                            <button onClick={() => setProjectNumber(1)}>
                                Previous
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className="z-20 grid w-full grid-cols-1 h-min">
                <img
                    src={projectNumber === 1 ? svgApp : oakandstone}
                    alt="Svg App"
                    className="mx-auto -mt-32 bg-center bg-no-repeat bg-cover w-[90%]"
                />
                <div className="w-9/12 mx-auto mt-10">
                    {projects.map(
                        (item, index) =>
                            index === projectNumber - 1 && (
                                <>
                                    <h3 className="text-4xl sm:-mt-32">
                                        {item.name}
                                    </h3>
                                    <p className=" text-[26px] mt-6 max-w-[300px]">
                                        {item.subtext}
                                    </p>
                                    <div className="text-[23px] font-semibold flex flex-wrap mt-6">
                                        <a
                                            href={item.viewSite}
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
                                        <a
                                            href={item.moreInfo}
                                            className="w-full">
                                            More Info
                                            <span>
                                                <img
                                                    src={arrowNe}
                                                    alt="go to project"
                                                    className="inline ml-8"
                                                />
                                            </span>
                                        </a>
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
