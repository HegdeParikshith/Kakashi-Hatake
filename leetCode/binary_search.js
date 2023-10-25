var binarySearch = function (nums, target) {

    let low = 0
    let high = nums.length
    while (low < high) {
        let mid = Math.floor((low + high) / 2)
        console.log('mid', mid)
        if (nums[mid] === target) return mid
        else if (nums[mid] > target) {
            high = mid - 1
        }
        else {
            low = mid + 1
        }


    }
    console.log(low, high)
    return -1
};



var searchInsert = function (nums, target) {

    let low = 0
    let high = nums.length
    let mid
    while (low <= high) {
        mid = parseInt((low + high) / 2)
        console.log(mid)
        if (nums[mid] === target) return mid
        else if (nums[mid] < target) {
            low = mid + 1
        }
        else {
            high = mid - 1
        }


    }
    console.log('low = ', low, 'high = ', high, 'mid = ', mid)
    return low
};


console.info(binarySearch([1, 3, 5, 6], 2))
console.info(searchInsert([1, 3, 5, 6], 2))
