import { Outlet } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import CursorGlow from "./Components/CursorGlow";
import Footer from "./Components/Footer";
import contactInfoData from "./jsons/contactInfo.json";

function Layout() {
  return (
    <div className="min-h-screen bg-ink-800">
      <CursorGlow />
      <NavigationBar />
      <Outlet />
      <Footer contactInfo={contactInfoData.contactInfo} />
    </div>
  );
}

export default Layout;
