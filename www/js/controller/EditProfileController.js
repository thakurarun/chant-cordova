angular.module('ionicApp')
.controller('EditProfileCtrl', ['$rootScope', '$scope', '$ionicSlideBoxDelegate','UserService', function ($rootScope, $scope, $ionicSlideBoxDelegate, UserService) {
    console.log("Edit profile ctrl called...");
    var Profile = UserService.getData() ;
    $rootScope.$broadcast("changeHeaderText", { index: 0 });
    $scope.slideHasChanged = function (index) {
        $rootScope.$broadcast("changeHeaderText", { index: index });
        $ionicSlideBoxDelegate.update();
        };
        $scope.CheckInfo = function () {
            UserService.saveData($scope.Profile, function (err, data) {
                if (!!!err) { 
                    console.log(JSON.stringify(data));
                }
            });
    };
    $scope.Profile = Profile;
}]);


