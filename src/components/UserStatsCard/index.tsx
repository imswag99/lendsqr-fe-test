import "./UserStatsCard.scss";

interface UserStatsCardProps {
    title: string;
    value: number;
}

const UserStatsCard = ({ title, value }: UserStatsCardProps) => {
    return (
        <div className="stats-card">
            <h4>{title}</h4>
            <p>{value}</p>
        </div>
    );
};

export default UserStatsCard;
