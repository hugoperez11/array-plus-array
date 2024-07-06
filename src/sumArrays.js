export function arrSum(arr1, arr2) {
  function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  } 

  return sumArray(arr1) + sumArray(arr2);
}

