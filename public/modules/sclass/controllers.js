'use strict';

angular.module('sclass')

.controller('sclassController',['$scope','$http','$location','AuthenticationService',function ($scope,$http,$location,AuthenticationService) {
	/*$scope.teachers = [
		{'name' : 'Teacher one','id':1},
		{'name' : 'Teacher Two','id':2},
		{'name' : 'Teacher Three',id:3}
	];

	$scope.classes = [
		{'name' : 'Class one','id':1},
		{'name' : 'Class Two','id':2},
		{'name' : 'Class Three',id:3}
	];*/
	var GetDetails = AuthenticationService.GetDetails();
	$http.get('/getteachers').success(function(resteacher){
        $scope.teachers = resteacher;
    })

    $http.get('/getclasses').success(function(resclass){
        $scope.classes = resclass;
    })	
	
	$scope.assignTeacher = function () {
		$http.post('/sclass',{teacher_id : $scope.teacher_id,class_id :$scope.class_id}).success(function(response){
               $scope.info = 'Teacher Assigned';
        })
	};

	$scope.addClass = function () {
		$http.post('/addClass',{class_name : $scope.class_name}).success(function(response){//console.log(response)
               $scope.info = 'CLass Added';
        })
	};

	$scope.addBook = function () {
		$http.post('/addbook',{book_name : $scope.book_name}).success(function(response){//console.log(response)
               $scope.info = 'Book Added';
        })
	};

	if(GetDetails.currentUser.username!=null || GetDetails.currentUser.username!=''){
		$http.post('/viewclass',{}).success(function(listteacherdata){console.log(listteacherdata)
	       $scope.listteacher = listteacherdata;
		})
	}
	if(GetDetails.currentUser.username!=null || GetDetails.currentUser.username!=''){
		$http.post('/listclass',{}).success(function(listclassdata){
	       $scope.listclassdata = listclassdata;
		})
	}
	if(GetDetails.currentUser.username!=null || GetDetails.currentUser.username!=''){
		$http.post('/listbooks',{}).success(function(listbookdata){
	       $scope.listbookdata = listbookdata;
		})
	}
	
}]);