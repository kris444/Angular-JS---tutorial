var appModule = angular.module('app');

function RatingController() {
    var vm = this;
    vm.$onChanges = function () {
       vm.ratings = new Array(vm.rating);
    }
}

appModule.component('ratingDisplay', {
    templateUrl: '/features/components/rating.html',
    controller: RatingController,
    bindings: {
        rating: '<',
        onRatingup: '&',
        onRatingdown: '&'
    }
})