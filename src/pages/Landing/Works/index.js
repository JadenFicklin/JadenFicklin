import React from 'react';

import banner from '../images/banner.svg';
import svgApp from '../images/svgApp.png';
import oakandstone from '../images/oakandstone.png';
import Project from './Project';
import { useOpacity } from '../../../customComponents/OpacityContext';
import { HiArrowUturnUp } from 'react-icons/hi2';

function Works() {
    const { opacity } = useOpacity();

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
        <div
            className="relative h-min pb-[1vh] duration-300"
            style={{ opacity }}>
            <div className="w-full mb-[10vh] md:mb-[35vh]">
                <div
                    className="w-full bg-center bg-no-repeat bg-cover h-[300px]"
                    style={{ backgroundImage: `url(${banner})` }}>
                    <div className="relative w-8/12 pt-12 mx-auto text-white md:left-6">
                        <h2 className=" text-[50px] font-medium xl:text-[86px]">
                            Works
                        </h2>
                    </div>
                </div>
                {/* project one */}
                <div className="relative left-0 w-8/12 mx-auto xl:-left-[2%]">
                    <Project project={projects[0]} />

                    {/* project two */}
                    <div className="mt-96 mb-[30vh]">
                        <Project project={projects[1]} />
                        <div className="flex justify-center"></div>
                    </div>
                </div>
            </div>
            <button
                className="font-semibold text-[#585858] text-start absolute bottom-12 left-3/4"
                onClick={scrollToTop}>
                Back to top <HiArrowUturnUp className="inline ml-2" />
            </button>
        </div>
    );
}

export default Works;
