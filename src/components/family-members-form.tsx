import React, { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Button from "./ui/button";

const Form = ({ setFamilyDetails, setChangecomp }: any) => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      familyMembers: [{ name: "", age: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "familyMembers",
  });

  useEffect(() => {
    const savedFamilyMembers = localStorage.getItem("familyMembers");
    if (savedFamilyMembers) {
      setValue("familyMembers", JSON.parse(savedFamilyMembers));
    }
  }, [setValue]);

  useEffect(() => {
    localStorage.setItem("familyMembers", JSON.stringify(fields));
  }, [fields]);

  const onSubmit = (data: any) => {
    setFamilyDetails(data.familyMembers);
    setChangecomp(true);
    alert("Success");
  };

  return (
    <form className="flex flex-col space-y-8" onSubmit={handleSubmit(onSubmit)}>
      {fields.map((member, index) => (
        <div className="">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold xs:text-lg">
              Family Member {index + 1}{" "}
            </h2>
            {index !== 0 && (
              <Button
                className="text-lg bg-red-400 px-5 rounded-lg text-white py-1"
                type="button"
                onClick={() => remove(index)}
              >
                Remove
              </Button>
            )}
          </div>
          <div className="space-y-5" key={member.id}>
            <div className="flex flex-col ">
              <label>Name</label>
              <input
                type="text"
                className={`outline-none border-[1px] ${
                  errors?.familyMembers?.[index]?.name
                    ? "border-[#dc3545]"
                    : "border-[#CCCCCC]"
                } rounded-lg w-[90vw] h-[40px] pl-2`}
                {...register(`familyMembers.${index}.name`, { required: true })}
                defaultValue={member.name}
                placeholder="Name"
              />
              {errors?.familyMembers?.[index]?.name && (
                <span className="text-[#dc3545] text-sm mt-1">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col ">
              <label>Age</label>
              <input
                type="text"
                className={`outline-none border-[1px] ${
                  errors?.familyMembers?.[index]?.age
                    ? "border-[#dc3545]"
                    : "border-[#CCCCCC]"
                } rounded-lg w-[90vw] h-[40px] pl-2`}
                {...register(`familyMembers.${index}.age`, { required: true })}
                defaultValue={member.age}
                placeholder="Age"
              />
              {errors?.familyMembers?.[index]?.age && (
                <span className="text-[#dc3545] text-sm mt-1">
                  This field is required
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
      <Button
        className="bg-gray-200 rounded-lg w-full px-20 py-2 font-medium text-lg"
        type="button"
        onClick={() => append({ name: "", age: "" })}
      >
        Add Family Member
      </Button>
      <Button
        className="bg-[#dc3545] rounded-lg w-full px-20 py-2 text-white text-lg"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
