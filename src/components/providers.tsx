"use client"
// app/providers.tsx
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import type { PropsWithChildren } from 'react'

export function Providers({children}: PropsWithChildren) {
  const router = useRouter()
  return (
    <NextUIProvider navigate={router.push}>
      {children}
    </NextUIProvider>
  )
}