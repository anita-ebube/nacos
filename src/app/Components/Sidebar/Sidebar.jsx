"use client";
import { useState } from "react";
import Link from "next/link";
import {Settings, BookOpen, Download, LogOut} from "lucide-react"
const Sidebar = () => {
  const sidebarLinks = [
    {
      href: "/dashboard",
      link: "Courses",
      image: <BookOpen />,
      children:[
      {
        href:"/",
        level:"100 level",
      },
      {
        href:"/",
        level:"200 level",
      },
      {
        href:"/",
        level:"300 level"
      },
      {
        href:"/",
        level:"400 level",
      },
    ]
    },
    {
      href: "/dashboard",
      link: "Settings",
      image: <Settings />,
      children : []
    },
    {
      href:"/login",
      link: "LogOut",
      image: <LogOut />,
      children : []
    },
  ];

  const [isOpen, setIsOpen] = useState(true);
  const [openParent, setOpenParent] = useState(null);

  const toggleParent = (index) => {
    setOpenParent(openParent === index ? null : index);
  };

  return (
    <nav className={`fixed bg-white min-h-screen drop-shadow p-10 ${isOpen ? 'w-72' : 'w-28'} transition-width duration-500 cursor-pointer`}>
      <div className="flex items-center sm:gap-5  pb-[7rem] ">
      <img
          src="/images/logo2.png"
          alt="NotePlug"
          className={`w-[80%] h-1/2 ${isOpen ? '' : 'hidden' }`}
        />
        <img src="/images/menu.png" alt=""  onClick={() => setIsOpen(!isOpen)} className="w-7 h-9"/>
      </div>
      {sidebarLinks.map((item, index) => (
        <div className="mt-10" key={index}>
          <Link href={item.href}  className="sidebar flex gap-5 items-center text-xl font-medium" onClick={() => toggleParent(index)}>
            {item.image}
            <h2 className={`whitespace-pre duration-500 ${!isOpen && 'opacity-0 translate-x-28 overflow-hidden'}`}>{item.link}</h2>
          </Link>
          {openParent === index && (
            <div>
              {item?.children?.map((child, childIndex) => (
                <Link href={child.href} key={childIndex} className="p-1 text-xl text-[#A3A3A3] hover:text-[#518310] active:text-[#518310]">
                  <h2 className={`${!isOpen && 'opacity-0 translate-x-28'} pl-[4rem] `}>{child.level}</h2>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      <img
        src="/images/sidebar/bottom.png"
        alt=""
        className="absolute bottom-0 left-1"
      />
    </nav>
  );
};
export default Sidebar;
