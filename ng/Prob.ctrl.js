angular.module('app').controller('ProbController', function($scope,$routeParams,$http,$sce,$timeout) {
    $scope.problem = $routeParams.problem;
    $scope.showLastTestCase = false;
    $scope.resultCodeOutput = false;
    $scope.showWrongTestCase = false;
    $scope.exhibit = true;
    $scope.message = '';
    $scope.flag = true;
    $scope.statusColor = '';
    $scope.preCode = 'console.log(Date.now());function Solution() {};function ListNode(val,) { this.val = val; this.next = undefined};importScript(//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js)';
    $scope.postCode = '\nfor (var i = 0; i < testCases.length; i++) {'+
        '\n\tvar solution = new Solution();'+
        '\n\tvar answer = solution.exist(testCases[i].input);console.log(testCases[i]);'+
        '\n\tif (answer != testCases[i].output) {'+
        '\n\t\tvar report = {status:"Incorrect Answer", should:testCases[i].output, wrongAnswer: answer};'+
        '\n\t\tself.postMessage(report);'+
        '\n\t\tself.close();'+
        '\n\t\tbreak;'+
        '\n\t}'+
        '\n\t}'+
        '\nif (i==testCases.length){self.postMessage({status:"Accepted"})};';

    $scope.postCode2 = '\nself.addEventListener("message", function(e) {'+
        '\nvar data = e.data;'+
        '\nswitch (data.cmd) {'+
        '\ncase "start":'+
        '\nfor (var i = 0; i < data.testCases.length; i++) {'+
        '\nvar solution = new Solution();'+
        '\nvar answer = solution.exist(data.testCases[i].input);'+
        '\nif (answer != data.testCases[i].output) {'+
        '\nvar report = {status:"Incorrect Answer", should:output, wrongAnswer: answer}'+
        '\nself.postMessage(report);'+
        '\nself.close();'+
        '\nbreak;'+
        '\n}'+

        '\n}'+
        '\nif (i == data.testCases.length) {'+
        '\nself.postMessage({status:"Accepted"});'+
        '\nbreak;'+
        'n\}'+
        '\ndefault:'+
        '\nself.postMessage({status:"Unknown command"});'+
        '\n};'+
        '\n});';

    $scope.compare = 'Array.prototype.equals = function (array,order) {'+
        // if the other array is a falsy value, return
        'if (!array)'+
        'return false;'+
        'if (!(array instanceof Array)) return false;'+
        // compare lengths - can save a lot of time
        'if (this.length != array.length)'+
        'return false;'+
        'if (order !== false) {'+
        'for (var i = 0, l=this.length; i < l; i++) {'+
        // Check if we have nested arrays
        'if (this[i] instanceof Array && array[i] instanceof Array) {'+
        // recurse into the nested arrays
        'if (!this[i].equals(array[i]))'+
        'return false;'+
        '}'+
        'else if (this[i] != array[i]) {'+
        // Warning - two different object instances will never be equal: {x:20} != {x:20}
        'return false;'+
        '}'+
        '}'+
        'return true;'+
        '}'+
        'else {'+
        'this.sort();'+
        'array.sort();'+
        'for (var i= 0, l = this.length; i<l; i++) {'+
        'if (this[i] instanceof Array && array[i] instanceof Array) {'+
            'if (!this[i].equals(array[i])) {'+
                'return false;'+
            '}'+

        '}'+
        'else if (this[i]!==array[i]) {'+
            'return false;'+

        '}'+
        '}'+
        'return true;'+
        '}'+
        '};';

    $scope.compare2 = 'function ___compareArray___ (array1, array2) {'+
        'if ((!array1) || (!array2))'+
        'return false;'+
        'if (array1.length != array2.length)'+
        'return false;'+
        'for (var i = 0, l=array1.length; i<l; i++) {'+
        'if (array1[i] instanceof Array && array2[i] instanceof Array) {'+
        'if (!compareArray(array1[i], array2[i]))'+
        'return false;'+

        '}'+
        'else if (array1[i]!=array2[i]) {'+
        'return false;'+
        '}'+
        '}'+
        'return true;'+

        '}';

    $scope.compare3 = 'Number.prototype.equals = function (o) {'+
        'var self = this.valueOf();'+
        'return self == o;'+
    '};';

    $scope.compare4 = 'String.prototype.equals = function (o) {'+
        'var self = this.valueOf();'+
        'return self === o;'+
    '};';

    $scope.compare5 = 'Boolean.prototype.equals = function (o) {'+
        'var self = this.valueOf();'+
        'return self === o;'+
    '};';

    $scope.compare6 = 'Object.prototype.equals = function (o) {'+
        'if (o === undefined || o === null) {'+
            'return false;'+
        '}'+
        'else {'+
            'if (this.val.equals(o.val)===false) {'+
                'return false;'+
            '}'+
            'if (this.next!==undefined && this.next!== null) {'+
                'return this.next.equals(o.next);'+

            '}'+
            'else {'+
                'if (o.next!==undefined && o.next!== null) {'+
                    'return false;'+
                '}'+
                'else {'+
                    'return true;'+
                '}'+

            '}'+
        '}'+

    '};';

    $scope.compare7 = 'Object.prototype.equals = function (o) {'+
        'if (o === undefined || o === null) {'+
            'return false;'+
        '}'+
        'var self = this;'+
        'while (true) {'+
            'if ((self===null || self===undefined) && (o===undefined || o===null))'+
                'return true;'+
            'if ((self===null || self===undefined) && (o!==undefined) && (o!==null))'+
                'return false;'+
            'if ((o===null || o===undefined) && (self!==undefined) && (self!==null))'+
                'return false;'+
            'if (self.val.equals(o.val)===false)'+
                'return false;'+
            'self = self.next; o = o.next;'+
        '}'+
    '};';

    if (!Number.isInteger) {
        Number.isInteger = function isInteger(nVal) {
            return typeof nVal === 'number'
                && isFinite(nVal)
                && nVal > -9007199254740992
                && nVal < 9007199254740992
                && Math.floor(nVal) === nVal;
        };
    }


    if (!Array.isArray) {
        Array.isArray = function(arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };
    }


    $http.get("/api/probs/"+$scope.problem,{cache: true}).success(function(discription) {
        $scope.insertHtml = discription.dis;
        //console.log(discription)

    });

    $http.get('/api/problems/'+$scope.problem,{cache: true}).success(function (res) {
        console.log(res);
        $scope.aceInitial = res.snippet.slice(0,res.snippet.length);
        $scope.functionName = res.functionName;
        $scope.params = res.parameters;
        $scope.returnType = res.returnType;
        $scope.resultOrder = res.order;
        $scope.inPlace = res.inPlace;
        $scope.flag = false;

    });

    $scope.aceLoaded = function (_editor) {
        $scope.editorEmbed = _editor;
        var _session = _editor.getSession();
        var _renderer = _editor.renderer;
        $scope.editorEmbed.setFontSize('16px');
        _editor.setOptions({
            maxLines: Infinity,
            minLines: 30,
            highlightActiveLine: false,
            autoScrollEditorIntoView: true,
            showPrintMargin:false
        });


    };

    $scope.renderHtml = function(html_code) {
        return $sce.trustAsHtml(html_code);
    };

    $scope.codeSubmissionWithWebWorker2 = function () {
        $scope.showLastTestCase = false;
        $scope.resultCodeOutput = false;
        $scope.showWrongTestCase = false;
        var parenthesesParams = '(';
        var params = '';
        if ($scope.params != undefined) {
            for (var k=0; k<$scope.params.length-1; k++) {
                params += 'testCases[i].input.'+$scope.params[k]+',';
            }
            params += 'testCases[i].input.'+$scope.params[k];

        }
        else {
            params = 'testCases[i].input';
        }
        parenthesesParams += params+')';
        $http.get('/api/tests/'+$scope.problem.toLowerCase()).success(function (response) {
            console.log(response.content);
            var postCode = '\nfor (var i = 0; i < testCases.length; i++) {'+
                '\n\tvar solution = new Solution();'+
                '\n\tvar answer = solution.'+$scope.functionName+parenthesesParams+';'+
                '\n\tif (testCases[i].output.equals(answer) == false) {'+
                '\n\t\tvar report = {status:"Incorrect Answer", should:testCases[i].output, wrongAnswer: answer};'+
                '\n\t\tself.postMessage(report);'+
                '\n\t\tself.close();'+
                '\n\t\tbreak;'+
                '\n\t}'+
                '\n\t}'+
                '\nif (i==testCases.length){self.postMessage({status:"Accepted"})};';
            var postCode2 = '\nfor (var i = 0; i < testCases.length; i++) {'+
                '\n\tvar solution = new Solution();'+
                '\n\tvar answer;'+
                '\n\tif ((testCases[i].input!==undefined) && (testCases[i].input!==null)){answer = solution.'+$scope.functionName+parenthesesParams+';}'+
                '\n\telse {answer = solution.'+$scope.functionName+'();}'+
                '\n\tif(testCases[i].output===undefined || testCases[i].output === null) {if ((answer!== undefined) && (answer !== null)){var report = {status:"Incorrect Answer", should:testCases[i].output, wrongAnswer: answer, input: testCases[i].input}; self.postMessage(report); self.close(); break;} }'+
                '\n\telse if (testCases[i].output.equals(answer) == false) {'+
                '\n\t\tvar report = {status:"Incorrect Answer", should:testCases[i].output, wrongAnswer: answer, input: testCases[i].input, index:i};'+
                '\n\t\tself.postMessage(report);'+
                '\n\t\tself.close();'+
                '\n\t\tbreak;'+
                '\n\t}'+
                '\n\t}'+
                '\nif (i==testCases.length){self.postMessage({status:"Accepted"})};';
            var preCode = 'console.log(Date.now());var testCases = '+JSON.stringify(response.content)+';function Solution() {};';
            var  code = preCode +';(function sandbox() { var self = undefined;var postMessage = undefined;'+ $scope.aceInitial+'})()'+'\n'+$scope.compare +$scope.compare3+$scope.compare4+$scope.compare5+$scope.compare6+postCode2;
            var blob = new Blob([code]);
            var blobURL = window.URL.createObjectURL(blob);
            var timeFlag = false;
            var worker = new Worker(blobURL);
            $timeout(function () {
                if (timeFlag== false){
                    timeFlag = true;
                    $scope.message = "Exceed Time Limit";
                    $scope.statusColor = 'red';
                    $scope.exhibit = false;
                    worker.terminate();
                    window.URL.revokeObjectURL(blobURL);
                }
            },2000);
            worker.onmessage = function (e) {
                console.log(e.data);
                //$scope.message = e.data.status;
                if (e.data.status == 'Incorrect Answer' && timeFlag == false) {
                    $scope.message = e.data.status;
                    $scope.expected = e.data.should.toString();
                    $scope.lastOutput = e.data.wrongAnswer || "undefined";
                    $scope.lastInput = JSON.stringify(e.data.input) || "undefined";
                    $scope.showWrongTestCase = true;
                    timeFlag = true;
                    $scope.statusColor = 'red';
                    $scope.exhibit = false;
                    worker.terminate();
                    window.URL.revokeObjectURL(blobURL);
                }
                else if (e.data.status == 'Accepted' && timeFlag == false) {
                    timeFlag = true;
                    $scope.message = e.data.status;
                    $scope.statusColor = 'green';
                    $scope.exhibit = false;
                    worker.terminate();
                    window.URL.revokeObjectURL(blobURL);
                }

                $scope.$apply();

            };
            worker.onerror = function (e) {
                timeFlag = true;
                $scope.resultCodeOutput = true;
                console.log(e.message);
                var messages = e.message.split(':');
                $scope.message = messages[0];
                $scope.details = messages[1];
                $scope.lineNumber = e.lineno;
                $scope.statusColor = 'red';
                window.URL.revokeObjectURL(blobURL);
                $scope.exhibit = false;
                $scope.$apply();

            };

        })
    };
    $scope.makeImmutable = function makeImmutable (obj) {
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
    $scope.makeImmutableText = 'function makeImmutable (obj) {'+
        'var map = {};'+
        'if ((typeof obj === "object" && obj !== null) ||'+
            '(Array.isArray? Array.isArray(obj): obj instanceof Array) ||'+
            '(typeof obj === "function")) {'+

            'Object.freeze(obj);'+
            'if (obj.label) {'+
                'if (!map.hasOwnProperty(obj.label)) {'+
                    'map[obj.label] = obj;'+
                    'for (var key in obj) {'+
                        'if (obj.hasOwnProperty(key)) {'+
                            'makeImmutable(obj[key]);'+
                        '}'+
                    '}'+
                '}'+
            '}'+
        '}'+
        'return obj;'+
    '}'
    $scope.codeSubmissionWithWebWorker3 = function () {
        $scope.showLastTestCase = false;
        $scope.resultCodeOutput = false;
        $scope.showWrongTestCase = false;
        var parenthesesParams = '(';
        var params = '';
        if ($scope.params != undefined) {
            for (var k=0; k<$scope.params.length-1; k++) {
                params += 'testCases[i].input.'+$scope.params[k].param+',';
            }
            params += 'testCases[i].input.'+$scope.params[k].param;

        }
        else {
            params = 'testCases[i].input';
        }
        parenthesesParams += params+')';
        if ($scope.responseModified===undefined){
            $http.get('/api/tests/'+$scope.problem.toLowerCase()).success(function (response) {
                //console.log(response.content);
                $scope.testCases = response.content.slice(0);
                //console.log($scope.testCases);
                var responseModified = {"content":[]};
                for (var idx = 0; idx < response.content.length; idx++) {
                    responseModified.content[idx] = {};
                    for (var m = 0; m < $scope.params.length; m++) {
                        if ($scope.params[m].realType == "ListNode") {
                            if($scope.params[m].param != "valueOf()") {
                                if (responseModified.content[idx].input===undefined)
                                    responseModified.content[idx].input = {};
                                responseModified.content[idx].input[$scope.params[m].param] = $scope.constructLinkedList(response.content[idx].input[$scope.params[m].param]);
                            }

                            else
                                responseModified.content[idx].input = $scope.constructLinkedList(response.content[idx].input);

                        }
                        else if ($scope.params[m].realType == "TreeNode") {
                            if($scope.params[m].param != "valueOf()") {
                                if (responseModified.content[idx].input===undefined)
                                    responseModified.content[idx].input = {};
                                responseModified.content[idx].input[$scope.params[m].param] = $scope.constructBinaryTree(response.content[idx].input[$scope.params[m].param]);
                            }

                            else
                                responseModified.content[idx].input = $scope.constructBinaryTree(response.content[idx].input);
                        }
                        else if ($scope.params[m].realType === "UndirectedGraphNode"){
                            if ($scope.params[m].param !== "valueOf()") {
                                if (responseModified.content[idx].input=== undefined)
                                    responseModified.content[idx].input = {};
                                var freeze = $scope.constructUndirectedGraph(response.content[idx].input[$scope.params[m].param]);
                                $scope.makeImmutable(freeze);
                                Object.defineProperty(responseModified.content[idx].input,$scope.params[m].param, {
                                    value:freeze,
                                    writable: false,
                                    enumerable: true,
                                    configurable: true
                                });
                                //responseModified.content[idx].input[$scope.params[m].param] = $scope.constructUndirectedGraph(response.content[idx].input[$scope.params[m].param]);
                            }


                            else {
                                var freeze = $scope.constructUndirectedGraph(response.content[idx].input);
                                $scope.makeImmutable(freeze);
                                Object.defineProperty(responseModified.content[idx], "input", {
                                    value: freeze,
                                    writable : false,
                                    enumerable:true,
                                    configurable:true
                                });
                                //responseModified.content[idx].input = $scope.constructUndirectedGraph(response.content[idx].input);
                            }

                        } else {
                            if ($scope.params[m].param !== "valueOf()") {
                                if (responseModified.content[idx].input=== undefined)
                                    responseModified.content[idx].input = {};
                                responseModified.content[idx].input[$scope.params[m].param] = response.content[idx].input[$scope.params[m].param];
                            }

                            else
                                responseModified.content[idx].input = response.content[idx].input;
                        }


                    }

                    if ($scope.returnType == 'ListNode'|| $scope.returnType == 'LinkedList') {
                        responseModified.content[idx].output = $scope.constructLinkedList(response.content[idx].output);

                    }

                    else if ($scope.returnType == 'TreeNode') {
                        console.log(idx);
                        console.log("TreeHere");
                        console.log(response.content[idx].output)
                        responseModified.content[idx].output = $scope.constructBinaryTree(response.content[idx].output);
                        console.log(responseModified.content[idx].output);
                        responseModified.content[idx].output = $scope.flattenedBinaryTree(responseModified.content[idx].output);
                        console.log(responseModified.content[idx].output);
                    }
                    else {
                        responseModified.content[idx].output = response.content[idx].output;
                    }
                }

                $scope.responseModified = responseModified;

                var postCode = '\nself.addEventListener("message", function(e) {'+
                    '\nvar data = e.data;'+
                    '\nvar testCases = data.testCases'+
                    '\nswitch (data.cmd) {'+
                    '\ncase "start":'+
                    '\nfor (var i = 0; i < testCases.length; i++) {'+
                    '\nvar solution = new Solution();'+
                    '\nvar answer;'+
                    '\nif (data.returnType === "UndirectedGraphNode") {makeImmutable(testCases[i].input);}'+
                    '\nif ((testCases[i].input!==undefined) && (testCases[i].input!==null)){answer = solution.'+$scope.functionName+parenthesesParams+';}'+
                    '\nelse {answer = solution.'+$scope.functionName+'();}'+
                    '\nif (data.inPlace !== undefined) {answer = data.inPlace ==="valueOf()"?testCases[i].input: testCases[i].input[data.inPlace];}'+
                    '\nif (data.returnType == "Balanced BST") {var balanceFlag = isSelfBalancing (answer); if (balanceFlag === true ) {answer = inorderTraversal(answer);} else { answer = flattenedBinaryTree(answer); answer ="[" +answer +"] is not a self-balancing tree."} }'+
                    '\nif (data.returnType == "TreeNode") {answer = flattenedBinaryTree(answer);}'+
                    '\nif (data.returnType == "UndirectedGraphNode") {var check = compareTwoUndirectedGraph(testCases[i].input, answer);if (typeof check === "string"){answer = check;} else {answer = flattenUndirectedGraph(answer);} console.log(check);}'+
                    '\nif(testCases[i].output===undefined || testCases[i].output === null) {if ((answer!== undefined) && (answer !== null)){var report = {status:"Incorrect Answer", should:testCases[i].output, wrongAnswer: answer, input: testCases[i].input, index:i}; self.postMessage(report); self.close(); break;} }'+
                    '\nelse if (testCases[i].output.equals(answer,data.order) == false) {'+
                    '\nvar report = {status:"Incorrect Answer", should:testCases[i].output, wrongAnswer: answer , input:testCases[i].input, index:i}'+
                    '\nself.postMessage(report);'+
                    '\nself.close();'+
                    '\nbreak;'+
                    '\n}'+

                    '\n}'+
                    '\nif (i == data.testCases.length) {'+
                    '\nself.postMessage({status:"Accepted"});'+
                    '\nbreak;'+
                    '\n}'+
                    '\ndefault:'+
                    '\nself.postMessage({status:"Unknown command"});'+
                    '\n};'+
                    '\n});';
                var preCode = '"use strict";function Solution () {};';
                var code = preCode + ';(function sandbox() { var self = undefined;var postMessage = undefined;' + $scope.aceInitial+'})()' + '\n' + $scope.compare + $scope.compare3 + $scope.compare4 + $scope.compare5 + $scope.compare6 +$scope.flattenedBinaryTreeText + $scope.makeImmutableText + $scope.flattenUndirectedGraphText + $scope.compareTwoUndirectedGraphText + $scope.isBalancedBSTText + $scope.inorderTraversalText + postCode;
                var blob = new Blob([code]);
                var blobURL = window.URL.createObjectURL(blob);
                var timeFlag = false;
                var worker = new Worker(blobURL);
                worker.onmessage = function (e) {
                    if (e.data.status == 'Incorrect Answer' && timeFlag == false) {
                        timeFlag = true;
                        $scope.message = e.data.status;
                        $scope.expected = JSON.stringify($scope.testCases[e.data.index].output) || "undefined";
                        try {
                            $scope.lastOutput = JSON.stringify(e.data.wrongAnswer) || "undefined";
                        } catch (e) {
                            $scope.lastOutput = e.message;
                        }
                        //$scope.lastOutput = JSON.stringify(e.data.wrongAnswer) || "undefined";
                        //console.log(e.data.index);
                        //console.log(typeof e.data.index);
                        $scope.lastInput = JSON.stringify($scope.testCases[e.data.index].input) || "undefined";
                        $scope.showWrongTestCase = true;
                        timeFlag = true;
                        $scope.statusColor = 'red';
                        $scope.exhibit = false;
                        worker.terminate();
                        window.URL.revokeObjectURL(blobURL);
                    }
                    else if (e.data.status == 'Accepted' && timeFlag == false) {
                        timeFlag = true;
                        $scope.message = e.data.status;
                        $scope.statusColor = 'green';
                        $scope.exhibit = false;
                        worker.terminate();
                        window.URL.revokeObjectURL(blobURL);
                    }

                    $scope.$apply();
                };

                worker.onerror = function (e) {
                    timeFlag = true;
                    $scope.resultCodeOutput = true;
                    console.log(e.message);
                    var messages = e.message.split(':');
                    $scope.message = messages[0];
                    $scope.details = messages[1];
                    $scope.lineNumber = e.lineno;
                    $scope.statusColor = 'red';
                    window.URL.revokeObjectURL(blobURL);
                    $scope.exhibit = false;
                    $scope.$apply();
                };

                worker.postMessage({'cmd':'start','testCases':$scope.responseModified.content, 'order':$scope.resultOrder, 'returnType':$scope.returnType, 'inPlace':$scope.inPlace});
                $timeout(function () {
                    if (timeFlag== false){
                        timeFlag = true;
                        $scope.message = "Exceed Time Limit"
                        $scope.statusColor = 'red';
                        $scope.exhibit = false;
                        worker.terminate();
                        window.URL.revokeObjectURL(blobURL);
                    }
                },2000);



            });
        }
        else {
            var response = $scope.responseModified;
            var postCode = '\nself.addEventListener("message", function(e) {'+
                '\nvar data = e.data;'+
                '\nvar testCases = data.testCases'+
                '\nswitch (data.cmd) {'+
                '\ncase "start":'+
                '\nfor (var i = 0; i < testCases.length; i++) {'+
                '\nvar solution = new Solution();'+
                '\nvar answer;'+
                '\nif (data.returnType === "UndirectedGraphNode") {makeImmutable(testCases[i].input);}'+
                '\nif ((testCases[i].input!==undefined) && (testCases[i].input!==null)){answer = solution.'+$scope.functionName+parenthesesParams+';}'+
                '\nelse {answer = solution.'+$scope.functionName+'();}'+
                '\nif (data.inPlace !== undefined) {answer = data.inPlace ==="valueOf()"?testCases[i].input: testCases[i].input[data.inPlace];}'+
                '\nif (data.returnType == "Balanced BST") {var balanceFlag = isSelfBalancing (answer); if (balanceFlag === true ) {answer = inorderTraversal(answer);} else { answer = flattenedBinaryTree(answer); answer ="[" +answer +"] is not a self-balancing tree."} }'+
                '\nif (data.returnType == "TreeNode") {answer = flattenedBinaryTree(answer);}'+
                '\nif (data.returnType == "UndirectedGraphNode") {var check = compareTwoUndirectedGraph(testCases[i].input, answer);if (typeof check === "string"){answer = check;} else {answer = flattenUndirectedGraph(answer);} console.log(check);}'+
                '\nif(testCases[i].output===undefined || testCases[i].output === null) {if ((answer!== undefined) && (answer !== null)){var report = {status:"Incorrect Answer", should:testCases[i].output, wrongAnswer: answer, input: testCases[i].input, index: i}; self.postMessage(report); self.close(); break;} }'+
                '\nelse if (testCases[i].output.equals(answer,data.order) == false) {'+
                '\nvar report = {status:"Incorrect Answer", should:testCases[i].output, wrongAnswer: answer , input:testCases[i].input, index: i}'+
                '\nself.postMessage(report);'+
                '\nself.close();'+
                '\nbreak;'+
                '\n}'+

                '\n}'+
                '\nif (i == data.testCases.length) {'+
                '\nself.postMessage({status:"Accepted"});'+
                '\nbreak;'+
                '\n}'+
                '\ndefault:'+
                '\nself.postMessage({status:"Unknown command"});'+
                '\n};'+
                '\n});';
            var preCode = '"use strict";function Solution () {};';
            var code = preCode + ';(function sandbox() { var self = undefined;var postMessage = undefined;' + $scope.aceInitial+'})()' + '\n' + $scope.compare + $scope.compare3 + $scope.compare4 + $scope.compare5 + $scope.compare6 + $scope.flattenedBinaryTreeText + $scope.makeImmutableText + $scope.flattenUndirectedGraphText + $scope.compareTwoUndirectedGraphText + $scope.isBalancedBSTText + $scope.inorderTraversalText+ postCode;
            var blob = new Blob([code]);
            var blobURL = window.URL.createObjectURL(blob);
            var timeFlag = false;
            var worker = new Worker(blobURL);
            worker.onmessage = function (e) {
                if (e.data.status == 'Incorrect Answer' && timeFlag == false) {
                    timeFlag = true;
                    $scope.message = e.data.status;
                    $scope.expected = JSON.stringify($scope.testCases[e.data.index].output) || "undefined";
                    try {
                        $scope.lastOutput = JSON.stringify(e.data.wrongAnswer) || "undefined";
                    } catch (e) {
                        $scope.lastOutput = e.message;
                    }
                    //$scope.lastOutput = JSON.stringify(e.data.wrongAnswer) || "undefined";
                    //console.log(e.data.index);
                    //console.log(typeof e.data.index);
                    $scope.lastInput = JSON.stringify($scope.testCases[e.data.index].input) || "undefined";
                    $scope.showWrongTestCase = true;
                    //timeFlag = true;
                    $scope.statusColor = 'red';
                    $scope.exhibit = false;
                    worker.terminate();
                    window.URL.revokeObjectURL(blobURL);
                }
                else if (e.data.status == 'Accepted' && timeFlag == false) {
                    timeFlag = true;
                    $scope.message = e.data.status;
                    $scope.statusColor = 'green';
                    $scope.exhibit = false;
                    worker.terminate();
                    window.URL.revokeObjectURL(blobURL);
                }

                $scope.$apply();
            };

            worker.onerror = function (e) {
                timeFlag = true;
                $scope.resultCodeOutput = true;
                console.log(e.message);
                var messages = e.message.split(':');
                $scope.message = messages[0];
                $scope.details = messages[1];
                $scope.lineNumber = e.lineno;
                $scope.statusColor = 'red';
                worker.terminate();
                window.URL.revokeObjectURL(blobURL);
                $scope.exhibit = false;
                $scope.$apply();
            };

            worker.postMessage({'cmd':'start','testCases':$scope.responseModified.content, 'order':$scope.resultOrder, 'returnType': $scope.returnType, 'inPlace':$scope.inPlace});
            $timeout(function () {
                if (timeFlag== false){
                    timeFlag = true;
                    $scope.message = "Exceed Time Limit";
                    $scope.statusColor = 'red';
                    $scope.exhibit = false;
                    worker.terminate();
                    window.URL.revokeObjectURL(blobURL);
                }
            },2000);
        }

    };

    $scope.codeSubmissionWithWebWorker4 = function () {
        var parenthesesParams = '(';
        var params = '';
        if ($scope.params == undefined) {
            for (var k=0; k<$scope.params.length-1; k++) {
                params += 'testCases[i].input.'+$scope.params[k]+',';
            }
            params += 'testCases[i].input'+$scope.params[k];

        }
        else {
            params = 'testCases[i].input';
        }
        parenthesesParams += params+')';
    }

    $scope.constructLinkedList = function (rawData) {
        if (!Array.isArray(rawData))
            return rawData;
        var head = undefined;
        for (var i = rawData.length-1; i>=0; i--) {
            var newNode = {val: rawData[i], next: head};
            head = newNode;

        }
        return head;
    };

    $scope.constructCycleList = function(rawData, circleIndex) {
        if (!Array.isArray(rawData))
            return rawData;
        var head = undefined;
        var tail, anchor;
        for (var i = rawData.length-1; i>=0; i--) {
            var newNode = {val: rawData[i], next: head};
            head = newNode;
            if (i === rawData.length-1)
                tail = newNode;
            if (i === circleIndex)
                anchor = newNode;
        }
        tail.next = anchor;
        return head;
    };

    $scope.constructBinaryTree = function constructBinaryTree(array) {
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

    $scope.flattenedBinaryTree = function(root) {
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
                res.push("#");

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

    $scope.flattenedBinaryTreeText = '; function flattenedBinaryTree(root) {'+
        'var res = [];'+
        'if (root === undefined || root === null)'+
            'return res;'+
        'var queue = [];'+
        'queue.push(root);'+
        'while (queue.length>0) {'+
            'var cur = queue.shift();'+
            'if ((cur !== null) && (cur!== undefined)) {'+
                'res.push(cur.val);'+
                'queue.push(cur.left);'+
                'queue.push(cur.right);'+
            '}'+
            'else {'+
                'res.push("#");'+
            '}'+
        '}'+
        'var mark = res.length;'+
        'for (var i = res.length-1; i>=0; i--) {'+
            'if (res[i]!=="#") {'+
                'break;'+
            '}'+
            'else {'+
                'mark = i;'+
            '}'+
        '}'+
        'if (mark<res.length) {'+
            'var len = res.length - mark;'+
            'res.splice(mark,len);'+
        '}'+
        'return res;'+
    '};';

    $scope.testCaseStringify = function () {

    };

    $scope.constructUndirectedGraph = function(graphArray) {
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
    /*
    $scope.flattenUndirectedGraph = function(graphNode) {
        var res = [];
        if (graphNode === null || graphNode === undefined) {
            return res;
        }
        var queue = [];
        var map = {};
        var cur = graphNode;
        queue.push(cur);
        while (queue.length > 0) {
            cur = queue.shift();
            if (Number.isInteger(cur.label) && !map.hasOwnProperty(cur.label)) {

                if (Array.isArray(cur.neighbors)) {

                    for (var i = 0; i < cur.neighbors.length; i++) {
                        if () {

                        }
                    }
                }
            }
        }

    }
    */

    $scope.flattenUndirectedGraph = function (graphNode) {
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
        while (res.length>0 && res[res.length-1]=== "#") {
            res.pop();
        }

        return res;

    };

    $scope.flattenUndirectedGraphText = 'function flattenUndirectedGraph(graphNode) {'+
        'var res = [];'+
        'if (graphNode === null || graphNode === undefined)'+
            '{return res;}'+
        'var queue = [];'+
        'var map = {};'+
        'var cur = graphNode;'+
        'queue.push(cur);'+
        'while (queue.length > 0) {'+
            'cur = queue.shift();'+
            'if (Number.isInteger(cur.label) && !map.hasOwnProperty(cur.label)) {'+
                'map[cur.label] = cur;'+
                'if (Array.isArray(cur.neighbors)) {'+
                    'for (var i = 0; i < cur.neighbors.length; i++) {'+
                        'queue.push(cur.neighbors[i]);'+
                    '}'+
                '}'+
            '}'+
        '}'+
        'var ordered = [];'+
        'for (var k in map) {'+
            'if (map.hasOwnProperty(k)) {'+
                'ordered.push(map[k]);'+
            '}'+
        '}'+
        'ordered.sort(function (a,b) {'+
            'return a.label - b.label;'+
        '});'+
        'for (var j = 0; j < ordered.length; j++) {'+
            'if (j==0)'+
                '{res.push(ordered[j].label);}'+
            'if (Array.isArray(ordered[j].neighbors)) {'+
                'var count = 0;'+
                'for (var k =0; k < ordered[j].neighbors.length; k++) {'+
                    'if (ordered[j].neighbors[k].label >= ordered[j].label) {'+
                        'if(count === 0 && j>0)'+
                            '{res.push(ordered[j].label);}'+
                        'res.push(ordered[j].neighbors[k].label);'+
                        'count++;'+
                    '}'+
                '}'+
                'if (count>0 || j===0)'+
                    '{res.push("#");}'+
            '}'+

        '}'+
        'while (res.length>0 && res[res.length-1]=== "#") {'+
            'res.pop();'+
        '}'+

        'return res;'+

    '};';


    $scope.compareGraph = function() {

    };

    $scope.compareTwoUndirectedGraph = function compareTwoUndirectedGraph (graphOne, graphTwo) {
        if ((graphOne === undefined || graphOne === null) && (graphTwo!==undefined && graphTwo!==null))
            return false;
        if ((graphOne === undefined || graphOne === null) && (graphTwo=== undefined || graphTwo === null))
            return true;
        if ((graphOne !== undefined && graphOne !== null) && (graphTwo===undefined || graphTwo===null ))
            return false;
        if (graphOne === graphTwo)
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
            console.log(curOne);
            console.log(curTwo);
            if ((curOne === undefined || curOne === null) && (curTwo!==undefined && curTwo!==null))
                return false;
            if ((curOne !== undefined && curOne !== null) && (curTwo===undefined || curTwo===null ))
                return false;
            if (curOne === curTwo)
                return false;
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
    };
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

    $scope.isBalancedBSTText = 'function maxDepth (root) {'+
        'if (root === null || root === undefined)'+
            'return 0;'+
        'return 1+Math.max(maxDepth(root.left), maxDepth(root.right));'+
    '}'+

    'function minDepth (root) {'+
        'if (root === null || root === undefined)'+
            'return 0;'+
        'return 1+Math.min(minDepth(root.left)+minDepth(root.right));'+
    '}'+

    'function isSelfBalancing (root) {'+
        'return (maxDepth(root)-minDepth(root)<=1)'+
    '}';

    $scope.inorderTraversalText = 'function inorderTraversal (root) {'+
        'var res = [];'+
        'if (root === null || root === undefined)'+
            'return res;'+
        'var stack = [];'+
        'while ((root!==null && root!==undefined) || stack.length>0) {'+
            'if (root!== null && root!==undefined) {'+
                'stack.push(root);'+
                'root = root.left;'+
            '} else {'+
                'root = stack.pop();'+
                'res.push(root.val);'+
                'root = root.right;'+
            '}'+
        '}'+
        'return res;'+
    '}';

    $scope.compareTwoUndirectedGraphText = 'function orderNeighbors(a,b) {'+
        'return a.label- b.label;'+
    '}'+
    'function compareTwoUndirectedGraph (graphOne, graphTwo) {'+
        'if ((graphOne === undefined || graphOne === null) && (graphTwo!==undefined && graphTwo!==null))'+
            'return false;'+
        'if ((graphOne === undefined || graphOne === null) && (graphTwo=== undefined || graphTwo === null))'+
            'return true;'+
        'if ((graphOne !== undefined && graphOne !== null) && (graphTwo===undefined || graphTwo===null ))'+
            'return false;'+

        'var curOne = graphOne;'+
        'var curTwo = graphTwo;'+
        'var map1 = {}, map2= {};'+
        'var queue1 = [], queue2 = [];'+
        'queue1.push(curOne);'+
        'queue2.push(curTwo);'+
        'while (queue1.length > 0) {'+
            'var curOne = queue1.shift();'+
            'var curTwo = queue2.shift();'+
            'console.log(curOne);'+
            'console.log(curTwo);'+
            'if ((curOne === undefined || curOne === null) && (curTwo!==undefined && curTwo!==null))'+
                'return false;'+
            'console.log("p1");'+
            'if ((curOne !== undefined && curOne !== null) && (curTwo===undefined || curTwo===null ))'+
                'return false;'+
            'console.log("p2");'+
            'if (curOne == curTwo)'+
                'return "Node with label "+ curOne.label + " was not copied but a reference to the original one.";'+
            'console.log("win?");'+
            'if ((curOne === undefined || curOne === null) && (curTwo=== undefined || curTwo === null)) {'+

            '} else {'+
                'console.log(curOne.label); console.log(curTwo.label);'+
                'if (curOne.label!== curTwo.label)'+
                    'return false;'+
                    'console.log("p3");'+
                //console.log("pp");
                'if (!map1.hasOwnProperty(curOne.label)) {'+
                    'map1[curOne.label] = curOne;'+
                    'if (!Array.isArray(curTwo.neighbors)|| curOne.neighbors.length !== curTwo.neighbors.length)'+
                        'return false;'+
                    //console.log("pp");
                    'curOne.neighbors.sort(orderNeighbors);'+
                    'curTwo.neighbors.sort(orderNeighbors);'+
                    'for (var i = 0; i < curOne.neighbors.length; i++ ) {'+
                        'queue1.push(curOne.neighbors[i]);'+
                        'queue2.push(curTwo.neighbors[i]);'+
                    '}'+
                '} else {'+
                    'if (curOne.label !== curTwo.label)'+
                        'return false;'+
                '}'+
            '}'+
        '}'+
        'console.log("pass");return true;'+
    '};'

});