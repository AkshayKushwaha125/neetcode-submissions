class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // for (let i=0; i<nums.length; i++) {
        //     for (let j=i+1; j<nums.length; j++) {
        //         let sum = nums[i] + nums[j];
        //         if (sum === target) {
        //             return ([i, j]);
        //         }
        //     }
        // }

        const newMap = new Map();
        for (let i=0; i<nums.length; i++) {
            let sum = target - nums[i];

            // Check if sum was seen before
            if (newMap.has(sum)) {
                return [newMap.get(sum), i];
            }

            // Store current value and its index
            newMap.set(nums[i], i);
        }
    }
}
