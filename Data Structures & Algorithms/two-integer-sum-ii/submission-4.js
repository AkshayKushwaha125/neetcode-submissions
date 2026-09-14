class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // const n = numbers.length;
        // for (let i = 0; i < n - 1; i++) {
        //     for (let j = i + 1; j < n; j++) {
        //         if (numbers[i] + numbers[j] === target) {
        //             return [i + 1, j + 1]; // 1-indexed
        //         }
        //     }
        // }
        // return [-1, -1];
        
        let left = 0;
        let right = numbers.length-1;

        while(left<right) {
            let sum = numbers[left]+numbers[right];
            if(sum === target) {
                return [left+1, right+1];
            } else if(sum < target) {
                left ++;
            } else {
                right --;
            }
        }
        return [-1, -1];
    }
}
