(->
  module = angular.module 'simpleApp', []
  module.directive 'jgCoffee', -> {
    scope: {},
    template: String(require('./demo.html'))
  }
)()