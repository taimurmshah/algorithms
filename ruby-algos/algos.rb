def is_valid_subsequence(array, sequence)
  if array.length < sequence.length
    return false
  end
  i = 0

  array.each do |num|
    i += 1 if num == sequence[i]
  end

  i == sequence.length
end

# puts is_valid_subsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])

def two_number_sum(array, target_sum)
  hash = {}
  res = []
  array.each do |num|
    unless hash.has_key? num
      hash[num] = true
    end
  end

  array.each do |x|
    y = target_sum - x
    has_y = hash.has_key?(y) && x != y
    if has_y
      res.push(x)
      res.push(y)
      break
    end
  end
  res
end

# print two_number_sum([3, 5, -4, 8, 11, 1, -1, 6], 10)

def max_sub_array(nums)
  return nums[0] if nums.length == 1
  max = nums[0]

  (1...nums.length).each do |i|
    nums[i] = [nums[i], nums[i] + nums[i - 1]].max
    max = [max, nums[i]].max
  end
  max
end

# puts max_sub_array([-2,1,-3,4,-1,2,1,-5,4])