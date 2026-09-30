class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = {}
        for word in strs:
            key = [0] * 26
            for s in word:
                key[ord(s)-ord('a')] += 1
            key = tuple(key)
            if key not in groups:
                groups[key] = []
            groups[key].append(word)
        return list(groups.values())
            

        