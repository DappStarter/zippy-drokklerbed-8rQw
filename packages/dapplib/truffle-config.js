require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture stone decrease sad hope hockey clog obtain skate'; 
let testAccounts = [
"0x3019debf4f392028a5a8c5d8a7c5f443ea8902217bc40bcfe4eecba65a05fa3f",
"0x68ec23d9b2fbc3fe001f499f86fb6130787e8f9bf07c4ab1accd2a41d440bf72",
"0xaf3f57b8a6c870bf272e19fa3d069ccaf1e3d6cc1e634695070835537170cafd",
"0xd38a592f1760849e828c1a41d98d1d313e1553fa1427ebcc8fb754b1b32231a8",
"0xb504ddc337fe8a0a8a830d81460b39b223a643dfe4f6377f35ba83f4383a1035",
"0x3970a1a8c83a72bbef7f3c14e4c024f71922fded33e1c3cf6fb72bcb28281f75",
"0xcb6c3907757715e93b0080eaf1d825d0c5f27531c22e416c1315704a97658999",
"0xac5587edf9b68caed3e071eb7e3e22a7697265f2bdeb8dcd55fcb308f26c990d",
"0xe0952befd59958e96d1fdeee101c476fcf88cffd25a0a691d9786a0b018f0a67",
"0xfa27c526195390d43818432f44fbc517eb59b327279af4f5eb33c8478722aa86"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

