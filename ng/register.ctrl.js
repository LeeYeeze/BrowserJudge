angular.module('app').controller('RegisterCtrl', function($scope, UserSvc) {
    $scope.availableFlag = true
    $scope.register = function (username, password) {
        var response = UserSvc.register(username,password)
        if (response) {
            response.then(function (user) {
                if (user===true) {
                    $scope.availableFlag = false
                }
                else {
                    $scope.availableFlag = true
                    $scope.$emit('login',user)
                }

            })
        }


    }
})