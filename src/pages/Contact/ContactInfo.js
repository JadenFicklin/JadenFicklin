import React from 'react';

import '../../App.css';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

function ContactInfo() {
    return (
        <div className="text-[#404040] mx-auto w-10/12 mt-12 md:w-8/12 grid grid-cols-1 lg:columns-40-60-lg lg:mt-40">
            <header>
                <h2 className="font-medium">EMAIL</h2>
                <p>fullstackjaden@gmail.com</p>
                <h2 className="mt-6 font-medium">PHONE</h2>
                <p>801-690-1869</p>
                <h2 className="mt-6 font-medium">RESUME</h2>
                <a
                    href="https://docs.google.com/document/d/1JdSuQ0_cHch6DIrJgT5rn2y2O_9ECBs2zPuc2gsoOkc/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full hover:text-[#0094FF] relative ease-in-out duration-200 text-black">
                    View my resume
                    <span>
                        <BsFillArrowUpRightCircleFill className="inline ml-3 -mt-[1px]" />
                    </span>
                </a>
            </header>
            <div className="w-full p-3 pb-6 mt-16 text-black bg-white lg:mt-0">
                <h1 className="text-[30px] w-11/12 mx-auto mt-3">Contact</h1>
                <p className="w-11/12 mx-auto mt-3">
                    Let's work together to build something great.
                </p>
                <div className="w-11/12 mx-auto mt-3">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <input
                            type="text"
                            className="my-2 border-b-[1px] pb-3 border-b-black outline-none w-full md:w-11/12"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            className="my-2 border-b-[1px] pb-3 border-b-black outline-none w-full"
                            placeholder="Last Name"
                        />
                    </div>
                    <input
                        type="text"
                        className="my-2 border-b-[1px] pb-3 border-b-black outline-none w-full"
                        placeholder="Email Address"
                    />
                    <input
                        type="text"
                        className="my-2 border-b-[1px] pb-3 border-b-black outline-none w-full"
                        placeholder="Phone Number"
                    />
                    <textarea
                        type="text"
                        className="my-2 border-b-[1px] pb-3 border-b-black outline-none w-full"
                        placeholder="Message"
                    />
                    <button className="w-full py-2 text-white bg-black">
                        Get in touch
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
