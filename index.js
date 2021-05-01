
function sum(fromN, toN) {
  if (fromN < toN) {
    fromN += sum((fromN + 1), toN)
  }

  return fromN;
}

module.exports = sum;
