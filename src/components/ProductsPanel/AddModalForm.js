import React from "react";
import { useForm } from "react-hook-form";
import { fetchApi } from "../../config/axiosInstance";

const AddModalForm = ({ setShowModal, setProducts }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await fetchApi({
      method: "post",
      url: `/api/products/createProduct`,
      body: data,
    });
    await fetchApi({
      method: "get",
      url: "/api/products/getAllProducts",
    });
    await setShowModal(false);
  };


  return (
    <div className="relative p-6 flex-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && (
            <span className="text-red-500">* Name field cant be empty </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            {...register("price", { required: true })}
          />
          {errors.price?.type === "required" && (
            <span className="text-red-500">* Price field cant be empty </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stock"
          >
            Stock
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="stock"
            type="number"
            {...register("stock", { required: true })}
          />
          {errors.stock?.type === "required" && (
            <span className="text-red-500">* Stock field cant be empty </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image_URL"
          >
            Image_URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image_URL"
            type="text"
            {...register("image_URL", { required: true })}
          />
          {errors.image_URL?.type === "required" && (
            <span className="text-red-500">
              * Image_URL field cant be empty{" "}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            {...register("description", { required: true })}
          />
          {errors.description?.type === "required" && (
            <span className="text-red-500">
              * Description field cant be empty{" "}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="brand"
          >
            Brand
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="brand"
            type="text"
            {...register("brand", { required: true })}
          />
          {errors.brand?.type === "required" && (
            <span className="text-red-500">* Brand field cant be empty </span>
          )}
        </div>

        <button
          onSubmit={onSubmit}
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AddModalForm;
