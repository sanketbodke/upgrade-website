import React from "react";
import Image from "next/image";

const TestimonialCard = ({ bgColor, quote, textColor, userImage, starsImage, name, position, quoteImage }) => {
    return (
        <div className={`p-8 rounded-[20px] flex-1`} style={{ backgroundColor: bgColor }}>
            <Image src={quoteImage} alt={"Quote"} />
            <p className={`text-base my-8`} style={{ color: textColor }}>
                {quote}
            </p>
            <div className="flex items-center gap-2">
                <Image src={userImage} alt={"User Image"} />
                <div>
                    <Image
                        src={starsImage}
                        alt={"Stars"}
                        className="object-cover"
                    />
                    <p className={`text-base font-bold`} style={{ color: textColor }}>{name}</p>
                    <p className="text-base" style={{ color: textColor === "#FFFFFF" ? "#A1A1A1" : "#454747" }}>{position}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;