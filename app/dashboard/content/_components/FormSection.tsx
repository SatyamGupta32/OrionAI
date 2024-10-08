'use client';

import { useState } from 'react';
import { TEMPLATE } from '../../_components/TemplateSection';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput?: any;
  loading: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<any>();

  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='p-5 shadow-lg border rounded-sm bg-white'>
      {/*@ts-ignore*/}
      <Image src={selectedTemplate?.icon} alt={'icon'} width={70} height={70} />
      <h2 className='font-normal text-2xl text-primary mb-2'>{selectedTemplate?.name}</h2>
      <p className='font-light text-lg text-gray-600 mb-2'>{selectedTemplate?.desc}</p>

      <form className='mt-6' onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
            <label className='font-normal text-lg'>{item.label}</label>
            {item.field === 'input' ? (
              <Input
                name={item.name}
                required={item.required}
                onChange={handleInputChange}
              />
            ) : item.field === 'textarea' ? (
              <Textarea
                name={item.name}
                required={item.required}
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}
        <Button type='submit' className='w-full py-5' disabled={loading}>
          {loading && <Loader2Icon className='animate-spin mr-2' />}
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
