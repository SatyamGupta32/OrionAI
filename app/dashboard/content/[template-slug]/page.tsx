'use client';

import { useState } from 'react'
import Link from 'next/link'
import OutputSection from '../_components/OutputSection'
import FormSection from '../_components/FormSection'
import { TEMPLATE } from '../../_components/TemplateSection'
import Template from '@/app/(data)/Template'
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { chatSession } from '@/utils/AiModel';

interface PROPS {
  params: {
    'template-slug': string,
  }
}

function ContentSection(props: PROPS) {

  const selectedTemplate: TEMPLATE | undefined = Template?.find((item) => item.slug == props.params['template-slug'])
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('')
  const generateAIcontent = async (formData: any) => {
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalAiPrompt = JSON.stringify(formData) + ', ' + selectedPrompt;
    try {
      const result = await chatSession.sendMessage(finalAiPrompt);
      console.log(result.response.text());
      setAiOutput(result.response.text());
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle or display error to the user
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='ml-0 md:ml-48 lg:ml-64 p-5'>
      <Link href={'/dashboard'}><Button><ArrowLeft />Back</Button></Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-5'>
        <FormSection selectedTemplate={selectedTemplate}
          userFormInput={(value: any) => generateAIcontent(value)}
          loading={loading}
        />

        <div className='md:col-span-2'><OutputSection aiOutput={aiOutput}/></div>

      </div>
    </div>


  )
}

export default ContentSection
