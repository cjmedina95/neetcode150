## Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 

Constraints:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.

 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

## ChatGPT-3.5 Feedback

The time complexity of the provided code is O(n), where n is the length of the input array nums. This is because the code iterates through the array once and performs constant-time operations for each element. Therefore, this is already an optimal solution in terms of time complexity.

Regarding space complexity, the code uses a hash table uniqueNums to store unique elements of the array nums and their indices. The space complexity of the hash table is O(n), where n is the length of the input array nums, in the worst case where all elements are unique. Therefore, the provided code is already optimal in terms of space complexity as well.

In conclusion, the provided code is already optimal in terms of both time and space complexity, and no further optimization is possible.
