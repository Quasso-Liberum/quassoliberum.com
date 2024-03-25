import React from "react";
import localFont from "next/font/local";


const regular = localFont({
    src: [
        {
            path: "../../../public/font/light.ttf",
        },
    ],
});

export const What = () => {
    return <div className="h-screen flex items-center px-10">
        <div className="space-y-3 mr-28">
            <div className="text-4xl">
                What is
            </div>
            <div className="text-9xl">
                Quasso
            </div>
            <div className="text-9xl">
                Liberum
            </div>
        </div>
        <div className="bg-[#FDC501] text-black p-32 rounded-2xl">
            <p className={regular.className}>
                Quasso Liberum is a unifying campaign inspiring each CEVian to focus their gaze upon progress, invention and technology. Playing the role of an opportunity to students, Quasso Liberum prolongs its legacy by inciting creativity and strengthening vision with each successive year.
            </p>
        </div>
    </div>;
};
