import { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import DashboardLayout from "../../components/DashboardLayout";
import TransactionTable from "./components/TransactionTable";

// Sample static data (replace with actual data source or API call)
const allTransactions = [
  { id: 1, type: "Deposit", amount: 100 },
  { id: 2, type: "Withdraw", amount: 50 },
  { id: 3, type: "Trade", amount: 30 },
  { id: 4, type: "Deposit", amount: 200 },
  { id: 5, type: "Withdraw", amount: 80 }
];

const TransactionPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(allTransactions);

  const tabs = [
    { name: "All", count: allTransactions.length },
    {
      name: "Deposit",
      count: allTransactions.filter((t) => t.type === "Deposit").length
    },
    {
      name: "Withdraw",
      count: allTransactions.filter((t) => t.type === "Withdraw").length
    },
    {
      name: "Trade",
      count: allTransactions.filter((t) => t.type === "Trade").length
    }
  ];

  useEffect(() => {
    let data = [...allTransactions];

    if (activeTab !== "All") {
      data = data.filter((t) => t.type === activeTab);
    }

    if (searchTerm.trim()) {
      data = data.filter((t) =>
        t.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(data);
  }, [activeTab, searchTerm]);

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
              placeholder="Search by type..."
              className="pl-10 pr-4 py-2 border rounded-lg w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-6">
          <TransactionTable data={filteredData} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TransactionPage;
