function Account(balance) {
	this.balance = balance || 0;
	this.pin = '1234';
};

Account.prototype.setPin = function(pin) {
	return this.pin = pin;				
};

Account.prototype.depositFunds = function(amount) {
	 var cache = this.balance;
	 this.balance += parseInt(amount);				
	 if (isNaN(this.balance)){ 
			this.balance = cache;
	 }
};

Account.prototype.withdrawFunds = function(amount) { 
	 var cache = this.balance;
	 this.balance -= parseInt(amount);
	 if (isNaN(this.balance)){
			this.balance = cache;
	 }
};

module.exports = Account;
