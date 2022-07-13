/*
1 Mainnet
3 Ropsten
4 Rinkeby
5 Goerli
42 Kovan
56 Binance Smart Chain Mainnet
97 Binance Smart Chain Testnet
100 xDai
137 Matic
1287 Moonbase Testnet
80001 Matic Testnet
43113 Avalanche Testnet
43114 Avalanche Mainnet
*/

export const getEthChainInfo = () => {
    let chainId: number = 97;
    let rpcUrl: string = 'https://data-seed-prebsc-1-s1.binance.org:8545/';
    let ethscanType: string = 'testnet.';
    const href = window.location.href;
    if (/\/\/staking.memelordz.io/.test(href)) {
         chainId = 56;
         rpcUrl = 'https://bsc-dataseed.binance.org/';
         ethscanType = '';
    }
    return {
        chainId,
        rpcUrl,
        ethscanType
    }
};
