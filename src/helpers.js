export const greaterOrEqualZero = (value) => value >= 0;

export const getYear = (age) => {
  console.log(age);
  return new Date().getFullYear() - age;
};
export const isEmpty = (value) => {
  return !value;
};
export const hasMinWordCount = (word, count) => {
  return word.length <= count;
};
