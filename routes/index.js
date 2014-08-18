var express = require('express');
var router = express.Router();
var account = require('../models/Account.js');
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
			record.depositFunds(req.body.deposit);
			record.withdrawFunds(req.body.withdraw);
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
