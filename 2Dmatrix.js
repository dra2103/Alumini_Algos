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


