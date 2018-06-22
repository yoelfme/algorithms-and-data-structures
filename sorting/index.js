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

  if (arr.length === 1) {
    return arr
  }

  const midpoint = Math.floor(arr.length / 2)
  const arr1 = arr.slice(0, midpoint)
  const arr2 = arr.slice(midpoint, arr.length)

  return merge(mergeSort(arr1), mergeSort(arr2))
}

function merge(left, right) {
  const results = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }

  return results.concat(left, right)
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
