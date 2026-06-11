import "./UserStatusBadge.scss";

interface UserStatusBadgeProps {
    userStatus: string;
}

const UserStatusBadge = ({ userStatus }: UserStatusBadgeProps) => {
    return (
        <div className={`status-badge ${userStatus.toLowerCase()}`}>
            {userStatus}
        </div>
    );
};

export default UserStatusBadge;
