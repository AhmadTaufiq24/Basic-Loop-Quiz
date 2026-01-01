function berlian(num) {
  let pattern = ' ';
  let star = "*";
  // code here
  for (let i = 0; i < num * 2 - 1; i++) {
    if (i < num) {
        baris = i;
    } else {
        baris = (num * 2 - 2) - i;
    }
    let spasi = ' '.repeat(num - 1 - baris);
    let bintang = '*'.repeat(2 * baris + 1);
    console.log(spasi + bintang);
  }  
}

// use case
console.log(berlian(5)); // num di sini adalah tinggi setengah bagian atas
/*
expected result
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/ 



