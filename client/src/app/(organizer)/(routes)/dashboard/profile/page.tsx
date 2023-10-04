'use client'
import userUserStore from '@/hooks/useUserStore'
import Image from 'next/image'

const ProfilePage = () => {
  const currentUser: User = userUserStore((state) => state.user)

  return (

    <div className='m-5'>
      <h2 className='heading'>Profile Page</h2>

      <div className='border flex flex-col justify-end border-gray-300 px-8 py-12 my-4 rounded-lg'>
        <div className='bg-white shadow-md rounded-lg p-4'>

          <div className='flex flex-col justify-start items-center'>
            <Image
              width={120}
              height={120}
              className='' src={currentUser?.image} alt='Profile' />
            <div className='flex flex-col items-center mt-3'>
              <h2 className='text-2xl font-semibold text-orange-600'>{currentUser?.name}</h2>
              <p className='text-gray-600'>{currentUser?.role}</p>
            </div>
          </div>

          <div className='flex flex-col items-center'>
            <div className='mt-6 flex flex-col items-center'>
              <h3 className='text-lg font-semibold mb-2'>Contact Information</h3>
              <p className='text-gray-600'>User Id: {currentUser?.id}</p>
              <p className='text-gray-600'>Email: {currentUser?.email}</p>
            </div>

            <div className='mt-6'>
              <h3 className='text-lg font-semibold mb-2'>Location</h3>
              <p className='text-gray-600'>Mumbai</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ProfilePage
