/*
Logical exercises
1. Write a program to find item occurrence in array ({1:3, 2:1,....}). --> done 
2. Write a program to remove duplicate item in array. --> done
3. Write a program return resolve if value less than 5 using Promise. --> done
4. Write a program multiply 2 numbers without multiply sign (*).  --> Done
5. Write a program to make polyfill for map/ reduce / filter methods.

*/

const customMultiply = (a, b) => {
  let result = 0;
  const positiveB = Math.abs(b);

  for (let i = 0; i < positiveB; i++) {
    result += a;
  }
  console.log(b < 0 ? `-${result}` : result);
};

customMultiply(3, 4);
