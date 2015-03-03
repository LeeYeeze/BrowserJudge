angular.module('app').service('SubmissionsSvc' , function ($http) {

    var self = this;

    this.getSubmissions = function () {
        $http.get('/api/submissions')
    }

    this.addSubmission = function (code) {
        $http.post('/api/submissions', code)
    }

    this.getSubmissionHistory = function (problem) {
        $http.post('/api/submissionhistory',problem)
    }

    this.getSingleSubmission = function (submissionInfo) {
        $http.post('/api/submissionDetail',submissionInfo)
    }

})