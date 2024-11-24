const wordFirst = "Довод";
const reverseWordFirst = wordFirst.split('').reverse().join('').toLowerCase();
if (wordFirst.toLowerCase() === reverseWordFirst) {
  console.log(`Слово ${wordFirst} является палиндромом`)
}
else {
  console.log(`Слово ${wordFirst} не является палиндромом`)
}

const wordSecond = "Сантимент";
const reverseWordSecond = wordSecond.split('').reverse().join('').toLowerCase();
if (wordSecond.toLowerCase() === reverseWordSecond) {
  console.log(`Слово ${wordSecond}e является палиндромом`)
}
else {
  console.log(`Слово ${wordSecond} не является палиндромом`)
}