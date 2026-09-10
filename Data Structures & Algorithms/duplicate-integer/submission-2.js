class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // for (let i = 0; i<nums.length; i++) {
        //     for (let j=i+1; j<nums.length; j++) {
        //         if (nums[i] === nums[j]) {
        //             return true;
        //         }
        //     }
        // }
        // return false;

        const newMap = new Map();

        for (let i=0; i<nums.length; i++) {
            if (newMap.has(nums[i])) {return true;}
            newMap.set(nums[i]);
            }
        return false;
    }
}
