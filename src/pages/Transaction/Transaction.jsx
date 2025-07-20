import { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import DashboardLayout from "../../components/DashboardLayout";
import TransactionTable from "./components/TransactionTable";

const TransactionPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { name: "All", count: 349 },
    { name: "Deposit", count: 114 },
    { name: "Widthdraw", count: 55 },
    { name: "Trade", count: 50 },
  ];

  return (
    <DashboardLayout title="Transactions">
      <div className="flex justify-end mt-6 mb-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <AiOutlineDownload /> Export CSV
        </button>
      </div>

      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition duration-200 ${
                  activeTab === tab.name
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.name}
                <span className="bg-gray-300 text-sm rounded-full px-2 py-0.5">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          <div className="relative max-w-xs">
            <BsSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-lg w-full"
            />
          </div>
        </div>

        <div className="mt-6">
          <TransactionTable />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TransactionPage;
