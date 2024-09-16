import React from 'react';
import Image from "next/image";
import { images } from "@/constant";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import {truestContent} from "@/constant/text";
import Button from "@/components/Button/Button";

function Truest() {
    return (
        <div className="py-20">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="md:basis-[50%] hidden md:block">
                    <Image
                        src={images.Truest}
                        alt={"Trust Image"}
                        layout="responsive"
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col gap-4 md:basis-[50%]">
                    <SectionHeading
                        content={truestContent.sectionHeading}
                        bgColor={"#2e4d5f"}
                        textColor={"#ffffff"}
                    />
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white uppercase">
                        {truestContent.mainHeading}
                    </h1>
                    <p className="text-sm md:text-base text-[#DBDBDB]">
                        {truestContent.description}
                    </p>
                    <Button
                        bgColor="#00B512"
                        textColor="#FFFFFF"
                        content={truestContent.buttonText}
                        className="hidden md:block"
                    />
                </div>
            </div>
        </div>
    );
}

export default Truest;