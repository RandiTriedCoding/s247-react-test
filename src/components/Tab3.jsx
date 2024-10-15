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
    <div className="tab-section">
      <Button onClick={handleClick} className="mb-10">
        Find Missing Number
      </Button>
      {answer !== 0 && (
        <h1>
          The largest missing positive number is{" "}
          <span className="text-red-500">{answer}</span>
        </h1>
      )}
    </div>
  );
};

export default Tab3;
