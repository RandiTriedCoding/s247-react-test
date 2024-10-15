const useFindMissingNumber = (numbers) => {
  const positiveNumbers = numbers
    .filter((num) => num > 0)
    .sort((a, b) => a - b);
  let missingNumber = positiveNumbers[0] - 1;
  return missingNumber;
};

export default useFindMissingNumber;
