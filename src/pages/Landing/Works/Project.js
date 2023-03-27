import React from 'react';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

const Project = ({ project }) => (
    <div className="z-20 grid w-full grid-cols-1 h-min md:grid-cols-2 md:w-9/12 md:mx-auto">
        <a
            href={project.viewSite}
            target="_blank"
            rel="noreferrer"
            className="md:order-2">
            <div
                style={{
                    backgroundImage: `url(${project.image})`,
                    paddingTop: '56.25%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                className="mx-auto -mt-32 w-[90%] md:m-auto md:mt-20 md:scale-125 xl:mt-5 xl:scale-[135%] relative"></div>
        </a>
        <div className="w-9/12 mx-auto mt-10 xl:scale-125 xl:ml-32">
            <h3 className="text-4xl">{project.name}</h3>
            <p className=" text-[26px] mt-6 max-w-[300px]">{project.subtext}</p>
            <div className="text-[23px] font-semibold flex flex-wrap mt-6">
                <a
                    href={project.viewSite}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full hover:text-[#0094FF] relative ease-in-out duration-200">
                    View Site
                    <span>
                        <BsFillArrowUpRightCircleFill className="inline ml-3 -mt-1" />
                    </span>
                </a>
                <a
                    href={project.viewCode}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full hover:text-[#0094FF] relative ease-in-out duration-200">
                    View Code
                    <span>
                        <BsFillArrowUpRightCircleFill className="inline ml-3 -mt-1" />
                    </span>
                </a>
                <button className="flex self-start w-full relative group ease-in-out duration-200 hover:text-[#0094FF] mt-6">
                    More Info
                    <span>
                        <BsFillArrowUpRightCircleFill className="inline ml-3 -mt-1 duration-200 group-hover:rotate-[135deg]" />
                    </span>
                </button>
            </div>
        </div>
    </div>
);

export default Project;
