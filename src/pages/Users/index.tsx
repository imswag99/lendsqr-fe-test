import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import type { User } from "../../types/user";
import { getUsers } from "../../services/userService";
import UserTable from "../../components/UserTable";
import Pagination from "../../components/Pagination";
import { useNavigate } from "react-router-dom";
import UserStatsCard from "../../components/UserStatsCard";
import "./Users.scss";

const UsersPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const USERS_PER_PAGE = 10;
    const lastUserIndex = currentPage * USERS_PER_PAGE;
    const firstUserIndex = lastUserIndex - USERS_PER_PAGE;

    const currentUsers = users.slice(firstUserIndex, lastUserIndex);

    const totalPages = Math.ceil(users.length / USERS_PER_PAGE);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);

                const data = await getUsers();

                setUsers(data);
            } catch {
                setError("Failed to load users.");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return (
            <DashboardLayout>
                <p>Loading users...</p>
            </DashboardLayout>
        );
    }

    if (error) {
        return (
            <DashboardLayout>
                <p>{error}</p>
            </DashboardLayout>
        );
    }

    if (users.length === 0) {
        return (
            <DashboardLayout>
                <p>No users found.</p>
            </DashboardLayout>
        );
    }

    const handleUserClick = (user: User) => {
        localStorage.setItem("selectedUser", JSON.stringify(user));

        navigate(`/users/${user.id}`);
    };

    const activeUsers = users.filter((user) => user.status === "Active").length;
    const usersWithLoan = users.filter((user) => user.hasLoan).length;
    const usersWithSavings = users.filter((user) => user.hasSavings).length;

    return (
        <DashboardLayout>
            <div className="page-header">
                <h1>Users</h1>
            </div>

            <div className="stats-grid">
                <UserStatsCard title="TOTAL USERS" value={users.length} />
                <UserStatsCard title="ACTIVE USERS" value={activeUsers} />
                <UserStatsCard title="USERS WITH LOANS" value={usersWithLoan} />
                <UserStatsCard
                    title="USERS WITH SAVINGS"
                    value={usersWithSavings}
                />
            </div>

            <div className="table-section">
                <UserTable users={currentUsers} onUserClick={handleUserClick} />
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </DashboardLayout>
    );
};

export default UsersPage;
