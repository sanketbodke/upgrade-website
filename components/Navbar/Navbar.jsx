"use client";

import React from 'react';
import Image from 'next/image';
import { images } from '@/constant';
import { AiOutlineMenu } from 'react-icons/ai';
import Menu from "@/components/Menu/Menu";
import Link from 'next/link';
import {navbarContent} from "@/constant/text";
import useNavbar from "@/components/Navbar/useNavbar";

function Navbar() {
    const {
        menuOpen,
        toggleMenu
    } = useNavbar()

    return (
        <nav className="fixed top-0 left-0 w-full bg-gradient-to-r py-6 px-6 md:px-[120px] flex justify-between items-center">
            <div className="flex items-center gap-4">
                <Link href="/">
                    <Image src={images.logo} alt="logo" />
                </Link>
            </div>

            <div className="hidden md:flex flex-grow">
                <ul className="flex items-center gap-8 text-white text-base flex-grow justify-center">
                    <Link href="#about">
                        <li>{navbarContent.aboutUs}</li>
                    </Link>
                    <Link href="#features">
                        <li>{navbarContent.feature}</li>
                    </Link>
                    <Link href="#services">
                        <li>{navbarContent.services}</li>
                    </Link>
                    <Link href="#testimonials">
                        <li>{navbarContent.testimonials}</li>
                    </Link>
                </ul>
            </div>

            <div className="hidden md:flex items-center gap-4">
                <button className="border py-2 px-6 text-white rounded text-base">
                    {navbarContent.signIn}
                </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
                <AiOutlineMenu className="text-white text-3xl cursor-pointer" onClick={toggleMenu} />
            </div>

            <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} logo={images.logo} />
        </nav>
    );
}

export default Navbar;