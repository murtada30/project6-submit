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


  //deployer.deploy(FarmerRole, {from: "0xA910A4d5d23D4afe71bDa78Cf46CaF0C7b979b8e"});
  //deployer.deploy(DistributorRole, {from: "0xA910A4d5d23D4afe71bDa78Cf46CaF0C7b979b8e"});
  //deployer.deploy(RetailerRole, {from: "0xA910A4d5d23D4afe71bDa78Cf46CaF0C7b979b8e"});
  //deployer.deploy(ConsumerRole, {from: "0xA910A4d5d23D4afe71bDa78Cf46CaF0C7b979b8e"});
  //deployer.deploy(SupplyChain, {from: "0xA910A4d5d23D4afe71bDa78Cf46CaF0C7b979b8e"});

  //deployer.deploy(FarmerRole,{from: accounts[3]});
  //deployer.deploy(DistributorRole,{from: accounts[3]});
  //deployer.deploy(RetailerRole,{from: accounts[3]});
  //deployer.deploy(ConsumerRole,{from: accounts[3]});
  //deployer.deploy(SupplyChain,{from: accounts[3]});
};
