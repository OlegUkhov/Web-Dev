import math
a = int(input())
b = int(input())
print(*[x for x in range(a, b+1) if math.isqrt(x)**2 == x])
