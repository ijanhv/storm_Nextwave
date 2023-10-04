import { getCurrentUser } from "@/actions/getCurrentUser";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import userUserStore from "@/hooks/useUserStore";

export default async function Home() {
  const currentUserData = await getCurrentUser();

  const currentUser: User = currentUserData
    ? {
      ...currentUserData,
      createdAt: new Date(currentUserData.createdAt),
      updatedAt: new Date(currentUserData.updatedAt),
    }
    : undefined;

  return (
    <main className=''>
      <Navbar currentUser={currentUser} />
      <Hero />
      {/* Hi */}
    </main>
  )
}
