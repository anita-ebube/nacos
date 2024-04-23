import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";

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
