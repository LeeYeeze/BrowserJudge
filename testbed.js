
var _ = require('lodash')
var re = require('./sort list new')
var fs = require('fs')
Number.prototype.equals = function (o) {
    //console.log('tester')
    var self = this.valueOf()
    return (self === o);
}



a = 5
b = 5
d = {val:1,chen:2}
c = {next:d}
e = {val:1}
f = {next:e}

function ListNode (val, next) {
     this.val = val;
     if (next !=undefined) {
         this.next = next;
     }

}

Array.prototype.equals = function (array, order) {
    if (!array) {
        return false;
    }
    if (!(array instanceof Array)) {
        return false;
    }
    if (this.length!=array.length) {
        return false
    }
    if (order !== false) {
        for (var i= 0, l = this.length; i<l; i++) {
            if (this[i] instanceof Array && array[i] instanceof Array) {
                if (!this[i].equals(array[i])) {
                    return false;
                }

            }
            else if (this[i]!==array[i]) {
                return false;

            }
        }
        return true;
    }
    else {
        /*
        for (var i = 0, l =this.length; i<l;i++) {
            for (var j = 0; j< array.length;j++) {
                if (this[i].equals(array[j])) {
                    //console.log("find it")
                    break;

                }
            }
            if (j==array.length) {
                return false;

            }

        }
        return true;
        */
        this.sort();
        array.sort();
        for (var i= 0, l = this.length; i<l; i++) {
            if (this[i] instanceof Array && array[i] instanceof Array) {
                if (!this[i].equals(array[i])) {
                    return false;
                }

            }
            else if (this[i]!==array[i]) {
                return false;

            }
        }
        return true;

    }



}

String.prototype.equals = function (o) {
    var self = this.valueOf();
    return self === o;
}

Object.prototype.equals = function (o) {
    return "haha"
}

Boolean.prototype.equals = function (o) {
    var self = this.valueOf();
    return self === o;
}
function Point(x, y) {
    this.x = x;

    this.y = y;

}

Object.prototype.equals = function (o) {
    if (o === undefined || o === null) {
       return false;
    }
    else {
        //console.log("aha")
        //console.log(this)
        //console.log(o)
        if (this.val.equals(o.val)===false) {
            //console.log('en')
            return false;

        }
        if (this.next!==undefined && this.next!== null) {
            return this.next.equals(o.next);

        }
        else {
            if (o.next!==undefined && o.next!== null) {
               return false;
            }
            else {
                return true;
            }

        }
    }

}

tt = new ListNode(2);
uu = {val:2}



dd = new Point(2,2);
ff = {x:2,y:2}

console.log(a.equals(b))
//console.log({'a':123}.equals({'a':2345}))
console.log(_.isEqual(dd,ff))
console.log(dd)
yy = new ListNode (1);
console.log(re[1].input)
console.log(yy)
console.log(tt.equals(uu))
console.log("123".equals("123"))
console.log(true.equals(true))
console.log({"val":-3,"next":{"val":1,"next":{"val":4,"next":{"val":5,"next":{"val":5,"next":{"val":8,"next":{"val":11,"next":{"val":14,"next":{"val":15,"next":{"val":19}}}}}}}}}}.equals({"val":-3,"next":{"val":1,"next":{"val":4,"next":{"val":5,"next":{"val":5,"next":{"val":8,"next":{"val":11,"next":{"val":14,"next":{"val":15,"next":{"val":19}}}}}}}}}}))

var my = function () {
    if (this.timesRun)
        this.timesRun +=1;
    else
        this.timesRun = 1;
    console.log(this.timesRun);
}

/*
var postCode2 = '\nfor (var i = 0; i < testCases.length; i++) {'+
    '\n\tvar solution = new Solution();'+
    '\n\tvar answer;'+
    '\n\tif ((testCases[i].input!==undefined) && (testCases[i].input!==null)){answer = solution.'+$scope.functionName+parenthesesParams+';}'+
    '\n\telse {answer = solution.'+$scope.functionName+'();}'+
    '\n\tif(testCases[i].output===undefined || testCases[i].output === null) {if (answer!== undefined && answer !== null){var report = {status:"Incorrect Answer", should:testCases[i].output, wrongAnswer: answer}; self.postMessage(report); self.close(); break;} }'
    '\n\telse if (testCases[i].output.equals(answer) == false) {'+
    '\n\t\tvar report = {status:"Incorrect Answer", should:testCases[i].output, wrongAnswer: answer};'+
    '\n\t\tself.postMessage(report);'+
    '\n\t\tself.close();'+
    '\n\t\tbreak;'+
    '\n\t}'+
    '\n\t}'+
    '\nif (i==testCases.length){self.postMessage({status:"Accepted"})};';
*/

/*
ar = [1,2,3,4,'#',5,6];
function constructBinaryTree(array) {
    if (array === undefined || (!Array.isArray(array)) || array[0]=='#') {
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
                left == undefined;

            }
            else {
                left = {val: left};
                queue.push(left);
                node.left = left;
            }
            if (i+1<array.length) {
                var right = array[++i];
                if (right == '#') {
                    right == undefined;
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


}

console.log(constructBinaryTree(ar));
console.log([[1,2,3],[3,2,1]].equals([[3,2,1],[1,2,3]],false))
console.log([].equals([]))


*/
Object.prototype.equals = function (o) {
    if (o === undefined || o === null) {
    return false;
    }
    var self = this;
    while (true) {
    if ((self===null || self===undefined) && (o===undefined || o===null))
    return true;
    if ((self===null || self===undefined) && (o!==undefined) && (o!==null))
    return false;
    if ((o===null || o===undefined) && (self!==undefined) && (self!==null))
    return false;
    if (self.val.equals(o.val)===false)
    return false;
    self = self.next; o = o.next;
    }
}

console.log({"val":-3,"next":{"val":1,"next":{"val":4,"next":{"val":5,"next":{"val":5,"next":{"val":8,"next":{"val":11,"next":{"val":14,"next":{"val":15,"next":{"val":19}}}}}}}}}}.equals({"val":-3,"next":{"val":1,"next":{"val":4,"next":{"val":5,"next":{"val":5,"next":{"val":8,"next":{"val":11,"next":{"val":14,"next":{"val":15,"next":{"val":9}}}}}}}}}}))

ui = [123];
u2=ui.valueOf()
u2=3;
console.log(ui);

