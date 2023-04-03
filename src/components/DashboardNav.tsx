import Image from 'next/image'

export default function DashboardNav(){
  return (
    <nav className="sticky top-0 z-40 shadow-sm w-full bg-white flex items-center justify-between lg:justify-end h-[72px] px-5">
        <div className="cursor-pointer block lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        </div>
        <div className="flex items-center space-x-2.5 h-full py-6 px-4 border-l border-l-[#EFEFEF]">
        <div className="rounded-full w-7 h-7 overflow-hidden">
            <Image 
            alt="Profile Picture" 
            src="/asset/img/profilepix.png"
            width={28}
            height={28}
            className="object-cover h-7"
            />
        </div>
        <span className="text-sm">Adeyemi Adedapo</span>
        <div className="text-gray-800 cursor-pointer">
            <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
        </div>
    </nav>
  )
}