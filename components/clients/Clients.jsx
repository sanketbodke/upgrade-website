import React from 'react';
import { images } from "@/constant";
import Image from "next/image";

function Clients() {
    return (
        <div className="bg-bgPrimary py-8 hidden md:flex">
            <div className="container flex items-center justify-between">
                <Image
                    src={images.spherule}
                    alt="spherule"
                    className="object-cover"
                />
                <Image
                    src={images.samsungPay}
                    alt="samsung"
                    className="object-cover"
                />
                <Image
                    src={images.visa}
                    alt="visa"
                    className="object-cover"
                />
                <Image
                    src={images.amazonPay}
                    alt="amazon pay"
                    className="object-cover"
                />
                <Image
                    src={images.payPal}
                    alt="paypal"
                    className="object-cover"
                />
                <Image
                    src={images.aliPay}
                    alt="ali pay"
                    className="object-cover"
                />
            </div>
        </div>
    );
}

export default Clients;