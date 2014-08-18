describe('Account', function() {
	
	beforeEach(function(){
		account = new Account(1000);
	}); 

	it('instantiates an account', function() {
		expect(account['balance']).toEqual(1000);
		expect(account['pin']).toEqual('1234');
	});
	
	it('sets the pin', function() {
		account.setPin('6969');
		expect(account['pin']).toEqual('6969');
	});
	
	it('deposits money into an account', function(){
		account.depositFunds(500);
		expect(account['balance']).toEqual(1500);
	});	
	
	it('withdraws money from an account', function(){
		var account = new Account(1000); 
		account.withdrawFunds(500); 
		expect(account['balance']).toEqual(500);
	});
});
