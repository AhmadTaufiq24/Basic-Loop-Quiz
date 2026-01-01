// Wajib menggunakan nested loop
function segitigaTerbalik(num) {
  let pattern = '';
  // code here
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num - i + 1; j++) {
      pattern += '*';
    }
    pattern += '\n';
  }
  return pattern;
}

// use case
console.log(segitigaTerbalik(5));
/*
expected result
*****
****
***
**
*
*/