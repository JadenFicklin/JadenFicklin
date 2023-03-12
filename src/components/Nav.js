import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <>
            <nav>
                <Link to="/">
                    <div className="text-[42px] font-light grid place-items-center border-[3px] border-black rounded-full w-[65px] h-[65px] ">
                        <p>J</p>
                    </div>
                </Link>
            </nav>
        </>
    );
}

export default Nav;
