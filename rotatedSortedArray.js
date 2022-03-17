// this is what leet code calls it, makes no sense to us

var search = function (nums, target) {
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        }
    }
    return -1
};
