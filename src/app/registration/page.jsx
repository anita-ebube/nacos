"use client";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import SelectDepartment from "../Components/SelectDepartment/SelectDepartment";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Registration = () => {
  const router = useRouter();
  const [full_name, setFull_name] = useState("");
  const [reg_no, setReg_no] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, handleSubmit } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        `https://anita.metrochem.com.ng/api/auth/register`,
        {
          full_name,
          reg_no,
          email,
          password,
          confirm_password,
        }
      );
      setFull_name("");
      setEmail("");
      setReg_no("");
      setPassword("");
      setConfirm_password;
      if (response.data.email === "The email has already been taken.") {
        router.push("/registration");
      } else {
        router.push('/login');
      }
      // console.log(response.data);
    } catch (error) {
      console.log(error);
      // if(response)
    }
  };

  const departmentOptions = [
    "Computer Science",
    "Mathematics",
    "Pure and Industrial Chemistry",
    "Statistics",
  ];

  return (
    <>
      <div>
        <div className="p-10">
          <Header />
        </div>
        <div className="flex lg:justify-between justify-center align-center lg:p-10">
          <div className="lg:px-[10rem] lg:w-[50%]">
            <h1 className="text-center text-[3rem] ">Hello</h1>
            <p className="text-center py-1 text-[1.5rem]">
              Create your account
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="relative">
              <label htmlFor="" className="block text-[1.5rem] mt-10">
                FullName
              </label>
              <input
                {...register("full_name")}
                value={full_name}
                type="text"
                onChange={(event) => setFull_name(event.target.value)}
                className="border border-[#737373] w-full px-4 py-3 rounded-lg my-2 text-[13px] "
              />
              {/* {errors.map((error, index) => (
                <p className="text-red-500" key={index}>
                  {error?.full_name}
                </p>
              ))} */}

              <label htmlFor="" className="block text-[1.5rem] mt-10">
                Registration Number
              </label>
              <input
                {...register("reg_no")}
                value={reg_no}
                onChange={(event) => setReg_no(event.target.value)}
                className="border border-[#737373] w-full px-4 py-3 rounded-lg my-2 text-[13px] "
              />
              {/* {errors.map((error, index) => (
                <p className="text-red-500" key={index}>
                  {error?.reg_no}
                </p>
              ))} */}
              {/* {regNumberValidationError && (
                <p className="text-red-500">{regNumberValidationError}</p>
              )} */}
              <label htmlFor="" className="block text-[1.5rem] mt-10">
                Department
              </label>
              {/* <SelectDepartment
                placeholder={"Select Department"}
                options={departmentOptions}
                selectedOption={departmentStates}
                onChange={handleStateChange}
                value={department}
              /> */}
              <label htmlFor="" className="block text-[1.5rem] mt-10">
                Email
              </label>
              <input
                {...register("email")}
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="border border-[#737373] w-full px-4 py-3 rounded-lg my-2 text-[13px] "
              />
              {/* {emailValidationError && (
                <p className="text-red-500">{emailValidationError}</p>
              )}
              {errors.map((error, index) => (
                <p className="text-red-500" key={index}>
                  {error?.email}
                </p>
              ))} */}
              <label
                htmlFor="upload-file"
                className="block text-[1.5rem] mt-10"
              >
                Select Profile Image:
              </label>
              <input
                type="file"
                accept="image/png"
                name="image"
                id="profile"
                capture="camera"
                // onChange={(e) => handleData(e)}
                className=" border border-[#737373] w-full px-4 py-3 rounded-lg my-2 file:mr-10"
              />
              <div className="relative">
                <label htmlFor="" className="block text-[1.5rem] mt-10">
                  Password
                </label>
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-[#737373] w-full px-4 py-3 rounded-lg my-2 text-[13px] text-black "
                />
                {/* {passwordValidationError && (
                  <p className="text-red-500">{passwordValidationError}</p>
                )} */}
                {/* {errors.map((error, index) => (
                  <p className="text-red-500" key={index}>
                    {error?.password}
                  </p>
                ))} */}
                <div className="absolute top-[35.9px] right-5">
                  {showPassword ? (
                    <BsEye onClick={togglePasswordVisibility} size={15} />
                  ) : (
                    <BsEyeSlash onClick={togglePasswordVisibility} size={15} />
                  )}
                </div>
              </div>
              <div className="relative">
                <label htmlFor="" className="block text-[1.5rem] mt-10">
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirm_password")}
                  onChange={(e) => setConfirm_password(e.target.value)}
                  value={confirm_password}
                  className="border border-[#737373] w-full px-4 py-3 rounded-lg my-2 text-[13px] "
                />
                <div className="absolute top-[33px] right-5">
                  {showConfirmPassword ? (
                    <BsEye
                      onClick={toggleConfirmPasswordVisibility}
                      size={16}
                    />
                  ) : (
                    <BsEyeSlash
                      onClick={toggleConfirmPasswordVisibility}
                      size={15}
                    />
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#518310] lg:px-[10rem] w-full py-4 text-white text-[1.5rem] rounded-lg mt-10"
              >
                Register
              </button>
              <p className="mb-[5rem] pt-5 text-center text-xl">
                Already have an account?{" "}
                <a href="/login" className="text-[#518310]">
                  Sign In
                </a>
              </p>
            </form>
          </div>
          <div>
            <Image
              src="/images/register.png"
              alt="Registration Image"
              width={900}
              height={900}
              className=" hidden lg:flex object-scale-down pr-[6rem] "
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
