// Wajib menggunakan nested loop dan conditional (if/else) di dalamnya.
function persegiBolong(num) {
  let pattern = '';
  // code here
  for (i = 1; i <= num; i++) {
    for (j = 1; j <= num; j++) {
      if (i === 1 || j === 1 || i === num || j === num) {
        pattern += '*';
      } else {
        pattern += ' ';
      }
    }
    pattern += '\n';
  }
  return pattern;
}

// use case
console.log(persegiBolong(10));
/*
expected result
*****
*   *
*   *
*   *
*****
*/