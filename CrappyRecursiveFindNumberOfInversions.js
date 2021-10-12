/**
 * @param {object} n containing the array
 * @return {object} containing the sorted array + number of inversions
 * @example
 *     findInversions([1,3,5,2,4,6]) => 3
 */

function findInversion(n = { arr: [], inversions: 0 }) {
  if (n.arr.length === 0 || n.arr.length === 1) {
    return { arr: n.arr, inversions: 0 };
  } else {
    let half = Math.floor(n.arr.length / 2);
    let left = n.arr.slice(0, half);
    let right = n.arr.slice(half, n.arr.length);
    left = findInversion({ arr: left });
    right = findInversion({ arr: right });
    let i = 0;
    let j = 0;
    let merged = [];
    let inversions = left.inversions + right.inversions;
    for (let k = 0; k < left.arr.length + right.arr.length; k++) {
      if (left.arr[i] < right.arr[j]) {
        merged.push(left.arr[i]);
        i++;
      } else {
        merged.push(right.arr[j]);
        j++;
        inversions += left.arr.length - i;
      }
      if (j >= right.arr.length) {
        merged = merged.concat(left.arr.slice(i, left.arr.length));
        break;
      } else if (i >= left.arr.length) {
        merged = merged.concat(right.arr.slice(j, right.arr.length));
        break;
      }
    }
    return { arr: merged, inversions };
  }
}

