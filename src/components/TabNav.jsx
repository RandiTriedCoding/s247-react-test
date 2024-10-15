import { tabList } from "../constants/tabList";

const TabNav = ({ activeTab }) => {
  return (
    <nav>
      <ul className="flex space-x-4 border-b border-gray-300">
        {tabList.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <li
              key={tab.id}
              className={`cursor-pointer py-2 px-4 transition duration-300 ${
                isActive
                  ? "border-b-2 border-blue-500 text-blue-500 font-bold"
                  : "text-gray-600 hover:text-blue-500 opacity-70"
              }`}
            >
              {tab.text}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TabNav;
