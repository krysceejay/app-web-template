'use client'

import DetailsLink from '@/components/DetailsLink'

interface TableProps {
  showSearch: boolean,
  pageName: string
}

export default function Table({ showSearch, pageName }: TableProps){
  return (
    <div className="mt-5 bg-white rounded-md overflow-hidden">
        {showSearch &&
        <div className="py-10 border-b border-b-[#F5F6FA]">
            <div className="w-[512px] flex items-center px-10">
                <input 
                    className="
                    w-[435px] h-9 appearance-none border border-[#D7D7D7] rounded-l bg-white px-3 text-[#242424] text-sm 
                    leading-tight focus:outline-none focus:shadow-none placeholder:italic" 
                    type="text" 
                    name="firstname"
                    placeholder={`Search ${pageName}`} 
                />
                <div className="border border-[#D7D7D7] border-l-0 h-9 rounded-r text-center text-xs flex justify-center items-center px-[18px] cursor-pointer">Search</div>
            </div>
        </div>
        }
        <div className={`${!showSearch && 'py-7'} px-6 md:px-10`}>
            <table className="border-collapse w-full text-xs font-normal table-fixed">
                <thead className="border-y border-y-[#F5F6FA]">
                    <tr className="text-left font-semibold">
                    <th className="p-4">
                        <span>Transfer ID</span>
                    </th>
                    <th className="p-4">
                        <span>Beneficiary</span>
                    </th>
                    <th className="p-4 hidden sm:table-cell">
                        <span>Payout Method</span>
                    </th>
                    <th className="p-4 hidden sm:table-cell">
                        <span>Sent Amount</span>
                    </th>
                    <th className="p-4 hidden sm:table-cell">
                        <span>Payout Amount</span>
                    </th>
                    <th className="p-4 hidden md:table-cell">
                        <span>Date</span>
                    </th>
                    <th className="p-4 hidden md:table-cell">
                        <span>Status</span>
                    </th>
                    <th className="p-4">
                        <span>View</span>
                    </th>
                    </tr>
                </thead>
                <tbody className="font-light break-words">
                    <tr className="text-left border-b border-b-[#F5F6FA]">
                    <td className="p-4">11223465351</td>
                    <td className="p-4">Aminata Dieng</td>
                    <td className="p-4 hidden sm:table-cell">Mobile Money</td>
                    <td className="p-4 hidden sm:table-cell">NGN 500,000.00</td>
                    <td className="p-4 hidden sm:table-cell">XOF 500,000.02</td>
                    <td className="p-4 hidden md:table-cell">22 Oct, 2020</td>
                    <td className="p-4 hidden md:flex flex-wrap items-center space-x-1">
                        <div className="bg-[#28A745] w-[6px] h-[6px] rounded-full" />
                        <h3>Paid out</h3>
                    </td>
                    <td className="p-4">
                        <DetailsLink link="/dashboard/transfers/1" text="Details" isTable={true} />
                    </td>
                    </tr>
                    <tr className="text-left border-b border-b-[#F5F6FA]">
                    <td className="p-4">11223465351</td>
                    <td className="p-4">Aminata Dieng</td>
                    <td className="p-4 hidden sm:table-cell">Mobile Money</td>
                    <td className="p-4 hidden sm:table-cell">NGN 500,000.00</td>
                    <td className="p-4 hidden sm:table-cell">XOF 500,000.02</td>
                    <td className="p-4 hidden md:table-cell">22 Oct, 2020</td>
                    <td className="p-4 hidden md:flex flex-wrap items-center space-x-1">
                        <div className="bg-[#EEB012] w-[6px] h-[6px] rounded-full" />
                        <h3>Payment pending</h3>
                    </td>
                    <td className="p-4">
                        <DetailsLink link="/dashboard/transfers/2" text="Details" isTable={true} />
                    </td>
                    </tr>
                    <tr className="text-left border-b border-b-[#F5F6FA]">
                    <td className="p-4">11223465351</td>
                    <td className="p-4">Aminata Dieng</td>
                    <td className="p-4 hidden sm:table-cell">Mobile Money</td>
                    <td className="p-4 hidden sm:table-cell">NGN 500,000.00</td>
                    <td className="p-4 hidden sm:table-cell">XOF 500,000.02</td>
                    <td className="p-4 hidden md:table-cell">22 Oct, 2020</td>
                    <td className="p-4 hidden md:flex flex-wrap items-center space-x-1">
                        <div className="bg-[#EEB012] w-[6px] h-[6px] rounded-full" />
                        <h3>KYC uploaded</h3>
                    </td>
                    <td className="p-4">
                        <DetailsLink link="/dashboard/transfers/3" text="Details" isTable={true} />
                    </td>
                    </tr>
                    <tr className="text-left border-b border-b-[#F5F6FA]">
                    <td className="p-4">11223465351</td>
                    <td className="p-4">Aminata Dieng</td>
                    <td className="p-4 hidden sm:table-cell">Mobile Money</td>
                    <td className="p-4 hidden sm:table-cell">NGN 500,000.00</td>
                    <td className="p-4 hidden sm:table-cell">XOF 500,000.02</td>
                    <td className="p-4 hidden md:table-cell">22 Oct, 2020</td>
                    <td className="p-4 hidden md:flex flex-wrap items-center space-x-1">
                        <div className="bg-[#EEB012] w-[6px] h-[6px] rounded-full" />
                        <h3>KYC verified</h3>
                    </td>
                    <td className="p-4">
                        <DetailsLink link="/dashboard/transfers/4" text="Details" isTable={true} />
                    </td>
                    </tr>
                    <tr className="text-left border-b border-b-[#F5F6FA]">
                    <td className="p-4">11223465351</td>
                    <td className="p-4">Aminata Dieng</td>
                    <td className="p-4 hidden sm:table-cell">Mobile Money</td>
                    <td className="p-4 hidden sm:table-cell">NGN 500,000.00</td>
                    <td className="p-4 hidden sm:table-cell">XOF 500,000.02</td>
                    <td className="p-4 hidden md:table-cell">22 Oct, 2020</td>
                    <td className="p-4 hidden md:flex flex-wrap items-center space-x-1">
                        <div className="bg-[#EEB012] w-[6px] h-[6px] rounded-full" />
                        <span>Payout in progress</span>
                    </td>
                    <td className="p-4">
                        <DetailsLink link="/dashboard/transfers/5" text="Details" isTable={true} />
                    </td>
                    </tr>
                    <tr className="text-left border-b border-b-[#F5F6FA]">
                    <td className="p-4">11223465351</td>
                    <td className="p-4">Aminata Dieng</td>
                    <td className="p-4 hidden sm:table-cell">Mobile Money</td>
                    <td className="p-4 hidden sm:table-cell">NGN 500,000.00</td>
                    <td className="p-4 hidden sm:table-cell">XOF 500,000.02</td>
                    <td className="p-4 hidden md:table-cell">22 Oct, 2020</td>
                    <td className="p-4 hidden md:flex flex-wrap items-center space-x-1">
                        <div className="bg-[#28A745] w-[6px] h-[6px] rounded-full" />
                        <h3>Paid out</h3>
                    </td>
                    <td className="p-4">
                        <DetailsLink link="/dashboard/transfers/6" text="Details" isTable={true} />
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
        {showSearch &&
        <div className="px-14 py-6 border-t border-t-[#F5F6FA] flex justify-between items-center">
            <h3 className="text-green-color cursor-pointer text-xs">Download as CSV</h3>
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
        }
    </div>
  )
}