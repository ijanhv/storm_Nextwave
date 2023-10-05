import getServices from "@/actions/getServices";
import ServiceCard from "@/components/dashboard/vendors/ServiceCard";

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

      <div className='border border-gray-300 px-6 py-2 my-5 rounded-lg'>
        <div className="grid grid-cols-3 gap-x-9 gap-y-7 my-7 h-[450px] overflow-x-hidden overflow-y-scroll">
          {services.map((service: any, index) => {
            return (
              <div key={service.name}>
                <ServiceCard
                  name={service.name}
                  description={service.description}
                  category={service.category}
                  pricing={service.pricing}
                  contactPerson={service.contactPerson}
                  email={service.email}
                  phone={service.phone}
                  location={service.location}
                  index={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VendorHomePage;
