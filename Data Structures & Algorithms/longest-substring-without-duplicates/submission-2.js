class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Map(); // char -> last index
  let left = 0, maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    let ch = s[right];

    if (map.has(ch)) {
      // Jump the left pointer to avoid the previous duplicate
      left = Math.max(left, map.get(ch) + 1);
    }

    map.set(ch, right); // update last seen index
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
    }
}
