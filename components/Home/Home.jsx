import Image from "next/image";
import { images } from "@/constant";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Button from "@/components/Button/Button";
import {homeContent} from "@/constant/text";

export default function Home() {
    return (
        <div className="container flex flex-col md:flex-row gap-4 justify-center items-center h-[100vh] px-4">
            <div className="basis-full md:basis-[50%] flex flex-col gap-4 justify-center items-start text-left">
                <SectionHeading
                    bgColor={"#2E4D5F"}
                    textColor={"#FFFFFF"}
                    content={homeContent.sectionHeading}
                />
                <div>
                    <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl leading-tight md:leading-none">
                        {homeContent.mainHeading}
                        <span className="text-[#E2FF54]">{homeContent.highlightedText}</span>
                    </h1>
                </div>
                <p className="text-white text-sm md:text-base lg:text-lg">
                    {homeContent.description}
                </p>
                <Button
                    bgColor={"#00B512"}
                    textColor={"#FFFFFF"}
                    content={homeContent.buttonText}
                />
            </div>

            <div className="hidden md:basis-[50%] md:flex justify-center items-center">
                <Image
                    src={images.homeImage}
                    alt="Home Image"
                    className="object-cover bg-center"
                />
            </div>
        </div>
    );
}