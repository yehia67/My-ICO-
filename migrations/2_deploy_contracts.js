const YehiaCoin = artifacts.require('YehiaCoin');
const YehiaCoinCrowdsale = artifacts.require('YehiaCoinCrwodsale');

module.exports = function(deployer, network, accounts) {
    const openingTime = Math.round(new Date().getTime() / 1000) + 30; // two secs in the future
    const closingTime = openingTime + 86400 * 20; // 20 days
    const rate = web3.utils.BN;
    const wallet = accounts[1];
    var Address;
    deployer.deploy(YehiaCoin).then(function(data) {
        Address = data.address;
    });

    deployer.deploy(YehiaCoinCrowdsale, openingTime, closingTime, rate, wallet, Address);
};