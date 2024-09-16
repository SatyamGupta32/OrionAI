'use client';

import React , { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateSection from './_components/TemplateSection'

const Dashboard = () => {

  const [userSearchInput, setUserSearchInput] = useState<string>()
  return (
    <div className='ml-0 md:ml-48 lg:ml-64'>
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>
      <TemplateSection userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard
