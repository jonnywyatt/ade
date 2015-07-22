// tests.webpack.js
var context = require.context('../app/ui/components', true, /-test\.jsx?$/);
context.keys().forEach(context);
