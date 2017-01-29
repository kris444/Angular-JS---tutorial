var appModule = angular.module('app');

appModule.controller('AboutController', function ($scope) {
    var vm = this;
    vm.message = "I am in about page";
})

