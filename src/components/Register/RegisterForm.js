import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

//FontAwsome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { fetchApi } from "../../config/axiosInstance";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await fetchApi({
      method: "post",
      url: "/api/users/register",
      body: {
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
      },
    });
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Join us Now
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to get create an account
        </div>

        <div className="mt-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="name"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >
                Name:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <FontAwesomeIcon icon={faUser} style={{ color: "#125dde" }} />
                </div>

                <input
                  id="name"
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full  py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div className="flex flex-col mb-5">
              <label
                htmlFor="lastname"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >
                Lastname:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <FontAwesomeIcon icon={faUser} style={{ color: "#125dde" }} />
                </div>

                <input
                  id="lastname"
                  type="text"
                  name="lastname"
                  {...register("lastname", { required: true })}
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full  py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your lastname"
                />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="email"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >
                E-Mail Address:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <FontAwesomeIcon icon={faAt} style={{ color: "#125dde" }} />
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    },
                  })}
                  className=" text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Password:
              </label>
              <div className="relative">
                <div className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <span>
                    <FontAwesomeIcon
                      icon={faLock}
                      style={{ color: "#125dde" }}
                    />
                  </span>
                </div>

                <input
                  id="password"
                  type="password"
                  name="password"
                  {...register("password", { required: true, minLength: 4 })}
                  className=" text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                className=" flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in"
              >
                <span className="mr-2 uppercase">Sign Up</span>
                <span>
                  {/* <svg
                    classNameName="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg> */}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      {errors.name?.type === "required" && (
        <span className="text-red-500">* Name field cant be empty </span>
      )}
      {errors.lastname?.type === "required" && (
        <span className="text-red-500">* Lastname field cant be empty </span>
      )}
      {errors.email?.type === "required" && (
        <span className="text-red-500">* Email field cant be empty </span>
      )}
      {errors.password?.type === "minLength" && (
        <span className="text-red-500">
          * Your password must have at least 4 characters{" "}
        </span>
      )}
      <div className="flex justify-center items-center mt-6">
        <span className=" inline-flex items-center text-gray-700 font-medium text-xs text-center">
          You have an account?
          <Link
            to={"/login"}
            className="text-xs ml-2 text-blue-500 font-semibold"
          >
            Login here
          </Link>
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;
