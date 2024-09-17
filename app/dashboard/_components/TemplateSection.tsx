import Template from '@/app/(data)/Template'
import { useEffect, useState } from 'react'
import TemplateCard from '../content/TemplateCard'

export interface TEMPLATE {
    name: string,
    desc: string,
    icon: string,
    slug: string,
    aiPrompt: string,
    form?: FORM[]
}

export interface FORM {
    name: string,
    field: string,
    label: string,
    required?: boolean
}

const TemplateSection = ({ userSearchInput }: any) => {

    useEffect(() => {
        if (userSearchInput) {
            const filterData = Template.filter(item => item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
            setTemplateList(filterData);
        } else {
            setTemplateList(Template)
        }
    }, [userSearchInput])

    const [templateList, setTemplateList] = useState(Template)
    return (
        <div className='my-5 mx-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {templateList.map((item: TEMPLATE, index
                : number
            ) => (
                <TemplateCard {...item} key={index} />
            ))}
        </div>
    )
}

export default TemplateSection
