'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

// This *client* component will be imported into a blog layout
export default function DashboardNavLink({
  slug,
  children,
}: {
  slug: string | null,
  children: React.ReactNode,
}) {
  // Navigating to `/blog/hello-world` will return 'hello-world'
  // for the selected layout segment
  const segment = useSelectedLayoutSegment()
  const isActive = slug === segment
  
  return (
    <Link href={`/dashboard/${slug != null ? slug : ''}`} className={`py-5 px-14 flex items-center space-x-3 ${isActive ? 'text-green-color bg-[#3D3D3D]' : 'text-white'}`}>
        {children}
    </Link>
  )
}