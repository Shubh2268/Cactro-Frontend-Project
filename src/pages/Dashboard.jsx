import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Chart from "../components/Chart";
import BudgetChart from "../components/BudgetChart";
import TeamMood from "../components/TeamMood";
import BottomCards from "../components/BottomCards"; // Import bottom cards
import { FiCheckCircle, FiRefreshCw, FiAlertTriangle, FiUsers } from "react-icons/fi";

const Dashboard = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Navbar */}
            <Navbar />

            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left & Center Section */}
                <div className="md:col-span-2 space-y-6">
                    {/* Top Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        <Card title="Total Projects" value="5" icon={FiCheckCircle} />
                        <Card title="Completed" value="1" icon={FiCheckCircle} />
                        <Card title="Ongoing" value="3" icon={FiRefreshCw} />
                        <Card title="Delayed" value="1" icon={FiAlertTriangle} bgColor="bg-red-100" textColor="text-red-500" />
                        <Card title="Employees" value="10" icon={FiUsers} />
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Chart />
                        <BudgetChart />
                    </div>

                    {/* Bottom Cards */}
                    <BottomCards />
                </div>

                {/* Right Sidebar (Team Mood) */}
                <div className="md:col-span-1">
                    <TeamMood />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
