angular.module('ionicApp', ['ionic'])
.controller('EditProfileCtrl', function ($scope) {
    var Profile = {};
    $scope.CheckInfo = function () { 
        console.log($scope.Profile.BriefHistory );
    };
    $scope.Profile = Profile;
});


