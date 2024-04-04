import React from "react";
import Image from "next/image";

export default function Fashion() {
    return (
        <>
            <Desktop />
            <Mobile />
        </>
    );
}

const Desktop = () => {
    return (
        <div className="lg:flex hidden w-full flex-col justify-center items-center pb-20">
            <p className="text-6xl pb-10">
                Fashion Show
            </p>
            <Image
                className="rounded-3xl"
                src="/images/fasion.jpg"
                width={1000}
                height={500}
                alt="fashion show banner"
            />
            <a href="https://www.yepdesk.com/quasso-liberum-11">
                <p className="px-5 py-2 mt-10 rounded-3xl outline hover:bg-qlYellow hover:text-qlPostBlack transition-colors duration-300">
                    Register Now
                </p>
            </a>
        </div>
    );
};

const Mobile = () => {
    return (
        <div className="lg:hidden flex flex-col w-full justify-center items-center mb-10">
            <p className="text-5xl mb-10">
                Fashion Show
            </p>
            <Image
                className="rounded-lg"
                src="/images/fasion.jpg"
                width={300}
                height={500}
                alt="fashion show banner"
            />
            <div>
                <a href="https://www.yepdesk.com/quasso-liberum-11">
                    <p className="px-3 py-2 mt-10 rounded-3xl outline hover:bg-qlYellow hover:text-qlPostBlack transition-colors duration-300">
                        Register Now
                    </p>
                </a>
            </div>

        </div>
    )
}
