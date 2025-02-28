import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation Schemas for each step
const step1Schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
});

const step2Schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
});

const step3Schema = yup.object().shape({
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const schemas = [step1Schema, step2Schema, step3Schema];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemas[step]),
    mode: "onChange",
  });

  const onNext = () => setStep((prev) => prev + 1);
  const onPrev = () => setStep((prev) => prev - 1);

  const onSubmit = (data) => {
    console.log("Final Submission:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Multi-Step Form</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Step 1 */}
          {step === 0 && (
            <div className="animate-fade-in">
              <label className="block text-gray-700">First Name</label>
              <input {...register("firstName")} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400" />
              <p className="text-red-500 text-sm">{errors.firstName?.message}</p>

              <label className="block mt-4 text-gray-700">Last Name</label>
              <input {...register("lastName")} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400" />
              <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
            </div>
          )}

          {/* Step 2 */}
          {step === 1 && (
            <div className="animate-fade-in">
              <label className="block text-gray-700">Email</label>
              <input {...register("email")} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400" />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>

              <label className="block mt-4 text-gray-700">Phone</label>
              <input {...register("phone")} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400" />
              <p className="text-red-500 text-sm">{errors.phone?.message}</p>
            </div>
          )}

          {/* Step 3 */}
          {step === 2 && (
            <div className="animate-fade-in">
              <label className="block text-gray-700">Password</label>
              <input type="password" {...register("password")} className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400" />
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {step > 0 && (
              <button type="button" onClick={onPrev} className="bg-gray-500 text-white px-4 py-2 rounded-md">
                Previous
              </button>
            )}
            {step < 2 ? (
              <button type="button" onClick={onNext} className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Next
              </button>
            ) : (
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
