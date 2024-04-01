import React from "react";
import { light, semiBold } from "./Fonts";

export default function Footer() {
    return (
        <>
            <Desktop />
        </>
    )
}


const Desktop = () => {
    return (
        <div className="hidden lg:flex w-full justify-between px-16 py-10">
            <div className={semiBold.className}>
                <div className="flex flex-col space-y-3">
                    <p className="text-3xl">
                        Contact
                    </p>
                    <div className={light.className}>
                        <p className="text-lg">
                            Abhin Mohan:
                        </p>
                        <p className="text-lg">
                            Sidharth PK:
                        </p>
                        <p className="text-lg">
                            <a href="https://www.quassoliberum.com/">quassoliberum.com</a>
                        </p>
                    </div>
                </div>

            </div>
            <div className={semiBold.className}>
                <div className="flex flex-col space-y-3">
                    <p className="text-3xl">
                        Socials
                    </p>
                    <div className={light.className}>
                        <p className="text-lg">
                            Instagram
                        </p>
                        <p className="text-lg">
                            WhatsApp Channel
                        </p>
                        <p className="text-lg">
                            Youtube
                        </p>
                    </div>
                </div>
            </div>
            <div className={semiBold.className}>
                <p className="text-3xl">
                    Map
                </p>
            </div>
        </div>
    )
}

const Mobile = () => {
    return (
        <div className="lg:hidden flex">
        </div>
    )
}