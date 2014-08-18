function Account(balance) {
	this.balance = balance || 0;
	this.pin = '1234';
};

Account.prototype.setPin = function(pin) {
	return this.pin = pin;				
};

Account.prototype.depositFunds = function(amount) {
	 this.balance += parseInt(amount);				
};

Account.prototype.withdrawFunds = function(amount) { 
	 this.balance -= parseInt(amount);
};
