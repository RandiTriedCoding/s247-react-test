import Tab1 from "../components/Tab1";
import Tab2 from "../components/Tab2";
import Tab3 from "../components/Tab3";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="flex space-x-4">
        <Tab1 />
        <Tab2 />
        <Tab3 />
      </section>
    </div>
  );
};

export default Home;
