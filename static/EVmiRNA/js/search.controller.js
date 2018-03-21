"use strict";

angular.module('EVmiRNA')
	.controller('SearchController',SearchController);

function SearchController($scope,$http,$window,$routeParams,EVmiRNAService){
	console.log("SearchController loaded");
	var base_url = EVmiRNAService.getAPIBaseUrl();
	$scope.filter_id = function(){
		window.open(base_url+"#!miRNA_info?miRNA="+$scope.query_miRNA,"_self")
	};
}
