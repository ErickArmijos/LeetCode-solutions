class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        s = ''.join(map(str, digits))
        n = str(int(s) + 1)
        res = []
        for num in n:
            res.append(int(num))
            print(res)
        return res
         


        