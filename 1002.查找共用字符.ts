/*
 * @lc app=leetcode.cn id=1002 lang=typescript
 *
 * [1002] 查找共用字符
 */

// @lc code=start
function commonChars(words: string[]): string[] {
  const flag = "a".charCodeAt(0);
  const res = [],
    flagArray = new Array(26).fill(0);
  const mapArray = words.map((word) => {
    const wordArray = new Array(26).fill(0);
    for (let index = 0; index < word.length; index++) {
      wordArray[word.charCodeAt(index) - flag]++;
    }
    return wordArray;
  });
  for (let index = 0; index < 26; index++) {
    const temArray: number[] = mapArray.map((item) => {
      return item[index];
    });

    flagArray[index] = Math.min(...temArray);
  }
  const flagWord = words[0];
  for (let index = 0; index < flagWord.length; index++) {
    if (flagArray[flagWord.charCodeAt(index) - flag] > 0) {
      flagArray[flagWord.charCodeAt(index) - flag]--;
      res.push(flagWord[index]);
    }
  }

  return res;
}
// @lc code=end
