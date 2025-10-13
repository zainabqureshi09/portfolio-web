"use client";

import React from 'react'
import AboutPage from '../components/About'

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const page = () => {
  return (
    <div>
      <AboutPage/>
    </div>
  )
}

export default page
