const getListOfFrequencies = (startPoint: number, sequence: number[]) => {
  const frequencies: number[] = [];

  sequence.reduce((acc, num) => {
    const newFrequency = acc + num;
    frequencies.push(newFrequency);

    return newFrequency;
  }, startPoint);

  return frequencies;
};

const findFirstFrequencyReachesTwice = (input: string): number => {
  const start = 0;
  const uniqFrequencies = new Set([start]);
  const sequence = input.split("\n").map(Number);

  const iter = (startPoint: number): number => {
    const frequencies = getListOfFrequencies(startPoint, sequence);
    const lastFrequency = frequencies[frequencies.length - 1];

    for (const frequency of frequencies) {
      if (uniqFrequencies.has(frequency)) {
        return frequency;
      }

      uniqFrequencies.add(frequency);
    }

    return iter(lastFrequency);
  };

  return iter(start);
};

export default findFirstFrequencyReachesTwice;
