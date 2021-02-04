var containsNearbyDuplicate = function(nums, k) {
    var len=nums.length;
    var count=0
    for(var i=0;i<len;i++){
        for(var j=i+1;j<len;j++){
            if (nums[i]==nums[j]&&(j-i)<=k){
                count++;
            }
        }
    }
    if(count>0){
        return true;
    }else{
        return false;
    }
};

nums = [1,0,1,1], k = 1
console.log(containsNearbyDuplicate(nums, k));
