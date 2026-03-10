n = int(input())
a = list(map(int, input().split()))
print(sum(1 for i in range(1, n) if a[i] > a[i-1]))
