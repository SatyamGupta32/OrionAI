import React from 'react'
import OutputSection from '../_components/OutputSection'
import FormSection from '../_components/FormSection'
import { TEMPLATE } from '../../_components/TemplateSection'
import Template from '@/app/(data)/Template'

interface PROPS{
    params: {
        'template-slug': string,
    }
}

function ContentSection(props:PROPS) {

    const selectedTemplate:TEMPLATE|undefined = Template?.find((item)=>item.slug == props.params['template-slug']) 


  return (
    <div className='ml-0 md:ml-48 lg:ml-64 grid grid-cols-1 md:grid-cols-2 gap-5 p-5'>
      <FormSection selectedTemplate = {selectedTemplate}/>
      <OutputSection/>
    </div>
  )
}

export default ContentSection
