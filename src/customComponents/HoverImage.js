import React, { useState, useRef } from 'react';

function HoverImage({ children, image, width, height, offsetX, offsetY }) {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const hoverContainer = useRef(null);

    const handleMouseMove = (e) => {
        const rect = hoverContainer.current.getBoundingClientRect();
        setCursorPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <div
            ref={hoverContainer}
            className="relative inline"
            onMouseEnter={() => setIsHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setIsHovered(false)}>
            {children}
            {isHovered && (
                <div
                    className="absolute z-50 bg-center bg-no-repeat bg-cover pointer-events-none"
                    style={{
                        backgroundImage: `url(${image})`,
                        width,
                        height,
                        left: cursorPosition.x + offsetX,
                        top: cursorPosition.y + offsetY
                    }}></div>
            )}
        </div>
    );
}

export default HoverImage;
