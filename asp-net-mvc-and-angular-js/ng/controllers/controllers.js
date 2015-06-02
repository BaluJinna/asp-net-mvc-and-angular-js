var myControllers = angular.module('myControllers', []);

myControllers.controller('homeController', function ($scope) {
    //
});


myControllers.controller('usersController', function ($scope, $routeParams, $timeout, $location, usersAPI) {
    $scope.users;
    $scope.status;

    if ($routeParams.id) {
        getuser($routeParams.id);
    }
    else {
        getusers();
    }

    function getusers() {
        usersAPI.getusers()
            .success(function (users) {
                $scope.users = users;
            })
            .error(function (error) {
                showAlertInfo('Unable to load data');
            });
    }

    function getuser(id) {
        usersAPI.getuser(id)
            .success(function (user) {
                if (user)
                    $scope.user = user;
                else
                    $scope.user = { id: -1 };
            })
            .error(function (error) {
                showAlertInfo('Unable to load data');
            });
    }

    $scope.saveuser = function (contact) {
        showAlertInfo('Unable to save data ');
    };

    var showAlertInfo = function (message) {
        $scope.status = message;
        $scope.showAlertInfo = true;
        $timeout(function () {
            $scope.showAlertInfo = false;
            $scope.status = "";
            $location.path('/users');
        }, 1400);
    }
});
