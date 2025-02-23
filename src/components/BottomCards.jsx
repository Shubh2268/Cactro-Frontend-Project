import { FiDollarSign, FiClock, FiTrendingUp, FiUsers } from "react-icons/fi";
const BottomCards = () => {
  const cardData = [
    { title: "Total Revenue", value: "$12,000", icon: FiDollarSign, bgColor: "bg-green-100", textColor: "text-green-600" },
    { title: "Hours Tracked", value: "1200h", icon: FiClock, bgColor: "bg-blue-100", textColor: "text-blue-600" },
    { title: "Profit", value: "$4,500", icon: FiTrendingUp, bgColor: "bg-purple-100", textColor: "text-purple-600" },
    { title: "Clients", value: "25", icon: FiUsers, bgColor: "bg-orange-100", textColor: "text-orange-600" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardData.map((card, index) => (
        <div key={index} className={`p-6 rounded-lg shadow-md flex items-center space-x-4 ${card.bgColor}`}>
          {/* Icon */}
          <card.icon className={`text-4xl ${card.textColor}`} />
          
          {/* Card Content */}
          <div>
            <h2 className={`text-lg font-bold ${card.textColor}`}>{card.title}</h2>
            <p className="text-2xl font-semibold">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BottomCards;
