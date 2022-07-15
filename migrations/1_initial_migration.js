const Migrations = artifacts.require("UniswapV3Factory");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
