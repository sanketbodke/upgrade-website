import React from 'react';

function AboutCard({heading, content, bgColor, textColor}) {
    return (
        <div
            className="border p-4 rounded"
            style={{background: bgColor}}
        >
            <b>{heading}</b>
            <p style={{color: textColor}}>{content}</p>
        </div>
    );
}

export default AboutCard;