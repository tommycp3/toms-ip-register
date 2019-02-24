pragma solidity ^0.4.19;

contract StoreIPHash {
  string constant _ipHash = "hash.js.zip 12c443d131a13f715d89126bbec97a11";
  function  getIPHash() public returns(string) {
    return _ipHash;
  }

}