var threeSum = function (nums) {
    let answers = [];
    nums = nums.sort()
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    let answer = [nums[i], nums[j], nums[k]]
                    let duplicate = false
                    for (let l = 0; l < answers.length; l++) {
                        if (answers[l][0] == answer[0] && answers[l][1] == answer[1] && answers[l][2] == answer[2]) {
                            duplicate = true
                        }
                    }
                    if (duplicate == false) {
                        answers.push(answer);
                    }
                }
            }
        }
    }
    return answers
};

