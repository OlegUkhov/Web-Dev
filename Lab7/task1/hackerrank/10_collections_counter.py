from collections import Counter

n = int(input())
sizes = Counter(map(int, input().split()))
m = int(input())
earned = 0
for _ in range(m):
    size, price = map(int, input().split())
    if sizes[size] > 0:
        earned += price
        sizes[size] -= 1
print(earned)
