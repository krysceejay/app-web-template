'use client'
import {useState, useEffect , useContext, useRef} from 'react'

import Image from 'next/image'
import Link from 'next/link'

import DashboardNavLink from './dashboard-nav-link'


// export const metadata = {
//   title: 'User Dashboard',
//   description: 'A vargent app',
// }

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const sideBarRef = useRef<HTMLElement>(null)

  const showMenu = () => {
    sideBarRef.current?.classList.toggle("active") 
  }

  return (
    <div className="relative min-h-screen flex w-screen overflow-hidden">
      <aside className="fixed top-0 -left-60 lg:left-0 h-full lg:block w-60 xl:w-72 bg-[#242424] z-[60] sidebar" ref={sideBarRef}>
        <div className="absolute lg:static lg:hidden togglebtn" onClick={showMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <Image 
            alt="Logo" 
            src="/asset/img/wlogo.png"
            width={160}
            height={36}
            className="mx-auto mt-6 h-9 object-contain"
            priority
          />
          <div className="pb-8 overflow-y-scroll mt-14 h-[85vh]">
            <ul>
              <li>
                <DashboardNavLink slug={null}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                  <h3 className="text-xs xl:text-sm">Dashboard</h3>
                </DashboardNavLink>
              </li>
              <li>
                <DashboardNavLink slug="transfers">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                  <h3 className="text-xs xl:text-sm">Transfers</h3>
                </DashboardNavLink>
              </li>
              <li>
                <DashboardNavLink slug="beneficiaries">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <h3 className="text-xs xl:text-sm">Beneficiaries</h3>
                </DashboardNavLink>
              </li>
              <li>
                <DashboardNavLink slug="kyc">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  <h3 className="text-xs xl:text-sm">KYC Documents</h3>
                </DashboardNavLink>
              </li>
              <li>
                <DashboardNavLink slug="messages">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                  </svg>
                  <h3 className="text-xs xl:text-sm">Messages</h3>
                </DashboardNavLink>
              </li>
              <li>
                <DashboardNavLink slug="help">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                  <h3 className="text-xs xl:text-sm">Help & Support</h3>
                </DashboardNavLink>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <main className="flex-1">
        <nav className="sticky top-0 z-40 shadow-sm w-full bg-white flex items-center justify-end h-[72px] px-5">
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
        <section className="px-4 md:px-6 xl:px-10 pt-10 pb-14 flex flex-col min-h-[95vh] ml-0 lg:ml-60 xl:ml-72">
          {children}
        </section>
        
        <footer className="ml-0 lg:ml-60 xl:ml-72">
          <div className="bg-transparent mx-4 md:mx-6 xl:mx-10 py-7 border-t border-[#E0E0E0]">
            <div className="text-xs">
                By using this website, you accept our <Link href="/" className="text-[#009933]">Terms of Use</Link> and <Link href="/" className="text-[#009933]">Privacy Policy</Link>. Copyright &copy; {new Date().getFullYear()} Vargent Africa.
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
