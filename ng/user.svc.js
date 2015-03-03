angular.module('app').service('UserSvc', function ($http) {
    var svc = this;
    svc.getUser = function () {
        return $http.get('/api/users',{
            headers: {'X-Auth': svc.token}
        })
    }

    svc.login = function (username, password) {
        return $http.post('/api/sessions',{
            username:username, password:password
        }).then(function (val) {
                svc.token = val.data;
                $http.defaults.headers.common['X-Auth']= val.data
                return svc.getUser();
            })

    }
    svc.register = function (username, password) {
        return $http.post('/api/users', {
            username: username, password: password
        }).then(function (flag) {
                //console.log(flag)
                if (flag.data=="true") {
                    //console.log(used)
                    console.log('used')
                    return true;
                }else {
                    return svc.login(username, password)
                }

            })

    }
})