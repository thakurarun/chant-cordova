angular.module('ionicApp', ['ionic'])
.controller('EditProfileCtrl', ['$rootScope','$scope','$ionicSlideBoxDelegate', function ($rootScope, $scope, $ionicSlideBoxDelegate) {
    var Profile = {};
    $scope.slideHasChanged = function (index) {
        $rootScope.$broadcast("changeHeaderText", { index: index });
        $ionicSlideBoxDelegate.update();
    };
    $scope.CheckInfo = function () { 
        console.log($scope.Profile.BriefHistory );
    };
    $scope.Profile = Profile;
}]);


