var appModule = angular.module('app');

function TagsListController() {
    var vm = this;
}

appModule.component('tagsList', {
    templateUrl: '/features/components/tagsList.html',
    controller: TagsListController,
    bindings: {
        tags: '<'
    }
})