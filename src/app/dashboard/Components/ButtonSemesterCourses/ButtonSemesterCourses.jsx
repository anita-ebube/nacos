"use client";
import { useState } from "react";
import CoreCourses from "../Courses/coreCourses";
import { departmentalFirstSemesternotes, departmentalSecondSemesternotes, generalFirstSemesternotes,  } from "../../../../../src/app/data";
import GeneralCourses from "../Courses/generalCourses";

const ToggleButton = ({ active, onToggle, children }) => {
  return (
    <button
      className={`${
        active
          ? "bg-[#518310] text-white"
          : "bg-transparent border border-[#518310]"
      } px-8 py-4 m-5 text-[1.5rem] rounded font-medium`}
      onClick={onToggle}
    >
      {children}
    </button>
  );
};

const ButtonSemesterCourses = () => {
  const [firstSemester, setFirstSemester] = useState({
    toggle: false,
    active: true,
  });
  const [secondSemester, setSecondSemester] = useState({
    toggle: false,
    active: false,
  });

  const handleToggle = (type) => {
    if (type === "firstSemester") {
      setFirstSemester({
        toggle: true,
        active: !firstSemester.active,
      });
      setSecondSemester({
        toggle: false,
        active: false,
      });
      console.log("first");
    } else if (type === "secondSemester") {
      setSecondSemester({
        toggle: true,
        active: !secondSemester.active,
      });
      setFirstSemester({
        toggle: false,
        active: false,
      });
      console.log("second");
    }
  };

  return (
    <div>
      <ToggleButton
        onToggle={() => handleToggle("firstSemester")}
        active={firstSemester.active}
      >
        First Semester
      </ToggleButton>
      <ToggleButton
        onToggle={() => handleToggle("secondSemester")}
        active={secondSemester.active}
      >
        2nd Semester
      </ToggleButton>
      <div>
        {firstSemester.active ? (
          <>
            <h1 className="text-[2rem] font-medium pt-5">Departmental Courses</h1>
            <div className="lg:grid lg:grid-cols-4 gap-10">
              {departmentalFirstSemesternotes.map((note, index) => (
                <div key={index}>
                  <CoreCourses
                    href={note.href}
                    image={note.image}
                    title={note.title}
                    author={note.author}
                    name={note.name}
                    hint={note.hint}
                    download={note.download}
                  />
                </div>
              ))}
            </div>
            <h1 className="text-[2rem] font-medium pt-20">General Courses</h1>
            <div className="lg:grid lg:grid-cols-4 gap-10">
              {generalFirstSemesternotes.map((note, index) => (
                <div key={index}>
                  <GeneralCourses
                    href={note.href}
                    image={note.image}
                    title={note.title}
                    author={note.author}
                    name={note.name}
                    hint={note.hint}
                    download={note.download}
                  />
                </div>
              ))}
            </div>
          </>
        ) : secondSemester.active ? (
          <>
            <h1 className="text-[2rem] font-medium pt-5">Departmental Courses</h1>
            <div className="lg:grid lg:grid-cols-4 gap-10">
              {departmentalSecondSemesternotes.map((note, index) => (
                <div key={index}>
                  <CoreCourses
                    href={note.href}
                    image={note.image}
                    title={note.title}
                    author={note.author}
                    name={note.name}
                    hint={note.hint}
                    download={note.download}
                  />
                  
                </div>
              ))}
            </div>
            <h1 className="text-[2rem] font-medium pt-20">General Courses</h1>
            <div className="lg:grid lg:grid-cols-4 gap-10">
              {generalFirstSemesternotes.map((note, index) => (
                <div key={index}>
                  <GeneralCourses
                    href={note.href}
                    image={note.image}
                    title={note.title}
                    author={note.author}
                    name={note.name}
                    hint={note.hint}
                    download={note.download}
                  />
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ButtonSemesterCourses;
