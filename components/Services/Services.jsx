import React from 'react';
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Image from "next/image";
import { icons, images } from "@/constant";
import {servicesContent} from "@/constant/text";

function Services() {
    return (
        <div id="services" className="bg-white py-20">
            <div className="container">
                <div className="flex flex-col justify-center items-center gap-4">
                    <SectionHeading
                        bgColor="#F9FAFB"
                        textColor="#000000"
                        content={servicesContent.sectionHeading}
                    />
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none uppercase text-center mx-8 mb-4">
                        {servicesContent.mainHeading}
                    </h1>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="bg-[#f7f9f8] flex flex-col md:flex-row justify-around items-center rounded-[20px] w-full p-4">
                        <Image
                            src={images.ServicesM}
                            alt={"Mobile"}
                            className="w-full md:w-auto object-cover bg-center"
                        />
                        <div className="w-full md:w-[400px] mt-4 md:mt-0">
                            <Image
                                src={icons[servicesContent.services[0].icon]}
                                alt={"Web Icon"}
                                className="object-cover bg-center"
                            />
                            <h1 className="text-xl md:text-2xl lg:text-3xl text-black font-bold mt-2">
                                {servicesContent.services[0].title}
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 w-full">
                        <div className="bg-[#f7f9f8] p-8 rounded-[20px] flex flex-col gap-3 flex-1">
                            <Image
                                src={icons[servicesContent.services[1].icon]}
                                alt={"Finance"}
                                className="object-cover bg-center"
                            />
                            <h1 className="text-xl md:text-2xl lg:text-3xl text-black font-bold mt-2">
                                {servicesContent.services[1].title}
                            </h1>
                            <p className="text-sm md:text-base text-[#676666]">
                                {servicesContent.services[1].description}
                            </p>
                            <Image
                                src={images[servicesContent.services[1].image]}
                                alt={"Graph"}
                                className="flex mx-auto rounded-[20px] object-cover bg-center"
                            />
                        </div>
                        <div className="bg-[#001027] p-8 rounded-[20px] flex flex-col gap-3 flex-1">
                            <Image
                                src={icons[servicesContent.services[1].icon]}
                                alt={"Finance"}
                                className="object-cover bg-center"
                            />
                            <h1 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mt-2">
                                {servicesContent.services[1].title}
                            </h1>
                            <p className="text-sm md:text-base text-[#A7A7A7]">
                                {servicesContent.services[1].description}
                            </p>
                            <Image
                                src={images[servicesContent.services[1].image]}
                                alt={"Balance"}
                                className="flex mx-auto rounded-[20px] object-cover bg-center"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <div className="bg-[#E2FF54] rounded-[20px] flex flex-col gap-2 p-6 flex-1 h-[180px]">
                            <h1 className="text-xl md:text-2xl lg:text-3xl text-black font-bold mt-2">
                                {servicesContent.services[2].dedicationTitle}
                            </h1>
                            <p className="text-sm md:text-base text-[#403F3F]">
                                {servicesContent.services[2].dedicationDescription}
                            </p>
                        </div>
                        <div className="bg-[#f7f9f8] rounded-[20px] flex flex-col gap-2 p-6 flex-1 h-[180px]">
                            <Image
                                src={icons.finance}
                                alt={"Finance"}
                                className="object-cover bg-center"
                            />
                            <h1 className="text-xl md:text-2xl lg:text-3xl text-black font-bold mt-2">
                                {servicesContent.services[2].dedicationTitle}
                            </h1>
                        </div>
                        <div className="bg-[#2D907A] rounded-[20px] flex-col gap-2 p-6 flex-1 h-[180px] flex justify-center items-center">
                            <h1 className="text-xl md:text-2xl lg:text-3xl text-white font-bold text-center">
                                {servicesContent.services[2].visitServicesTitle}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;