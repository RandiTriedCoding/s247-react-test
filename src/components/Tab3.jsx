import { useState } from "react";
import Button from "./Button";
import useFindMissingNumber from "../hooks/useFindMissingNumber";

const Tab3 = ({ disabled, generatedNumbers }) => {
  const [answer, setAnswer] = useState(0);

  const handleClick = () => {
    const largestMissingPositive = useFindMissingNumber(generatedNumbers);
    setAnswer(largestMissingPositive);
  };

  if (disabled) {
    return null;
  }

  return (
    <div className="tab-section p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">
        Find the Missing Positive Number
      </h2>
      <Button onClick={handleClick} className="mb-6">
        Find Missing Number
      </Button>
      {answer !== 0 && (
        <div className="mt-4 p-4 border border-green-500 bg-green-100 rounded">
          <h1 className="text-lg font-bold">
            The largest missing positive number is{" "}
            <span className="text-red-600 font-semibold">{answer}</span>
          </h1>
        </div>
      )}
    </div>
  );
};

export default Tab3;
