"use client"

import React, { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Loadpage from './loadpage/loadpage'

function Page() {
  const router = useRouter()

  useEffect(() => {
    router.replace(`/landing`)
  }, [])

  return (
    <Loadpage />
  )
}

export default Page