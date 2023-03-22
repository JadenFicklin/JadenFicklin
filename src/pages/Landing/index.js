import React from 'react';
import Introduction from './Introduction';
import Works from './Works';

function Landing() {
    return (
        <div className="w-full overflow-hidden h-min">
            <Introduction />
            <Works />
        </div>
    );
}

export default Landing;
