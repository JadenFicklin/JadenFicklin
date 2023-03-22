import React, { useState, useEffect } from 'react';

const CursorFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: position.y,
                left: position.x,
                width: '220px',
                height: '220px',
                borderRadius: '50%',
                backgroundColor: 'black',
                pointerEvents: 'none',
                zIndex: 1,
                transform: 'translate(-50%, -50%) scale(0)',
                transition: 'transform 0.3s'
            }}
            className="cursor-follower"></div>
    );
};

export default CursorFollower;
