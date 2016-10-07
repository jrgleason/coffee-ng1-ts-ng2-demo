
{ upgradeAdapter, NgAppComponent } = require '../ng2/upgrade.adapter.ts';
(->


  module = angular.module 'simpleApp', []
  angular.element(document).ready ->
    upgradeAdapter.bootstrap(document.body, ['simpleApp']);
    module.directive 'jgType',  NgAppComponent

  module.directive 'jgCoffee', -> {
    scope: {},
    template: String(require('./demo.html'))
  }
)()