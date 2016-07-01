var GlimmerApp = require('experimental-glimmer-app');

module.exports = function(defaults) {
  var app = new GlimmerApp(defaults, { });

  return app.toTree();
};
