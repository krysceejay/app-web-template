import Link from 'next/link'
import Image from 'next/image'

import Button from '@/components/Button'

export default function Beneficiaries() {
  return (
    <main className="flex-grow">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Beneficiaries</h1>
        <Link href="/dashboard/transfers/new">
          <Button>
            <div className="flex items-center space-x-2 bg-green-color py-3 px-4 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="whitespace-nowrap">New Beneficiary</span>
            </div>
          </Button>
        </Link>
      </div>
      <section className="mt-9">
        <div className="bg-white rounded-md overflow-hidden">
          <div className="py-10 border-b border-b-[#F5F6FA]">
              <div className="w-[512px] flex items-center px-10">
                  <input 
                      className="
                      w-[435px] h-9 appearance-none border border-[#D7D7D7] rounded-l bg-white px-3 text-[#242424] text-sm 
                      leading-tight focus:outline-none focus:shadow-none placeholder:italic" 
                      type="text" 
                      name="firstname"
                      placeholder="Search Beneficiaries" 
                  />
                  <div className="border border-[#D7D7D7] border-l-0 h-9 rounded-r text-center text-xs flex justify-center items-center px-[18px] cursor-pointer">Search</div>
              </div>
          </div>
          <div className="py-6 px-10 grid gap-3 grid-cols-5">
            <div className="border border-[#D7D7D7] rounded flex flex-col justify-center items-center px-4 py-5 bg-white">
              <div className="w-16 h-16 rounded-full bg-[#FF004D] flex justify-center items-center">
                <h3 className="text-white text-xl font-bold">AA</h3>
              </div>
              <div className="mt-2.5 text-center">
                <p className="text-xs font-semibold">Adeyemi Adedapo</p>
                <p className="text-xs mt-2">Mobile Money</p>
                <div className="flex justify-center items-center mt-2.5 space-x-1">
                  <Image 
                    alt="Nigeria Flag" 
                    src="/asset/img/nigeria.png"
                    width={18}
                    height={12}
                  />
                  <p className="text-[10px]">Nigeria</p>
                </div>
                <p className="text-xs font-medium mt-5 text-green-color cursor-pointer">Send Money</p>
              </div>
            </div>
            <div className="border border-[#D7D7D7] rounded flex flex-col justify-center items-center px-4 py-5 bg-white">
              <div className="w-16 h-16 rounded-full bg-[#2872A7] flex justify-center items-center">
                <h3 className="text-white text-xl font-bold">TB</h3>
              </div>
              <div className="mt-2.5 text-center">
                <p className="text-xs font-semibold">Toure Birame</p>
                <p className="text-xs mt-2">Bank Account</p>
                <div className="flex justify-center items-center mt-2.5 space-x-1">
                  <Image 
                    alt="Senegal Flag" 
                    src="/asset/img/senegal.png"
                    width={18}
                    height={12}
                  />
                  <p className="text-[10px]">Senegal</p>
                </div>
                <p className="text-xs font-medium mt-5 text-green-color cursor-pointer">Send Money</p>
              </div>
            </div>
            <div className="border border-[#D7D7D7] rounded flex flex-col justify-center items-center px-4 py-5 bg-white">
              <div className="w-16 h-16 rounded-full bg-[#FF004D] flex justify-center items-center">
                <h3 className="text-white text-xl font-bold">AA</h3>
              </div>
              <div className="mt-2.5 text-center">
                <p className="text-xs font-semibold">Adeyemi Adedapo</p>
                <p className="text-xs mt-2">Mobile Money</p>
                <div className="flex justify-center items-center mt-2.5 space-x-1">
                  <Image 
                    alt="Nigeria Flag" 
                    src="/asset/img/nigeria.png"
                    width={18}
                    height={12}
                  />
                  <p className="text-[10px]">Nigeria</p>
                </div>
                <p className="text-xs font-medium mt-5 text-green-color cursor-pointer">Send Money</p>
              </div>
            </div>
            <div className="border border-[#D7D7D7] rounded flex flex-col justify-center items-center px-4 py-5 bg-white">
              <div className="w-16 h-16 rounded-full bg-[#FF004D] flex justify-center items-center">
                <h3 className="text-white text-xl font-bold">AA</h3>
              </div>
              <div className="mt-2.5 text-center">
                <p className="text-xs font-semibold">Adeyemi Adedapo</p>
                <p className="text-xs mt-2">Mobile Money</p>
                <div className="flex justify-center items-center mt-2.5 space-x-1">
                  <Image 
                    alt="Nigeria Flag" 
                    src="/asset/img/nigeria.png"
                    width={18}
                    height={12}
                  />
                  <p className="text-[10px]">Nigeria</p>
                </div>
                <p className="text-xs font-medium mt-5 text-green-color cursor-pointer">Send Money</p>
              </div>
            </div>
            <div className="border border-[#D7D7D7] rounded flex flex-col justify-center items-center px-4 py-5 bg-white">
              <div className="w-16 h-16 rounded-full bg-[#FF004D] flex justify-center items-center">
                <h3 className="text-white text-xl font-bold">AA</h3>
              </div>
              <div className="mt-2.5 text-center">
                <p className="text-xs font-semibold">Adeyemi Adedapo</p>
                <p className="text-xs mt-2">Mobile Money</p>
                <div className="flex justify-center items-center mt-2.5 space-x-1">
                  <Image 
                    alt="Nigeria Flag" 
                    src="/asset/img/nigeria.png"
                    width={18}
                    height={12}
                  />
                  <p className="text-[10px]">Nigeria</p>
                </div>
                <p className="text-xs font-medium mt-5 text-green-color cursor-pointer">Send Money</p>
              </div>
            </div>
            <div className="border border-[#D7D7D7] rounded flex flex-col justify-center items-center px-4 py-5 bg-white">
              <div className="w-16 h-16 rounded-full bg-[#FF004D] flex justify-center items-center">
                <h3 className="text-white text-xl font-bold">AA</h3>
              </div>
              <div className="mt-2.5 text-center">
                <p className="text-xs font-semibold">Adeyemi Adedapo</p>
                <p className="text-xs mt-2">Mobile Money</p>
                <div className="flex justify-center items-center mt-2.5 space-x-1">
                  <Image 
                    alt="Nigeria Flag" 
                    src="/asset/img/nigeria.png"
                    width={18}
                    height={12}
                  />
                  <p className="text-[10px]">Nigeria</p>
                </div>
                <p className="text-xs font-medium mt-5 text-green-color cursor-pointer">Send Money</p>
              </div>
            </div>
          </div>
          <div className="px-14 py-6 border-t border-t-[#F5F6FA] flex justify-end items-center">
            <div className="flex items-center space-x-3 text-xs">
              <button className="w-6 h-6 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mx-auto">
                  <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="w-6 h-6 bg-[#EBF2FC] rounded">1</button>
              <button className="w-6 h-6 bg-white rounded">2</button>
              <button className="w-6 h-6 bg-white rounded">3</button>
              <button className="w-6 h-6 bg-white rounded">4</button>
              <button className="w-6 h-6 bg-white rounded">5</button>
              <button className="w-6 h-6 bg-white rounded">6</button>
              <button className="w-6 h-6 bg-white rounded">7</button>
              <button className="w-6 h-6 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mx-auto">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
