var ProductSell = artifacts.require("../contracts/ProductSell.sol");

module.exports = function(deployer) {
  deployer.deploy(ProductSell, {gas: 4500000});
  // deployer.link(ProductSell);
};
