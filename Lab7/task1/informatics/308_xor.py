def xor(x, y):
    return int(bool(x) != bool(y))

x, y = map(int, input().split())
print(xor(x, y))
