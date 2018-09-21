var myApp = angular.module("myApp");
myApp.controller("GenreController", [
    "$scope",
    "$http",
    "$location",
    "$routeParams",
    function ($scope, $http, $location, $routeParams) {
        console.log("Genre controller loaded");
        $scope.getGenres = function () {
            $http.get("/api/genres").then(function (response) {
                $scope.genres = response.data;

            });
        }
    }
]);