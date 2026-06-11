import type { ReactNode } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import "./DashboardLayout.scss";

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="dashboard-layout">
            <Navbar />
            <div className="dashboard-body">
                <Sidebar />
                <div className="main-content">{children}</div>
            </div>
        </div>
    );
};

export default DashboardLayout;
