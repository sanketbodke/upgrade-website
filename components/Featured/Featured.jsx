import React from 'react';
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Image from "next/image";
import { images } from "@/constant";
import Button from "@/components/Button/Button";
import {featuredContent} from "@/constant/text";

function Featured() {
    return (
        <div id="features" className="bg-white py-20">
            <div className="container flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="flex flex-col gap-4 md:basis-[50%] text-left order-1 md:order-1">
                    <SectionHeading
                        content={featuredContent.sectionHeading}
                        bgColor="#EAECF0"
                        textColor="#000000"
                    />
                    <h1 className="text-3xl md:text-5xl font-bold leading-none uppercase">
                        {featuredContent.mainHeading}
                    </h1>
                    <ul className="list-disc text-[#676666] pl-6">
                        {featuredContent.features.map((feature, index) => (
                            <li key={index} className="pb-4">{feature}</li>
                        ))}
                    </ul>

                    <Button
                        bgColor={"#00B512"}
                        textColor={"#FFFFFF"}
                        content={featuredContent.buttonText}
                    />
                </div>

                <div className="md:basis-[50%] flex justify-center order-2 md:order-2">
                    <Image
                        src={images.Featured}
                        alt={"Featured Image"}
                        layout="responsive"
                        width={500}
                        height={300}
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default Featured;