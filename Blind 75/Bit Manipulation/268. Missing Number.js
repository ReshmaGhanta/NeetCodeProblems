/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let distinct=0;
    for(let n of nums){
        distinct^=n;
    }
    for(let i=0;i<=nums.length;i++){
        distinct^=i;
    }
    return distinct;
};