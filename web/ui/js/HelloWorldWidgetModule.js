(function() {
    'use strict';

    angular.module('sailpoint.home.desktop')
        .constant('PLUGIN_ROOT_FOLDER_URL', PluginFramework.PluginFolderName)
        .controller('HelloWorldWidgetCtrl', function($scope, PLUGIN_ROOT_FOLDER_URL) {
            $scope.getWidgetMessage = function() {
              return "Hello Widget!"
            };
        })
        .directive('spHelloWorldWidget', function(PLUGIN_ROOT_FOLDER_URL) {
            return {
                restrict: 'E',
                scope: {
                    widget: '=spWidget'
                },
                controller: 'HelloWorldWidgetCtrl',
                controllerAs: 'widgetCtrl',
                bindToController: true,
                templateUrl: PLUGIN_ROOT_FOLDER_URL + '/HelloWorld/ui/htmlTemplates/widget/helloWorldWidget.jsf'
            };
        });
})();


