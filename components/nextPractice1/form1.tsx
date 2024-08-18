import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button1 from "./button1";

interface IFormInput {
  name: string;
  email: string;
}

const Form1: React.FC = () => {
  const [error, setError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      console.log(data);

      const response = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md dark:text-black"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-xm font-medium text-gray-700"
        >
          Name:
        </label>
        <input
          id="name"
          {...register("name", { required: true, minLength: 2 })}
          className={`mt-1 block w-full px-3 border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } rouded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
        />
        {errors.name && (
          <p className="text-xs text-red-500">
            Name is required and must be at least 2 characters long
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-xm font-medium text-gray-700"
        >
          Email:
        </label>
        <input
          id="email"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          })}
          className={`mt-1 block w-full px-3 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rouded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
        />
        {errors.email && (
          <p className="text-xs text-red-500">Invalid email address</p>
        )}
      </div>

      <Button1
        type="submit"
        size="medium"
        color="primary"
        isLoading={false}
        disabled={false}
        className="w-auto"
      >
        Submit
      </Button1>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </form>
  );
};

export default Form1;
