// components/CustomCard.jsx
import React from "react";

const CustomCard = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-xl p-6 ${className}`}>{children}</div>
  );
};

export default CustomCard;
