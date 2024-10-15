import { tabList } from "../constants/tabList";

const TabNav = ({ activeTab }) => {
  return (
    <nav>
      <ul className="flex space-x-4">
        {tabList.map((tab) => {
          return (
            <li
              key={tab.id}
              className={activeTab !== tab.id ? "opacity-50" : ""}
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
