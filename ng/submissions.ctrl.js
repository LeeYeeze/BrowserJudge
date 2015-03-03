angular.module('app').controller('SubmissionsController',function ($scope,$http) {
    var self = this;
    $http.get('/api/submissions').success(function (submissions) {
        $scope.submissions = submissions;

    })

})