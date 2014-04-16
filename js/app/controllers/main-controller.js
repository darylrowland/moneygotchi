moneygotchiApp.controller('MainController', ['$scope', '$http', '$location',
    function MainController($scope, $http, $location) {
        var E_CODE = 69;
        var G_CODE = 71;
        var ANIMATION_DELAY = 800;
        var MAX_SCORE = 10;


        $scope.editing = false;


        $scope.healthScore = 5;
        $scope.moneyScore = 5;

        $scope.incrementHealthScore = function(by) {
            $scope.healthScore = $scope.healthScore + by;

            if ($scope.healthScore > MAX_SCORE) {
                $scope.healthScore = MAX_SCORE;
            } else if ($scope.healthScore < 0) {
                $scope.healthScore = 0;
            }
        }

        $scope.incrementMoneyScore = function(by) {
            $scope.moneyScore = $scope.moneyScore + by;

            if ($scope.moneyScore > MAX_SCORE) {
                $scope.moneyScore = MAX_SCORE;
            } else if ($scope.moneyScore < 0) {
                $scope.moneyScore = 0;
            }
        }

        $scope.getHealthRating = function() {
            var percentage = $scope.healthScore / MAX_SCORE;

            if (percentage <= 0) {
                return 0;
            } else if (percentage < 0.3) {
                return 1;
            } else if (percentage < 0.6) {
                return 2;
            } else {
                return 3;
            }

        }

        $scope.getMoneyRating = function() {
            var percentage = $scope.moneyScore / MAX_SCORE;

            if (percentage <= 0) {
                return 0;
            } else if (percentage < 0.3) {
                return 1;
            } else if (percentage < 0.6) {
                return 2;
            } else {
                return 3;
            }

        }


        $scope.healthRating = 2;
        $scope.moneyRating = 2;

        $scope.normalFace = [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false],[false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false],[false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,true,true,false,false,false,false,true,true,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,true,true,false,false,false,false,true,true,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,false,false,false,true,true,false,false,false,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,false,false,false,true,true,false,false,false,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,true,true,true,true,true,true,true,true,false,false,false,true,false,false,false],[false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false],[false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]];
        $scope.happyFace = [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false],[false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false],[false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,true,true,false,false,false,false,true,true,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,true,true,false,false,false,false,true,true,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,false,false,false,true,true,false,false,false,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,false,false,false,true,true,false,false,false,false,false,false,true,false,false,false],[false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false],[false,false,false,true,false,false,false,true,true,true,true,true,true,true,true,false,false,false,true,false,false,false],[false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false],[false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]];
        $scope.happyFaceEyes = [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false],[false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false],[false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,false,true,false,false,false,false,false,true,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,true,true,false,false,false,false,true,true,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,false,false,false,true,true,false,false,false,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,false,false,false,true,true,false,false,false,false,false,false,true,false,false,false],[false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false],[false,false,false,true,false,false,false,true,true,true,true,true,true,true,true,false,false,false,true,false,false,false],[false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false],[false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]];
        $scope.sadFace = [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false],[false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false],[false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,true,true,false,false,false,false,true,true,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,true,true,false,false,false,false,true,true,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,false,false,false,true,true,false,false,false,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,false,true,false,true,true,false,false,false,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false],[false,false,false,true,false,false,false,true,true,true,true,true,true,true,true,false,false,false,true,false,false,false],[false,false,false,false,true,false,false,true,false,false,false,false,false,false,true,false,false,true,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false],[false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]];

        // Savings
        $scope.savings1 = [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,true,true,true,false,false,false,false,false,false,true,true,true,false,false,false,false,false,false],[false,false,false,false,true,false,false,true,false,false,false,false,true,false,false,true,false,false,false,false,false,false],[false,false,false,false,true,false,false,false,true,true,true,true,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,false,true,false,true,false,false,false,false,true,false,true,false,false,false,false,false,true,false],[false,false,false,false,false,false,true,false,true,false,false,true,false,true,false,false,false,false,false,true,false,false],[false,false,false,false,false,false,true,false,false,true,true,false,false,true,false,false,false,false,true,false,false,false],[false,false,false,false,false,false,true,false,false,true,true,false,false,true,true,true,true,true,true,false,false,false],[false,false,false,false,false,false,true,false,false,false,false,false,false,true,false,false,false,false,true,false,false,false],[false,false,false,false,false,false,false,true,true,true,true,true,true,true,false,false,false,false,true,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]];
        $scope.savings2 = [[false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,true,true,true,false,false,false,false,false,false,true,true,true,false,false,false,false,false,false],[false,false,false,false,true,false,false,true,false,false,false,false,true,false,false,true,false,false,false,false,false,false],[false,false,false,false,true,false,false,false,true,true,true,true,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,false,true,false,true,false,false,false,false,true,false,true,false,false,false,false,false,true,false],[false,false,false,false,false,false,true,false,true,false,false,true,false,true,false,false,false,false,false,true,false,false],[false,false,false,false,false,false,true,false,false,true,true,false,false,true,false,false,false,false,true,false,false,false],[false,false,false,false,false,false,true,false,false,true,true,false,false,true,true,true,true,true,true,false,false,false],[false,false,false,false,false,false,true,false,false,false,false,false,false,true,false,false,false,false,true,false,false,false],[false,false,false,false,false,false,false,true,true,true,true,true,true,true,false,false,false,false,true,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]];
        $scope.savings3 = [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,true,true,true,false,false,false,false,false,false,true,true,true,false,false,false,false,false,false],[false,false,false,false,true,false,false,true,false,false,false,false,true,false,false,true,false,false,false,false,false,false],[false,false,false,false,true,false,false,false,true,true,true,true,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,false,true,false,true,false,false,false,false,true,false,true,false,false,false,false,false,true,false],[false,false,false,false,false,false,true,false,true,false,false,true,false,true,false,false,false,false,false,true,false,false],[false,false,false,false,false,false,true,false,false,true,true,false,false,true,false,false,false,false,true,false,false,false],[false,false,false,false,false,false,true,false,false,true,true,false,false,true,true,true,true,true,true,false,false,false],[false,false,false,false,false,false,true,false,false,false,false,false,false,true,false,false,false,false,true,false,false,false],[false,false,false,false,false,false,false,true,true,true,true,true,true,true,false,false,false,false,true,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]];
        $scope.savings4 = [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,true,true,true,false,true,false,false,true,false,true,true,true,false,false,false,false,false,false],[false,false,false,false,true,false,false,true,true,false,false,true,true,false,false,true,false,false,false,false,false,false],[false,false,false,false,true,false,false,false,true,true,true,true,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,false,true,false,true,false,false,false,false,true,false,true,false,false,false,false,false,true,false],[false,false,false,false,false,false,true,false,true,false,false,true,false,true,false,false,false,false,false,true,false,false],[false,false,false,false,false,false,true,false,false,true,true,false,false,true,false,false,false,false,true,false,false,false],[false,false,false,false,false,false,true,false,false,true,true,false,false,true,true,true,true,true,true,false,false,false],[false,false,false,false,false,false,true,false,false,false,false,false,false,true,false,false,false,false,true,false,false,false],[false,false,false,false,false,false,false,true,true,true,true,true,true,true,false,false,false,false,true,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]];

        // Coffee
        $scope.coffee1 = [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,false,false,false,false,false,false,false],[false,false,false,false,true,true,true,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,true,true,true,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,true,false,false,false,false,false,true,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,true,false,false,false,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,true,true,true,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]];
        $scope.coffee2 = [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,true,false,true,false,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,false,false,false,false,false,false,false],[false,false,false,false,true,true,true,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,true,true,true,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,true,false,false,false,false,false,true,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,true,false,false,false,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,true,true,true,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]];
        $scope.coffee3 = [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,true,false,true,false,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,true,false,true,false,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,false,false,false,false,false,false,false],[false,false,false,false,true,true,true,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,true,true,true,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,true,false,false,false,false,false,true,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,true,false,false,false,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,true,true,true,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]];
        $scope.coffee4 = [[false,false,false,false,false,false,false,false,true,false,true,false,true,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,true,false,true,false,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,true,false,true,false,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,false,false,false,false,false,false,false],[false,false,false,false,true,true,true,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,true,true,true,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,true,false,false,false,false,false,true,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,true,false,false,false,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,true,true,true,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]];

        // Apple
        $scope.apple1 = [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,true,false,false,true,false,false,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,true,false,true,false,true,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,true,true,true,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]];
        $scope.apple2 = [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,true,false,false,true,false,false,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,true,false,true,false,true,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,true,true,true,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false],[false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]];
        $scope.apple3 = [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,true,false,false,true,false,false,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,true,false,true,false,true,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,true,true,true,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,true,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,true,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,true,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,true,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]];
        $scope.apple4 = [[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]];

        $scope.lcdGrid = $scope.normalFace;

        $scope.animationStates = [];
        $scope.currentState = 0;
        $scope.timer = null;
        $scope.repeating = true;

        $scope.editing = false;

        $("body").on("keydown", function(e) {
            if (e.keyCode == E_CODE) {
                $scope.editing = true;
                $scope.timer = clearInterval($scope.timer);
                $scope.$apply();
            } else if (e.keyCode == G_CODE) {
                $scope.editing = true;
                $scope.timer = clearInterval($scope.timer);

                for (var y = 0; y < $scope.lcdGrid.length; y++) {
                    for (var x = 0; x < $scope.lcdGrid[y].length; x++) {
                        $scope.lcdGrid[y][x] = false;
                    }
                }


                $scope.$apply();
            }
        });

        $scope.toggleSquare = function(cellIndex, rowIndex) {
            $scope.lcdGrid[cellIndex][rowIndex] = !$scope.lcdGrid[cellIndex][rowIndex]

        }

        $scope.getGridStr = function() {
            return JSON.stringify($scope.lcdGrid);
        }

        $scope.nextState = function() {
            $scope.currentState ++;

            if ($scope.currentState >= $scope.animationStates.length && $scope.repeating) {
                $scope.currentState = 0;
            } else if($scope.currentState >= $scope.animationStates.length && !$scope.repeating) {
                console.log("Clearing timer");
                clearInterval($scope.timer);
                $scope.returnToNormalState();
                return;
            }

            $scope.lcdGrid = $scope.animationStates[$scope.currentState];


        }

        $scope.setTimer = function(states, repeating) {
            if ($scope.timer) {
                clearInterval($scope.timer);
            }

            $scope.currentState = 0;
            $scope.animationStates = states;
            $scope.lcdGrid = states[0];
            $scope.repeating = repeating;

            $scope.timer = setInterval(function() {
                $scope.nextState();
                $scope.$apply();
            }, ANIMATION_DELAY);

        }

        $scope.returnToNormalState = function() {
            if ($scope.healthScore < 2 || $scope.moneyScore < 2) {
                $scope.setTimer([$scope.normalFace, $scope.sadFace], true);
            } else {
                $scope.setTimer([$scope.happyFace, $scope.happyFaceEyes], true);
            }

        }

        $scope.saveMoney = function() {
            $scope.setTimer([$scope.savings1, $scope.savings2, $scope.savings3, $scope.savings4], false);
            $scope.incrementMoneyScore(1);
        }

        $scope.eatHealthy = function() {
            $scope.setTimer([$scope.apple1, $scope.apple2, $scope.apple3, $scope.apple4], false);
            $scope.incrementMoneyScore(-1);
            $scope.incrementHealthScore(1);

        }

        $scope.buyCoffee = function() {
            $scope.setTimer([$scope.coffee1, $scope.coffee2, $scope.coffee3, $scope.coffee4], false);
            $scope.incrementMoneyScore(-1);
            $scope.incrementHealthScore(-1);

        }

        // Launch default state
        $scope.returnToNormalState();


    }
]);