var appModule = angular.module('app');

appModule.factory('NewsDataService', function ($http) {
    return {
        getNews: function () {
            return $http.get('/news.json');
        }
    }
})