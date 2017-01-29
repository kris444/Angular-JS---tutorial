var appModule = angular.module('app');

function NewsListController(NewsDataService) {
    var vm = this;
    vm.news = [];

    loadNews();
    function loadNews() {
        NewsDataService.getNews()
            .success(onNewsDataLoaded)
            .error(function (e) { console.log(e); })
    }

    function onNewsDataLoaded(data) {
        vm.news = data;
    }

    vm.upRating = function (id) {
        var newsItem = vm.news[id - 1];
        if (newsItem.rating < 5) {
            newsItem.rating = newsItem.rating + 1;
        }
    }

    vm.downRating = function (id) {
        var newsItem = vm.news[id - 1];
        if (newsItem.rating > 0) {
            newsItem.rating = newsItem.rating - 1;
        }
    }
}

appModule.component('newsList', {
    templateUrl: '/features/components/newsList.html',
    controller: NewsListController
})