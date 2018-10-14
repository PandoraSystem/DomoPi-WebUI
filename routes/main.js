
// MAIN ROUTES FILE
const routes = function(app) {
	app.get('/', function (req, res) {
  		res.send('Hello World!');
	});
}
// Exporting module
module.exports = routes