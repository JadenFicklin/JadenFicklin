import React, { useRef } from 'react';
import { FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi';

function Links() {
    return (
        <div className="fixed bottom-0 left-[6%] h-[337px] w-[37px] hidden md:block">
            <div className="h-[150px] flex content-between flex-wrap">
                <a
                    href="https://github.com/JadenFicklin"
                    target="_blank"
                    rel="noreferrer"
                    className="w-[37px] height-[37px] ">
                    <FiGithub className="w-[93%] h-[93%] grid place-self-center hover:stroke-[#0094FF]" />
                </a>
                <a
                    href="https://www.linkedin.com/in/jaden-ficklin-b1686a21a/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-[37px] height-[37px]">
                    <FiLinkedin className="w-[90%] h-[90%] grid place-self-center hover:stroke-[#0094FF]" />
                </a>
                <a
                    href="https://www.facebook.com/jaden.ficklin/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-[37px] height-[37px]">
                    <FiFacebook className="w-[90%] h-[90%] grid place-self-center hover:stroke-[#0094FF]" />
                </a>
            </div>
            <div className=" h-[185px] w-full flex justify-center items-end ">
                <div className="w-[1px] h-[155px] bg-black"></div>
            </div>
        </div>
    );
}

export default Links;
