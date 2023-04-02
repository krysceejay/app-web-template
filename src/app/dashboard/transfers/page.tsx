import Table from '@/components/Table'
import PageTopOne from '@/components/PageTopOne'

export default function Transfers() {
  return (
    <section className="flex-grow">
      <PageTopOne title="Transfers" buttonText="New Transfer" link="/dashboard/transfers/new" hasBtn />
      <section className="mt-11">
        <Table showSearch={true} pageName="Transfers" />
      </section>
    </section>
  )
}
