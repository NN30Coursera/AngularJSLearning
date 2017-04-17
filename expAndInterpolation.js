(function (){
'use strict';

angular.module('MsgApp',[])
.controller('MsgController',MsgController);

MsgController.$inject = ['$scope','$filter'];
function MsgController($scope,$filter){
  $scope.name = "Nitish";
  $scope.stateOfYaakov = "hungry";
  $scope.cookieCost = .50;

  $scope.sayMessage = function (){
    var msg = "Yaakov likes to eat Cookies!";
    var output = $filter('uppercase')(msg);
    return output;
  };

  $scope.feedYaakov = function (){
    $scope.stateOfYaakov = "fed";
  };
};


})();
