import { getCurrentUser } from "@/actions/getCurrentUser";
import { apiUrl } from "@/lib/url";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type FormData = {
  name: string;
  contactPerson: string;
  category: string;
  email: string;
  phone: string;
  location: string;
  description: string;
  pricing: string;
};

interface Props {
  currentUser?: User;
}

const CreateService = ({ currentUser }: Props) => {
  const router = useRouter();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    try {
      axios
        .post(`${apiUrl}/services`, {
          ...data,
          userId: currentUser?.id,
        })
        .then((response) => {
          console.log("Service created successfully:", response.data);
          toast.success("Service Created Successfully");
          router.refresh()
        })
        .catch((error) => {
          console.error("Error creating service:", error);
        });
    } catch (error) { }
  };

  return (
    <div className="m-5">
      <form className="border flex flex-col justify-end border-gray-300 px-8 py-12 m-4 rounded-lg "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid md:grid-cols-7 grid-cols-1 sm:grid-cols-2 gap-x-10">
          <div className="col-span-2 space-y-1 border-gray-200">
            <p className="text-sm text-gray-500">
              Enter the details of your services
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-7 col-span-5 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <label className="form-label" htmlFor="">
                Service Name
              </label>
              <input
                {...register("name")}
                type="text"
                className="form-input"
                placeholder="Event Name"
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label className="form-label" htmlFor="">
                Phone Number
              </label>
              <input
                {...register("phone")}
                type="text"
                className="form-input"
                placeholder="Phone Number"
              />
            </div>

            <div className="flex flex-col space-y-2 w-full">
              <label className="form-label" htmlFor="">
                Contact Person
              </label>
              <input
                {...register("contactPerson")}
                type="text"
                className="form-input"
                placeholder="Event Type"
              />
            </div>

            <div className="flex flex-col space-y-2 w-full">
              <label className="form-label" htmlFor="">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                className="form-input"
                placeholder="Email"
              />
            </div>

            <div className="flex flex-col space-y-2 w-full">
              <label className="form-label" htmlFor="">
                Category
              </label>
              <input
                {...register("category")}
                type="text"
                className="form-input"
                placeholder="Category"
              />
            </div>

            <div className="flex flex-col space-y-2 w-full">
              <label className="form-label" htmlFor="">
                Location
              </label>
              <input
                {...register("location")}
                type="text"
                className="form-input"
                placeholder="Location"
              />
            </div>

            <div className="flex flex-col col-span-2 space-y-2 w-full">
              <label className="form-label" htmlFor="">
                Description
              </label>
              <textarea
                {...register("description")}
                rows={3}
                className="form-input"
                placeholder="Description"
              ></textarea>
            </div>
            <div className="flex flex-col col-span-2 space-y-2 w-full">
              <label className="form-label" htmlFor="">
                Pricing
              </label>
              <input
                {...register("pricing")}
                type="text"
                className="form-input"
                placeholder="Category"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="dashboard-btn"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateService;
