import React from 'react'
import { TEMPLATE } from '../../_components/TemplateSection'
import Image from 'next/image'

interface PROPS{
    selectedTemplate?: TEMPLATE
}

function FormSection({selectedTemplate}:PROPS) {
  return (
    <div className='w-full p-5 shadow-lg border rounded-sm'>
      <Image src={selectedTemplate?.icon} alt={'icon'} width={40} height={40}/>
      <h2>{selectedTemplate?.name}</h2>
    </div>
  )
}

export default FormSection
