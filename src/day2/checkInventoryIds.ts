import { sum, zip } from "lodash";

const getDataAboutSimilarLetters = (str: string) => {
  const letters = new Map<string, number>();

  str.split("").forEach(letter => {
    const currentLetterInWord = letters.get(letter) || 0;

    letters.set(letter, currentLetterInWord + 1);
  });

  return letters;
};

const checkInventoryIds = (input: string) => {
  const sequence = input.split("\n");

  const a = sequence.map(id => {
    const lettersInfo = getDataAboutSimilarLetters(id);

    const timesThatEachLetterAppears: number[] = Array.from(
      lettersInfo.values()
    );

    const isThereLetterThatAppearsTwoTimes = timesThatEachLetterAppears.some(
      value => value === 2
    );
    const isThereLetterThatAppearsThreeTimes = timesThatEachLetterAppears.some(
      value => value === 3
    );

    return [
      Number(isThereLetterThatAppearsTwoTimes),
      Number(isThereLetterThatAppearsThreeTimes)
    ];
  });

  const [twoTimes, threeTimes] = zip(...a).map(arr => sum(arr));

  return twoTimes * threeTimes;
};

export default checkInventoryIds;
