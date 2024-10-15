import { useState } from "react";
import Tab1 from "../components/Tab1";
import Tab2 from "../components/Tab2";
import Tab3 from "../components/Tab3";
import TabNav from "../components/TabNav";

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [inputNumber, setInputNumber] = useState(0);
  const [generatedNumbers, setGeneratedNumbers] = useState([]);
  const [answer, setAnswer] = useState(0);

  const handleTab1Submit = (number) => {
    setInputNumber(number);
    setActiveTab(2);
  };

  const handleTab2Next = (numbers) => {
    setGeneratedNumbers(numbers);
    setActiveTab(3);
  };

  const handleTab3Next = () => {
    setActiveTab(2);
    setAnswer(0);
  };

  return (
    <div className="container mx-auto p-4">
      <TabNav activeTab={activeTab} />
      <Tab1 disabled={activeTab !== 1} onSubmit={handleTab1Submit} />
      <Tab2
        disabled={activeTab !== 2}
        inputNumber={inputNumber}
        onNext={handleTab2Next}
      />
      <Tab3
        disabled={activeTab !== 3}
        generatedNumbers={generatedNumbers}
        answer={answer}
        setAnswer={setAnswer}
        onNext={handleTab3Next}
      />
    </div>
  );
};

export default Home;
