import React from 'react';

import banner from '../images/banner.svg';
import svgApp from '../images/svgApp.png';
import oakandstone from '../images/oakandstone.png';
import { HiArrowUturnUp } from 'react-icons/hi2';

import Project from './Project';

function Works() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
                <div className="w-[80vw] sm:w-[70vw] ml-[10vw] sm:ml-[15vw] pt-12 text-white flex justify-between items-end ">
                    <h2 className=" text-[50px] font-medium xl:text-[86px]">
                        Works
                    </h2>
                </div>
            </div>
            {/* project one */}
            <Project project={projects[0]} />

            {/* project two */}
            <div className="mt-96 mb-[30vh]">
                <Project project={projects[1]} />
                <div className="flex justify-center">
                    <button
                        className="w-9/12 mt-32 font-semibold text-[#585858] text-start md:text-end"
                        onClick={scrollToTop}>
                        Back to top <HiArrowUturnUp className="inline ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Works;
