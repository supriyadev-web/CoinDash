import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation();

  const navLinks = [
    { icon: RxDashboard, text: "Dashboard", link: "/" },
    { icon: BsArrowDownUp, text: "Transactions", link: "/transactions" },
    { icon: BiSupport, text: "Support", link: "/support" }
  ];

  const isActiveLink = (link) => location.pathname === link;

  return (
    <aside className="flex flex-col justify-between bg-white shadow-xl w-64 h-screen py-6 px-4 border-r border-gray-200">
      <div>
        <h1 className="text-center text-2xl font-bold text-gray-800 tracking-wide mb-10 pt-8">
          @CoinDash
        </h1>

        <nav className="space-y-1">
          {navLinks.map(({ icon: IconComponent, text, link }) => (
            <Link key={text} to={link}>
              <div
                className={`flex items-center gap-4 py-3 px-5 rounded-lg transition-all duration-300 font-medium text-base 
                  ${
                    isActiveLink(link)
                      ? "bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-700 shadow-md"
                      : "text-gray-600 hover:bg-gray-50 hover:text-indigo-700"
                  }
                `}
              >
                <IconComponent className="w-5 h-5" />
                <span>{text}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidenav;
