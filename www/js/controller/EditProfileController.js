angular.module('ionicApp')
.controller('EditProfileCtrl', ['$rootScope', '$scope', '$ionicSlideBoxDelegate', function ($rootScope, $scope, $ionicSlideBoxDelegate) {
    console.log("Edit profile ctrl called...");
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


