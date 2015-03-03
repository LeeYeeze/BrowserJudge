var test1 = require('./max points on a line')
var test2 = require('./sort list')
var test3 = require('./insertion sort list')
var test4 = require('./binary tree inorder traversal')
var test5 = require('./binary tree postorder traversal')
var test6 = require('./binary tree preorder traversal')
var test7 = require('./binary tree level order traversal')
var test8 = require('./binary tree level order traversal ii')
var test9 = require('./evaluate reverse polish notation')
var fs = require('fs')
/*
for (var i=0; i < test1.length; i++) {
    var constructed =[]
    if (typeof test1[i].input === 'string' ) {
        var temp = test1[i].input.replace(/\(/g,'[')
        temp = temp.replace(/\)/g,']')
        //console.log(JSON.parse(temp))
        var points = JSON.parse(temp)
        var constructed =[]
        for (var j=0; j<points.length;j++) {
            var point = {};
            point.x = points[j][0];
            point.y = points[j][1];
            constructed.push(point)
        }
        test1[i].input = constructed;
        console.log(test1[i].input)




    }
}

fs.writeFile('./max points on a line revised.json',JSON.stringify(test1,null,4),function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('saved');
    }
})
*/
/*
function ListNode (val, next) {
    this.val = val;
    this.next = next;

}

buffer = []

for (var i=0; i<test2.length;i++ ) {
    var inp = test2[i].input.replace(/{/g,'[')
    inp = inp.replace(/}/,']')
    inp = JSON.parse(inp)
    var outp = test2[i].output.replace(/{/g,'[')
    var nextNode = undefined
    var bnextNode = undefined;
    buffer[i] = {}
    for (var j = inp.length-1;j>=0;j--) {
        var node = {val:inp[j], next:nextNode};
        nextNode = node;
        var bnode = new ListNode(inp[j],bnextNode);
        bnextNode = bnode;


    }
    test2[i].input = nextNode;
    buffer[i].input = bnextNode;
    outp = outp.replace(/}/g,']')
    outp = JSON.parse(outp)
    nextNode = undefined
    var bnextNode = undefined;
    for (j=outp.length-1;j>=0;j--) {
        var node = {val:outp[j], next:nextNode}
        nextNode = node;
        var bnode = new ListNode(outp[j],bnextNode);
        bnextNode = bnode;


    }
    test2[i].output = nextNode
    buffer[i].output = bnextNode


}

test2=test2.slice(0,test2.length-2)
buffer = buffer.slice(0,buffer.length-2)

fs.writeFile('./sort list revised.json',JSON.stringify(test2),function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('saved');
    }
})

fs.writeFile('./sort list new.json',JSON.stringify(buffer),function(err) {
    console.log('saved');
})
*/
/*
var test = test4;
var res = []

for (var i =0 ;i < test.length; i++) {
    for (var j =0; j< test5.length; j++) {
        if (test[i].input==test5[j].input) {
            var o = {};
            o.input = {};
            o.input.inorder = test[i].output;
            o.input.postorder = test5[j].output;

            var inp = test[i].input;
            inp = inp.slice(1,inp.length-1);
            inp = inp.split(',');

            for (var k= 0; k< inp.length; k++) {
                if (inp[k]!='#') {
                    inp[k] = parseInt(inp[k]);
                }
            }
            console.log(inp);
            o.output = inp;
            res.push(o);
        }

    }
}

fs.writeFile('./construct binary tree from inorder and postorder traversal.json',JSON.stringify(res),function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('saved');
    }
})

*/
/*
function constructBinaryTree(array) {
    if (array === undefined || (!Array.isArray(array)) || array.length===0||array[0]==='#') {
        return undefined;
    }
    var queue = [];
    var head = {val: array[0]};
    queue.push(head);
    var i = 0;
    while (i<array.length && queue.length >0) {
        var node = queue.shift();
        if (i+1<array.length) {
            var left = array[++i];
            if (left == '#') {
                left = undefined;
            }
            else {
                left = {val: left};
                queue.push(left);
                node.left = left;
            }
            if (i+1<array.length) {
                var right = array[++i];
                if (right == '#') {
                    right = undefined;
                }
                else {
                    right = {val: right};
                    queue.push(right);
                    node.right = right;
                }
            }
            else {
                break;
            }

        }
        else {
            break;
        }

    }
    return head;

};

console.log(constructBinaryTree([2,3,"#",1]))
*/
/*
 function flat(root) {
 var res = [];
 if (root === undefined || root === null)
 return res;
 var queue = [];
 queue.push(root);
 while (queue.length>0) {
 var cur = queue.shift();
 if ((cur !== null) && (cur!== undefined)) {
 res.push(cur.val);

 queue.push(cur.left);
 queue.push(cur.right);
 }
 else
 res.push("#")

 }
 var mark = res.length;
 for (var i = res.length-1; i>=0; i--) {
 if (res[i]!=="#") {
 break;
 }
 else {
 mark = i;
 }
 }
 if (mark<res.length) {
 var len = res.length - mark;
 res.splice(mark,len);
 }
 return res;
 };

console.log(flat(2));

function test (target, array) {
    var start = 0;
    var end = array.length -1;
    while (start<=end) {
        var mid = (start+end)/2;
        if (array[mid]==target)
            return mid;
        else if (array[mid]>target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return end;
}

function testl (target, array) {
    var start = 0;
    var end = array.length -1;
    while (start<=end) {
        var mid = (start+end)/2;
        if (array[mid]==target)
            return mid;
        else if (array[mid]>target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
}

console.log(test(7,[1]));
console.log(testl(7,[5]));
*/

/*
function Solution () {

}

Solution.prototype.twoSum = function (num, end, target) {
    var res = [];
    if (num==null || num == undefined || num.length < 2)
        return res;
    var l = 0;
    var r = end;
    while (l<r) {
        if (num[l]+num[r] ===target) {
            var item = [];
            item.push(num[l]);
            item.push(num[r]);
            res.push(item);
            l++;
            r--;
            while (l<r && num[l]===num[l-1]) {
                l++;
            }
            while (l<r && num[r]===num[r+1]) {
                r--;
            }
        } else if (num[l]+num[r] > target) {
            r--;
        } else {
            l++;
        }
    }
    return res;

}

Solution.prototype.threeSum = function(num) {
    var res = [];
    if (num===null || num===undefined || num.length < 3)
        return res;
    num.sort(function (a,b) {
        return a-b;
    });
    console.log(num);
    for (var i = num.length -1; i>=2; i--) {
        if (i<num.length-1 && num[i]===num[i+1])
            continue;
        var curRes = this.twoSum(num, i-1, -num[i]);
        console.log(curRes);
        for (var j = 0; j<curRes.length;j++) {
            curRes[j].push(num[i])
        }
        res = res.concat(curRes);
    }
    return res;
}

var s = new Solution();
console.log(s.threeSum([1,2,3,4,5,-6]));

var aaaa = "5,6,0,3,0,0,6,0,5,8,5,0,7,5,0,2,2,7,4,0,8,5,8,2,1,6,9,2,8,9,0,3,5,8,8,2,2,0,8,1,0,9,5,6,5,2,2,0,9,9,2,0,5,1,5,9,7,3,9,8,0,2,6,8,0,5,1,3,3,3,0,0,8,2,0,8,7,4,1,4,0,4,4,7,1,7,4,9,8,3,2,7,7,8,5,3,0,6,7,8,9,3,9,3,6,4,4,6,4,9,4,8,3,9,1,9,8,3,2,4,3,7,1,7,0,5,3,1,3,0,3,1,4,9,3,7,5,8,6,7,2,5,6,2,3,4,0,5,1,8,6,7,7,9,5,8,0,7,6,3,9,4,8,4,6,2,2,2,5,0,7,4,0,6,9,0,7,7,8,2,4,3,6,2,3,7,3,0,4,0,7,9,7,9,9,9,0,2,7,8,0,7,4,1,2,2,8,5,4,8,4,3,6,0,2,1,9,2,8,9,9,2,8,4,3,9,4,3,5,8,2,9,3,3,8,9,6,1,3,2,1,9,5,6,0,5,5,7,9,7,5,5,7,8,3,5,6,9,0,3,7,6,0,6,2,7,2,7,7,6,2,9,4,3,0,0,5,5,8,9,8,3,6,8,1,1,8,5,5,2,7,8,6,9,6,6,5,7,5,8,4,6,7,7,6,5,1,1,5,6,4,1,8,8,9,4,6,2,0,9,7,5,8,5,9,9,3,0,0,3,4,5,7,8,6,1,7,2,9,0,6,1,4,8,6,7,6,4,0,4,6,7,6,0,5,1,8,6,8,5,5,3,0,7,8,4,0,2,5,0,5,0,8,8,7,1,0,9,3,3,0,8,5,5,7,0,6,8,3,5,8,3,7,0,6,2,3,7,1,1,5,4,5,7,8,2,1,8,4,0,1,2,0,7,2,8,2,1,6,9,7,0,5,6,9,9,9,9,5,3,2,9,3,7,2,5,3,0,8,0,4,5,0,1,9,2,6,9,1,6,4,1,3,0,6,0,9,8,9,6,0,8,9,6,6,7,7,4,7,2,5,7,2,8,9,3,0,5,4,2,9,1,1,0,8,3,8,9,2,8,0,8,3,8,4,9,9,8,5,2,3,0,9,2,7,4,0,2,0,3,3,2,5,0,8,4,5,6,7,7,6,8,7,8,8,3,3,0,4,0,1,2,7,1,#,3,8,3,8,5,5,2,#,3,3,6,6,9,5,4,#,5,2,5,#,6,8,2,8,8,0,3,#,7,8,7,#,8,6,3,5,5,4,7,4,6,8,6,#,8,6,6,#,8,3,3,0,2,#,#,#,9,3,7,#,9,#,#,#,1,6,5,6,0,0,7,2,4,7,2,7,5,3,2,0,0,9,4,8,0,0,8,#,3,3,6,6,3,0,5,1,4,4,2,6,3,9,1,#,2,9,8,5,4,5,7,4,5,6,6,8,0,2,2,#,0,7,7,7,8,#,#,#,3,0,6,1,4,4,6,3,5,#,#,#,0,5,7,1,2,6,7,#,6,6,6,#,5,#,0,#,9,6,8,9,4,2,1,8,1,#,#,#,8,2,0,3,5,3,8,0,2,#,3,#,5,#,7,#,1,#,#,#,2,6,3,8,5,#,#,#,1,6,4,1,6,7,9,5,1,6,7,#,6,8,4,2,7,8,3,6,2,#,#,#,5,8,7,5,8,#,0,#,5,#,#,#,3,4,8,3,2,7,7,9,2,2,5,9,9,4,9,0,8,7,2,#,4,#,#,#,1,2,2,2,0,0,1,#,0,0,6,7,9,5,3,8,8,0,1,9,6,2,7,#,9,7,3,2,0,#,7,#,2,5,5,6,7,9,8,#,9,4,7,9,4,5,2,5,1,4,0,6,8,3,5,#,4,0,3,4,5,0,6,4,6,0,2,8,4,6,4,1,9,0,5,5,5,7,7,7,7,#,6,#,7,#,1,#,6,#,#,#,3,4,1,4,1,1,2,7,8,3,7,#,0,0,7,2,2,7,5,3,6,6,7,0,4,2,4,6,8,5,5,3,6,5,7,#,7,#,2,#,5,3,5,1,6,4,4,#,5,6,1,9,7,4,7,5,#,#,#,#,4,6,9,4,7,8,5,4,5,9,5,#,5,#,9,#,5,6,6,1,0,#,6,#,4,4,3,#,3,8,3,4,2,7,2,9,0,9,8,8,2,5,8,#,8,#,1,#,6,6,4,0,9,3,9,7,4,1,6,2,2,7,3,1,4,6,1,#,3,1,0,#,6,4,2,4,2,7,7,0,#,#,#,#,#,#,#,#,8,#,#,#,8,#,#,#,4,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,4,#,#,#,3,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,3,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,3,#,#,#,#,#,#,#,3,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,9,#,5,#,9,#,#,#,#,#,#,#,#,#,#,#,#,#,5,#,#,#,#,#,#,#,2,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,5,#,#,#,5,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,3,0,0,#,#,#,6,#,#,#,9,#,#,#,6,#,#,#,6,#,#,#,#,#,1,#,#,#,6,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,1,3,1,#,#,#,#,#,0,#,#,#,#,#,#,#,#,#,2,#,#,#,0,#,#,#,9,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,3,#,#,#,8,#,#,#,#,#,0,#,#,#,1,#,6,#,6,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,3,#,#,#,8,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,0,2,0,0,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,5,#,#,#,2,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,4,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,5,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,5,#,#,#,9,#,3,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,6,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,2,#,7,#,2,#,5,#,#,#,#,#,#,#,5,#,2,#,1,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,7,#,#,#,6,#,#,#,#,#,#,#,#,#,#,#,#,#,9,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,4,#,#,#,3,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,3";
var res = aaaa.split(",");
console.log(JSON.stringify(res))

function aa() {dbdbddb = 2};
aa();
console.log(dbdbddb);
*/
/*
ar = [{"input":1, "output":1},{"input":2, "output":2}];
for (var i =3; i<=200; i++) {
    var one = {"input":i};
    one.output = ar[i-2].output+ar[i-3].output;
    ar.push(one);
}

fs.writeFile('./climbing stairs.json',JSON.stringify(ar),function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('saved');
    }
})
*/
function cg(graphArray) {
    var queue = [];
    var map = {};
    if (graphArray === undefined || graphArray === null || !(Array.isArray(graphArray))|| graphArray.length === 0) {
        return undefined;
    }
    var start = {"label":graphArray[0], "neighbors":[]};
    map[graphArray[0]] = start;
    var pivot = null;
    for (var i = 0; i < graphArray.length; i++) {
        if (graphArray[i]==="#") {
            pivot = null;
        } else {
            var cur;
            if (map.hasOwnProperty(graphArray[i]))
                cur = map[graphArray[i]];
            else {
                cur = {"label": graphArray[i], "neighbors": []};
                map[graphArray[i]] = cur;
            }
            if (pivot === null)
                pivot = cur;
            else {
                if (pivot!==cur) {
                    pivot.neighbors.push(cur);
                    cur.neighbors.push(pivot);
                }
                else {
                    pivot.neighbors.push(cur);
                }

            }

        }
    }
    //console.log(map);
    return start;

};

//console.log(cg([1,2,3,"#",2,2,3,"#",3,3]).neighbors)

var dd = [1,2,3,4,5,6]
var graph = cg([1,2,3,4,"#",2,3,4]);
var graph1 = cg([0,1,"#",1,2,"#",2,2]);
dd.valueOf().push(7)

function orderNeighbors(a,b) {
    return a.label- b.label;
}

function makeImmutable (obj) {
    var map = {};
    if ((typeof obj === "object" && obj !== null) ||
        (Array.isArray? Array.isArray(obj): obj instanceof Array) ||
        (typeof obj === "function")) {

        Object.freeze(obj);
        if (obj.label) {
            if (!map.hasOwnProperty(obj.label)) {
                map[obj.label] = obj;
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        makeImmutable(obj[key]);
                    }
                }
            }
        }
    }
    return obj;
}
function compareTwoUndirectedGraph (graphOne, graphTwo) {
    if ((graphOne === undefined || graphOne === null) && (graphTwo!==undefined && graphTwo!==null))
        return false;
    if ((graphOne === undefined || graphOne === null) && (graphTwo=== undefined || graphTwo === null))
        return true;
    if ((graphOne !== undefined && graphOne !== null) && (graphTwo===undefined || graphTwo===null ))
        return false;
    var curOne = graphOne;
    var curTwo = graphTwo;
    var map1 = {}, map2= {};
    var queue1 = [], queue2 = [];
    queue1.push(curOne);
    queue2.push(curTwo);
    while (queue1.length > 0) {
        var curOne = queue1.shift();
        var curTwo = queue2.shift();
        //console.log("hahaha");
        //console.log(curOne);
        //console.log(curTwo);
        if ((curOne === undefined || curOne === null) && (curTwo!==undefined && curTwo!==null))
            return false;
        if ((curOne !== undefined && curOne !== null) && (curTwo===undefined || curTwo===null ))
            return false;
        if (curOne === curTwo)
            return "reference";
        if ((curOne === undefined || curOne === null) && (curTwo=== undefined || curTwo === null)) {

        } else {

            if (curOne.label!== curTwo.label)
                return false;
            //console.log("pp");
            if (!map1.hasOwnProperty(curOne.label)) {
                map1[curOne.label] = curOne;
                if (!Array.isArray(curTwo.neighbors)|| curOne.neighbors.length !== curTwo.neighbors.length)
                    return false;
                //console.log("pp");
                curOne.neighbors.sort(orderNeighbors);
                curTwo.neighbors.sort(orderNeighbors);
                for (var i = 0; i < curOne.neighbors.length; i++ ) {
                    queue1.push(curOne.neighbors[i]);
                    queue2.push(curTwo.neighbors[i]);
                }
            } else {
                if (curOne.label !== curTwo.label)
                    return false;
            }
        }
    }
    return true;
}

Object.prototype.equals = function() {

}

makeImmutable(graph1);
function df(g) {
    return g;
}
//console.log(compareTwoUndirectedGraph(graph1, df(graph1)));
makeImmutable(graph);

if (!Number.isInteger) {
    Number.isInteger = function isInteger(nVal) {
        return typeof nVal === 'number'
            && isFinite(nVal)
            && nVal > -9007199254740992
            && nVal < 9007199254740992
            && Math.floor(nVal) === nVal;
    };
}
function flat(graphNode) {
    var res = [];
    if (graphNode === null || graphNode === undefined)
        return res;
    var queue = [];
    var map = {};
    var cur = graphNode;
    queue.push(cur);
    while (queue.length > 0) {
        cur = queue.shift();
        if (Number.isInteger(cur.label) && !map.hasOwnProperty(cur.label)) {
            map[cur.label] = cur;
            if (Array.isArray(cur.neighbors)) {
                for (var i = 0; i < cur.neighbors.length; i++) {
                    queue.push(cur.neighbors[i]);
                }
            }
        }
    }
    var ordered = [];
    for (var k in map) {
        if (map.hasOwnProperty(k)) {
            ordered.push(map[k]);
        }
    }
    ordered.sort(function (a,b) {
        return a.label - b.label;
    });
    for (var j = 0; j < ordered.length; j++) {
        if (j==0)
            res.push(ordered[j].label);
        if (Array.isArray(ordered[j].neighbors)) {
            var count = 0;
            for (var k =0; k < ordered[j].neighbors.length; k++) {
                if (ordered[j].neighbors[k].label >= ordered[j].label) {
                    if(count === 0 && j>0)
                        res.push(ordered[j].label);
                    res.push(ordered[j].neighbors[k].label);
                    count++;
                }
            }
            if (count>0 || j===0)
                res.push("#");
        }

    }
    //console.log(res);
    while (res.length>0 && res[res.length-1]==="#") {
        res.pop();
    }

    return res;

}

if (typeof "asdf" === "String")
    console.log("dddddddd")
function solution () {

};

function wrap () {
    var po = 1;
    solution.prototype.add= function() {

        po++;
        //console.log(po);
    }
}
wrap()
var s = new solution();
s.add()
wrap();
s.add();
this.d = 123;
(function aaa(self) {s.add();console.log(this===self);})(this);
//aaa()
console.log(flat(graph1))
console.log(graph1.neighbors[0])
console.log("+++++++++++++++++++++++++++++")
function copyGraph (graphNode) {
    if (graphNode==null)
        return null;
    var queue = [];
    var map = {};
    var copy = {"label":graphNode.label, "neighbors":[]};
    //map.put(node,copy);
    queue.push(graphNode);
    while(queue.length>0) {
        var cur = queue.shift();
        var cc = {"label":cur.label,"neighbors":[]};
        console.log(cur);
        if (!map.hasOwnProperty(cur.label)) {
            console.log("haha")
            map[cur.label] = cc;
            for (var i =0; i< cur.neighbors.length; i++) {
                if (!map.hasOwnProperty(cur.neighbors[i])) {
                    copy = {"label": cur.neighbors[i].label, "neighbors":[]};
                    //map.put(cur.neighbors.get(i),copy);
                    queue.push(cur.neighbors[i]);

                } else {
                    copy = map[cur.neighbors[i].label];

                }
                map[cur.label].neighbors.push(copy);

            }


        }


    }

    console.log("++++++++++++++++++++++++++")
    console.log(map);
    console.log("=================================")
    return map[graphNode.label];
}

console.log(copyGraph(graph1));
sa = "1,5,8,9,7,7,8,1,4,8,1,9,0,8,7,1,7,4,2,9,8,2,4,#,#,9,#,#,#,6,0,9,4,1,0,1,8,9,0,1,8,9,1,0,9,6,2,5,#,2,3,0,2,4,8,8,8,5,0,0,9,4,9,1,#,0,7,2,2,3,#,6,1,0,8,9,9,9,4,8,4,3,4,4,0,#,#,8,3,8,#,#,0,#,0,4,9,1,2,#,4,4,0,4,3,5,5,7,4,1,6,#,1,0,#,#,#,2,8,7,7,#,#,0,2,5,5,9,3,3,#,7,6,6,7,9,8,1,7,7,7,2,6,#,7,#,4,6,4,6,#,#,9,1,#,#,#,5,5,5,4,2,2,8,5,1,1,3,1,3,7,#,2,#,9,1,4,4,7,7,#,1,5,6,2,7,3,#,9,1,#,2,4,4,8,#,#,7,#,6,#,7,4,3,5,8,4,8,5,#,#,8,#,#,#,4,4,#,#,#,#,8,3,5,5,#,#,#,1,2,0,#,#,9,3,#,8,3,7,1,8,9,0,1,8,2,#,4,#,#,8,#,#,#,#,2,#,4,8,5,5,3,1,#,#,6,#,1,#,#,6,#,#,#,#,7,3,#,#,#,8,6,4,#,6,9,0,7,8,#,#,0,6,7,#,#,0,0,7,2,3,2,#,0,2,3,#,0,1,7,9,0,7,#,#,#,#,5,8,2,6,3,2,0,4,#,#,0,9,1,1,1,#,1,3,#,7,9,1,3,3,8,#,#,#,#,6,#,#,#,#,9,8,1,3,8,3,0,6,#,#,8,5,6,5,2,1,#,5,#,7,0,0,#,9,3,9,#,3,0,0,9,1,7,0,2,#,6,8,5,#,#,#,#,#,7,#,2,5,#,#,9,#,#,#,#,#,#,#,#,#,#,#,4,1,#,3,6,6,2,5,5,9,#,#,7,8,#,#,2,7,3,7,2,5,#,1,3,4,#,#,8,3,6,9,#,1,#,#,#,#,9,7,5,2,#,5,#,6,4,5,#,1,2,0,6,#,1,6,#,#,5,#,7,8,4,7,8,6,4,#,5,6,7,9,1,0,4,#,#,#,6,4,8,4,5,#,0,4,4,0,1,7,1,#,1,#,3,6,#,#,#,#,8,#,5,0,7,5,#,#,5,8,#,#,3,#,#,8,#,2,4,#,#,#,#,#,#,#,9,#,9,#,9,#,#,#,#,7,1,#,#,2,#,#,5,5,5,5,6,4,#,#,1,6,4,0,#,0,6,3,0,#,5,5,#,#,#,#,2,#,3,6,#,3,0,5,0,1,0,3,4,9,9,2,7,3,8,6,9,#,5,8,#,#,#,#,9,8,0,7,#,#,8,8,6,6,0,2,7,4,2,3,8,6,4,#,8,#,#,#,2,0,#,1,3,5,4,2,2,5,8,8,#,3,0,#,1,6,0,#,#,9,#,2,#,6,8,2,#,#,5,#,#,#,9,6,6,4,2,0,#,#,1,#,0,#,#,#,6,6,#,#,#,4,7,9,#,0,1,#,#,9,#,#,#,4,#,8,#,#,#,#,#,#,4,#,6,#,3,#,#,5,1,2,5,#,0,7,8,#,7,#,#,4,#,4,4,#,2,#,6,#,#,#,7,#,#,#,#,6,4,#,6,#,6,9,#,#,#,9,6,#,9,#,3,#,2,#,7,7,#,#,0,#,6,3,#,#,#,#,#,#,1,#,#,#,6,9,7,#,7,#,9,3,3,#,#,#,#,4,#,#,3,#,#,#,3,9,#,0,3,1,9,6,7,9,4,8,#,#,6,#,1,3,7,#,#,#,3,#,2,#,8,1,1,#,#,6,#,7,3,5,#,6,3,4,#,#,5,7,1,#,#,6,4,6,#,#,#,#,5,7,0,7,0,#,5,8,5,5,4,5,#,#,#,#,#,#,1,7,#,#,7,#,9,9,6,4,#,#,3,2,1,#,0,#,0,6,#,#,#,1,5,#,#,#,8,#,#,#,#,3,4,8,#,#,9,6,4,#,#,#,#,8,9,#,1,#,#,#,7,#,#,#,#,#,9,#,#,#,4,1,6,7,0,#,#,#,7,#,#,8,#,#,#,#,#,#,#,4,#,9,#,#,#,#,3,0,6,#,5,#,9,9,#,#,4,3,4,#,#,#,#,8,#,5,#,#,#,#,5,2,#,#,#,#,#,#,#,2,#,#,2,1,8,5,#,0,#,0,3,2,4,5,#,#,#,#,#,7,#,#,0,#,0,#,#,#,0,3,9,#,#,#,#,5,#,#,0,5,0,0,#,9,#,#,#,#,#,#,#,#,8,#,9,3,5,9,0,5,9,#,#,9,4,#,0,2,0,#,#,7,#,7,#,5,7,8,7,#,#,#,3,0,3,#,#,#,#,#,4,5,#,#,2,3,#,2,#,#,7,#,#,9,#,#,9,7,1,#,#,1,6,1,8,#,#,5,#,#,3,7,9,6,#,#,#,#,1,#,#,#,3,7,3,2,3,3,#,1,#,#,#,1,#,#,4,3,4,8,7,#,0,3,0,#,1,1,#,#,#,#,#,5,#,6,0,#,3,1,#,6,#,#,4,0,1,#,6,1,#,#,9,6,4,9,0,8,9,3,3,6,#,#,#,#,#,#,#,#,#,#,#,#,2,#,#,#,#,#,8,5,8,3,5,4,#,6,#,0,#,#,6,#,4,3,#,#,#,#,#,#,#,#,#,#,#,#,#,#,7,3,#,#,1,#,2,4,#,#,#,6,#,#,#,6,#,5,#,#,#,#,1,#,#,3,#,1,#,7,1,#,#,7,1,3,4,8,#,#,#,#,#,4,#,#,4,#,#,#,7,#,6,#,#,1,#,#,#,7,3,3,#,#,#,#,3,0,#,#,4,#,#,#,#,#,#,#,#,#,#,8,#,#,9,#,#,6,6,5,2,#,8,3,8,#,#,#,#,6,7,0,#,#,#,#,1,1,5,#,0,5,#,5,#,#,#,1,2,#,2,9,1,#,2,4,1,#,#,#,1,8,4,4,5,2,#,#,6,4,7,5,2,9,#,4,#,#,#,#,#,3,#,#,5,9,#,#,#,#,9,#,9,#,#,#,2,#,1,9,#,#,#,#,#,1,9,3,#,#,1,9,#,5,2,1,0,#,#,1,9,8,4,7,#,#,5,7,#,#,#,#,1,2,8,#,6,0,#,#,#,#,0,#,#,#,6,#,2,3,0,9,#,#,1,4,6,#,8,#,#,5,#,3,0,#,6,#,#,#,#,#,2,#,#,#,#,#,#,2,5,8,6,9,#,#,#,8,#,#,9,6,#,#,#,#,3,#,#,#,#,9,#,#,2,#,#,#,#,#,#,8,8,#,#,#,#,#,9,#,6,#,2,5,#,#,1,2,#,4,#,#,4,#,#,3,5,#,3,3,#,#,1,#,#,#,#,4,#,2,3,#,4,5,3,#,7,#,#,#,7,6,#,#,1,3,#,4,9,8,#,#,0,#,3,4,#,8,#,1,#,#,2,2,#,#,4,#,#,#,3,#,#,2,#,#,#,4,#,5,#,#,#,#,2,#,5,#,#,#,#,#,#,2,7,5,#,6,#,#,#,#,2,#,0,#,3,#,1,#,9,4,#,3,#,#,#,#,#,#,#,5,5,7,#,#,1,#,4,6,#,#,#,2,#,5,9,0,6,2,#,#,#,#,#,#,#,#,#,#,#,#,5,#,7,#,2,9,#,#,1,#,#,#,1,6,#,6,#,#,0,8,#,4,#,#,#,#,4,#,#,0,#,6,0,#,#,#,4,#,#,#,#,#,0,#,#,#,#,#,#,#,#,#,#,#,#,0,5,4,2,6,4,5,3,4,#,#,5,#,#,#,#,4,#,#,3,6,2,0,#,6,6,#,#,#,#,0,6,#,#,#,3,9,4,#,#,#,#,#,0,#,#,6,7,0,#,9,2,#,3,3,#,#,8,#,3,#,#,#,8,5,3,#,2,4,#,9,6,9,#,#,#,#,6,#,6,#,5,3,#,#,#,#,4,#,#,#,9,0,9,7,1,1,#,1,#,1,6,#,5,#,6,#,#,1,#,#,#,#,#,#,5,#,#,#,#,#,3,#,6,1,#,0,2,#,#,0,#,#,0,#,#,#,#,#,3,#,#,8,#,#,5,3,3,#,#,#,#,#,#,#,3,#,#,0,8,7,#,#,8,1,#,#,#,#,#,#,7,#,#,#,#,#,#,#,#,#,#,#,5,2,#,2,6,#,#,#,#,#,#,#,1,5,0,#,#,2,#,7,#,#,6,#,#,#,#,#,#,#,#,#,#,#,#,#,8,#,#,#,#,3,#,#,4,#,#,2,#,#,#,#,0,3,#,#,#,#,#,7,#,8,#,#,#,#,8,5,#,3,4,#,#,#,8,#,#,#,#,#,#,#,#,#,3,7,#,#,#,4,0,3,#,#,6,#,#,#,#,#,#,#,#,#,#,#,#,8,#,#,#,#,#,2,#,#,#,#,#,#,#,#,#,0,#,#,#,2,#,#,#,8,2,#,#,#,#,#,#,#,8,#,#,#,#,#,#,#,#,#,#,2,#,#,#,2,5,#,#,#,#,#,#,#,#,#,#,#,2,#,#,#,#,#,8,#,#,#,#,#,#,#,#,#,#,0,5";
res = sa.split(",")
for (var i =0; i<res.length; i++) {
    if (res[i]!=="#") {
        res[i] = Number(res[i]);
    }
}
console.log(JSON.stringify(res))
var aaaa = "5,6,0,3,0,0,6,0,5,8,5,0,7,5,0,2,2,7,4,0,8,5,8,2,1,6,9,2,8,9,0,3,5,8,8,2,2,0,8,1,0,9,5,6,5,2,2,0,9,9,2,0,5,1,5,9,7,3,9,8,0,2,6,8,0,5,1,3,3,3,0,0,8,2,0,8,7,4,1,4,0,4,4,7,1,7,4,9,8,3,2,7,7,8,5,3,0,6,7,8,9,3,9,3,6,4,4,6,4,9,4,8,3,9,1,9,8,3,2,4,3,7,1,7,0,5,3,1,3,0,3,1,4,9,3,7,5,8,6,7,2,5,6,2,3,4,0,5,1,8,6,7,7,9,5,8,0,7,6,3,9,4,8,4,6,2,2,2,5,0,7,4,0,6,9,0,7,7,8,2,4,3,6,2,3,7,3,0,4,0,7,9,7,9,9,9,0,2,7,8,0,7,4,1,2,2,8,5,4,8,4,3,6,0,2,1,9,2,8,9,9,2,8,4,3,9,4,3,5,8,2,9,3,3,8,9,6,1,3,2,1,9,5,6,0,5,5,7,9,7,5,5,7,8,3,5,6,9,0,3,7,6,0,6,2,7,2,7,7,6,2,9,4,3,0,0,5,5,8,9,8,3,6,8,1,1,8,5,5,2,7,8,6,9,6,6,5,7,5,8,4,6,7,7,6,5,1,1,5,6,4,1,8,8,9,4,6,2,0,9,7,5,8,5,9,9,3,0,0,3,4,5,7,8,6,1,7,2,9,0,6,1,4,8,6,7,6,4,0,4,6,7,6,0,5,1,8,6,8,5,5,3,0,7,8,4,0,2,5,0,5,0,8,8,7,1,0,9,3,3,0,8,5,5,7,0,6,8,3,5,8,3,7,0,6,2,3,7,1,1,5,4,5,7,8,2,1,8,4,0,1,2,0,7,2,8,2,1,6,9,7,0,5,6,9,9,9,9,5,3,2,9,3,7,2,5,3,0,8,0,4,5,0,1,9,2,6,9,1,6,4,1,3,0,6,0,9,8,9,6,0,8,9,6,6,7,7,4,7,2,5,7,2,8,9,3,0,5,4,2,9,1,1,0,8,3,8,9,2,8,0,8,3,8,4,9,9,8,5,2,3,0,9,2,7,4,0,2,0,3,3,2,5,0,8,4,5,6,7,7,6,8,7,8,8,3,3,0,4,0,1,2,7,1,#,3,8,3,8,5,5,2,#,3,3,6,6,9,5,4,#,5,2,5,#,6,8,2,8,8,0,3,#,7,8,7,#,8,6,3,5,5,4,7,4,6,8,6,#,8,6,6,#,8,3,3,0,2,#,#,#,9,3,7,#,9,#,#,#,1,6,5,6,0,0,7,2,4,7,2,7,5,3,2,0,0,9,4,8,0,0,8,#,3,3,6,6,3,0,5,1,4,4,2,6,3,9,1,#,2,9,8,5,4,5,7,4,5,6,6,8,0,2,2,#,0,7,7,7,8,#,#,#,3,0,6,1,4,4,6,3,5,#,#,#,0,5,7,1,2,6,7,#,6,6,6,#,5,#,0,#,9,6,8,9,4,2,1,8,1,#,#,#,8,2,0,3,5,3,8,0,2,#,3,#,5,#,7,#,1,#,#,#,2,6,3,8,5,#,#,#,1,6,4,1,6,7,9,5,1,6,7,#,6,8,4,2,7,8,3,6,2,#,#,#,5,8,7,5,8,#,0,#,5,#,#,#,3,4,8,3,2,7,7,9,2,2,5,9,9,4,9,0,8,7,2,#,4,#,#,#,1,2,2,2,0,0,1,#,0,0,6,7,9,5,3,8,8,0,1,9,6,2,7,#,9,7,3,2,0,#,7,#,2,5,5,6,7,9,8,#,9,4,7,9,4,5,2,5,1,4,0,6,8,3,5,#,4,0,3,4,5,0,6,4,6,0,2,8,4,6,4,1,9,0,5,5,5,7,7,7,7,#,6,#,7,#,1,#,6,#,#,#,3,4,1,4,1,1,2,7,8,3,7,#,0,0,7,2,2,7,5,3,6,6,7,0,4,2,4,6,8,5,5,3,6,5,7,#,7,#,2,#,5,3,5,1,6,4,4,#,5,6,1,9,7,4,7,5,#,#,#,#,4,6,9,4,7,8,5,4,5,9,5,#,5,#,9,#,5,6,6,1,0,#,6,#,4,4,3,#,3,8,3,4,2,7,2,9,0,9,8,8,2,5,8,#,8,#,1,#,6,6,4,0,9,3,9,7,4,1,6,2,2,7,3,1,4,6,1,#,3,1,0,#,6,4,2,4,2,7,7,0,#,#,#,#,#,#,#,#,8,#,#,#,8,#,#,#,4,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,4,#,#,#,3,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,3,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,3,#,#,#,#,#,#,#,3,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,9,#,5,#,9,#,#,#,#,#,#,#,#,#,#,#,#,#,5,#,#,#,#,#,#,#,2,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,5,#,#,#,5,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,3,0,0,#,#,#,6,#,#,#,9,#,#,#,6,#,#,#,6,#,#,#,#,#,1,#,#,#,6,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,1,3,1,#,#,#,#,#,0,#,#,#,#,#,#,#,#,#,2,#,#,#,0,#,#,#,9,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,3,#,#,#,8,#,#,#,#,#,0,#,#,#,1,#,6,#,6,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,3,#,#,#,8,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,0,2,0,0,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,5,#,#,#,2,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,4,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,5,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,5,#,#,#,9,#,3,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,6,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,2,#,7,#,2,#,5,#,#,#,#,#,#,#,5,#,2,#,1,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,7,#,#,#,6,#,#,#,#,#,#,#,#,#,#,#,#,#,9,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,4,#,#,#,3,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,#,3";
var res = aaaa.split(",");
for (var i =0; i<res.length; i++) {
    if (res[i]!=="#") {
        res[i] = Number(res[i]);
    }
}
console.log(JSON.stringify(res))

var sss = "5,-685,2970,-755,-462,2770,3620,#,-714,-649,434,373,2913,3337,4201,#,#,#,-497,-400,-95,313,1620,2838,#,3228,3574,3874,4262,-589,-484,#,-225,-183,#,240,#,1357,2342,#,#,2988,3262,3434,#,3658,3885,#,#,-622,#,#,#,-381,#,#,#,150,#,1237,1538,2235,2593,#,3072,#,#,3349,3490,#,3760,#,4187,#,#,#,-325,74,#,701,1246,1439,1583,2136,2249,2553,2661,3053,3174,#,3384,3465,#,3686,3855,3971,#,#,#,#,#,527,913,#,1283,#,#,#,#,1945,2219,#,#,2370,#,#,2694,3007,#,3109,#,#,#,#,#,#,#,#,#,#,4058,519,624,712,972,#,#,1736,1954,#,#,#,2467,2692,#,#,#,#,3115,#,4100,-203,#,#,#,#,725,#,1227,1670,1745,1952,2030,2427,#,#,#,#,#,#,#,#,#,#,817,1056,#,#,#,#,1852,#,#,#,2098,#,#,#,#,#,1133,1834,1929";
res = sss.split(",")
for (var i =0; i<res.length; i++) {
    if (res[i]!=="#") {
        res[i] = Number(res[i]);
    }
}
console.log(JSON.stringify(res));
function merge(A, m, B, n) {
    if (A==null || B==null) {
        return;
    }
    var idx1 = m-1;
    var idx2 = n-1;
    var len = m+n-1;
    while (idx1>=0&&idx2>=0) {
        if (A[idx1]>B[idx2]) {
            A[len--]=A[idx1--];

        } else {
            A[len--]=B[idx2--];
        }
    }
    while (idx2>=0) {
        A[len--]=B[idx2--];
    }

}
ar = [1,6,7,8,9]
merge(ar,5,[2,3,4,5],4)
console.log(ar);

function reverse(node) {
    var pre = null;
    var cur = node;
    while (cur !==null) {
        var next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}

function reverse2 (lead, afterLast) {
    var pre = lead;
    var newPre = lead.next;
    var cur = lead.next.next;
    while (cur!==afterLast) {
        var next = cur.next;
        cur.next = pre.next;
        pre.next = cur;
        cur = next;
    }
    newPre.next= afterLast;
    return newPre;
}

function reverse3 (lead, afterLast) {
    var pre = afterLast;
    var cur = lead.next;
    var head = lead.next;
    while (cur !== afterLast) {
        var next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    lead.next = pre;
    return head;

}
function Solution () {

}

function helper(list, l ,r) {
    if (l>r)
        return null;
    var m = Math.floor((l+r+1)/2);
    var left = helper(list, l, m -1);
    var root = {"val":list[0].val};
    console.log("root is "+ root.val)
    root.left = left;
    list[0] = list[0].next;
    root.right = helper(list, m+1, r);
    return root;
}
Solution.prototype.sortedListToBST = function(head) {
    if (head===null || head ===undefined)
        return null;
    var cur = head;
    var count = 0;
    while ((cur !== null) && (cur !== undefined)) {
        cur = cur.next;
        count++;
    }
    console.log("count is "+ count)
    var list = [];
    list.push(head);
    return helper(list, 0, count-1);
}

var head = {"val":1, "next":{"val":2, "next":{"val":3,"next":{"val":4, next:{"val":5}}}}}
var s = new Solution();
console.log(s.sortedListToBST(head))

function maxDepth (root) {
    if (root === null || root === undefined)
        return 0;
    return 1+Math.max(maxDepth(root.left), maxDepth(root.right));
}

function minDepth (root) {
    if (root === null || root === undefined)
        return 0;
    return 1+Math.min(minDepth(root.left)+minDepth(root.right));
}

function isSelfBalancing (root) {
    return (maxDepth(root)-minDepth(root)<=1)
}

function inorderTraversal (root) {
    var res = [];
    if (root === null || root === undefined)
        return res;
    var stack = [];
    while ((root!==null && root!==undefined) || stack.length>0) {
        if (root!== null && root!==undefined) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }
    return res;
}
console.log([1,2,3,4]+" shenma")

