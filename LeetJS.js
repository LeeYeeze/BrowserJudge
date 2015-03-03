


function LRUCache () {

}

function TreeNode () {

}

function isArray (o) {

    return Object.prototype.toString.call(o) === '[object Array]';
}


function Solution () {

}

Solution.prototype.findMinI = function (num) {
    if (num===undefined || (!isArray(num)) || num.length==0) {
        return 0;
    }
    var l = 0;
    var r = num.length-1;
    var min = num[0];
    while (l<r) {
        var m = Math.floor((l+r)/2);
        if (num[l]<num[m]) {
            min = Math.min(num[l],min);
            l = m+1;
        }
        else if (num[l]>num[m]) {
            min = Math.min(num[m],min);
            r = m-1;
        }
        else {
            l++
        }
    }
    min = Math.min(num[r],min);
    min = Math.min(num[l],min);
    return min;

}

Solution.prototype.findMinII = function (num) {
    return this.findMinI(num);
}

Solution.prototype.removeDuplicatesII = function (A) {
    if (A==undefined || (!isArray(A)) || A.length==0) {
        return 0;
    }
    var index = 0;
    var count = 0;
    for (var i= 0; i< A.length; i++ ) {
        if (i>0 && A[i]==A[i-1]) {
            count++;
            if (count>=3) {
                continue;

            }
        }
        else {
            count=1;
        }
        A[index++] = A[i];

    }
    return index;

}

Solution.prototype.twoSum = function (numbers, target) {
    if (numbers === undefined || (!isArray(numbers)) || numbers.length <2) {
        return null;
    }
    var map = {};
    var res = [];
    for (var i =0; i<numbers.length; i++) {
        if (map[target-numbers[i]]!== undefined) {
            res.push(target-numbers[i])+1;
            res.push(i+1);
            return res;
        }
        map[numbers[i]] = i;
    }
    return null;

}

Solution.prototype.twoSum2 = function () {

}

Solution.prototype.threeSum = function () {

}

Solution.prototype.threeSumClosest = function (numbers, target) {

}

Solution.prototype.fourSum = function () {

}

Solution.prototype.isValidParentheses = function () {

}

Solution.prototype.generateParenthesis = function () {

}

Solution.prototype.countAndSay = function () {

}

Solution.prototype.permuteI = function () {

}

Solution.prototype.permuteII = function () {

}

Solution.prototype.solveNQueensI = function () {

}

Solution.prototype.solveNQueensII = function () {

}

Solution.prototype.combinationSum = function () {

}

Solution.prototype.postorderTraversal = function () {

}

Solution.prototype.preorderTraversal = function () {

}

Solution.prototype.sumNumbers = function () {

}

Solution.prototype.longestConsecutive = function () {

}

Solution.prototype.isPalindrome = function () {

}

Solution.prototype.maxPathSum = function () {

}

Solution.prototype.flatten = function () {

}

Solution.prototype.hasPathSum = function () {

}

Solution.prototype.pathSum = function () {

}

Solution.prototype.minDepth = function () {

}

Solution.prototype.isBalanced = function () {

}

Solution.prototype.sortedListToBST = function () {

}

Solution.prototype.sortedArrayToBST = function () {

}

Solution.prototype.connectI = function () {

}

Solution.prototype.connectII = function () {

}

Solution.prototype.recoverTree = function () {

}

Solution.prototype.isSymmetric = function (root) {

}

Solution.prototype.isSameTree = function () {

}

Solution.prototype.isValidBST = function () {

}

Solution.prototype.inorderTraversal = function () {

}

Solution.prototype.reverseBetween = function () {

}

Solution.prototype.grayCode = function () {

}

Solution.prototype.mergeSortedArray = function (A,m,B,n) {
    if (A==undefined||B==undefined||(!isArray(A))|| (!isArray(B))) {
        return;
    }
    var idx1 = m-1;
    var idx2 = n-1;
    var len = m+n-1;
    while (idx1>=0&&idx2>=0) {
        if (A[idx1]>B[idx2]) {
            A[len--]=A[idx1--];
        }
        else {
            A[len--]=B[idx2--];
        }
    }
    while (idx2>=0) {
        A[len--]=B[idx2--];
    }

}

Solution.prototype.mergeKListss = function () {

}

Solution.prototype.swapPairs = function () {

}

Solution.prototype.longestCommonPrefix = function () {

}

Solution.prototype.isMatch = function () {

}

Solution.prototype.findMedianSortedArrays = function () {

}

Solution.prototype.lengthOfLongestSubstring = function () {

}

Solution.prototype.addTwoNumbers = function () {

}

Solution.prototype.longestPalindrome = function () {

}

Solution.prototype.convert = function () {

}

Solution.prototype.reverseInteger = function () {

}

Solution.prototype.maxArea = function () {

}

Solution.prototype.letterCombinations = function() {

}

Solution.prototype.removeNthFromEnd = function () {

}

Solution.prototype.reverseKGroup = function () {

}

Solution.prototype.removeElement = function () {

}

Solution.prototype.removeDuplicatesI = function () {

}

Solution.prototype.divide = function () {

}

Solution.prototype.findSubstring = function () {

}

Solution.prototype.nextPermutation = function () {

}

Solution.prototype.longestValidParentheses = function () {

}

Solution.prototype.search = function () {

}

Solution.prototype.searchRange = function () {

}

Solution.prototype.searchInsert = function () {

}

Solution.prototype.solveSudoku = function () {

}

Solution.prototype.isValidSudoku = function () {

}

Solution.prototype.combinationSum2 = function () {

}

Solution.prototype.firstMissingPositive = function (A) {
    if (A== undefined || (!isArray(A))|| A.length==0) {
        return 1;
    }

    for (var i=0; i< A.length; i++) {
        if (A[i]<= A.length && A[i]>0 && A[A[i]-1]!=A[i]) {
            var temp = A[A[i]-1];
            A[A[i]-1] = A[i];
            A[i] = temp;
            i--;
        }

    }

    for (var i =0; i< A.length;i++) {
        if (A[i]!=i+1) {
            return i+1;
        }
    }

    return A.length+1;


}

Solution.prototype.countingSort = function (A) {
    var b=[];
    var max = A[0];
    var min = A[0];
    for(var i=0; i< A.length;i++) {
        if (A[i]>max) {
            max = A[i];

        }
        if (A[i]<min) {
            min = A[i];

        }
    }

    var k = max-min+1;
    var c = Array.apply(null, new Array(5)).map(Number.prototype.valueOf,0);
    for (var i=0;i< A.length; ++i) {
        c[A[i]-min]+=1;

    }
    for (var i =1; i<k; ++i) {
        c[i]=c[i]+c[i-1];

    }
    for (var i = A.length-1; i>=0;--i) {
        b[--c[A[i]-min]] = A[i];

    }
    return b;

}



Solution.prototype.trap = function () {

}

Solution.prototype.isWildcardMatch = function () {

}

Solution.prototype.multiply = function () {

}

Solution.prototype.jump2 = function () {

}

Solution.prototype.jump2 = function () {

}

Solution.prototype.rotate = function () {

}

Solution.prototype.anagrams = function () {

}

Solution.prototype.pow = function () {

}

Solution.prototype.maxSubArray = function (A) {
    if (A===undefined || (!isArray(A))|| A.length==0) {
        return 0;
    }
    var global = A[0];
    var local = A[0];
    for (var i=1; i< A.length; i++) {
        local = Math.max(A[i],local+A[i]);
        global = Math.max(local,global);

    }
    return global;
}

Solution.prototype.spiralOrder = function () {

}

Solution.prototype.mergeIntervals = function () {

}

Solution.prototype.insertInterval = function () {

}

Solution.prototype.lengthOfLastWord = function () {

}

Solution.prototype.generateMatrix = function () {

}

Solution.prototype.getPermutation = function () {

}

Solution.prototype.rotateRight = function () {

}

Solution.prototype.uniquePaths = function (m,n) {
    var num = 1;
    var denom = 1;
    var small = m<n ? m-1 : n-1;
    for (var i = small; i>0; i--) {
        denom*=i;
        num*=(m+n-2)-i+1;
    }
    return num/denom;
}

Solution.prototype.uniquePathsIterative = function (m,n) {
    if (m<=0 || n<=0) {
        return 0;
    }
    var res = [];
    res[0] =1;
    for (var i =0; i<m; i++) {
        for (var j=1; j<n; j++) {
            res[j]+= res[j-1];
        }
    }
    return res[n-1];
}

Solution.prototype.uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid.length<=0 || obstacleGrid[0].length<=0) {
        return 0;
    }
    var m = obstacleGrid.length;
    var n = obstacleGrid.length;
    var res = [];
    //res[n-1] = obstacleGrid[m-1][n-1]!=0?0:1;
    for (var i=m-1; i>=0; i--) {
        if (obstacleGrid[i][n-1]!=0 || res[n-1]==0) {
            res[n-1] = 0;
        }
        else {
            res[n-1] = 1;
        }
        for (var j=n-2; j>=0; j--) {
            if (obstacleGrid[i][j]==1) {
                res[j]=0;
            }
            else {
                res[j]+=res[j+1];
            }
        }
    }
    return res[0];
}

Solution.prototype.addBinary = function() {

}

Solution.prototype.isNumber = function () {

}

Solution.prototype.mergeTwoLists = function () {

}

Solution.prototype.plusOne = function (digits) {
    if (digits === undefined || (!isArray(digits))|| digits.length==0) {
        return digits
    }
    var carry = 1;
    for (var i = digits.length-1; i>=0; i--) {
        var digit = (digits[i]+carry)%10;
        carry = Math.floor((digits[i]+carry)/10);
        digits[i] = digit;
        if (carry == 0) {
            return digits;
        }

    }
    digits.splice(0,0,1);
    return digits;
}

Solution.prototype.fullJustify = function () {

}

Solution.prototype.sqrt = function () {

}

Solution.prototype.climbStairs = function () {

}

Solution.prototype.simplifyPath = function () {

}

Solution.prototype.minDistance = function () {

}

Solution.prototype.setZeros = function () {

}

Solution.prototype.searchMatrix = function () {

}

Solution.prototype.sortColors = function () {

}

Solution.prototype.minWindow = function () {

}

Solution.prototype.combine = function () {

}

Solution.prototype.subsets = function (S) {
    var res;
    if (S===undefined || (!isArray(S)) || S.length==0) {
        res = [[]];
        return res;
    }
    S.sort(function (a,b) {
        return a-b;
    });
    for (var i =0; i< S.length; i++) {
        var size = res.length;
        for (var j =0; j<size; j++) {
            var item = res[j].slice(0);
            item.push(S[i]);
            res.push(item);

        }
    }

    return res;

}

Solution.prototype.subsetsHelper = function (S, index) {
    if (index == -1) {
        return [[]];
    }
    var res = this.subsetsHelper(S, index-1);
    var size = res.length;
    for (var i=0; i<size; i++) {
        var item = res[i].slice(0);
        item.push(S[index]);
        res.push(item);
    }
    return res;
}

Solution.prototype.subsetsRecursive = function (S) {
    var res
    if (S===undefined || (!isArray(S)) || S.length==0) {
        res = [[]];
        return res;
    }
    S.sort(function(a,b) {
        return a-b;
    });
    return this.subsetsHelper(S, S.length-1);
}

Solution.prototype.exist = function () {

}

Solution.prototype.searchInRotatedSortedArrayII = function () {

}

Solution.prototype.deleteDuplicates = function () {

}

Solution.prototype.deleteDuplicates2 = function () {

}

Solution.prototype.largestRectangleArea = function () {

}

Solution.prototype.maximalRectangle = function () {

}


Solution.prototype.partition = function () {

}

Solution.prototype.subsetsWithDup = function (S) {
    var res;
    if (S===undefined || (!isArray(S)) || S.length==0) {
        res = [[]];
        return res;
    }
    S.sort(function (a,b) {
        return a-b;
    });
    var start = 0;
    for (var i =0; i< S.length; i++) {
        var size = res.length;
        for (var j =start; j<size; j++) {
            var item = res[j].slice(0);
            item.push(S[i]);
            res.push(item);
        }
        start = (i< S.length-1 && S[i]==S[i+1])?size:0;

    }
    return res;
}

Solution.prototype.subsetsWithDupRecursive = function (S) {
    var res
    if (S===undefined || (!isArray(S)) || S.length==0) {
        res = [[]];
        return res;
    }
    S.sort(function(a,b) {
        return a-b;
    });



}



Solution.prototype.isScramble = function () {

}

Solution.prototype.restoreIpAddresses = function () {

}

Solution.prototype.maxProduct = function (A) {
    if (A===undefined||(!isArray(A))|| A.length==0) {
        return undefined;
    }
    var local1=0;
    var local2=0;
    var global=0;
    var tempLocal1, tempLocal2;
    if(A.length==1){
        return A[0];
    }
    for (var i = 0; i< A.length; i++) {
        tempLocal1 = local1;
        tempLocal2 = local2;
        if (A[i]>0) {
            local1 = tempLocal1==0?A[i]: tempLocal1*A[i];
            local2 = tempLocal2*A[i];
        }
        else if (A[i]<0) {
            local2 = tempLocal1==0?A[i]: tempLocal1*A[i];
            local1 = tempLocal2*A[i];
        }
        else {
            local1=0;
            local2=0;
        }
        global = Math.max(global, local1);
    }
    return global;
}

Solution.prototype.bestTimeToBuyAndSell = function (A) {
    if (A===undefined || (!isArray())) {

    }
    for (var i =0; i< A.length; i++) {


    }

}









