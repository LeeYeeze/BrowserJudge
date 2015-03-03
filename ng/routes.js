angular.module('app').config(function ($routeProvider) {
    $routeProvider
        .when('/',{controller:'PostsCtrl', templateUrl:'posts.html'})
        .when('/register', {controller:'RegisterCtrl', templateUrl: 'register.html'})
        .when('/login',{controller:'LoginCtrl', templateUrl: 'login.html'})
        .when('/problems',{controller:'ProblemsCtrl', templateUrl:'problems.html'})
        //.when('/problems/:problem',{controller:'ProblemCtrl',templateUrl: )
        .when('/problems/:problem',{controller:'ProblemCtrl',templateUrl: function(params) {return params.problem+'.html'}})
        .when('/submissions',{controller:'SubmissionsController', templateUrl: 'submissions.html'})
        .when('/probs/:problem', {controller:'ProbController', templateUrl: 'problem.html'})
})