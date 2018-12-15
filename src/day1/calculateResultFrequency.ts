const calculateResultFrequency = (input: string): number => {
  const sequence = input.split("\n");
  const resultingFrequency = sequence
    .map(Number)
    .reduce((acc, number) => acc + number, 0);

  return resultingFrequency;
};

export default calculateResultFrequency;
