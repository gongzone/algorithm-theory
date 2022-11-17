// divide-and-conquer 파라다임 적용
// T: O(nlogn) -> but, worst case일시 O(n^2), worst case: pivot이 가장 크거나 작은 값일 때, 즉 반으로 쪼갤 수 가 없다.
// S: O(logn)

const array = [5, 3, 1, 6, 4, 2];

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const partition = (array, left, right) => {
  const pivotElement = array[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (array[j] < pivotElement) {
      swap(array, i, j);
      i++;
    }
  }

  swap(array, i, right);

  return i;
};

const quickSort = (array, left, right) => {
  if (left >= right) return;

  const partitionIndex = partition(array, left, right);
  quickSort(array, left, partitionIndex - 1);
  quickSort(array, partitionIndex + 1, right);
};

quickSort(array, 0, array.length - 1);

console.log(array);
