import React from 'react'
import Image from 'next/image'

const NeelaPass = () => {
    return (
        <div className='flex flex-col items-center pb-10'>
            <Image className='rounded-2xl' src="/images/neela.jpg" width={1000} height={500} alt='manja' />
            <div>
                <a href="https://www.yepdesk.com/buy-tickets/6603dc29c9e77c000155e9f5/category/1713257175">
                    <p className="px-3 py-2 mt-10 rounded-3xl outline hover:bg-qlYellow hover:text-qlPostBlack transition-colors duration-300">
                        Register
                    </p>
                </a>
            </div>
        </div>
    )
}

export default NeelaPass