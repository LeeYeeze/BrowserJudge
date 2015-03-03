angular.module('app').controller('ProblemCtrl', function($scope,$routeParams,$http,$sce) {

    $scope.problem = $routeParams.problem;
    $scope.preCode = 'function Solution() {};';
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
'\n})';

    $scope.compare = 'Array.prototype.equals = function (array) {'+
        // if the other array is a falsy value, return
        'if (!array)'+
            'return false;'+

        // compare lengths - can save a lot of time
        'if (this.length != array.length)'+
            'return false;'+

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
    '}';

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

    $scope.___compareObjects___ = function ___compareObjects___ (object1, object2) {
        var i, l, leftChain, rightChain;
        function compare2Objects (x,y) {
            var p;

            if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
                return true;
            }

            if (x === y) {
                return true;
            }

            if ((typeof x === 'function' && typeof y === 'function') ||
                (x instanceof Date && y instanceof Date) ||
                (x instanceof RegExp && y instanceof RegExp) ||
                (x instanceof String && y instanceof String) ||
                (x instanceof  Number && y instanceof Number)) {
                return x.toString() === y.toString();

            }

            if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
                return false;
            }

            if (x.constructor !== y.constructor) {
                return false;
            }

            if (x.prototype !== y.prototype) {
                return false;
            }

            if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
                return false;
            }

            for (p in y) {
                if (y.hasOwnProperty(p)!== x.hasOwnProperty(p)) {
                    return false;
                }
                else if (typeof y[p] !== typeof x[p]) {
                    return false;
                }
            }

            for (p in x) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                }
                else if (typeof y[p] !== typeof x[p]) {
                    return false;
                }

                switch (typeof (x[p])) {
                    case 'object':
                    case 'function':

                        leftChain.push(x);
                        rightChain.push(y);

                        if (!compare2Objects (x[p], y[p])) {
                            return false;
                        }

                        leftChain.pop();
                        rightChain.pop();
                        break;

                    default:
                        if (x[p] !== y[p]) {
                            return false;
                        }
                        break;
                }
            }

            return true;


        }

        if (arguments.length < 1) {
            return true; //Die silently? Don't know how to handle such case, please help...
            // throw "Need two or more arguments to compare";
        }

        for (i = 1, l = arguments.length; i < l; i++) {

            leftChain = []; //Todo: this can be cached
            rightChain = [];

            if (!compare2Objects(arguments[0], arguments[i])) {
                return false;
            }
        }

        return true;
    }

    $scope.flag = true;


    $scope.aceLoaded = function (_editor) {
        $scope.editorEmbed = _editor
        var _session = _editor.getSession()
        var _renderer = _editor.renderer
        $scope.editorEmbed.setFontSize('16px')

    }

    $http.get('/api/problems/'+$scope.problem).success(function (res) {
        console.log(res);
        $scope.aceInitial = res.snippet.slice(0,res.snippet.length);
        $scope.functionName = res.functionName;
        $scope.params = res.parameters;
        $scope.flag = false;
    })





    /*
    $http.get("/api/problems/"+$scope.problem).success(function(discription) {
        $scope.insertHtml = discription;
        console.log(discription)

    })

    $scope.renderHtml = function(html_code) {
        return $sce.trustAsHtml(html_code)
    }

    */



    $scope.codeSubmission = function () {
    	//console.log($scope.editorEmbed.getValue());
    	//eval($scope.editorEmbed.getValue());
    	
    	var oldScript = document.getElementById('scriptContainer');
    	
    	var newScript;

    	if (oldScript) {
    		oldScript.parentNode.removeChild(oldScript)
    	}

    	newScript = document.createElement('script')
    	newScript.id = 'scriptContainer'
    	newScript.text = $scope.editorEmbed.getValue()+";console.log("+$scope.flag+")"

    	document.getElementsByClassName('container')[0].appendChild(newScript)
    	
    	
    }

    $scope.pureCodeSubmission = function () {
        var code = $scope.aceInitial;
        CodeSvc.create(code);

    }

    $scope.codeSubmissionWithWebWorker = function () {
        $http.get('/api/tests/'+$scope.problem.toLowerCase()).success(function (response) {
            //console.log(JSON.parse(response.content));
            console.log(response.content);
            var preCode = $scope.preCode;
            var postCode = '';
            var code = 'var testCases = '+JSON.stringify(response.content)+';function Solution() {};'+$scope.aceInitial+$scope.postCode2;
            console.log(code)
            var blob = new Blob([code]);
            var blobURL = window.URL.createObjectURL(blob);
            var worker = new Worker(blobURL);
            worker.onmessage = function(e) {
                console.log(e.data);
            }
            worker.onerror = function (e) {
                console.log(e.message);

            }

        })

    }

    $scope.codeSubmissionWithWebWorker2 = function () {
        var parenthesesParams = '('
        var params = ''
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
            var postCode = '\nfor (var i = 0; i < testCases.length; i++) {'+
                '\n\tvar solution = new Solution();'+
                '\n\tvar answer = solution.'+$scope.functionName+parenthesesParams+';'+
                '\n\tif (answer.equals(testCases[i].output) == false) {'+
                '\n\t\tvar report = {status:"Incorrect Answer", should:testCases[i].output, wrongAnswer: answer};'+
                '\n\t\tself.postMessage(report);'+
                '\n\t\tself.close();'+
                '\n\t\tbreak;'+
                '\n\t}'+
                '\n\t}'+
                '\nif (i==testCases.length){self.postMessage({status:"Accepted"})};';
            var preCode = 'var testCases = '+JSON.stringify(response.content)+';function Solution() {};';
            var  code = preCode + $scope.aceInitial + '\n'+$scope.compare + postCode;
            var blob = new Blob([code]);
            var blobURL = window.URL.createObjectURL(blob);
            var worker = new Worker(blobURL);
            worker.onmessage = function (e) {
                console.log(e.data);
            }
            worker.onerror = function (e) {
                console.log(e.message);
            }

        })
    }

    $scope.codeSubmissionWithWebWorker3 = function () {
        var parenthesesParams = '('
        var params = ''
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
        $http.get('/api/tests/'+$scope.problem.toLowerCase()).success(function (response) {
            var postCode = '\nself.addEventListener("message", function(e) {'+
                '\nvar data = e.data;'+
                '\nswitch (data.cmd) {'+
                '\ncase "start":'+
                '\nfor (var i = 0; i < data.testCases.length; i++) {'+
                '\nvar solution = new Solution();'+
                '\nvar answer = solution.'+$scope.functionName+parenthesesParams+';'+
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
                '\n})';
            var code = $scope.aceInitial + postCode;
            var blob = new Blob([code]);
            var blobURL = window.URL.createObjectURL(blob);
            var worker = new Worker(bloubURL);
            worker.onmessage = function (e) {

            }
            worker.onerror = function (e) {

            }

            worker.postMessage({'cmd':'start','testCases':response.content})



        })
    }

    $scope.extractFunction = function () {

    }

    $scope.unitTest = function () {

    }

    $scope.run = function () {
    	
    }

    $scope.purify = function () {

    }

    $scope.constructLinkedList = function (rawData) {
        var head = undefined;
        for (var i = rawData.length-1; i>=0; i--) {
            var newNode = {val: rawData[i], next: head};
            head = newNode;

        }
        return head;
    }

    $scope.constructTree = function (rawData) {
        var root = undefined;
        var queue = [];
        for (var i = 0; i< rawData.length; i++) {

        }
        return root;


    }

})