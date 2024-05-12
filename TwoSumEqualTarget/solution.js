var twoSum = function(nums, target) {
    let numsWithIndex = nums.map((num, index) => [num, index]).sort((a,b) => a[0] - b[0]);
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        let res = numsWithIndex[left][0] + numsWithIndex[right][0];

        if(res == target) {
            return [numsWithIndex[left][1], numsWithIndex[right][1]];
        }
        else if(res < target) {
            left++;
        }
        else {
            right--;
        }
    }

    return [];
};