import getServices from "@/actions/getServices";
import FilterVendors from "@/components/dashboard/organizerVendors/FilterVendors";
import { Vendor } from "@prisma/client";

const VendorHomePage = async () => {
  const services = await getServices();
  console.log(services);

  if (services.length === 0) {
    return (
      <h1>
        You have not created any service yet. Please create a service to get
        started.
      </h1>
    );
  }
  return (
    <div className="">
      <h2 className="heading m-4">My Services</h2>

      <div className="grid grid-cols-3 gap-x-9 gap-y-7 my-7 h-[450px] overflow-x-hidden overflow-y-scroll">
        {services.map((service: any) => {
          return (
            <div key={service.name}>
              <h1 className="text-2xl text-black">{service?.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VendorHomePage;
