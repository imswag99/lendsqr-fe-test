import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { HiUsers } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { MdWork } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__section">
                <h3>Customers</h3>

                <ul>
                    <Link className="link" to="/users">
                        <FaUsers />
                        <p>Users</p>
                    </Link>
                    <li>
                        <HiUsers />
                        <p>Guarantors</p>
                    </li>
                    <li>
                        <GiPayMoney />
                        <p>Loans</p>
                    </li>
                </ul>
            </div>

            <div className="sidebar__section">
                <h3>Businesses</h3>

                <ul>
                    <li>
                        <MdWork />
                        <p>Organizations</p>
                    </li>
                    <li>
                        <GiReceiveMoney />
                        <p>Loan Products</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
