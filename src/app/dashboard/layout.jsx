import Navbar from "../Components/Navbar/navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import Auth from "../../auth";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <>
        <div>
          <Navbar />
          <Sidebar />
          <main>{children}</main>
        </div>
      </>
    </>
  );
};
export default DashboardLayout;
