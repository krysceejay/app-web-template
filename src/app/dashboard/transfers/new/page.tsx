'use client'

import { useState } from "react"

import TransferDetails from '@/components/transfers/TransferDetails'
import Beneficiary from '@/components/transfers/Beneficiary'
import ConfirmPay from '@/components/transfers/ConfirmPay'



export default function NewTransfer() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  function goTo(index: number) {
    setCurrentStepIndex(index)
  }
  
  const steps = [
    <TransferDetails goTo={goTo} />,
    <Beneficiary goTo={goTo} />,
    <ConfirmPay goTo={goTo} />
  ]

  return (
    <main className="flex-grow">
      <section>
        <h1 className="text-2xl font-semibold">New Transfer</h1>
      </section>
      <section className="flex space-x-3.5 mt-9 items-start">
        <div className="bg-white flex-1 rounded px-24 pt-11 pb-[52px] min-h-[660px]">
          {steps[currentStepIndex]}
        </div>
        <div className="w-[390px] bg-white rounded px-8 py-11">
          <div>
            <h3 className="text-base">Payment Details</h3>
            <div className="mt-3">
              <div className="flex justify-between items-center py-3 border-t border-[#E0E0E0]">
                <span className="text-xs font-light">You send</span>
                <span className="text-xs font-semibold">NGN 80,000.00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-t border-[#E0E0E0]">
                <span className="text-xs font-light">Payment method</span>
                <span className="text-xs font-semibold">Bank Transfer</span>
              </div>
              <div className="flex justify-between items-center py-3 border-t border-[#E0E0E0]">
                <span className="text-xs font-light">Rate</span>
                <span className="text-xs font-semibold">NGN = 0.7957 XOF</span>
              </div>
              <div className="flex justify-between items-center py-3 border-t border-[#E0E0E0]">
                <span className="text-xs font-light">Beneficiary gets</span>
                <span className="text-xs font-semibold">XOF 63,656.00</span>
              </div>
              {currentStepIndex == 2 &&
              <div className="flex justify-between items-center py-3 border-t border-[#E0E0E0]">
                <span className="text-xs font-light">Beneficiary</span>
                <span className="text-xs font-semibold">Toure Birame</span>
              </div>
              }
              <div className="flex justify-between items-center py-3 border-t border-[#E0E0E0]">
                <span className="text-xs font-light">Delivery method</span>
                <span className="text-xs font-semibold">Mobile Money</span>
              </div>
              {currentStepIndex == 2 &&
              <>
                <div className="flex justify-between items-center py-3 border-t border-[#E0E0E0]">
                  <span className="text-xs font-light">Network</span>
                  <span className="text-xs font-semibold">Orange Money</span>
                </div>
                <div className="flex justify-between items-center py-3 border-t border-[#E0E0E0]">
                  <span className="text-xs font-light">Mobile Number</span>
                  <span className="text-xs font-semibold">778030289</span>
                </div>
              </>
              }
              <div className="flex justify-between items-center py-3 border-t border-[#E0E0E0]">
                <span className="text-xs font-light">Fees</span>
                <span className="text-xs font-semibold">NGN 3,000.00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-t border-[#E0E0E0]">
                <span className="text-xs font-light">Total payment due</span>
                <span className={`text-sm font-bold ${currentStepIndex == 2 && 'text-green-color'}`}>NGN 83,000.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
