import React from 'react';
import Image from "next/image";
import { icons } from "@/constant";

function SectionHeading({ bgColor, content, textColor }) {
    return (
        <div
            className="flex items-center gap-2 w-fit p-3 rounded-[20px] font-bold"
            style={{ backgroundColor: bgColor }}
        >
            <Image
                src={icons.fire}
                alt="fire img"
                className="object-cover"
            />
            <p className="text-sm uppercase" style={{ color: textColor }}>
                {content}
            </p>
        </div>
    );
}

export default SectionHeading;