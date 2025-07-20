import React from "react";

const TransactionTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer"
      },
      amount: "+₹81,123",
      status: "pending"
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer"
      },
      amount: "-₹55,123",
      status: "processing"
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC"
      },
      amount: "12.0554484 BTC",
      status: "cancelled"
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC"
      },
      amount: "-2.0554484 BTC",
      status: "completed"
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit"
      },
      amount: "+15.5000000",
      status: "pending"
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw"
      },
      amount: "-5.05555544",
      status: "completed"
    }
  ];

  const statusColor = {
    pending: "bg-gray-500",
    processing: "bg-yellow-500",
    completed: "bg-green-600",
    cancelled: "bg-red-600"
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 font-semibold text-gray-700">ID</th>
            <th className="px-6 py-3 font-semibold text-gray-700">
              Date & Time
            </th>
            <th className="px-6 py-3 font-semibold text-gray-700">Type</th>
            <th className="px-6 py-3 font-semibold text-gray-700">Amount</th>
            <th className="px-6 py-3 font-semibold text-gray-700">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-gray-800">
          {tableData.map((data) => (
            <tr key={data.id}>
              <td className="px-6 py-4 font-medium">{data.id}</td>
              <td className="px-6 py-4">
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{data.date}</span>
                  <span className="text-xs text-gray-500">{data.time}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{data.type.name}</span>
                  <span className="text-xs text-gray-500">
                    {data.type?.tag || ""}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 font-medium">{data.amount}</td>
              <td className="px-6 py-4 font-medium">
                <span
                  className={`text-white text-xs px-3 py-1 rounded-full ${
                    statusColor[data.status]
                  }`}
                >
                  {data.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
