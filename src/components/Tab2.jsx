import { useState } from "react";
import Button from "./Button";
import useGenerateNumbers from "../hooks/useGenerateNumbers";

const Tab2 = ({ disabled, inputNumber, onNext }) => {
  const [numbers, setNumbers] = useState([]);
  const [error, setError] = useState("");

  const handleClick = () => {
    const newNumbers = useGenerateNumbers(inputNumber);
    setNumbers(newNumbers);
    setError("");
  };

  const handleNext = () => {
    if (numbers.length === 0) {
      setError("You must generate number first");
      return;
    }
    onNext(numbers);
  };

  if (disabled) {
    return null;
  }

  return (
    <div className="tab-section">
      <Button onClick={handleClick}>Generate Numbers</Button>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Random Numbers</th>
          </tr>
        </thead>
        <tbody>
          {numbers.map((num, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{num}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button onClick={handleNext} className="mt-10">
        Next Step
      </Button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Tab2;
