import { flatten, uniq, zip } from "lodash";

const findCommonBetweenTwoWords = (word1: string, word2: string) => {
  const letters1 = word1.split("");
  const letters2 = word2.split("");

  const commonLetters = zip(letters1, letters2)
    .filter(lettersPair => lettersPair[0] === lettersPair[1])
    .map(uniq);

  return flatten(commonLetters).join("");
};

const findClosestWords = (input: string) => {
  const words = input.split("\n");
  const commonPartsBetweenWords = [];

  for (let i = 0; i < words.length - 1; i += 1) {
    for (let j = i + 1; j < words.length; j += 1) {
      commonPartsBetweenWords.push(
        findCommonBetweenTwoWords(words[i], words[j])
      );
    }
  }

  const sortedParts = commonPartsBetweenWords
    .slice()
    .sort((a, b) => b.length - a.length);

  return sortedParts[0];
};

export default findClosestWords;
