import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation Schema for each step
const step1Schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
});

const step2Schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zip: yup.string().matches(/^\d{5}$/, "Zip code must be 5 digits").required("Zip Code is required"),
});

const step3Schema = yup.object().shape({
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const schemas = [step1Schema, step2Schema, step3Schema];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [preview, setPreview] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemas[step]),
    mode: "onChange",
  });

  const onNext = () => setStep((prev) => prev + 1);
  const onPrev = () => setStep((prev) => prev - 1);
  const onPreview = () => setPreview(true);

  const onSubmit = (data) => {
    console.log("Final Submission:", data);
    alert("Form submitted successfully!");
  };

  const formData = watch(); // Get all form data for preview

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Multi-Step Form</h2>

        {!preview ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Step 1 */}
            {step === 0 && (
              <div>
                <label className="block text-gray-700">First Name</label>
                <input {...register("firstName")} className="w-full p-2 border rounded-md" />
                <p className="text-red-500 text-sm">{errors.firstName?.message}</p>

                <label className="block mt-4 text-gray-700">Last Name</label>
                <input {...register("lastName")} className="w-full p-2 border rounded-md" />
                <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
              </div>
            )}

            {/* Step 2 */}
            {step === 1 && (
              <div>
                <label className="block text-gray-700">Email</label>
                <input {...register("email")} className="w-full p-2 border rounded-md" />
                <p className="text-red-500 text-sm">{errors.email?.message}</p>

                <label className="block mt-4 text-gray-700">Phone</label>
                <input {...register("phone")} className="w-full p-2 border rounded-md" />
                <p className="text-red-500 text-sm">{errors.phone?.message}</p>

                <label className="block mt-4 text-gray-700">Address</label>
                <input {...register("address")} className="w-full p-2 border rounded-md" />
                <p className="text-red-500 text-sm">{errors.address?.message}</p>

                <label className="block mt-4 text-gray-700">City</label>
                <input {...register("city")} className="w-full p-2 border rounded-md" />
                <p className="text-red-500 text-sm">{errors.city?.message}</p>

                <label className="block mt-4 text-gray-700">State</label>
                <input {...register("state")} className="w-full p-2 border rounded-md" />
                <p className="text-red-500 text-sm">{errors.state?.message}</p>

                <label className="block mt-4 text-gray-700">Zip Code</label>
                <input {...register("zip")} className="w-full p-2 border rounded-md" />
                <p className="text-red-500 text-sm">{errors.zip?.message}</p>
              </div>
            )}

            {/* Step 3 */}
            {step === 2 && (
              <div>
                <label className="block text-gray-700">Password</label>
                <input type="password" {...register("password")} className="w-full p-2 border rounded-md" />
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
                <button type="button" onClick={onPreview} className="bg-purple-600 text-white px-4 py-2 rounded-md">
                  Preview
                </button>
              )}
            </div>
          </form>
        ) : (
          // Preview Screen
          <div>
            <h3 className="text-xl font-bold mb-4">Preview Your Details</h3>
            <p><strong>First Name:</strong> {formData.firstName}</p>
            <p><strong>Last Name:</strong> {formData.lastName}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Address:</strong> {formData.address}, {formData.city}, {formData.state} - {formData.zip}</p>
            <p><strong>Password:</strong> ******</p>

            {/* Submit & Edit Buttons */}
            <div className="flex justify-between mt-6">
              <button type="button" onClick={() => setPreview(false)} className="bg-gray-500 text-white px-4 py-2 rounded-md">
                Edit
              </button>
              <button type="submit" onClick={handleSubmit(onSubmit)} className="bg-green-600 text-white px-4 py-2 rounded-md">
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
