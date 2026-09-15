class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let left = 0;
        let right = cleanedStr.length - 1;
        
        while (left < right) {
            if (cleanedStr[left] !== cleanedStr[right]) {
                return false; // Found a mismatch, not a palindrome
            }
            left++;
            right--;
        }
        
        return true;
    }
}
