import React from "react";
import Image from "next/image";
import { light } from "./Fonts";

const Conclave = () => {
    return (
        <>
            <Desktop />
            <Mobile />
        </>
    );
};

const Desktop = () => {
    return (
        <div className="w-full h-screen justify-center hidden lg:flex flex-col px-40 items-center">
            <p className="text-6xl pb-10">
                Conclave
            </p>
            <div className="flex gap-10">
                <Image
                    className="rounded-xl"
                    src="/images/conclave.jpeg"
                    height={350}
                    width={350}
                    alt="ideathon"
                />
                <div className="flex flex-col justify-center bg-gradient-to-br text-[#F4D12F] border border-[#F4D12F] from-[#201f1e7a]  to-[#58523733] backdrop:blur-lg text-2xl p-10 rounded-2xl">
                    <p className={light.className}>
                        Conclave presented by IEDC CEV and IEDC COET, invites you to a weekend of professional excellence. Organized by the Innovation and Entrepreneurship Development Cell (IEDC), CEV, this event goes beyond boundaries, offering a platform where industry leaders, professionals, and enthusiasts unite. Immerse yourself in insightful sessions, networking, and collaborative activities, elevating your journey in the company of visionaries. Join us for a transformative experience
                    </p>
                </div>
            </div>

            <div>
                <a href="https://conclave.iedccev.org/">
                    <p className="px-3 py-2 mt-10 rounded-3xl outline hover:bg-qlYellow hover:text-qlPostBlack transition-colors duration-300">
                        Explore
                    </p>
                </a>
            </div>
        </div>
    )
}

const Mobile = () => {
    return (
        <div className="flex flex-col items-center justify-center  lg:hidden mb-10">
            <div className="flex pb-10 flex-col items-center">
                <div className="text-6xl">Conclave</div>
            </div>
            <Image
                className="rounded-xl"
                src="/images/conclave.jpeg"
                height={300}
                width={300}
                alt="ideathon"
            />
            <div className="bg-gradient-to-br text-[#F4D12F] border border-[#F4D12F] from-[#201F1E] to-[#585237] text-xl m-10 p-10 rounded-2xl">
                <p className={light.className}>
                    Conclave presented by IEDC CEV and IEDC COET, invites you to a weekend of professional excellence. Organized by the Innovation and Entrepreneurship Development Cell (IEDC), CEV, this event goes beyond boundaries, offering a platform where industry leaders, professionals, and enthusiasts unite. Immerse yourself in insightful sessions, networking, and collaborative activities, elevating your journey in the company of visionaries. Join us for a transformative experience
                </p>
            </div>
            <div>
                <a href="https://bit.ly/Ideathon-cev">
                    <p className="px-3 py-2 mt-10 rounded-3xl outline hover:bg-qlYellow hover:text-qlPostBlack transition-colors duration-300">
                        Register
                    </p>
                </a>
            </div>
        </div>
    )
}

export default Conclave;