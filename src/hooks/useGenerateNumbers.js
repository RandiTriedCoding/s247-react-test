const useGenerateNumbers = (inputNumber) => {
  const newNumbers = Array.from(
    { length: inputNumber },
    () => Math.floor(Math.random() * (2000000 + 1)) - 1000000,
  );
  return newNumbers;
};

export default useGenerateNumbers;
