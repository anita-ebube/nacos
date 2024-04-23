import ButtonSemesters from "../Components/ButtonSemesterCourses/ButtonSemesterCourses";
import Footer from "../Components/Footer/footer";

const DashboardPage = () => {
  return (
    <>
      <div className="bg-[#f3fff1]">
        <div className=" pt-[11rem] lg:ml-[220px] lg:mr-[50px] ml-[100px] mr-[30px] ">
          <ButtonSemesters />
        </div>
        <div className="absolute w-full pt-[10rem]">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default DashboardPage;
