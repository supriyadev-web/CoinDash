import React from "react";

const SupportCard = ({ leftComponent, icon: IconComponent, title, text }) => {
  return (
    <div className="flex flex-col xl:flex-row items-start justify-between gap-8 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Left Content */}
      <div className="max-w-sm space-y-3">
        <div className="flex items-center gap-3">
          <div className="bg-purple-100 p-3 rounded-full">
            <IconComponent className="text-purple-600 w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
      </div>

      {/* Right Content */}
      <div className="w-full max-w-2xl">{leftComponent}</div>
    </div>
  );
};

export default SupportCard;
