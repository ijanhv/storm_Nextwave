import { getCurrentUser } from "@/actions/getCurrentUser";

const DashboardPage = async () => {
  const currentUser = await getCurrentUser();

  if (currentUser?.role !== "Organizer") {
    return <h1>Not Authorized</h1>;
  }
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default DashboardPage