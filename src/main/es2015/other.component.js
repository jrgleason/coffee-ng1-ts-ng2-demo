(function(app) {
  app.JSComponent =
    ng.core.Component({
      selector: 'my-es',
      template: '<h1>My First JS Angular App</h1>'
    }).Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));