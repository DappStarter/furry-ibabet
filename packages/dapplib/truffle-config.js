require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture story raise machine erosion injury light army giggle'; 
let testAccounts = [
"0x30cd0af860b12f3c96e33a061b5ddec9cb3f368d4e13a4e56e527abd5cb3004e",
"0x05fa6dd4fab64844327547945aaabfcbe8646c03d925ccc79e5f06502088d970",
"0x639914ba8b3b5847d501a99e28a0b0d7e77103ad65ef7b1a122411718a0b5dd7",
"0x1e87480f5747fff783ffda0fdffd55b45c5cdcf7fc709ebef5e4eb297ffbc082",
"0x7cffc0db54c509e778f89aaeaff43929983faddf79199f4a05ac394d117a96ad",
"0x0979cca70b3db190d307888e64865c8eddfe3a3f3775d7f2dc95609aab02d9f3",
"0x33726c8a4093447b4ac213a9c7267238264110c7efd0c3dc10cbb5829cfafdb6",
"0xcf877aa957239fd8b0f586e88e482160023ea60d66a87561f0a7c4550bde206e",
"0x58630465fa7761abfabe143408a6839a5a0d4e127b34e125c85b297ad10b8880",
"0x96e17a9ed7352c69f44ec6b4028a844ba73483dd8b41ef10ca4811e57e82f393"
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
            version: '^0.5.11'
        }
    }
};
