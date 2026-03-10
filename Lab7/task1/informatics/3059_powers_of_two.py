n = int(input())
p, res = 1, []
while p <= n:
    res.append(p)
    p *= 2
print(*res)
