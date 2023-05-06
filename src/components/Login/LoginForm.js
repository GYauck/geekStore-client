import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import Cookies from "js-cookie";

//FontAwsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { fetchApi } from "../../config/axiosInstance";

const LoginForm = () => {

  const email = useInput("email");
  const password = useInput("password");
  const token = Cookies.get("token");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetchApi({
      method: "post",
      url: "/api/users/login",
      body: {
        email: email.value,
        password: password.value,
      },
    });
    Cookies.set("token", res.data.user.token)
    localStorage.setItem("token",res.data.user.token)
    const user = await fetchApi({
      method: "get",
      url: "/api/users/me",
      headers: { Authorization: `Bearer ${token}` },
    });
    navigate("/");
    return user.data;
  }


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Login
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to access with your account
        </div>

        <div className="mt-10">
          <form onSubmit={handleLogin}>
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
                  {...email}
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
                  {...password}
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
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <span className=" inline-flex items-center text-gray-700 font-medium text-xs text-center">
          You need an account?
          <Link
            to={"/register"}
            className="text-xs ml-2 text-blue-500 font-semibold"
          >
            Register here
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
