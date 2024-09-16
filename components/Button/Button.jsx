import React from 'react';

function Button({bgColor, textColor, content}) {
    return (
        <button
            className="text-white font-bold text-sm px-2 py-3.5 w-[150px] rounded-[24px]"
            style={{backgroundColor: bgColor, color: textColor}}
        >
            {content}
        </button>
    );
}

export default Button;