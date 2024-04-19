"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Navbar = () => {
  const [username, setUsername] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const getUsernameFromSession = () => {
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  };

  useEffect(() => {
    getUsernameFromSession();
  }, []); //
  useEffect(() => {
    const fetchRegisteredUsers = async () => {
      try {
        const response = await axios.get(
          "https://anita.metrochem.com.ng/public/api/registrations"
        );
        const data = response.data;
        const storedUsername = sessionStorage.getItem("username");
        if (storedUsername) {
          const matchedUsers = data.records.filter(
            (user) => user.full_name === storedUsername
          );
          if (matchedUsers.length > 0) {
            setUserProfile(matchedUsers[0]);
            setUserProfile(matchedUsers);
          } else {
            console.error("No user with the username found in the records.");
          }
        } else {
          // If the stored username doesn't exist, log an error
          console.error("No username found in session storage.");
        }
      } catch (error) {
        console.error("display error", error);
      }
    };
    fetchRegisteredUsers();
  });

  return (
    <>
      <nav className="fixed flex justify-between items-center gap-10 p-10 bg-white drop-shadow w-full">
        {userProfile && userProfile.length > 0 ? (
          userProfile.map((user) => (
            <div key={user.id} className="lg:ml-[24rem] ml-[10rem]">
              <p className="lg:text-2xl text-[10px] ">
                <span className="lg:text-2xl text-[10px] font-medium">
                  Courses
                </span>{" "}
                / {user.department}-100 Level
              </p>
            </div>
          ))
        ) : (
          <p>Loading ....</p>
        )}

        <div className="lg:flex justify-between items-center gap-10 hidden">
          <img src="/icons/notification.svg" alt="" />
          <h1 className="lg:text-2xl text-[10px]">Welcome, {username}</h1>

          {userProfile &&
            userProfile.map((profile) => (
              <div key={profile.id}>
                <img
                  src={`https://anita.metrochem.com.ng/public/${profile.profile}`}
                  alt="profile"
                  className="w-[3vw] h-[3vw] rounded-full"
                />
              </div>
            ))}

        </div>
      </nav>
    </>
  );
};

export default Navbar;
