export function insertionSort(arr, prop) {
  for (var i = 1; i < arr.length; i++) {
    const current = arr[i]
    for (var j = i - 1; j >= 0 && arr[j][prop] > current[prop]; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = current
  }
  return arr
}
