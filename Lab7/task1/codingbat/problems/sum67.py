def sum67(nums):
    total = 0
    skip = False
    for n in nums:
        if n == 6:
            skip = True
        if not skip:
            total += n
        if skip and n == 7:
            skip = False
    return total
