// migrating the appropriate contracts
var FarmerRole = artifacts.require("./FarmerRole.sol");
var DistributorRole = artifacts.require("./DistributorRole.sol");
var RetailerRole = artifacts.require("./RetailerRole.sol");
var ConsumerRole = artifacts.require("./ConsumerRole.sol");
var SupplyChain = artifacts.require("./SupplyChain.sol");

module.exports = function(deployer) {
  deployer.deploy(FarmerRole);
  deployer.deploy(DistributorRole);
  deployer.deploy(RetailerRole);
  deployer.deploy(ConsumerRole);
  deployer.deploy(SupplyChain);

  //deployer.deploy(FarmerRole,{from: accounts[4]});
  //deployer.deploy(DistributorRole,{from: accounts[4]});
  //deployer.deploy(RetailerRole,{from: accounts[4]});
  //deployer.deploy(ConsumerRole,{from: accounts[4]});
  //deployer.deploy(SupplyChain,{from: accounts[4]});
};
