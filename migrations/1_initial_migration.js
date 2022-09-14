const Migrations = artifacts.require("./Migrations.sol");
const Ownable = artifacts.require("./Ownable.sol");
const SafeMath = artifacts.require("./SafeMath.sol");
const Token = artifacts.require("./Token.sol");

module.exports = function (deployer) {
    deployer.deploy(Migrations);
    deployer.deploy(Ownable);
    deployer.deploy(SafeMath);
    deployer.deploy(Token, 10000000, "BASE", "BASE Token", 8);
};
