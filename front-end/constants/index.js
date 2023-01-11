export const WHITELIST_CONTRACT_ADDRESS =
  "0xAf94fEb3b09d1b4d3755cb30133f6ff998AA135d";
export const abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_maxWhitelistedAddresses",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [{ internalType: "address", name: "addr", type: "address" }],
    name: "Alreadywhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "addAddressToWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxWhitelistedAddresses",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numAddressesWhitelisted",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "whitelistedAddresses",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
];
