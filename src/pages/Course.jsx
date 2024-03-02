import React, { useEffect, useState } from "react";
import Title from "../components/Title";

import FilterMenu from "../components/FilterMenu";
import SearchInput from "../components/SearchInput";
import { UseCoursesTable } from "../components/Tables";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CourseModel from "../components/CourseModel";
import Model from "../components/Model";

const Course = () => {
  const [searchText, setSearchText] = useState("");
  const [acadimcYearChoosed, setAcadimcYearChoosed] = useState("الكل");

  const acadimcYear = ["الكل", 1, 2, 3];

  const admin = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (admin === "") {
      navigate("/signin");
    }
  }, [admin, navigate]);
  const [openModel, setOpenModel] = useState(false);
  const [close, setClose] = useState(false);
  const [courseId, setCourseId] = useState("");

  return (
    <div className="p-5 home-screen">
      {openModel && <CourseModel setOpenModel={setOpenModel} />}

      {close && (
        <Model setClose={setClose} deleteMode={true} courseId={courseId} />
      )}

      <Title title="الكورسات" />
      <div className="flex justify-center items-start flex-col gap-3 mt-3">
        <div className="flex justify-center  items-start gap-3 flex-row ">
          <FilterMenu
            title={"السنة الدراسية"}
            data={acadimcYear}
            selected={"الكل"}
            setAcadimcYearChoosed={setAcadimcYearChoosed}
          />
        </div>
        <div className="flex justify-between items-center w-full ">
          <div className="w-1/2 md:w-full">
            <SearchInput
              setSearchText={setSearchText}
              searchText={searchText}
            />
          </div>

          <button
            onClick={() => setOpenModel(true)}
            className="py-2 px-3 gap-3 rounded-full bg-buttonBlue flex justify-center items-center   min-w-28 text-white "
          >
            إضافة كورس
          </button>
        </div>
      </div>
      <div className="mt-5 overflow-x-auto box-shadow">
        <UseCoursesTable
          setClose={setClose}
          searchText={searchText}
          acadimcYearChoosed={acadimcYearChoosed}
          filter={true}
          setCourseId={setCourseId}
        />
      </div>
    </div>
  );
};

export default Course;
