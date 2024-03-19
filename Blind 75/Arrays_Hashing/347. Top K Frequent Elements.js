
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numsCount={};
    let freqElements=[];
    for(let i=0;i<nums.length;i++){
        let count=nums[i];
         if(numsCount[count]){
            numsCount[count]++
         }else{
            numsCount[count]=1
         }
      }

let bucket=[];

for(let i=0;i<=nums.length;i++){
      bucket.push([]);
}
for (const key in numsCount) {
   bucket[numsCount[key]].push(parseInt(key));
}
   for(let i=bucket.length-1;i>=0;i--){
       if(bucket[i].length>0){
        freqElements=[...freqElements,...bucket[i]];
        if(freqElements.length===k){
            return freqElements;
        }
       }
   }

};
