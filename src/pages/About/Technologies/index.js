import React, { useState } from 'react';

import banner from '../images/banner.svg';
import { HiArrowUturnUp } from 'react-icons/hi2';

import {
    SiTypescript,
    SiJavascript,
    SiReact,
    SiCss3,
    SiTailwindcss,
    SiExpress,
    SiPostgresql,
    SiFirebase,
    SiNetlify,
    SiHeroku,
    SiAxios,
    SiFigma,
    SiStripe
} from 'react-icons/si';
import { GiWireCoil } from 'react-icons/gi';
import { RiGlobalLine } from 'react-icons/ri';
import { TbApi, TbVectorSpline } from 'react-icons/tb';
import { FaNodeJs } from 'react-icons/fa';
import Links from '../../../components/Links';

function Technologies() {
    const [hoveredState, setHoveredState] = useState(null);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const icons = [
        <SiJavascript />,
        <SiTypescript />,
        <SiReact />,
        <GiWireCoil />,
        <RiGlobalLine />,
        <SiCss3 />,
        <SiTailwindcss />,
        <TbApi />,
        <FaNodeJs />,
        <SiExpress />,
        <SiPostgresql />,
        <SiFirebase />,
        <SiNetlify />,
        <SiHeroku />,
        <SiAxios />,
        <SiFigma />,
        <SiStripe />,
        <TbVectorSpline />
    ];

    const technologiesList = [
        {
            type: 'Front-end',
            list: [
                [1, 'Javascript'],
                [2, 'Typescript'],
                [3, 'React'],
                [4, 'Recoil'],
                [5, 'Zustand'],
                [6, 'Vanilla CSS'],
                [7, 'Tailwind'],
                [8, 'APIs']
            ]
        },
        {
            type: 'Back-end',
            list: [
                [9, 'Node JS'],
                [10, 'Express'],
                [11, 'PostgreSQL']
            ]
        },
        {
            type: 'Deployment',
            list: [
                [12, 'Firebase'],
                [13, 'Netlify'],
                [14, 'Heroku']
            ]
        },
        {
            type: 'Additional Tools',
            list: [
                [15, 'Axios'],
                [16, 'Figma'],
                [17, 'Stripe'],
                [18, 'Spline']
            ]
        }
    ];

    return (
        <div className=" mt-20 xl:mt-0 xl:absolute xl:top-[100vh] xl:w-full relative">
            <Links />
            <div
                className="w-full bg-center bg-no-repeat bg-cover h-[300px]"
                style={{ backgroundImage: `url(${banner})` }}>
                <div className="w-[80vw] sm:w-[70vw] ml-[10vw] sm:ml-[15vw] pt-12 text-white flex justify-between items-end ">
                    <h2 className="text-[33px] xs:text-[42px] font-medium lg:text-[86px] flex flex-wrap">
                        <p>Technologies</p>
                        {hoveredState && (
                            <div className="mt-2 ml-24 xs:ml-32 sm:ml-12 lg:mt-6">
                                {icons[hoveredState - 1]}
                            </div>
                        )}
                    </h2>
                </div>
            </div>
            <div className="grid w-8/12 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto h-min mb-[20vh] text-[14px] md:text-[20px]">
                {technologiesList.map((item) => (
                    <div className="flex flex-wrap mt-12 h-min">
                        <h2 className="w-full mb-6 font-medium">{item.type}</h2>
                        {item.list.map((technology) => (
                            <p
                                className="w-full text-[#565656] py-3 cursor-default"
                                onMouseEnter={() =>
                                    setHoveredState(technology[0])
                                }
                                onMouseLeave={() => setHoveredState(null)}>
                                {technology[1]}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
            <button
                className="hidden md:block font-semibold text-[#585858] text-start absolute bottom-12 left-3/4 hover:text-[#0094FF] duration-300"
                onClick={scrollToTop}>
                Back to top <HiArrowUturnUp className="inline ml-2" />
            </button>
        </div>
    );
}

export default Technologies;
