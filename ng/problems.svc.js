angular.module('app').service('ProbsSvc', function ($http) {
    this.fetch = function () {
        return $http.get('/api/problems');
    }
})

