app.controller("mainController", function($scope, $http){

    $scope.apiKey = "1e20f306004e9fda7adff716375f1fba";
    $scope.results = [];
    $scope.init = function() {
        var today = new Date();
        var apiDate = today.getFullYear() + ("0" + (today.getMonth() + 1)).slice(-2) + "" + ("0" + today.getDate()).slice(-2);
        $http.jsonp('http://api.trakt.tv/calendar/premieres.json/' + $scope.apiKey + '/' + apiDate + '/' + 5 + '/?callback=JSON_CALLBACK').success(function(data) {

            angular.forEach(data, function(value, index){
                var date = value.date;
                angular.forEach(value.episodes, function(tvshow, index){
                    tvshow.date = date;
                    $scope.results.push(tvshow);
                });
            });
        }).error(function(error) {

        });
    };
});