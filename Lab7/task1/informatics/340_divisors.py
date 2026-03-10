x = int(input())
print(*[i for i in range(1, x+1) if x % i == 0])
