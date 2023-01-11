// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

contract Whitelist {
    // 0xAf94fEb3b09d1b4d3755cb30133f6ff998AA135d
    error Alreadywhitelisted(address addr);

    //@dev set a max number of whitelisted addresses allowed
    uint8 public maxWhitelistedAddresses;
    //@notice how many addresses have been whitelisted already?
    uint8 public numAddressesWhitelisted;

    //@notice whitelistedAddresses mapping, set to true for whitelisted addresses
    mapping(address => bool) public whitelistedAddresses;
    

    constructor(uint8 _maxWhitelistedAddresses){
        maxWhitelistedAddresses = _maxWhitelistedAddresses;
    }

    /**
     * @notice addAddressToWhitelist() add the address of the sender to whitelist
     */

    function  addAddressToWhitelist() public {
         if(!whitelistedAddresses[msg.sender]){
            revert Alreadywhitelisted(msg.sender);
         }
         require(numAddressesWhitelisted < maxWhitelistedAddresses, "Whitelist spots sold out !");
         whitelistedAddresses[msg.sender] = true;
         numAddressesWhitelisted +=1;
    }
}