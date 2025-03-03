const projects = [
    {
        name: "Insurance App",
        company: "Verti",
        totalBudget: "70000 €",
        profitability: "-2500 €",
        actualHours: "1100",
        status: "Over Budget",
        statusColor: "text-red-500",
        barColor: "bg-red-400",
        solidHours: "100 hours Over Budget!"
    },
    {
        name: "Neo",
        company: "Bankia",
        totalBudget: "70,000 €",
        profitability: "4000 €",
        actualHours: "1100",
        status: "On Budget",
        statusColor: "text-yellow-500",
        barColor: "bg-yellow-400",
        solidHours: "1000 solid hours"
    },
    {
        name: "VR Website",
        company: "Barca",
        totalBudget: "70,000 €",
        profitability: "4000 €",
        actualHours: "1100",
        status: "Under Budget",
        statusColor: "text-green-500",
        barColor: "bg-green-400",
        solidHours: "2000 solid hours"
    },
];

const BudgetStatus = () => {
    return (
        <div className="bg-gray-100 p-4 rounded-xl">

            {/* Budget Status Header */}
            <div className="flex items-center mb-4">
                <h2 className="text-lg md:text-2xl font-semibold text-gray-600">Budget Status</h2>
                <div className="flex flex-wrap gap-2 mx-3">
                    <button className="bg-cyan-500 text-white px-4 py-1 rounded-md text-sm cursor-pointer">
                        + Add New Project
                    </button>
                    <button className="bg-white border-2 border-cyan-400 text-cyan-400 px-4 py-1 rounded-md text-sm cursor-pointer">
                        Download Report
                    </button>
                    <button className="bg-white border-2 border-cyan-400 text-cyan-400 px-4 py-1 rounded-md text-sm cursor-pointer">
                        Filter
                    </button>
                </div>
            </div>

            {/* Budget Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold text-xl text-gray-600">{project.name}</h3>
                                <p className="text-sm text-gray-500">{project.company}</p>
                            </div>
                            <img src="https://randomuser.me/api/portraits/men/9.jpg" alt="" className="w-10 h-10 rounded-full object-cover" />
                        </div>
                        <p className="mt-2 text-gray-500">
                            Total Budget: <span className="text-black">{project.totalBudget}</span>
                        </p>
                        <p className="text-gray-500">Profitability: <span className={`text-sm font-medium px-2 ${project.statusColor}`}>
                            {project.profitability} ({project.status})
                        </span>
                        </p>
                        <div className="mt-2 relative w-full h-3 bg-gray-200 rounded-full">
                            <div className={`absolute top-0 left-0 h-3 rounded-full ${project.barColor}`} style={{ width: "80%" }}></div>
                        </div>
                        <div className="flex justify-between items-center text-sm my-2">
                            <p className="text-gray-500 mt-1">Actual hours: <span className="text-black">{project.actualHours}</span></p>

                            <p className="text-gray-600 font-medium">{project.solidHours}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BudgetStatus;
