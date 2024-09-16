import React from "react";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { icons, images } from "@/constant";
import TestimonialCard from "@/components/Testimonial/TestimonialCard/TestimonialCard";
import {testimonialsContent} from "@/constant/text";

function Testimonial() {
    return (
        <div id="testimonials" className="bg-[#f7f9f8] py-20">
            <div className="container flex flex-col items-center gap-4">
                <div className="flex flex-col justify-center items-center gap-4">
                    <SectionHeading
                        bgColor="#FFFFFF"
                        textColor="#000000"
                        content={testimonialsContent.sectionHeading}
                    />
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none uppercase text-center mb-4">
                        {testimonialsContent.mainHeading}
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row gap-6 items-center justify-center flex-wrap w-full">
                    {testimonialsContent.testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            bgColor={testimonial.bgColor}
                            quote={testimonial.quote}
                            textColor={testimonial.textColor}
                            userImage={images[testimonial.userImage]}
                            starsImage={icons[testimonial.starsImage]}
                            name={testimonial.name}
                            position={testimonial.position}
                            quoteImage={icons[testimonial.quoteImage]}
                            className="w-full md:w-[300px]"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonial;