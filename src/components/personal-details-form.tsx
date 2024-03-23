"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "./ui/input";
import Button from "./ui/button";
import { useRouter } from "next/navigation";

const PersonalDetailsForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    // console.log(data);
    localStorage.setItem("personalDetails", JSON.stringify(data));
    router.push("/family-members-details");
  };
  // console.log("errors", errors);

  return (
    <div className="flex flex-col items-center space-y-8 py-10">
      <h1 className="text-4xl font-semibold bg-black text-white py-2 px-8 rounded-lg xs:text-2xl">
        Personal Details
      </h1>
      <form
        className="space-y-5 border-2 p-10 sm:p-5 xs:p-3 rounded-lg bg-gray-200"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          name="firstName"
          label="First Name"
          type="text"
          placeholder=""
          errors={errors?.firstName?.type}
          register={register}
          constrains={{
            required: true,
          }}
        />
        <Input
          name="lastName"
          label="Last Name"
          type="text"
          placeholder=""
          errors={errors?.lastName?.type}
          register={register}
          constrains={{
            required: "This field is required",
          }}
        />
        <Input
          name="parentName"
          label="Parent Name"
          type="text"
          placeholder=""
          errors={errors?.parentName?.type}
          register={register}
          constrains={{
            required: "This field is required",
          }}
        />
        <Input
          name="phone"
          label="Phone"
          type="number"
          placeholder=""
          errors={errors?.phone?.type}
          register={register}
          constrains={{
            required: "This field is required",
            minLength: 10,
            maxLength: 10,
          }}
        />
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder=""
          errors={errors?.email?.type}
          register={register}
          constrains={{
            required: "This field is required",
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          }}
        />
        <Input
          name="address"
          label="Address"
          type="text"
          placeholder=""
          errors={errors?.address?.type}
          register={register}
          constrains={{ required: "This field is required" }}
        />

        <Button
          className="bg-[#dc3545] rounded-lg w-full px-20 py-2 text-white text-lg"
          type="submit"
        >
          Next
        </Button>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
