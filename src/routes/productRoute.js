'use strict';

module.exports = function(app) {
	var todoList = require('../controllers/product');
	const jwt = require('../middleware/jwt');

	app.route('/').get(todoList.Index);
	app.route('/products').get(todoList.getAllProducts);
	app.route('/products/:id').get(todoList.findProducts);
	app.route('/products').post(todoList.createProducts);
	app.route('/products/quantity/:act/:value/:id').patch(todoList.addReduce);
	app.route('/products/:id').put(todoList.updateProducts);
	app.route('/products/:id').delete(todoList.deleteProducts);
};
