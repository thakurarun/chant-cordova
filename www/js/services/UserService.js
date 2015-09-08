angular.module('ionicApp')
.factory('UserService', function () {
    return {
        saveData : function (data, callback) {
            console.log(data);
            return callback(null, data);
        },
        getData : function (callback) {
            return JSON.parse('{ "FullName": "Arun Thakur", "NickName": "Arun", "BriefHistory": ".Net Developer", "ExpertInInstruments": "Guitar", "Experience": "lt10" }');
        }
    };
});