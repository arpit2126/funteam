angular.module('funteam', ['ui.router']);

angular.module('funteam').config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '../home.html'
        })
        
        // event PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('event', {
            url: '/event',
            templateUrl: '../event.html'       
         })

         // gallery PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('gallery', {
           url: '/gallery',
            templateUrl: '../gallery.html'       
        })

         // contactUs PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('contactUs', {
            url: '/contactUs',
            templateUrl: '../contactUs.html'      
        });
        
});

angular.module('funteam').controller('funteamController', funteamController);

function funteamController(){
    var vm = this;
    vm.isActive = false;
    vm.openDrawer = function(){
        vm.isActive = (!vm.isActive);
    };
}




