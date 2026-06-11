import type { User } from "../../types/user";
import UserStatusBadge from "../UserStatusBadge";
import "./UserTable.scss";

interface UserTableProps {
    users: User[];

    onUserClick: (user: User) => void;
}

const UserTable = ({ users, onUserClick }: UserTableProps) => {
    return (
        <div className="table-container">
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Organization</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Date Joined</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr
                            className="table-contents"
                            key={user.id}
                            onClick={() => onUserClick(user)}
                        >
                            <td>{user.organization}</td>

                            <td>{user.username}</td>

                            <td>{user.email}</td>

                            <td>{user.phone}</td>

                            <td>
                                {user.dateJoined} {user.time}
                            </td>

                            <td><UserStatusBadge userStatus={user.status} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
