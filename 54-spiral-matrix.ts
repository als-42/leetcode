
// https://leetcode.com/problems/spiral-matrix/

class BlindPointer {
  x: number;
  y: number;
}

function spiralOrder(matrix: number[][]): number[] {
  let result = []
  let m = matrix.length
  let n = matrix[0].length

  let offset = [
    [1, 0], 
    [0, 1],
    [-1, 0],
    [0, -1],
  ]

  const bp = new BlindPointer();
  bp.x = 0;
  bp.y = 1;

  let matrixSize = m * n;
  let direction = 0
  let depth = 0
  let i = 0
  let l = 0
  let probe = 0

  if (m == 1 && n == 1) {
    return matrix[0]
  }

  while (i < matrixSize) {

    let circleLength = (
      ((m - depth*2) * 2) 
      +
      ((n - depth*2) * 2)
    ) - 4

    if (l === circleLength) {
      depth++;
      direction = 0
      l = 0
    }

    switch (direction) {
      case 0:
        if (bp.x >= n - depth  ) {
          direction = 1
        }
        break;
      case 1:
        if (bp.y >= m - depth ) {
          direction = 2
        }
        break;
      case 2:
        if (bp.x <= 1 + depth  ) {
          direction = 3
        }
        break;
      case 3:
        if (bp.y <= 0 + depth ) {
          direction = 0
        }
        break;
    }

    bp.x = bp.x + offset[direction][0]
    bp.y = bp.y + offset[direction][1]

    probe = matrix[bp.y- 1][bp.x -1]

    result.push(probe)

    i++;
    l++;
  }

  return result;
};