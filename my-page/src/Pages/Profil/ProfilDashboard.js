import React from "react";
import { Outlet } from "react-router-dom";
import MyPage from "./MyPage";
import UpdateProfil from "./UpdateProfil";

function ProfilDashboard() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProfilDashboard;
