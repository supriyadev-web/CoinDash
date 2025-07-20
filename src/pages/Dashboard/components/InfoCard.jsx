import React from "react";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300`}
    >
      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
      >
        <div
          className={`absolute inset-0 ${
            inverted
              ? "bg-black/60"
              : "bg-gradient-to-b from-white/70 to-white/90"
          }`}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col h-full justify-end">
        <span
          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit ${
            inverted ? "text-purple-600 bg-white" : "text-white bg-purple-600"
          }`}
        >
          {tagText}
        </span>

        <p
          className={`font-medium text-lg leading-relaxed ${
            inverted ? "text-white" : "text-gray-800"
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
