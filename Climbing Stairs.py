class Solution:
    def climbStairs(self, n: int) -> int:
        if(n==1):
            return 1
        n += 1
        res = [0, 1]  
        for i in range(2, n+1):  
            res.append(res[i-1] + res[i-2])  
        return res[n]