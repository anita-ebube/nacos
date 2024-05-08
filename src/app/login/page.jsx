"use client";
import { useRouter } from "next/navigation";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import axios from "axios";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Image from "next/image";

const Login = () => {
  const router = useRouter();
  const url = "https://anita.metrochem.com.ng/api/auth/login";
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  function handleInputChange(e) {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!credentials.username || !credentials.password) {
      setError("Please enter both username and password.");
      return;
    }

    axios
      .post(url, credentials, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.token) {
          // Save the token and username to sessionStorage
          sessionStorage.setItem("auth", response.data.token);
          sessionStorage.setItem("username", credentials.username); // Store the username
          // Redirect to dashboard
          router.push("/dashboard");
        } else {
          setError("Invalid login details.");
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        setError("Invalid login details.");
      });
  }

  return (
    <>
      <div>
        <div className="p-10">
          <Header />
        </div>
        <div className="flex lg:gap-[6rem] justify-center align-center lg:p-3">
          <div className="lg:px-[10rem] lg:py-[5rem] lg:w-[40%]">
            <h1 className="text-center text-[3rem] ">Welcome Back!</h1>
            <p className="text-center py-1 text-[1.5rem]">
              Log in to your account
            </p>
            <form onSubmit={handleFormSubmit} className="relative ">
              <label htmlFor="username" className="block text-[1.5rem] mt-10">
                FullName
              </label>
              <input
                type="text"
                id="username"
                value={credentials.username}
                onChange={handleInputChange}
                className="border border-[#737373] w-full px-4 py-3 rounded-lg my-2 text-[13px] "
              />
              <div className="relative">
                <label
                  label
                  htmlFor="password"
                  className="block text-[1.5rem] mt-10"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="border border-[#737373] w-full px-4 py-3 rounded-lg my-2 text-[13px] "
                />
                <div className="absolute top-[35px] lg:top-[31px] right-5">
                  {showPassword ? (
                    <BsEye onClick={togglePasswordVisibility} size={15} />
                  ) : (
                    <BsEyeSlash onClick={togglePasswordVisibility} size={15} />
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#518310] lg:px-[10rem] w-full py-4 text-white my-4 text-[1.5rem] rounded-lg mt-10"
              >
                Log In
              </button>
              {error && <p className="text-red-500">{error}</p>}
              <p className="mb-[5rem] pt-5 text-center text-xl">Not a member? <a className="text-[#518310]" href="/registration">Signup now</a></p>
              
            </form>
          </div>
          <div>
            <Image
              src="/images/login.png"
              alt="Login Image"
              width={500} height={50}
              className="hidden lg:flex object-scale-down pr-[6rem]"
            />
          </div>
        </div>
      </div>
      
      
      <div className="fixed w-full bottom-0 ">
      <Footer />
      </div>
     
    </>
  );
};

export default Login;
