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
      setError("You must generate numbers first");
      return;
    }
    onNext(numbers);
  };

  if (disabled) {
    return null;
  }

  return (
    <div className="tab-section p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Generate Random Numbers</h2>
      <Button onClick={handleClick} className="w-full mb-4">
        Generate Numbers
      </Button>
      <table className="table-auto w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2 text-left">Random Numbers</th>
          </tr>
        </thead>
        <tbody>
          {numbers.map((num, idx) => (
            <tr key={idx} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{num}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button onClick={handleNext} className="mt-6 w-full">
        Next Step
      </Button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Tab2;
