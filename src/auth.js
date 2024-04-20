"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Auth = ({ children }) => {
  const router = useRouter();
  const authorization = sessionStorage.getItem("auth");

  console.log("ree", authorization);

  if (!authorization) {
    router.push("/login");
  } else {
    return (
      <>
        <div>{children}</div>
      </>
    );
  }
};
export default Auth;
