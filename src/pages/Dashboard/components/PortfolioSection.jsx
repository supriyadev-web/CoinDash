import React, { useEffect, useState } from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp
} from "react-icons/ai";
import axios from "axios";

const PortfolioSection = () => {
  const [btcPrice, setBtcPrice] = useState(null);
  const [loading, setLoading] = useState(true);

  const btcBalance = 22.39401;

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/simple/price", {
        params: {
          ids: "bitcoin",
          vs_currencies: "inr"
        }
      })
      .then((res) => {
        setBtcPrice(res.data.bitcoin.inr);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch BTC price in INR", err);
        setLoading(false);
      });
  }, []);

  const totalValue = btcPrice ? (btcBalance * btcPrice).toFixed(2) : null;

  return (
    <div className="flex flex-col xl:flex-row justify-between bg-white rounded-xl p-6 gap-4 xl:items-center">
      <div className="flex flex-col xl:flex-row items-start xl:items-center gap-4 xl:gap-16">
        <div>
          <div className="flex items-center text-gray-600 gap-1">
            <span className="text-sm">Total Portfolio Value</span>
            <AiOutlineInfoCircle />
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <h2 className="text-2xl font-medium text-gray-900">
              ₹ {totalValue}
            </h2>
          )}
        </div>

        <div>
          <div className="text-gray-600 mb-2">Wallet Balances</div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-medium">{btcBalance}</h2>
              <span className="bg-gray-300 text-gray-700 rounded-full px-3 py-1 text-sm font-medium">
                BTC
              </span>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-medium">
                ₹ {loading ? "..." : (btcBalance * btcPrice).toFixed(2)}
              </h2>
              <span className="bg-gray-300 text-gray-700 rounded-full px-3 py-1 text-sm font-medium">
                INR
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <AiOutlineArrowDown />
          Deposit
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <AiOutlineArrowUp />
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default PortfolioSection;
