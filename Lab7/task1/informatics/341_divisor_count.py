x = int(input())
count = 0
i = 1
while i * i <= x:
    if x % i == 0:
        count += 2 if i != x // i else 1
    i += 1
print(count)
