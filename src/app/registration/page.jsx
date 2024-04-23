"use client";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import SelectDepartment from "../Components/SelectDepartment/SelectDepartment";
import React, { useState } from "react";
import axios from "axios";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Registration = () => {
  const [postUsers, setPostUsers] = useState({
    full_name: "",
    reg_no: "",
    email: "",
    department: "",
    profile: "", // Change profile to store file data separately
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState("");
  const [passwordValidationError, setPasswordValidationError] = useState("");
  const [emailValidationError, setEmailValidationError] = useState("");
  const [regNumberValidationError, setRegNumberValidationError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [departmentStates, SelectDepartmentStates] = useState('')

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateRegNumber = (regno) => {
    const regnoRegx = /^\d+\/\d+$/;
    return regnoRegx.test(regno);
  };
  const submitForm = async (e) => {
    e.preventDefault();

    if (!validateEmail(postUsers.email)) {
      setEmailValidationError("Invalid email format");
      return;
    }

    if (!validatePassword(postUsers.password)) {
      setPasswordValidationError("Password must be at least 8 characters long");
      return;
    }

    if (!validateRegNumber(postUsers.reg_no)) {
      setRegNumberValidationError(
        "Only numbers are accepted and it must contain a /"
      );
    }

    const formData = new FormData();
    for (const key in postUsers) {
      // Append all fields except the profile image
      if (key !== "profile") {
        formData.append(key, postUsers[key]);
      }
    }

    // Append the file data if it exists
    if (postUsers.profile instanceof File) {
      formData.append("profile", postUsers.profile);
    }

    try {
      const res = await axios.post(
        "https://anita.metrochem.com.ng/api/auth/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const data = res.data;
      console.log(data);
      setRegistrationSuccess(true);
      // window.location.href = "/login";
      setPostUsers({
        full_name: "",
        reg_no: "",
        email: "",
        department: "",
        profile: "",
        password: "",
        confirm_password: "",
      });
    } catch (error) {
      console.error("NOTICE!!", error);
      setError("The username is already taken");
      if (
        error.response &&
        error.response.data &&
        error.response.data.message === "Email already taken"
      ) {
        setError("Email is already taken");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  const handleData = (e) => {
    const { id, value, type } = e.target;

    if (type === "file") {
      setPostUsers((prevState) => ({
        ...prevState,
        [id]: e.target.files[0], 
      }));
    } else {
      setPostUsers((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  const departmentOptions = ["Computer Science", "Mathematics","Pure and Industrial Chemistry", "Statistics"]
  const handleStateChange = (event) => {
    SelectDepartmentStates(event.target.value)
  }
  return (
    <>
      <div>
        <div className="p-10">
          <Header />
        </div>
        <div className="flex lg:justify-between justify-center align-center lg:p-10">
          <div className="lg:px-[10rem] w-[50%]">
            <h1 className="text-center text-[3rem] ">Hello</h1>
            <p className="text-center py-1 text-[1.5rem]">
              Create your account
            </p>
            {registrationSuccess ? (
              <p className="text-green-500 text-center">
                Registration completed
              </p>
            ) : (
              <p className="text-green-500 text-center">Error Occured</p>
            )}
            <form action="" onSubmit={submitForm} className="relative">
              <label htmlFor="" className="block text-[1.5rem] mt-10">
                FullName
              </label>
              <input
                type="text"
                id="full_name"
                value={postUsers.full_name}
                onChange={(e) => handleData(e)}
                className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2 text-[13px] "
              />
              <label htmlFor="" className="block text-[1.5rem] mt-10">
                Registration Number
              </label>
              <input
                type="text"
                id="reg_no"
                value={postUsers.reg_no}
                onChange={(e) => handleData(e)}
                className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2 text-[13px] "
              />
              {regNumberValidationError && (
                <p className="text-red-500">{regNumberValidationError}</p>
              )}
              <label htmlFor="" className="block text-[1.5rem] mt-10">
                Department
              </label>
              <SelectDepartment 
                placeholder={"Select Department"}
                options={departmentOptions}
                selectedOption={departmentStates}
                onChange={handleStateChange}
                value={postUsers.department}
              />
              <label htmlFor="" className="block text-[1.5rem] mt-10">
                Email
              </label>
              <input
                type="text"
                id="email"
                value={postUsers.email}
                onChange={(e) => handleData(e)}
                className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2 text-[13px] "
              />
              {emailValidationError && (
                <p className="text-red-500">{emailValidationError}</p>
              )}
              <label
                htmlFor="upload-file"
                className="block text-[1.5rem] mt-10"
              >
                Select Profile Image:
              </label>
              <input
                type="file"
                // accept="image/png"
                name="image"
                id="profile"
                capture="camera"
                onChange={(e) => handleData(e)}
                className=" border border-[#737373] w-full px-4 py-4 rounded-lg my-2 file:mr-10"
              />
              <div className="relative">
                <label htmlFor="" className="block text-[1.5rem] mt-10">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  onChange={(e) => handleData(e)}
                  value={postUsers.password}
                  className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2 text-[13px] "
                />
                {passwordValidationError && (
                  <p className="text-red-500">{passwordValidationError}</p>
                )}
                <div className="absolute top-[35.5px] right-5">
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
                  id="confirm_password"
                  onChange={(e) => handleData(e)}
                  value={postUsers.confirm_password}
                  className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2 text-[13px] "
                />
                <div className="absolute top-[38px] right-5">
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
                className="bg-[#518310] lg:px-[10rem] w-full py-4 text-white my-4 text-[1.5rem] rounded-lg mt-10"
              >
                Register
              </button>
            </form>
          </div>
          <div>
            <img
              src="/images/register.png"
              alt="Registration Image"
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
