
angular.module('app').service('CodeSvc', function ($http) {
    var self = this;
    console.log($http.defaults.headers.common['X-Auth']);

    this.fetchSubmissions = function () {
        return $http.get('api/submissions', {headers:{'X-Auth':self.token}})

    }

    this.create = function (codeSubmission) {
        return $http.post('/api/submissions',codeSubmission)
    }
})
