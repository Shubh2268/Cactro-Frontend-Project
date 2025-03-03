import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Chart from "../components/Chart";
import BudgetChart from "../components/BudgetChart";
import TeamMood from "../components/TeamMood";
import BudgetStatus from "../components/BudgetStatus";
import { FiCheckCircle, FiRefreshCw, FiAlertTriangle, FiUsers } from "react-icons/fi";

const Dashboard = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">

            {/* Navbar */}
            <Navbar />

            {/* Main Dashboard Content */}
            <div className="flex flex-col lg:flex-row flex-grow p-4 gap-6">
               
                <div className="flex-1 space-y-6">
                    {/* Top Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        <Card title="Total Projects" value="5" icon={FiCheckCircle} />
                        <Card title="Completed" value="1" icon={FiCheckCircle} />
                        <Card title="Ongoing" value="3" icon={FiRefreshCw} />
                        <Card title="Delayed" value="1" icon={FiAlertTriangle} bgColor="bg-red-400" textColor="text-white" />
                        <Card title="Employees" value="10" icon={FiUsers} />
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Chart />
                        <BudgetChart />
                    </div>

                    {/* Budget Status Section */}
                    <BudgetStatus />
                </div>

                {/* Right Sidebar - Team Mood */}
                <div className="w-full lg:w-72 flex-shrink-0">
                    <TeamMood />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
