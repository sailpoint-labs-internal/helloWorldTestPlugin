(function () {
    'use strict';

    angular.module('sailpoint.plugin.pluginInstallerPlugin')
        .controller('CustomSettingsCtrl', function ($scope) {
            $scope.getCustomMessage = function () {
                return 'this is a custom message';
            };
        })
})();