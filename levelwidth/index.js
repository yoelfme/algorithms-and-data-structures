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
  let width = 0

  while (processor.length > 1) {
    const node = processor.shift()

    if (node === flag) {
      processor.push(flag)
      width = 0
      levels.push(width)
    } else {
      levels[levels.length - 1] = ++width
      processor.push(...node.children)
    }
  }

  return levels
}

module.exports = levelWidth;
