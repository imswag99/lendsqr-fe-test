import { useEffect, useState } from "react";
import type { User } from "../../types/user";
import DashboardLayout from "../../layouts/DashboardLayout";
import "./UserDetails.scss";
import { Link } from "react-router-dom";

const UserDetailsPage = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("selectedUser");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    if (!user) {
        return (
            <DashboardLayout>
                <p>No user details found.</p>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <Link className="back-button" to="/users">
                ⟵ Back to Users
            </Link>

            <div className="page-header">
                <h1>User Details</h1>
            </div>

            <div className="profile">
                <div className="profile__img">
                    <img src={user.avatar} alt="" />
                </div>
                <h1>{user.username}</h1>
            </div>

            <div className="personal-details">
                <p>Personal Information</p>
                <div className="info-grid">
                    <div>
                        <p>FULL NAME</p>
                        <h3>{user.username}</h3>
                    </div>

                    <div>
                        <p>PHONE NUMBER</p>
                        <h3>{user.phone}</h3>
                    </div>

                    <div>
                        <p>EMAIL ADDRESS</p>
                        <h3>{user.email}</h3>
                    </div>

                    <div>
                        <p>GENDER</p>
                        <h3>{user.gender}</h3>
                    </div>

                    <div>
                        <p>ORGANIZATION</p>
                        <h3>{user.organization}</h3>
                    </div>

                    <div>
                        <p>HAS LOAN</p>
                        <h3>{user.hasLoan ? "Yes" : "No"}</h3>
                    </div>

                    <div>
                        <p>HAS SAVINGS</p>
                        <h3>{user.hasSavings ? "Yes" : "No"}</h3>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default UserDetailsPage;
