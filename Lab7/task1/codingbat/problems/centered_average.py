def centered_average(nums):
    nums = sorted(nums)
    trimmed = nums[1:-1]
    return sum(trimmed) // len(trimmed)
