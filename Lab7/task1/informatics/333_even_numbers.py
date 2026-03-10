a = int(input())
b = int(input())
print(*[x for x in range(a, b+1) if x % 2 == 0])
