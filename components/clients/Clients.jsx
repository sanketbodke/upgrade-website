import React from 'react';
import { images } from "@/constant";
import Image from "next/image";

function Clients() {
    return (
        <div className="bg-bgPrimary py-8 hidden md:flex">
            <div className="container flex items-center justify-between">
                <Image src={images.spherule} alt="spherule" />
                <Image src={images.samsungPay} alt="samsung" />
                <Image src={images.visa} alt="visa" />
                <Image src={images.amazonPay} alt="amazon pay" />
                <Image src={images.payPal} alt="paypal" />
                <Image src={images.aliPay} alt="ali pay" />
            </div>
        </div>
    );
}

export default Clients;