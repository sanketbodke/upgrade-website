import React from 'react';
import Button from "@/components/Button/Button";
import Image from "next/image";
import { images } from "@/constant";
import {startBannerContent} from "@/constant/text";

function StartBanner() {
    return (
        <div className="bg-white py-20">
            <div className="container flex flex-col md:flex-row justify-between items-center bg-gradient-to-r pt-8 px-6 md:px-20 rounded-[20px]">
                <div className="flex flex-col gap-4 w-full md:basis-[50%]">
                    <h1 className="text-3xl md:text-5xl font-bold leading-none text-white uppercase">
                        {startBannerContent.heading}
                    </h1>
                    <p className="text-base md:text-lg text-[#FFFFFF]">
                        {startBannerContent.paragraph}
                    </p>
                    <Button
                        bgColor="#00B512"
                        textColor="#FFFFFF"
                        content={startBannerContent.buttonText}
                    />
                </div>
                <div className="w-full md:w-[50%] flex justify-center items-center mt-6 md:mt-0">
                    <Image
                        src={images.StartBannerImg}
                        alt={"Get Started Image"}
                        layout="responsive"
                        width={600}
                        height={400}
                        className="object-cover bg-center"
                    />
                </div>
            </div>
        </div>
    );
}

export default StartBanner;