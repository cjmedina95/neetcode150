var twoSum = function(nums, target) {
    let uniqueNums = {};

    for (let i = 0; i < nums.length; i += 1) {
        const complement = target - nums[i];

        if (complement in uniqueNums) {
            return [uniqueNums[complement], i];
        }

        uniqueNums[nums[i]] = i;
    }
};
