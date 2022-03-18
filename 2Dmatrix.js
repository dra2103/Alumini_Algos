var searchMatrix = function (matrix, target) {
    for (let x = 0; x < matrix.length; x++) {
        if (target <= matrix[x][matrix[x].length - 1]) {
            for (let y = 0; y < matrix[x].length; y++) {
                if (matrix[x][y] == target) {
                    return true;
                }
            }
        }
    }
    return false;
};


var searchMatrixBinary = function (matrix, target) {
    let start = 0;
    let end = matrix.length - 1
    while (start <= end) {
        let mid = Math.floor((end + start) / 2)
        if (matrix[mid][0] <= target && matrix[mid][matrix[mid].length - 1] >= target) {
            let nestedStart = 0
            let nestedEnd = matrix[mid].length - 1
            while (nestedStart <= nestedEnd) {
                let nestedMid = Math.floor((nestedEnd + nestedStart) / 2)
                if (matrix[mid][nestedMid] == target) {
                    return true
                }
                else if (matrix[mid][nestedMid] > target) {
                    nestedEnd = nestedMid - 1
                }
                else if (matrix[mid][nestedMid] < target) {
                    nestedStart = nestedMid + 1
                }
            }
            return false
        }
        else if (matrix[mid][0] > target) {
            end = mid - 1
        }
        else if (matrix[mid][matrix[mid].length - 1] < target) {
            start = mid + 1
        }
    }
    return false
};