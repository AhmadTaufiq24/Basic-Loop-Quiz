function piramidaTerbalik(num) {
  let pattern = '';
  // code here
  for (let i = 0; i < num; i++) {
    let spasi = ' '.repeat(i);
    let bintang = '*'.repeat(2 * (num - i) - 1);
    pattern += spasi + bintang + '\n';
  } 
  return pattern;
}

// use case
console.log(piramidaTerbalik(5));
/*
expected result
*********
 *******
  *****
   ***
    *
*/