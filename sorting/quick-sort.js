// divide-and-conquer 파라다임 적용

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

// quick sort
// T: O(nlogn) -> best case, T: O(n^2) -> worst case, S: O(logn)
// 정렬 알고리즘
const quickSort = (array, left, right) => {
  if (left >= right) return;

  const partitionIndex = partition(array, left, right);
  quickSort(array, left, partitionIndex - 1);
  quickSort(array, partitionIndex + 1, right);
};

// quick select
// T: O(n) -> best case, T: O(n^2) -> worst case, S: O(1)
// tail recursion이다.
// 특정 값을 찾는 경우에 쓰는 알고리즘 (예: 배열에서 두번째로 큰 값을 찾으시오.)
const quickSelect = (array, left, right, idxToFind) => {
  if (left >= right) return;

  const partitionIndex = partition(array, left, right);

  if (partitionIndex === idxToFind) {
    return array[partitionIndex];
  } else if (idxToFind < partitionIndex) {
    return quickSelect(array, left, partitionIndex - 1, idxToFind);
  } else {
    return quickSelect(array, partitionIndex + 1, right, idxToFind);
  }
};

quickSort(array, 0, array.length - 1);

console.log(array);
