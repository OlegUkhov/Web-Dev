n = int(input())
a = list(map(int, input().split()))
found = any((a[i] > 0) == (a[i+1] > 0) for i in range(n-1))
print("YES" if found else "NO")
