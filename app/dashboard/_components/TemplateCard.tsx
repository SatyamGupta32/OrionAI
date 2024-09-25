import React from 'react'
import { TEMPLATE } from './TemplateSection'
import Image from 'next/image'
import Link from 'next/link'

function TemplateCard(item: TEMPLATE) {
    return (
        <Link href={'/dashboard/content/' + item?.slug}>
            <div className="p-5 shadow-md border bg-white flex flex-col gap-2 cursor-pointer transition-all duration-500 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:translate-z-[4px]">
                <Image src={item.icon} alt={'icon'} width={40} height={40} />
                <h2 className='text-basic lg:text-xl font-normal'>{item.name}</h2>
                <p className='text-sm lg:text-lg font-light text-gray-500 line-clamp-3'>{item.desc}</p>
            </div>
        </Link>

    )
}

export default TemplateCard
