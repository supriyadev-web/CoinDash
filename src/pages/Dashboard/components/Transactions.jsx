import React, { useEffect, useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";
import axios from "axios"; // for real API requests

const ICONS = {
  rupee: BsCurrencyRupee,
  btc: FaBtc
};

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  // Simulate fetching data from API
  useEffect(() => {
    const fetchTransactions = async () => {
      // Replace this with your actual API endpoint
      // const res = await axios.get("/api/transactions");
      // setTransactions(res.data);

      // Mock data for now
      const data = [
        {
          id: "1",
          icon: "rupee",
          text: "INR Deposit",
          amount: "+ ₹81,123.10",
          timestamp: "2022-06-09 7:06 PM"
        },
        {
          id: "2",
          icon: "btc",
          text: "BTC Sell",
          amount: "- 12.48513391 BTC",
          timestamp: "2022-06-09 7:06 PM"
        },
        {
          id: "3",
          icon: "rupee",
          text: "INR Deposit",
          amount: "+ ₹81,123.10",
          timestamp: "2022-06-09 7:06 PM"
        }
      ];
      setTransactions(data);
    };

    fetchTransactions();
  }, []);

  return (
    <div className="bg-white rounded-xl p-6 shadow-md h-full flex flex-col">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Transactions
      </h2>
      <div className="flex flex-col gap-4 flex-grow">
        {transactions.map((transaction, i) => {
          const IconComponent = ICONS[transaction.icon];
          const isPositive = transaction.amount.startsWith("+");

          return (
            <div key={transaction.id}>
              {i !== 0 && <div className="border-t border-gray-200 mb-4" />}
              <div className="flex items-center justify-between hover:bg-gray-50 transition p-2 rounded-md">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 rounded-full p-3">
                    <IconComponent className="text-xl text-blue-600" />
                  </div>
                  <div>
                    <div className="text-base font-medium text-gray-900">
                      {transaction.text}
                    </div>
                    <div className="text-sm text-gray-500">
                      {transaction.timestamp}
                    </div>
                  </div>
                </div>
                <div
                  className={`text-base font-semibold ${
                    isPositive ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {transaction.amount}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-200">
        View All
      </button>
    </div>
  );
};

export default Transactions;
