"use client";
import Form from "@/components/family-members-form";
import React, { useState } from "react";

const FamilyMembersForm = () => {
  const [compChnage, setChangecomp] = useState(false);
  const [familyDetails, setFamilyDetails] = useState([]);
  const personalsDetails = JSON.parse(localStorage.getItem("personalDetails"));

  return (
    <>
      {compChnage ? (
        <div className=" flex flex-col items-center  space-y-10 mt-10">
          <h1 className="text-4xl font-semibold bg-black text-white py-2 px-8 rounded-lg xs:text-2xl">
            User Details
          </h1>
          <div className="space-y-10 w-[80vw]">
            <div className="space-y-5">
              <h2 className="text-2xl font-medium">User Personal Details</h2>
              <div className="px-8">
                <p className="text-lg flex gap-2 font-medium">
                  Name:
                  <span className="font-normal">
                    {personalsDetails?.firstName} {personalsDetails?.lastName}{" "}
                  </span>
                </p>
                <p className="text-lg flex gap-2 font-medium">
                  Parent Name:
                  <span className="font-normal">
                    {personalsDetails?.parentName}
                  </span>
                </p>
                <p className="text-lg flex gap-2 font-medium">
                  Phone Number:
                  <span className="font-normal">{personalsDetails?.phone}</span>
                </p>

                <p className="text-lg flex gap-2 font-medium">
                  Email:
                  <span className="font-normal">{personalsDetails?.email}</span>
                </p>
                <p className="text-lg flex gap-2 font-medium">
                  Address:
                  <span className="font-normal">
                    {personalsDetails?.address}
                  </span>
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <h2 className="text-2xl font-medium">User Family Members</h2>
              {familyDetails.map((item: any, index: any) => (
                <div>
                  <h3 className="font-medium text-xl rounded-lg py-2 px-5 bg-gray-200">
                    Family Member {index + 1}
                  </h3>
                  <div key={index} className="px-8 mt-2">
                    <p className="text-lg flex gap-2 font-medium">
                      Name:
                      <span className="font-normal">{item.name}</span>
                    </p>
                    <p className="text-lg flex gap-2 font-medium">
                      Age:
                      <span className="font-normal">{item.age}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-8 py-10">
          <h1 className="text-4xl font-semibold bg-black text-white py-2 px-8 rounded-lg xs:text-xl ">
            Family Members Details
          </h1>
          <Form
            setFamilyDetails={setFamilyDetails}
            setChangecomp={setChangecomp}
          />
        </div>
      )}
    </>
  );
};

export default FamilyMembersForm;
