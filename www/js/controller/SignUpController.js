angular.module('ionicApp')
.controller('SignUpCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
        console.log("sign up ctrl called...");
        $scope.$state = $state;
        $scope.LoginToApp = function () {
            $state.go("editprofile");
        }
        $rootScope.$broadcast("changeHeaderText", { header: "Sign Up" });
    }]);