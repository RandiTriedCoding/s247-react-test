import { useState } from "react";
import Button from "./Button";

const Tab1 = ({ disabled, onSubmit }) => {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let parsedNumber = parseInt(number);
    if (number === "" || parsedNumber < 1 || parsedNumber > 100000) {
      setError("Please enter a number between 1 and 100000.");
      setNumber("");
      return;
    }
    setError("");
    onSubmit(parsedNumber);
  };

  if (disabled) {
    return null;
  }

  return (
    <>
      <form className="tab-section" onSubmit={handleSubmit}>
        <label htmlFor="number" className="text-lg font-bold mb-4">
          Enter a number (1 - 100000)
        </label>
        <input
          id="number"
          type="number"
          value={number}
          onChange={handleChange}
        />
        {error && <p className="text-red-500">{error}</p>}
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Tab1;
