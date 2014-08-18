var express = require('express');
var router = express.Router();
var account = require('../src/Account.js');
var record = new account; 
/* GET home page. */

router.get('/', function(req, res) {
 res.render('index');
});

router.get('/viewBalance', function(req, res) { 
	res.render('viewBalance', {balance: record.balance });
});

router.post('/transaction', function(req, res) { 
	if (req.body.pin == record['pin']){
	if (req.body.deposit) {
					deposit = req.body.deposit || 0; 
					record.depositFunds(deposit);
					}
	if (req.body.withdraw) {
					withdraw = req.body.withdraw || 0;
					record.withdrawFunds(withdraw);
					};
	res.render('viewBalance', {balance: record['balance'] });
	}
	else 
	res.redirect('back');
});

router.post('/setPin', function(req, res) { 
	record['pin'] = req.body.pin;
	res.redirect('back');  
}); 
module.exports = router;
