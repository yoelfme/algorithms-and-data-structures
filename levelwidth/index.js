// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const flag = 'stop'
  const processor = [root, flag]
  const levels = [0]

  while (processor.length > 1) {
    const node = processor.shift()

    if (node === flag) {
      processor.push(flag)
      levels.push(0)
    } else {
      processor.push(...node.children)
      levels[levels.length - 1]++
    }
  }

  return levels
}

module.exports = levelWidth;
