import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {
  const infoCardsData = [
    {
      imgUrl: "/dot_bg.svg",
      text: "Learn more about Loans – Keep your Bitcoin, access its value without selling it",
      tagText: "Loan",
      inverted: false,
      bgGradient: "from-blue-50 to-white"
    },
    {
      imgUrl: "/grid_bg.svg",
      text: "Learn more about our real estate, mortgage, and corporate account services",
      tagText: "Contact",
      inverted: true,
      bgGradient: "from-purple-50 to-white"
    }
  ];

  return (
    <DashboardLayout title="Dashboard">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 animate-fadeIn">
        {/* Portfolio Section */}
        <div className="col-span-1 xl:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-[1.01]">
            <PortfolioSection />
          </div>
        </div>

        {/* Price Section */}
        <div className="col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-[1.01]">
            <PriceSection />
          </div>
        </div>

        {/* Transactions */}
        <div className="col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-[1.01]">
            <Transactions />
          </div>
        </div>

        {/* Info Cards (Dynamic) */}
        {infoCardsData.map((card, index) => (
          <div key={index} className="col-span-1">
            <div
              className={`rounded-2xl shadow-md overflow-hidden bg-gradient-to-br ${card.bgGradient} hover:shadow-xl transition`}
            >
              <InfoCard
                imgUrl={card.imgUrl}
                text={card.text}
                tagText={card.tagText}
                inverted={card.inverted}
              />
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
