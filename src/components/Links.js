import React from 'react';
import { BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';

function Links() {
    return (
        <div className="fixed bottom-0 left-[7%] h-[337px] w-[37px] hidden md:block">
            <div className="h-[150px] flex content-between flex-wrap">
                <a
                    href="https://github.com/JadenFicklin"
                    target="_blank"
                    rel="noreferrer"
                    className="w-[37px] height-[37px] fill-[#0094FF]">
                    <BsGithub className="w-[93%] h-[93%] grid place-self-center" />
                </a>
                <a
                    href="https://www.linkedin.com/in/jaden-ficklin-b1686a21a/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-[37px] height-[37px] fill-[#0094FF]">
                    <BsLinkedin className="w-[90%] h-[90%] grid place-self-center" />
                </a>
                <a
                    href="https://www.facebook.com/jaden.ficklin/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-[37px] height-[37px] fill-[#0094FF]">
                    <BsFacebook className="w-[90%] h-[90%] grid place-self-center" />
                </a>
            </div>
            <div className=" h-[185px] w-full flex justify-center items-end ">
                <div className="w-[1px] h-[155px] bg-black"></div>
            </div>
        </div>
    );
}

export default Links;
