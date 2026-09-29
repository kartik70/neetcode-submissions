class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        count = {}
        for ele in s:
            count[ele] = count.get(ele,0)+1
        for ele in t:
            if ele not in count or count.get(ele) == 0:
                return False
            count[ele] = count.get(ele)-1
        return True