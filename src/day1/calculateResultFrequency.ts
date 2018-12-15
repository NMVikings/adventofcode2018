const calculateResultFrequency = (input: string): number => {
  const sequence = input.split("\n");
  const resultingFrequency = sequence
    .map(Number)
    .reduce((acc, num) => acc + num, 0);

  return resultingFrequency;
};

export default calculateResultFrequency;
