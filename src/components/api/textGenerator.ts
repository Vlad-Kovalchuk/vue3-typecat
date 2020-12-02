import words from "@/lib/words";

interface Generator {
  msg: string;
  wrong: boolean;
  isCompleted: boolean;
}

function getRandomArbitrary(min: number, max: number): number {
  return Math.round(Math.random() * (max - min) + min);
}

function generator(id: number): Generator[] {
  const array = [];
  for (let i = 0; i < id; i++) {
    array[i] = {
      msg: words[getRandomArbitrary(0, 1000)],
      wrong: false,
      isCompleted: false,
    };
  }
  return array;
}

export default generator;
