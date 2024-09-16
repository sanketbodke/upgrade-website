import React from 'react';
import Image from "next/image";
import { icons, images } from "@/constant";
import Link from "next/link";
import {footerContent} from "@/constant/text";

function Footer() {
    return (
        <footer className="bg-white py-10 md:py-20">
            <div className="container flex flex-col items-center">
                <div className="flex flex-col items-center gap-4">
                    <Image
                        src={images.FooterLogo}
                        alt={"Logo"}
                        className="w-32 md:w-auto object-cover"
                    />
                    <div className="flex items-center gap-4 md:gap-6">
                        <Image
                            src={images.playStore}
                            alt={"Play Store"}
                            className="w-24 md:w-auto object-cover"
                        />
                        <Image
                            src={images.appStore}
                            alt={"App Store"}
                            className="w-24 md:w-auto object-cover"
                        />
                    </div>
                </div>
                <div className="flex justify-center flex-col md:flex-row gap-4 md:gap-8 my-6 md:my-10 w-full">
                    <Link href={"/"} className="text-[#646161] text-base w-full md:w-auto text-center md:text-left py-2">
                        {footerContent.privacyPolicy}
                    </Link>
                    <Link href={"/"} className="text-[#646161] text-base w-full md:w-auto text-center md:text-left py-2">
                        {footerContent.termsConditions}
                    </Link>
                    <Link href={"/"} className="text-[#646161] text-base w-full md:w-auto text-center md:text-left py-2">
                        {footerContent.copyrightPolicy}
                    </Link>
                    <Link href={"/"} className="text-[#646161] text-base w-full md:w-auto text-center md:text-left py-2">
                        {footerContent.dataPolicy}
                    </Link>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-4 md:gap-6">
                        <Image src={icons.twitter} alt={footerContent.socialMedia.twitter} className="w-6 md:w-8" />
                        <Image src={icons.facebook} alt={footerContent.socialMedia.facebook} className="w-6 md:w-8" />
                        <Image src={icons.instagram} alt={footerContent.socialMedia.instagram} className="w-6 md:w-8" />
                        <Image src={icons.linkedin} alt={footerContent.socialMedia.linkedin} className="w-6 md:w-8" />
                    </div>
                    <p className="text-sm md:text-base text-[#646060]">
                        <b>Send Your Feedback:</b> {footerContent.feedbackEmail}
                    </p>
                    <p className="text-sm md:text-base text-[#646060]">
                        {footerContent.copyrightText}
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;