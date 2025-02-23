import React from "react";

const Card = ({ title, value, icon: Icon, bgColor = "bg-white", textColor = "text-gray-700" }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md flex flex-col space-x-4 ${bgColor}`}>
 
      {Icon && <Icon className={`text-2xl ${textColor}`} />} 
     
      <div className="flex flex-col items-center justify-center">
        <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
        <h2 className={`text-lg font-semibold ${textColor}`}>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
