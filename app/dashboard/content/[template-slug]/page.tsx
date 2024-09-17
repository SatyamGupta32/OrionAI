'use client';

import React from 'react'
import Link from 'next/link'
import OutputSection from '../_components/OutputSection'
import FormSection from '../_components/FormSection'
import { TEMPLATE } from '../../_components/TemplateSection'
import Template from '@/app/(data)/Template'
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { chatSession } from '@/utils/AIModel';

interface PROPS {
  params: {
    'template-slug': string,
  }
}

function ContentSection(props: PROPS) {

  const selectedTemplate: TEMPLATE | undefined = Template?.find((item) => item.slug == props.params['template-slug'])

  const generateAIcontent = async (formData: any) => {
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalAiPrompt = JSON.stringify(formData) + ', ' + selectedPrompt;
    const result = await chatSession.sendMessage(finalAiPrompt);
    console.log(result.response.text());

  }

  return (
    <div className='ml-0 md:ml-48 lg:ml-64 p-5'>
      <Link href={'/dashboard'}><Button><ArrowLeft />Back</Button></Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-5'>
        <FormSection selectedTemplate={selectedTemplate}
          userFormInput={(value: any) => generateAIcontent(value)}
        />

        <div className='md:col-span-2'><OutputSection /></div>

      </div>
    </div>


  )
}

export default ContentSection
