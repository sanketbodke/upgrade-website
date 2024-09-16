import React from 'react';
import Image from "next/image";
import { images } from "@/constant";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import AboutCard from "@/components/About/AboutCards/AboutCard";
import {aboutContent} from "@/constant/text";

function About() {
    return (
        <div id="about" className="bg-white py-20">
            <div className="container flex flex-col md:flex-row gap-12">
                <div className="flex-1 order-2 md:order-1">
                    <Image
                        src={images.AboutUsImage}
                        alt={"Saving Image"}
                        layout="responsive"
                        className="w-full h-auto object-cover"
                    />
                </div>

                <div className="flex-1 flex flex-col gap-4 order-1 md:order-2">
                    <SectionHeading
                        bgColor={"#EAECF0"}
                        content={aboutContent.sectionHeading}
                        textColor={"#000000"}
                    />
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight uppercase">
                        {aboutContent.mainHeading}
                    </h1>

                    {aboutContent.cards.map((card, index) => (
                        <AboutCard
                            key={index}
                            heading={card.heading}
                            content={card.content}
                            bgColor={card.bgColor}
                            textColor={card.textColor}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;