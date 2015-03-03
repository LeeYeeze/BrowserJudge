angular.module('app').controller('ProblemsCtrl', function($scope,$http,$location, ProbsSvc) {
    ProbsSvc.fetch().success(function (problems) {
        $scope.problems = problems;
    })
    $scope.searchFlag = false;
    $scope.wholeTable = true;
    $scope.predicate = "";
    $scope.reverse = false;
    $scope.select = function () {
        //console.log($scope.searchKeywords);
        if ($scope.searchKeywords==="") {
            $scope.wholeTable = true;
            $scope.searchFlag = false;

        }
        else {
            var selected = [];
            $scope.wholeTable = false;
            $scope.searchFlag = true;
            for (var i = 0; i < $scope.problems.length; i++) {
                if ($scope.problems[i].name.toLowerCase().indexOf($scope.searchKeywords.toLowerCase())!=-1) {
                    selected.push($scope.problems[i]);
                }

            }
            $scope.selected = selected;
        }
    }

    $scope.printOut = function(o) {
        console.log(o);
    }

    $scope.getProblem = function (o) {
        $location.path('/')

    }


    $scope.sortBy = function (column) {
        if (column === 'difficulty')
            $scope.predicate = $scope.difficultyRank;
        else
            $scope.predicate = column;
        $scope.reverse = !$scope.reverse;
    }

    $scope.difficultyRank = function(problem) {
        if (problem.difficulty === 'Hard')
            return 3;
        else if (problem.difficulty === 'Medium')
            return 2;
        else
            return 1;
    }





})