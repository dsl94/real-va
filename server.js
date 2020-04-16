// const express = require('express');
// const serveStatic = require('serve-static');
// const path = require('path');

// const app = express();

// app.use('/', serveStatic(path.join(__dirname, '/dist')));

// const port = process.env.PORT || 8080;
// app.listen(port);

// console.log("Listening to port "  + port);
const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
// const serveStatic = require('serve-static');

const app = express();

const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});