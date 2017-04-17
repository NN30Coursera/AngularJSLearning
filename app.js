(function () {

angular.module('myFirstApp',[])

.controller('myFirstController',function ($scope) {

$scope.name = "Nitish";
$scope.sayMyHello = function (){
return "NN says hello to Coursera";
};
});

})();
