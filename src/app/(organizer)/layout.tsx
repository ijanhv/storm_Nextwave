import { getCurrentUser } from '@/actions/getCurrentUser';
import Sidebar from '@/components/globals/Sidebar'
import UserMenu from '@/components/navbar/UserMenu'

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentUserData = await getCurrentUser();
  const currentUser: User | undefined = currentUserData
    ? {
      ...currentUserData,
      createdAt: new Date(currentUserData.createdAt),
      updatedAt: new Date(currentUserData.updatedAt),
    }
    : undefined;

  return (
    <div className='flex flex-row'>
      <section>
        <Sidebar />
      </section>

      <main className='flex flex-col w-full'>
        <div className='absolute right-6 top-2'>
          <UserMenu currentUser={currentUser} />
        </div>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout