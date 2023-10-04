"use client";
import CreateService from "@/components/vendor/CreateService";
import userUserStore from "@/hooks/useUserStore";
import { useEffect } from "react";

const CreateServicePage =  () => {
  const [user, setUser] = userUserStore((state) => [state.user, state.setUser]);

 
  return (
    <div className="">
      <h2 className="heading m-4">Create Service</h2>
      <CreateService currentUser={user}/>
    </div>
  );
};

export default CreateServicePage;
