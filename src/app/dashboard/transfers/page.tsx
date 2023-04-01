import Link from 'next/link'
import Table from '@/components/Table'
import Button from '@/components/Button'

export default function Transfers() {
  return (
    <section className="flex-grow">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Transfers</h1>
        <Link href="/dashboard/transfers/new">
          <Button>
            <div className="flex items-center space-x-2 bg-green-color py-3 px-4 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="whitespace-nowrap">New Transfer</span>
            </div>
          </Button>
        </Link>
      </div>
      <section className="mt-11">
        <Table showSearch={true} pageName="Transfers" />
      </section>
    </section>
  )
}
