import React from 'react';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

const Project = ({ project }) => {
    console.log(project.languagesUsed);

    return (
        <div className="z-20 grid w-full grid-cols-1 h-min md:grid-cols-2 md:mx-auto">
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
                    className="mx-auto -mt-32 w-[90%] md:m-auto md:mt-20 md:scale-125 xl:mt-5 xl:scale-[135%] relative hover:scale-105 md:hover:scale-[130%] xl:hover:scale-[140%] duration-300"></div>
            </a>
            <div className="w-9/12 mx-auto mt-10 xl:scale-125 xl:ml-32">
                <h3 className="text-3xl font-medium">{project.name}</h3>
                <p className=" text-[18px] mt-6 max-w-[300px]">
                    {project.subtext}
                </p>
                <div className="w-[75%] mt-2">
                    <div className="flex flex-wrap">
                        {project.languagesUsed.map((item) => (
                            <div className="bg-[#373737] px-2 mr-1 my-[2px] text-white w-min text-[10px] flex whitespace-nowrap cursor-default">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-[18px] font-semibold flex flex-wrap mt-6">
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
                </div>
            </div>
        </div>
    );
};
export default Project;
