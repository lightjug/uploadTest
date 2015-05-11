
var myApp = angular.module('myApp',[]);

myApp.controller('TabController',function($scope){
    $scope.tabList = [
		{text:"メイン",userID:""}
		,{text:"タブ１",userID:"user1"}
		,{text:"タブ２",userID:"user2"}
		,{text:"タブ３",userID:"user3"}
	];
	$('#tabArea').sortable();
});

