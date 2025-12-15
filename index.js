// S P A C E J A M
// Given a string, remove all spaces from the string, insert two spaces between every character, convert all alphabetical letters to uppercase, and return the result.

// Non-alphabetical characters should remain unchanged (except for spaces).

function spaceJam(s) {
  const regex = /[\s]+/g;
  console.log(s);
  const trimmed = s.trim();
  const filtered = trimmed.replace(regex, '');
  const split = filtered.split('');
  const resultArr = [];
  console.log(split);
  split.forEach((x) => {
    resultArr.push(x.toUpperCase());
  });
  console.log(resultArr);
  const resultStr = resultArr.join('  ');
  console.log(resultStr);
  return resultStr;
}

spaceJam('   free   Code   Camp   '); // "F  R  E  E  C  O  D  E  C  A  M  P"
