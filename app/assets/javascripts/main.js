var app = angular.module("module_financeiro", [])

app.controller('calculadora_financeiro',function($scope){

	$scope.result_month_for_year = function(percentage){
		

		$scope.result_monthtoyear = (Math.pow(1+(percentage/100), 12)-1)*100;
	};

	$scope.result_year_for_month = function(percentage){
		
		$scope.result_yeartomonth = (Math.pow((1+(percentage/100)), 1/12)-1)*100;
	};

	$scope.result_year_for_days = function(percentage, days){
		
		$scope.result_yeartodays = (Math.pow((1+(percentage/100)), 1/days)-1)*100;
	};
})