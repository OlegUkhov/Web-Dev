def average(arr):
    return sum(set(arr)) / len(set(arr))

n = int(input())
arr = list(map(int, input().split()))
print(average(arr))
