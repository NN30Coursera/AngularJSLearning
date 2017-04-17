(function(){
'use strict';

angular.module('counterApp',[])
.controller('counterController',counterController);


counterController.$inject = ['$scope','$timeout'];

function counterController($scope,$timeout){
$scope.normalCounter = 0;
$scope.upCounter = 0;
$scope.checkUpCounterPartTwo = 0;

  $scope.numberOfWatchers = function (){
      console.log("# of Watchers : ",$scope.$$watchersCount);
  };

  $scope.checkNormalCounter = function(){
    $scope.normalCounter = 1;
  };

  $scope.checkUpCounter = function(){
    $scope.upCounter++;
  };

  $scope.$watch('normalCounter',function(newvalue,oldvalue){
    console.log("First Counter oldvalue : ", oldvalue);
    console.log("First Counter newvalue : ",newvalue);
  });

  $scope.$watch('upCounter',function(newvalue,oldvalue){
    console.log("Second Counter oldvalue : ", oldvalue);
    console.log("Second Counter newvalue : ",newvalue);
  });

  $scope.upCounterPartTwo = function(){
      // $scope.checkUpCounterPartTwo ++;
      // console.log("Counter incremented!");
      // setTimeout(function(){
      //   $scope.checkUpCounterPartTwo ++;
      //   console.log("Counter incremented!");
      //   $scope.$digest();
      // },2000);

      $timeout(function () {
        $scope.checkUpCounterPartTwo ++;
        console.log("Counter incremented!");
      }, 2000);

  };


}
})();
