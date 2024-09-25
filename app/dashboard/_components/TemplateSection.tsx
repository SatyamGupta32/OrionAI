// TemplateSection.tsx
import templates from '@/app/(data)/Template'; // Adjust the import path according to your project structure
import { useEffect, useState } from 'react';
import TemplateCard from './TemplateCard'; // Adjust the import path according to your project structure

export interface TEMPLATE {
    name: string;
    desc: string;
    icon: string;
    slug: string;
    aiPrompt: string;
    form?: FORM[];
}

export interface FORM {
    name: string;
    field: string;
    label: string;
    required?: boolean;
}

const TemplateSection = ({ userSearchInput }: { userSearchInput: string }) => {
    const [templateList, setTemplateList] = useState<TEMPLATE[]>(templates);

    useEffect(() => {
        if (userSearchInput) {
            const filterData = templates.filter(item =>
                item.name.toLowerCase().includes(userSearchInput.toLowerCase())
            );
            setTemplateList(filterData);
        } else {
            setTemplateList(templates);
        }
    }, [userSearchInput]);

    return (
        <div className='my-5 mx-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {templateList.map((item: TEMPLATE, index: number) => (
                <TemplateCard {...item} key={index} />
            ))}
        </div>
    );
};

export default TemplateSection;
