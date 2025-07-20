import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const PriceSection = () => {
  const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];
  const timeRanges = ["1H", "1D", "1W", "1M"];
  const [activeTab, setActiveTab] = useState("1H");

  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="flex flex-wrap justify-between items-start gap-4">
        <div>
          <p className="text-sm text-gray-500">Wallet Balances</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <h2 className="text-2xl font-medium text-gray-900">22.39401000</h2>
            <div className="flex items-center text-green-500 font-medium gap-1">
              <BsArrowUpRight />
              <span className="text-sm">22%</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <AiFillPlusCircle />
            Buy
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <AiOutlineMinusCircle />
            Sell
          </button>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-end mb-2">
          <div className="flex bg-gray-100 rounded-md p-[3px] gap-2">
            {timeRanges.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1 rounded-md text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-white text-black shadow"
                    : "text-gray-600 hover:bg-white hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "1H" ? (
          <>
            <img src="/graph.svg" alt="Graph" className="w-full mt-12" />
            <div className="flex justify-between mt-4 text-sm text-gray-500">
              {timestamps.map((timestamp) => (
                <span key={timestamp}>{timestamp}</span>
              ))}
            </div>
          </>
        ) : (
          <p className="text-sm text-gray-500">Coming soon!</p>
        )}
      </div>
    </div>
  );
};

export default PriceSection;
