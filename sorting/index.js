// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      const element = arr[j]
      const next = j+1

      if (element > arr[next]) {
        arr[j] = arr[next]
        arr[next] = element
      }
    }
  }

  return arr
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexMinimum = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMinimum]) {
        indexMinimum = j
      }
    }

    if (indexMinimum !== i) {
      const lesser = arr[indexMinimum]
      arr[indexMinimum] = arr[i]
      arr[i] = lesser
    }
  }

  return arr
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
