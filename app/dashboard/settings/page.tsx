'use client'

import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const Settings = () => {
  return (
    <div className="ml-0 md:ml-48 min-h-[92vh] lg:ml-64 flex items-center justify-center">
      <UserProfile routing="hash" /> 
    </div>
  )
}

export default Settings
