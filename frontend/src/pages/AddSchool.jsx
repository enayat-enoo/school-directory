import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from 'react-toastify';

const API_URL=import.meta.env.VITE_API_URL;

function AddSchool() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const notify =()=>toast("School added successfully ✅")

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => formData.append(key, data[key]));
    formData.append("image", data.image[0]);

    await axios.post(`${API_URL}/api/schools/add`, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });

    notify();
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Add School</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <input {...register("name", { required: true })}
          placeholder="School Name"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
        {errors.name && <p className="text-red-500">Name is required</p>}

        <input {...register("address", { required: true })}
          placeholder="Address"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <div className="grid grid-cols-2 gap-4">
          <input {...register("city", { required: true })}
            placeholder="City"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <input {...register("state", { required: true })}
            placeholder="State"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <input type="number" {...register("contact", { required: true })}
          placeholder="Contact Number"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <input type="email" {...register("email_id", { required: true })}
          placeholder="Email"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <input type="file" {...register("image", { required: true })}
          className="w-full p-3 border rounded-lg"
        />

        <button type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddSchool;


