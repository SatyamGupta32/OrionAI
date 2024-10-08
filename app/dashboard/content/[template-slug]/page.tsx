'use client';

import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import FormSection from '../_components/FormSection';
import { TEMPLATE } from '../../_components/TemplateSection';
import Template from '@/app/(data)/Template';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { chatSession } from '@/utils/AiModel';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/clerk-react';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { useRouter } from 'next/navigation';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';

const OutputSection = dynamic(() => import('../_components/OutputSection'), { ssr: false });

interface PROPS {
  params: {
    'template-slug': string;
  };
}

function ContentSection(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Template?.find((item) => item.slug === props.params['template-slug']);
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  const { user } = useUser();
  const router = useRouter();
  const {totalUsage, setTotalUsage} = useContext(TotalUsageContext)
  const {userSubscription, setUserSubscription} = useContext(UserSubscriptionContext);
  const {updateCreditUsage, setUpdateCreditUsage} = useContext(UpdateCreditUsageContext);

  const generateAIcontent = async (formData: any) => {
    if(totalUsage >= 10000 && !userSubscription){
      console.log('please upgrade')
      router.push('/dashboard/billing')
      return;
    }
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalAiPrompt = JSON.stringify(formData) + ', ' + selectedPrompt;
    const result = await chatSession.sendMessage(finalAiPrompt);
    setAiOutput(result?.response.text());
    await SaveInDb(JSON.stringify(formData), selectedTemplate?.slug, result?.response.text())
    setLoading(false);
    setUpdateCreditUsage(Date.now())
  };

  const SaveInDb = async (formData: any, slug: any, airepo: string) => {
    const email = user?.primaryEmailAddress?.emailAddress ?? 'unknown';
    const now = new Date();
    const result = await db.insert(AIOutput).values({
      FormData: formData,
      templateSlug: slug || '',
      aiResponse: airepo || '',
      created_by: email,
      created_at: now,
    });
    console.log(result)
  };

  return (
    <div className='ml-0 md:ml-48 lg:ml-64 p-5'>
      <Link href={'/dashboard'}>
        <Button>
          <ArrowLeft className='mr-2' />
          Back
        </Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-5'>
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(value: any) => generateAIcontent(value)}
          loading={loading}
        />
        <div className='md:col-span-2'>
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default ContentSection;


