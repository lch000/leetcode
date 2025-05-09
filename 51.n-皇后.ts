/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N 皇后
 */

// @lc code=start
function solveNQueens(n: number): string[][] {
  const res = [];

  const nowPathFirst = [];
  for (let index = 0; index < n; index++) {
    for (let j = 0; j < n; j++) {
      if (!nowPathFirst[index]) {
        nowPathFirst[index] = ["."];
      } else {
        nowPathFirst[index].push(".");
      }
    }
  }
  //   console.log(nowPathFirst, "nowPath");
  const isValid = (curIndex: number, row: number, nowPath: string[][]) => {
    // console.log("判定里面的path", curIndex, nowPath);
    for (let index = 0; index < row; index++) {
      if (nowPath[index][curIndex] === "Q") {
        return false;
      }
    }
    for (let j = row - 1, i = curIndex - 1; j >= 0 && i >= 0; j--, i--) {
      if (nowPath[j][i] === "Q") {
        return false;
      }
    }
    for (let j = row - 1, i = curIndex + 1; j >= 0 && i < n; j--, i++) {
      if (nowPath[j][i] === "Q") {
        return false;
      }
    }
    return true;
  };
  const backTracking = (n, row, nowPath) => {
    // console.log("现在的path", n, row, nowPath);
    if (row === n) {
      res.push(nowPath.slice().map((item) => item.join("")));
      return;
    }
    for (let index = 0; index < n; index++) {
      if (isValid(index, row, nowPath)) {
        nowPath[row][index] = "Q";
        // console.log("hahhahah", row, index, nowPath);
        backTracking(n, row + 1, nowPath);
        nowPath[row][index] = ".";
      } else {
        nowPath[row][index] = ".";
        continue;
      }
    }
  };
  backTracking(n, 0, nowPathFirst);
  return res;
}

// @lc code=end
