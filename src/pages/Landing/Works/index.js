import React, { useState } from 'react';

import banner from '../images/banner.svg';
import arrowNe from '../images/arrow-ne.svg';
import svgApp from '../images/svgApp.png';

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
            name: 'SVG Library',
            subtext: 'Choose from a selection of highly customizable SVG icons',
            viewSite: 'svglibrary.com',
            viewCode: 'github.com',
            moreInfo: 'this is a project that used xyz..'
        }
    ];

    return (
        <div>
            <div
                className="min-w-[1728px] bg-center bg-no-repeat bg-cover h-[300px] xl:w-full relative"
                style={{ backgroundImage: `url(${banner})` }}>
                <div className="w-[80vw] ml-[10vw] pt-12 text-white  flex justify-between items-end ">
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
                <img
                    src={projectNumber === 1 && svgApp}
                    alt="Svg App"
                    className="absolute left-[50vw] -ml-[48vw] top-40 w-[96vw]"
                />
            </div>
            <div className="w-[80vw] mx-auto h-min mb-20">
                {projects.map(
                    (item, index) =>
                        index === projectNumber && (
                            <>
                                <h3 className="mt-32 text-4xl ">{item.name}</h3>
                                <p className=" text-[26px] mt-6">
                                    {item.subtext}
                                </p>
                                <div className="text-[23px] font-semibold flex flex-wrap mt-6">
                                    <a href={item.viewSite} className="w-full">
                                        View Site{' '}
                                        <span>
                                            <img
                                                src={arrowNe}
                                                alt="go to project"
                                                className="inline ml-8"
                                            />
                                        </span>
                                    </a>
                                    <a href={item.viewCode} className="w-full">
                                        View Code
                                        <span>
                                            <img
                                                src={arrowNe}
                                                alt="go to project"
                                                className="inline ml-5"
                                            />
                                        </span>
                                    </a>
                                    <a href={item.moreInfo} className="w-full">
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
    );
}

export default Works;
