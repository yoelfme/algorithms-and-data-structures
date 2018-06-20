// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = -Infinity, max = Infinity) {
  if (node) {
    const minimum = node.data > min
    const maximum = node.data < max

    return minimum && maximum && validate(node.left, min, node.data) && validate(node.right, node.data, max)
  }

  return true
}

module.exports = validate;
