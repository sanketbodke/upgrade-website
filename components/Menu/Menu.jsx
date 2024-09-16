import React from 'react';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { navbarContent } from "@/constant/text";

const Menu = ({ menuOpen, toggleMenu, logo }) => {
    return (
        <div
            className={`fixed top-0 left-0 h-full w-[70%] bg-gradient-to-r text-white transform ${
                menuOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out z-50 p-6`}
        >
            <div className="flex justify-between items-center mb-8">
                <Image src={logo} alt="logo" />
                <AiOutlineClose className="text-3xl cursor-pointer" onClick={toggleMenu} />
            </div>

            <ul className="flex flex-col gap-6">
                <Link href="#about">
                    <li onClick={toggleMenu}>{navbarContent.aboutUs}</li>
                </Link>
                <Link href="#features">
                    <li onClick={toggleMenu}>{navbarContent.feature}</li>
                </Link>
                <Link href="#services">
                    <li onClick={toggleMenu}>{navbarContent.services}</li>
                </Link>
                <Link href="#testimonials">
                    <li onClick={toggleMenu}>{navbarContent.testimonials}</li>
                </Link>
            </ul>

            <button className="border py-2 px-6 text-white rounded mt-6" onClick={toggleMenu}>
                {navbarContent.signIn}
            </button>
        </div>
    );
};

export default Menu;