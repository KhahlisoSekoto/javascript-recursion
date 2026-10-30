function fibs(n) {
  console.log("This was printed recursive");
  if (n <= 0) return [];
  if (n === 1) return;
  
  const result = [0, 1];
  

  for (let i = 2; i < n; i++) {
    const nextNum = result[result.length-1] + result[result.length-2];
    result.push(nextNum);
  }
  
  return result;
}

console.log(fibs(8));

function fibsRec(n) {
  console.log("This was printed recursively");

  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0,1];

  const arr = fibsRec(n - 1);
  const nextNum = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(nextNum);

  return arr;
}

console.log(fibsRec(8));