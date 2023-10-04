import Sidebar from '@/components/globals/Sidebar'

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {

  return (
    <div className='flex flex-row'>
      <section>
        <Sidebar />
      </section>

      <main className='flex flex-col w-full'>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout