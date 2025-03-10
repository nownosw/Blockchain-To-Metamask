var EVMJson=[{
  "name": "Ethereum Mainnet",
  "chain": "ETH",
  "network": "mainnet",
  "icon": "ethereum",
  "rpc": ["https://mainnet.infura.io/v3/${INFURA_API_KEY}", "https://rpc.tenderly.co/fork/54f8b961-62a7-4515-a125-16113e05afa0", "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}", "https://api.mycryptoapi.com/eth", "https://cloudflare-eth.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://ethereum.org",
  "shortName": "eth",
  "chainId": 1,
  "networkId": 1,
  "slip44": 60,
  "ens": {
    "registry": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
  },
  "explorers": [{
    "name": "etherscan",
    "url": "https://etherscan.io",
    "standard": "EIP3091"
  }]
}, {
  "name": "Expanse Network",
  "chain": "EXP",
  "network": "mainnet",
  "rpc": ["https://node.expanse.tech"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Expanse Network Ether",
    "symbol": "EXP",
    "decimals": 18
  },
  "infoURL": "https://expanse.tech",
  "shortName": "exp",
  "chainId": 2,
  "networkId": 1,
  "slip44": 40
}, {
  "name": "Ethereum Testnet Ropsten",
  "chain": "ETH",
  "network": "ropsten",
  "rpc": ["https://ropsten.infura.io/v3/${INFURA_API_KEY}", "wss://ropsten.infura.io/ws/v3/${INFURA_API_KEY}"],
  "faucets": ["https://faucet.ropsten.be?${ADDRESS}"],
  "nativeCurrency": {
    "name": "Ropsten Ether",
    "symbol": "ROP",
    "decimals": 18
  },
  "infoURL": "https://github.com/ethereum/ropsten",
  "shortName": "rop",
  "chainId": 3,
  "networkId": 3,
  "ens": {
    "registry": "0x112234455c3a32fd11230c42e7bccd4a84e02010"
  }
}, {
  "name": "Ethereum Testnet Rinkeby",
  "chain": "ETH",
  "network": "rinkeby",
  "rpc": ["https://rinkeby.infura.io/v3/${INFURA_API_KEY}", "wss://rinkeby.infura.io/ws/v3/${INFURA_API_KEY}"],
  "faucets": ["https://faucet.rinkeby.io"],
  "nativeCurrency": {
    "name": "Rinkeby Ether",
    "symbol": "RIN",
    "decimals": 18
  },
  "infoURL": "https://www.rinkeby.io",
  "shortName": "rin",
  "chainId": 4,
  "networkId": 4,
  "ens": {
    "registry": "0xe7410170f87102df0055eb195163a03b7f2bff4a"
  },
  "explorers": [{
    "name": "etherscan-rinkeby",
    "url": "https://rinkeby.etherscan.io",
    "standard": "EIP3091"
  }]
}, {
  "name": "Ethereum Testnet Goerli",
  "chain": "ETH",
  "network": "goerli",
  "rpc": ["https://rpc.goerli.mudit.blog/", "https://rpc.slock.it/goerli ", "https://goerli.prylabs.net/"],
  "faucets": ["https://goerli-faucet.slock.it/?address=${ADDRESS}", "https://faucet.goerli.mudit.blog"],
  "nativeCurrency": {
    "name": "Görli Ether",
    "symbol": "GOR",
    "decimals": 18
  },
  "infoURL": "https://goerli.net/#about",
  "shortName": "gor",
  "chainId": 5,
  "networkId": 5,
  "ens": {
    "registry": "0x112234455c3a32fd11230c42e7bccd4a84e02010"
  }
}, {
  "name": "Ethereum Classic Testnet Kotti",
  "chain": "ETC",
  "network": "kotti",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Kotti Ether",
    "symbol": "KOT",
    "decimals": 18
  },
  "infoURL": "https://explorer.jade.builders/?network=kotti",
  "shortName": "kot",
  "chainId": 6,
  "networkId": 6
}, {
  "name": "ThaiChain",
  "chain": "TCH",
  "network": "mainnet",
  "rpc": ["https://rpc.dome.cloud"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ThaiChain Ether",
    "symbol": "TCH",
    "decimals": 18
  },
  "infoURL": "https://thaichain.io",
  "shortName": "tch",
  "chainId": 7,
  "networkId": 7
}, {
  "name": "Ubiq",
  "chain": "UBQ",
  "network": "mainnet",
  "rpc": ["https://rpc.octano.dev", "https://pyrus2.ubiqscan.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ubiq Ether",
    "symbol": "UBQ",
    "decimals": 18
  },
  "infoURL": "https://ubiqsmart.com",
  "shortName": "ubq",
  "chainId": 8,
  "networkId": 8,
  "slip44": 108,
  "explorers": [{
    "name": "ubiqscan",
    "url": "https://ubiqscan.io",
    "standard": "EIP3091"
  }]
}, {
  "name": "Ubiq Network Testnet",
  "chain": "UBQ",
  "network": "mainnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ubiq Testnet Ether",
    "symbol": "TUBQ",
    "decimals": 18
  },
  "infoURL": "https://ethersocial.org",
  "shortName": "tubq",
  "chainId": 9,
  "networkId": 2
}, {
  "name": "Optimistic Ethereum",
  "chain": "ETH",
  "network": "mainnet",
  "rpc": ["https://rpc.tenderly.co/fork/a324b905-9543-4d1e-8b4b-73777b399729"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "OETH",
    "decimals": 18
  },
  "infoURL": "https://optimism.io",
  "shortName": "oeth",
  "chainId": 10,
  "networkId": 10
}, {
  "name": "Metadium Mainnet",
  "chain": "META",
  "network": "mainnet",
  "rpc": ["https://api.metadium.com/prod"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Metadium Mainnet Ether",
    "symbol": "META",
    "decimals": 18
  },
  "infoURL": "https://metadium.com",
  "shortName": "meta",
  "chainId": 11,
  "networkId": 11,
  "slip44": 916
}, {
  "name": "Metadium Testnet",
  "chain": "META",
  "network": "testnet",
  "rpc": ["https://api.metadium.com/dev"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Metadium Testnet Ether",
    "symbol": "KAL",
    "decimals": 18
  },
  "infoURL": "https://metadium.com",
  "shortName": "kal",
  "chainId": 12,
  "networkId": 12
}, {
  "name": "Diode Testnet Staging",
  "chain": "DIODE",
  "network": "testnet",
  "rpc": ["https://staging.diode.io:8443/", "wss://staging.diode.io:8443/ws"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Staging Diodes",
    "symbol": "sDIODE",
    "decimals": 18
  },
  "infoURL": "https://diode.io/staging",
  "shortName": "dstg",
  "chainId": 13,
  "networkId": 13
}, {
  "name": "Flare Mainnet",
  "chain": "FLR",
  "network": "flare",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Spark",
    "symbol": "FLR",
    "decimals": 18
  },
  "infoURL": "https://flare.xyz",
  "shortName": "flr",
  "chainId": 14,
  "networkId": 14
}, {
  "name": "Diode Prenet",
  "chain": "DIODE",
  "network": "mainnet",
  "rpc": ["https://prenet.diode.io:8443/", "wss://prenet.diode.io:8443/ws"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Diodes",
    "symbol": "DIODE",
    "decimals": 18
  },
  "infoURL": "https://diode.io/prenet",
  "shortName": "diode",
  "chainId": 15,
  "networkId": 15
}, {
  "name": "Flare Testnet Coston",
  "chain": "FLR",
  "network": "coston",
  "rpc": [],
  "faucets": ["https://faucet.towolabs.com"],
  "nativeCurrency": {
    "name": "Coston Spark",
    "symbol": "CFLR",
    "decimals": 18
  },
  "infoURL": "https://github.com/flare-eng/coston",
  "shortName": "cflr",
  "chainId": 16,
  "networkId": 16
}, {
  "name": "ThaiChain 2.0 ThaiFi",
  "chain": "TCH",
  "network": "thaifi",
  "rpc": ["https://rpc.thaifi.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Thaifi Ether",
    "symbol": "TFI",
    "decimals": 18
  },
  "infoURL": "https://exp.thaifi.com",
  "shortName": "tfi",
  "chainId": 17,
  "networkId": 17
}, {
  "name": "ThunderCore Testnet",
  "chain": "TST",
  "network": "testnet",
  "rpc": ["https://testnet-rpc.thundercore.com"],
  "faucets": ["https://faucet-testnet.thundercore.com"],
  "nativeCurrency": {
    "name": "ThunderCore Testnet Ether",
    "symbol": "TST",
    "decimals": 18
  },
  "infoURL": "https://thundercore.com",
  "shortName": "TST",
  "chainId": 18,
  "networkId": 18
}, {
  "name": "Songbird Canary-Network",
  "chain": "SGB",
  "network": "songbird",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Songbird",
    "symbol": "SGB",
    "decimals": 18
  },
  "infoURL": "https://flare.xyz",
  "shortName": "sgb",
  "chainId": 19,
  "networkId": 19
}, {
  "name": "ELA-ETH-Sidechain Mainnet",
  "chain": "ETH",
  "network": "mainnet",
  "rpc": ["https://mainrpc.elaeth.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Elastos",
    "symbol": "ELA",
    "decimals": 18
  },
  "infoURL": "https://www.elastos.org/",
  "shortName": "elaeth",
  "chainId": 20,
  "networkId": 20
}, {
  "name": "ELA-ETH-Sidechain Testnet",
  "chain": "ETH",
  "network": "testnet",
  "rpc": ["https://rpc.elaeth.io"],
  "faucets": ["https://faucet.elaeth.io/"],
  "nativeCurrency": {
    "name": "Elastos",
    "symbol": "tELA",
    "decimals": 18
  },
  "infoURL": "https://elaeth.io/",
  "shortName": "elaetht",
  "chainId": 21,
  "networkId": 21
}, {
  "name": "ELA-DID-Sidechain Mainnet",
  "chain": "ETH",
  "network": "mainnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Elastos",
    "symbol": "ELA",
    "decimals": 18
  },
  "infoURL": "https://www.elastos.org/",
  "shortName": "eladid",
  "chainId": 22,
  "networkId": 22
}, {
  "name": "ELA-DID-Sidechain Testnet",
  "chain": "ETH",
  "network": "testnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Elastos",
    "symbol": "tELA",
    "decimals": 18
  },
  "infoURL": "https://elaeth.io/",
  "shortName": "eladidt",
  "chainId": 23,
  "networkId": 23
}, {
  "name": "RSK Mainnet",
  "chain": "RSK",
  "network": "mainnet",
  "rpc": ["https://public-node.rsk.co", "https://mycrypto.rsk.co"],
  "faucets": [],
  "nativeCurrency": {
    "name": "RSK Mainnet Ether",
    "symbol": "RBTC",
    "decimals": 18
  },
  "infoURL": "https://rsk.co",
  "shortName": "rsk",
  "chainId": 30,
  "networkId": 30,
  "slip44": 137
}, {
  "name": "RSK Testnet",
  "chain": "RSK",
  "network": "testnet",
  "rpc": ["https://public-node.testnet.rsk.co", "https://mycrypto.testnet.rsk.co"],
  "faucets": ["https://faucet.testnet.rsk.co"],
  "nativeCurrency": {
    "name": "RSK Testnet Ether",
    "symbol": "tRBTC",
    "decimals": 18
  },
  "infoURL": "https://rsk.co",
  "shortName": "trsk",
  "chainId": 31,
  "networkId": 31
}, {
  "name": "GoodData Testnet",
  "chain": "GooD",
  "network": "testnet",
  "rpc": ["https://test2.goodata.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "GoodData Testnet Ether",
    "symbol": "GooD",
    "decimals": 18
  },
  "infoURL": "https://www.goodata.org",
  "shortName": "GooDT",
  "chainId": 32,
  "networkId": 32
}, {
  "name": "GoodData Mainnet",
  "chain": "GooD",
  "network": "mainnet",
  "rpc": ["https://rpc.goodata.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "GoodData Mainnet Ether",
    "symbol": "GooD",
    "decimals": 18
  },
  "infoURL": "https://www.goodata.org",
  "shortName": "GooD",
  "chainId": 33,
  "networkId": 33
}, {
  "name": "TBWG Chain",
  "chain": "TBWG",
  "network": "mainnet",
  "rpc": ["https://rpc.tbwg.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "TBWG Ether",
    "symbol": "TBG",
    "decimals": 18
  },
  "infoURL": "https://tbwg.io",
  "shortName": "tbwg",
  "chainId": 35,
  "networkId": 35
}, {
  "name": "Valorbit",
  "chain": "VAL",
  "network": "mainnet",
  "rpc": ["https://rpc.valorbit.com/v2"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Valorbit",
    "symbol": "VAL",
    "decimals": 18
  },
  "infoURL": "https://valorbit.com",
  "shortName": "val",
  "chainId": 38,
  "networkId": 38,
  "slip44": 538
}, {
  "name": "Telos EVM Mainnet",
  "chain": "TLOS",
  "network": "mainnet",
  "rpc": ["https://mainnet.telos.net/evm"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Telos",
    "symbol": "TLOS",
    "decimals": 18
  },
  "infoURL": "https://telos.net",
  "shortName": "Telos EVM",
  "chainId": 40,
  "networkId": 40
}, {
  "name": "Telos EVM Testnet",
  "chain": "TLOS",
  "network": "testnet",
  "rpc": ["https://testnet.telos.net/evm"],
  "faucets": ["https://app.telos.net/testnet/developers"],
  "nativeCurrency": {
    "name": "Telos",
    "symbol": "TLOS",
    "decimals": 18
  },
  "infoURL": "https://telos.net",
  "shortName": "Telos EVM Testnet",
  "chainId": 41,
  "networkId": 41
}, {
  "name": "Ethereum Testnet Kovan",
  "chain": "ETH",
  "network": "kovan",
  "rpc": ["https://kovan.poa.network", "http://kovan.poa.network:8545", "https://kovan.infura.io/v3/${INFURA_API_KEY}", "wss://kovan.infura.io/ws/v3/${INFURA_API_KEY}", "ws://kovan.poa.network:8546"],
  "faucets": ["https://faucet.kovan.network", "https://gitter.im/kovan-testnet/faucet"],
  "nativeCurrency": {
    "name": "Kovan Ether",
    "symbol": "KOV",
    "decimals": 18
  },
  "infoURL": "https://kovan-testnet.github.io/website",
  "shortName": "kov",
  "chainId": 42,
  "networkId": 42
}, {
  "name": "Darwinia Pangolin Testnet",
  "chain": "pangolin",
  "network": "free testnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Pangolin RING",
    "symbol": "PRING",
    "decimals": 9
  },
  "infoURL": "https://darwinia.network/",
  "shortName": "darwinia",
  "chainId": 43,
  "networkId": 43
}, {
  "name": "Darwinia Crab Network",
  "chain": "crab",
  "network": "Crab network",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Crab Token",
    "symbol": "CRING",
    "decimals": 9
  },
  "infoURL": "https://crab.network/",
  "shortName": "crab",
  "chainId": 44,
  "networkId": 44
}, {
  "name": "XinFin Network Mainnet",
  "chain": "XDC",
  "network": "mainnet",
  "rpc": ["https://rpc.xinfin.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "XinFin",
    "symbol": "XDC",
    "decimals": 18
  },
  "infoURL": "https://xinfin.org",
  "shortName": "xdc",
  "chainId": 50,
  "networkId": 50
}, {
  "name": "XinFin Apothem Testnet",
  "chain": "TXDC",
  "network": "testnet",
  "rpc": ["https://rpc.apothem.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "XinFinTest",
    "symbol": "TXDC",
    "decimals": 18
  },
  "infoURL": "https://xinfin.org",
  "shortName": "TXDC",
  "chainId": 51,
  "networkId": 51
}, {
  "name": "CoinEx Smart Chain Mainnet",
  "chain": "CSC",
  "network": "mainnet",
  "rpc": ["https://rpc-mainnet.coinex.net"],
  "faucets": [],
  "nativeCurrency": {
    "name": "CoinEx Chain Native Token",
    "symbol": "cet",
    "decimals": 18
  },
  "infoURL": "http://www.coinex.org/",
  "shortName": "cet",
  "chainId": 52,
  "networkId": 52
}, {
  "name": "CoinEx Smart Chain Testnet",
  "chain": "CSC",
  "network": "testnet",
  "rpc": ["https://rpc-testnet.coinex.net"],
  "faucets": [],
  "nativeCurrency": {
    "name": "CoinEx Chain Test Native Token",
    "symbol": "cett",
    "decimals": 18
  },
  "infoURL": "http://www.coinex.org/",
  "shortName": "tcet",
  "chainId": 53,
  "networkId": 53
}, {
  "name": "Binance Smart Chain Mainnet",
  "chain": "BSC",
  "network": "mainnet",
  "rpc": ["https://bsc-dataseed1.binance.org", "https://rpc.tenderly.co/fork/070911eb-655f-44d3-b3ee-671e5a677cfc", "https://bsc-dataseed2.binance.org", "https://bsc-dataseed3.binance.org", "https://bsc-dataseed4.binance.org", "https://bsc-dataseed1.defibit.io", "https://bsc-dataseed2.defibit.io", "https://bsc-dataseed3.defibit.io", "https://bsc-dataseed4.defibit.io", "https://bsc-dataseed1.ninicoin.io", "https://bsc-dataseed2.ninicoin.io", "https://bsc-dataseed3.ninicoin.io", "https://bsc-dataseed4.ninicoin.io", "wss://bsc-ws-node.nariox.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Binance Chain Native Token",
    "symbol": "BNB",
    "decimals": 18
  },
  "infoURL": "https://www.binance.org",
  "shortName": "bnb",
  "chainId": 56,
  "networkId": 56,
  "explorers": [{
    "name": "bscscan",
    "url": "https://bscscan.com",
    "standard": "EIP3091"
  }]
}, {
  "name": "Syscoin Mainnet",
  "chain": "SYS",
  "network": "mainnet",
  "rpc": ["https://nevm.syscoin.org/api/eth-rpc", "https://web3.syscoin.org", "wss://web3.syscoin.org"],
  "faucets": ["https://faucet.syscoin.org"],
  "nativeCurrency": {
    "name": "Syscoin",
    "symbol": "SYS",
    "decimals": 18
  },
  "infoURL": "https://www.syscoin.org",
  "shortName": "sys",
  "chainId": 57,
  "networkId": 57
}, {
  "name": "Ontology Mainnet",
  "chain": "Ontology",
  "network": "mainnet",
  "rpc": ["https://dappnode1.ont.io:20339", "https://dappnode2.ont.io:20339", "https://dappnode3.ont.io:20339", "https://dappnode4.ont.io:20339"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ONG",
    "symbol": "ONG",
    "decimals": 9
  },
  "infoURL": "https://ont.io/",
  "shortName": "Ontology Mainnet",
  "chainId": 58,
  "networkId": 58,
  "explorers": [{
    "name": "explorer",
    "url": "https://explorer.ont.io/",
    "standard": "EIP3091"
  }]
}, {
  "name": "EOS Mainnet",
  "chain": "EOS",
  "network": "mainnet",
  "rpc": ["https://api.eosargentina.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "EOS",
    "symbol": "EOS",
    "decimals": 18
  },
  "infoURL": "https://eoscommunity.org/",
  "shortName": "EOS Mainnet",
  "chainId": 59,
  "networkId": 59,
  "explorers": [{
    "name": "bloks",
    "url": "https://bloks.eosargentina.io",
    "standard": "EIP3091"
  }]
}, {
  "name": "GoChain",
  "chain": "GO",
  "network": "mainnet",
  "rpc": ["https://rpc.gochain.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "GoChain Ether",
    "symbol": "GO",
    "decimals": 18
  },
  "infoURL": "https://gochain.io",
  "shortName": "go",
  "chainId": 60,
  "networkId": 60,
  "slip44": 6060,
  "explorers": [{
    "name": "GoChain Explorer",
    "url": "https://explorer.gochain.io",
    "standard": "EIP3091"
  }]
}, {
  "name": "Ethereum Classic Mainnet",
  "chain": "ETC",
  "network": "mainnet",
  "rpc": ["https://ethereumclassic.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ethereum Classic Ether",
    "symbol": "ETC",
    "decimals": 18
  },
  "infoURL": "https://ethereumclassic.org",
  "shortName": "etc",
  "chainId": 61,
  "networkId": 1,
  "slip44": 61
}, {
  "name": "Ethereum Classic Testnet Morden",
  "chain": "ETC",
  "network": "testnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ethereum Classic Testnet Ether",
    "symbol": "TETC",
    "decimals": 18
  },
  "infoURL": "https://ethereumclassic.org",
  "shortName": "tetc",
  "chainId": 62,
  "networkId": 2
}, {
  "name": "Ethereum Classic Testnet Mordor",
  "chain": "ETC",
  "network": "testnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Mordor Classic Testnet Ether",
    "symbol": "METC",
    "decimals": 18
  },
  "infoURL": "https://github.com/eth-classic/mordor/",
  "shortName": "metc",
  "chainId": 63,
  "networkId": 7
}, {
  "name": "Ellaism",
  "chain": "ELLA",
  "network": "mainnet",
  "rpc": ["https://jsonrpc.ellaism.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ellaism Ether",
    "symbol": "ELLA",
    "decimals": 18
  },
  "infoURL": "https://ellaism.org",
  "shortName": "ella",
  "chainId": 64,
  "networkId": 64,
  "slip44": 163
}, {
  "name": "OKExChain Testnet",
  "chain": "okexchain",
  "network": "testnet",
  "rpc": ["https://exchaintestrpc.okex.org"],
  "faucets": ["https://www.okex.com/drawdex"],
  "nativeCurrency": {
    "name": "OKExChain Global Utility Token in testnet",
    "symbol": "OKT",
    "decimals": 18
  },
  "infoURL": "https://www.okex.com/okexchain",
  "shortName": "tokt",
  "chainId": 65,
  "networkId": 65,
  "explorers": [{
    "name": "OKLink",
    "url": "https://www.oklink.com/okexchain-test",
    "standard": "EIP3091"
  }]
}, {
  "name": "OKExChain Mainnet",
  "chain": "okexchain",
  "network": "mainnet",
  "rpc": ["https://exchainrpc.okex.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "OKExChain Global Utility Token",
    "symbol": "OKT",
    "decimals": 18
  },
  "infoURL": "https://www.okex.com/okexchain",
  "shortName": "okt",
  "chainId": 66,
  "networkId": 66,
  "explorers": [{
    "name": "OKLink",
    "url": "https://www.oklink.com/okexchain",
    "standard": "EIP3091"
  }]
}, {
  "name": "DBChain Testnet",
  "chain": "DBM",
  "network": "testnet",
  "rpc": ["http://test-rpc.dbmbp.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "DBChain Testnet",
    "symbol": "DBM",
    "decimals": 18
  },
  "infoURL": "http://test.dbmbp.com",
  "shortName": "dbm",
  "chainId": 67,
  "networkId": 67
}, {
  "name": "SoterOne Mainnet",
  "chain": "SOTER",
  "network": "mainnet",
  "rpc": ["https://rpc.soter.one"],
  "faucets": [],
  "nativeCurrency": {
    "name": "SoterOne Mainnet Ether",
    "symbol": "SOTER",
    "decimals": 18
  },
  "infoURL": "https://www.soterone.com",
  "shortName": "SO1",
  "chainId": 68,
  "networkId": 68
}, {
  "name": "Optimistic Ethereum Testnet Kovan",
  "chain": "ETH",
  "network": "kovan",
  "rpc": ["https://kovan.optimism.io/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Kovan Ether",
    "symbol": "KOR",
    "decimals": 18
  },
  "infoURL": "https://optimism.io",
  "shortName": "okov",
  "chainId": 69,
  "networkId": 69
}, {
  "name": "Mix",
  "chain": "MIX",
  "network": "mainnet",
  "rpc": ["https://rpc2.mix-blockchain.org:8647"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Mix Ether",
    "symbol": "MIX",
    "decimals": 18
  },
  "infoURL": "https://mix-blockchain.org",
  "shortName": "mix",
  "chainId": 76,
  "networkId": 76,
  "slip44": 76
}, {
  "name": "POA Network Sokol",
  "chain": "POA",
  "network": "sokol",
  "rpc": ["https://sokol.poa.network", "wss://sokol.poa.network/wss", "ws://sokol.poa.network:8546"],
  "faucets": ["https://faucet-sokol.herokuapp.com"],
  "nativeCurrency": {
    "name": "POA Sokol Ether",
    "symbol": "POA",
    "decimals": 18
  },
  "infoURL": "https://poa.network",
  "shortName": "poa",
  "chainId": 77,
  "networkId": 77
}, {
  "name": "PrimusChain mainnet",
  "chain": "PC",
  "network": "mainnet",
  "rpc": ["https://ethnode.primusmoney.com/mainnet"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Primus Ether",
    "symbol": "PETH",
    "decimals": 18
  },
  "infoURL": "https://primusmoney.com",
  "shortName": "primuschain",
  "chainId": 78,
  "networkId": 78
}, {
  "name": "GeneChain",
  "chain": "GeneChain",
  "network": "mainnet",
  "rpc": ["https://rpc.genechain.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "RNA",
    "symbol": "RNA",
    "decimals": 18
  },
  "infoURL": "https://scan.genechain.io/",
  "shortName": "GeneChain",
  "chainId": 80,
  "networkId": 80,
  "explorers": [{
    "name": "GeneChain Scan",
    "url": "https://scan.genechain.io",
    "standard": "EIP3091"
  }]
}, {
  "name": "Meter Mainnet",
  "chain": "METER",
  "network": "mainnet",
  "rpc": ["https://rpc.meter.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Meter",
    "symbol": "MTR",
    "decimals": 18
  },
  "infoURL": "https://www.meter.io",
  "shortName": "Meter",
  "chainId": 82,
  "networkId": 82
}, {
  "name": "GateChain Testnet",
  "chainId": 85,
  "shortName": "gttest",
  "chain": "GTTEST",
  "network": "testnet",
  "networkId": 85,
  "nativeCurrency": {
    "name": "GateToken",
    "symbol": "GT",
    "decimals": 18
  },
  "rpc": ["https://testnet.gatenode.cc"],
  "faucets": ["https://www.gatescan.org/testnet/faucet"],
  "explorers": [{
    "name": "GateScan",
    "url": "https://www.gatescan.org/testnet",
    "standard": "EIP3091"
  }],
  "infoURL": "https://www.gatechain.io"
}, {
  "name": "GateChain Mainnet",
  "chainId": 86,
  "shortName": "gt",
  "chain": "GT",
  "network": "mainnet",
  "networkId": 86,
  "nativeCurrency": {
    "name": "GateToken",
    "symbol": "GT",
    "decimals": 18
  },
  "rpc": ["https://evm.gatenode.cc"],
  "faucets": ["https://www.gatescan.org/faucet"],
  "explorers": [{
    "name": "GateScan",
    "url": "https://www.gatescan.org",
    "standard": "EIP3091"
  }],
  "infoURL": "https://www.gatechain.io"
}, {
  "name": "TomoChain",
  "chain": "TOMO",
  "network": "mainnet",
  "rpc": ["https://rpc.tomochain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "TomoChain Ether",
    "symbol": "TOMO",
    "decimals": 18
  },
  "infoURL": "https://tomocoin.io",
  "shortName": "tomo",
  "chainId": 88,
  "networkId": 88
}, {
  "name": "CryptoKylin Testnet",
  "chain": "EOS",
  "network": "testnet",
  "rpc": ["https://kylin.eosargentina.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "EOS",
    "symbol": "EOS",
    "decimals": 18
  },
  "infoURL": "https://www.cryptokylin.io/",
  "shortName": "Kylin Testnet",
  "chainId": 95,
  "networkId": 95,
  "explorers": [{
    "name": "eosq",
    "url": "https://kylin.eosargentina.io",
    "standard": "EIP3091"
  }]
}, {
  "name": "Binance Smart Chain Testnet",
  "chain": "BSC",
  "network": "Chapel",
  "rpc": ["https://data-seed-prebsc-1-s1.binance.org:8545", "https://data-seed-prebsc-2-s1.binance.org:8545", "https://data-seed-prebsc-1-s2.binance.org:8545", "https://data-seed-prebsc-2-s2.binance.org:8545", "https://data-seed-prebsc-1-s3.binance.org:8545", "https://data-seed-prebsc-2-s3.binance.org:8545"],
  "faucets": ["https://testnet.binance.org/faucet-smart"],
  "nativeCurrency": {
    "name": "Binance Chain Native Token",
    "symbol": "tBNB",
    "decimals": 18
  },
  "infoURL": "https://testnet.binance.org/",
  "shortName": "bnbt",
  "chainId": 97,
  "networkId": 97,
  "explorers": [{
    "name": "bscscan-testnet",
    "url": "https://testnet.bscscan.com",
    "standard": "EIP3091"
  }]
}, {
  "name": "POA Network Core",
  "chain": "POA",
  "network": "core",
  "rpc": ["https://core.poanetwork.dev", "http://core.poanetwork.dev:8545", "https://core.poa.network", "ws://core.poanetwork.dev:8546"],
  "faucets": [],
  "nativeCurrency": {
    "name": "POA Network Core Ether",
    "symbol": "SKL",
    "decimals": 18
  },
  "infoURL": "https://poa.network",
  "shortName": "skl",
  "chainId": 99,
  "networkId": 99
}, {
  "name": "xDAI Chain",
  "chain": "XDAI",
  "network": "mainnet",
  "rpc": ["https://rpc.xdaichain.com", "https://xdai.poanetwork.dev", "wss://rpc.xdaichain.com/wss", "wss://xdai.poanetwork.dev/wss", "http://xdai.poanetwork.dev", "https://dai.poa.network", "ws://xdai.poanetwork.dev:8546"],
  "faucets": [],
  "nativeCurrency": {
    "name": "xDAI",
    "symbol": "xDAI",
    "decimals": 18
  },
  "infoURL": "https://forum.poa.network/c/xdai-chain",
  "shortName": "xdai",
  "chainId": 100,
  "networkId": 100,
  "slip44": 700
}, {
  "name": "EtherInc",
  "chain": "ETI",
  "network": "mainnet",
  "rpc": ["https://api.einc.io/jsonrpc/mainnet"],
  "faucets": [],
  "nativeCurrency": {
    "name": "EtherInc Ether",
    "symbol": "ETI",
    "decimals": 18
  },
  "infoURL": "https://einc.io",
  "shortName": "eti",
  "chainId": 101,
  "networkId": 1,
  "slip44": 464
}, {
  "name": "Web3Games Testnet",
  "chain": "Web3Games",
  "network": "testnet",
  "rpc": ["https://substrate.org.cn"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Web3Games",
    "symbol": "W3G",
    "decimals": 18
  },
  "infoURL": "https://web3games.org/",
  "shortName": "w3g",
  "chainId": 102,
  "networkId": 102
}, {
  "name": "ThunderCore Mainnet",
  "chain": "TT",
  "network": "mainnet",
  "rpc": ["https://mainnet-rpc.thundercore.com"],
  "faucets": ["https://faucet.thundercore.com"],
  "nativeCurrency": {
    "name": "ThunderCore Mainnet Ether",
    "symbol": "TT",
    "decimals": 18
  },
  "infoURL": "https://thundercore.com",
  "shortName": "TT",
  "chainId": 108,
  "networkId": 108
}, {
  "name": "Proton Testnet",
  "chain": "XPR",
  "network": "testnet",
  "rpc": ["https://protontestnet.greymass.com/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Proton",
    "symbol": "XPR",
    "decimals": 4
  },
  "infoURL": "https://protonchain.com",
  "shortName": "xpr",
  "chainId": 110,
  "networkId": 110
}, {
  "name": "EtherLite Chain",
  "chain": "ETL",
  "network": "mainnet",
  "rpc": ["https://rpc.etherlite.org"],
  "faucets": ["https://etherlite.org/faucets"],
  "nativeCurrency": {
    "name": "EtherLite",
    "symbol": "ETL",
    "decimals": 18
  },
  "infoURL": "https://etherlite.org",
  "shortName": "ETL",
  "chainId": 111,
  "networkId": 111,
  "icon": "etherlite"
}, {
  "name": "Fuse Mainnet",
  "chain": "FUSE",
  "network": "mainnet",
  "rpc": ["https://rpc.fuse.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Fuse",
    "symbol": "FUSE",
    "decimals": 18
  },
  "infoURL": "https://fuse.io/",
  "shortName": "fuse",
  "chainId": 122,
  "networkId": 122
}, {
  "name": "Decentralized Web Mainnet",
  "shortName": "dwu",
  "chain": "DWU",
  "network": "mainnet",
  "chainId": 124,
  "networkId": 124,
  "rpc": ["https://decentralized-web.tech/dw_rpc.php"],
  "faucets": [],
  "infoURL": "https://decentralized-web.tech/dw_chain.php",
  "nativeCurrency": {
    "name": "Decentralized Web Utility",
    "symbol": "DWU",
    "decimals": 18
  }
}, {
  "name": "Factory 127 Mainnet",
  "chain": "FETH",
  "network": "factory127 mainnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Factory 127 Token",
    "symbol": "FETH",
    "decimals": 18
  },
  "infoURL": "https://www.factory127.com",
  "shortName": "feth",
  "chainId": 127,
  "networkId": 127,
  "slip44": 127
}, {
  "name": "Huobi ECO Chain Mainnet",
  "chain": "Heco",
  "network": "mainnet",
  "rpc": ["https://http-mainnet.hecochain.com", "wss://ws-mainnet.hecochain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Huobi ECO Chain Native Token",
    "symbol": "HT",
    "decimals": 18
  },
  "infoURL": "https://www.hecochain.com",
  "shortName": "heco",
  "chainId": 128,
  "networkId": 128,
  "explorers": [{
    "name": "hecoinfo",
    "url": "https://hecoinfo.com",
    "standard": "EIP3091"
  }]
}, {
  "name": "Matic(Polygon) Mainnet",
  "chain": "Matic(Polygon)",
  "network": "mainnet",
  "rpc": ["https://rpc-mainnet.matic.network", "wss://ws-mainnet.matic.network", "https://rpc-mainnet.matic.quiknode.pro", "https://matic-mainnet.chainstacklabs.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Matic",
    "symbol": "MATIC",
    "decimals": 18
  },
  "infoURL": "https://matic.network/",
  "shortName": "matic",
  "chainId": 137,
  "networkId": 137,
  "explorers": [{
    "name": "polygonscan",
    "url": "https://polygonscan.com",
    "standard": "EIP3091"
  }]
}, {
  "name": "DAX CHAIN",
  "chain": "DAX",
  "network": "mainnet",
  "rpc": ["https://rpc.prodax.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Prodax",
    "symbol": "DAX",
    "decimals": 18
  },
  "infoURL": "https://prodax.io/",
  "shortName": "dax",
  "chainId": 142,
  "networkId": 142
}, {
  "name": "Lightstreams Testnet",
  "chain": "PHT",
  "network": "sirius",
  "rpc": ["https://node.sirius.lightstreams.io"],
  "faucets": ["https://discuss.lightstreams.network/t/request-test-tokens"],
  "nativeCurrency": {
    "name": "Lightstreams PHT",
    "symbol": "PHT",
    "decimals": 18
  },
  "infoURL": "https://explorer.sirius.lightstreams.io",
  "shortName": "tpht",
  "chainId": 162,
  "networkId": 162
}, {
  "name": "Lightstreams Mainnet",
  "chain": "PHT",
  "network": "mainnet",
  "rpc": ["https://node.mainnet.lightstreams.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Lightstreams PHT",
    "symbol": "PHT",
    "decimals": 18
  },
  "infoURL": "https://explorer.lightstreams.io",
  "shortName": "pht",
  "chainId": 163,
  "networkId": 163
}, {
  "name": "HOO Smart Chain Testnet",
  "chain": "ETH",
  "network": "testnet",
  "rpc": ["https://http-testnet.hoosmartchain.com"],
  "faucets": ["https://faucet-testnet.hscscan.com/"],
  "nativeCurrency": {
    "name": "HOO",
    "symbol": "HOO",
    "decimals": 18
  },
  "infoURL": "https://www.hoosmartchain.com",
  "shortName": "hoosmartchain",
  "chainId": 170,
  "networkId": 170
}, {
  "name": "Latam-Blockchain Resil Testnet",
  "chain": "Resil",
  "network": "testnet",
  "rpc": ["https://rpc.latam-blockchain.com", "wss://ws.latam-blockchain.com"],
  "faucets": ["https://faucet.latam-blockchain.com"],
  "nativeCurrency": {
    "name": "Latam-Blockchain Resil Test Native Token",
    "symbol": "usd",
    "decimals": 18
  },
  "infoURL": "https://latam-blockchain.com",
  "shortName": "resil",
  "chainId": 172,
  "networkId": 172
}, {
  "name": "Arbitrum on xDai",
  "chain": "AOX",
  "network": "xdai",
  "rpc": ["https://arbitrum.xdaichain.com/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "xDAI",
    "symbol": "xDAI",
    "decimals": 18
  },
  "infoURL": "https://xdaichain.com",
  "shortName": "aox",
  "chainId": 200,
  "networkId": 200,
  "explorers": [{
    "name": "blockscout",
    "url": "https://blockscout.com/xdai/arbitrum",
    "standard": "EIP3091"
  }],
  "parent": {
    "chain": "eip155-100",
    "type": "L2"
  }
}, {
  "name": "Freight Trust Network",
  "chain": "EDI",
  "network": "freight & trade network",
  "rpc": ["http://13.57.207.168:3435", "https://app.freighttrust.net/ftn/${API_KEY}"],
  "faucets": ["http://faucet.freight.sh"],
  "nativeCurrency": {
    "name": "Freight Trust Native",
    "symbol": "0xF",
    "decimals": 18
  },
  "infoURL": "https://freighttrust.com",
  "shortName": "EDI",
  "chainId": 211,
  "networkId": 0
}, {
  "name": "Energy Web Chain",
  "chain": "Energy Web Chain",
  "network": "mainnet",
  "rpc": ["https://rpc.energyweb.org", "wss://rpc.energyweb.org/ws"],
  "faucets": ["https://faucet.carbonswap.exchange"],
  "nativeCurrency": {
    "name": "Energy Web Token",
    "symbol": "EWT",
    "decimals": 18
  },
  "infoURL": "https://energyweb.org",
  "shortName": "ewt",
  "chainId": 246,
  "networkId": 246,
  "slip44": 246
}, {
  "name": "Fantom Opera",
  "chain": "FTM",
  "network": "mainnet",
  "rpc": ["https://rpc.ftm.tools"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Fantom",
    "symbol": "FTM",
    "decimals": 18
  },
  "infoURL": "https://fantom.foundation",
  "shortName": "ftm",
  "chainId": 250,
  "networkId": 250,
  "icon": "fantom",
  "explorers": [{
    "name": "ftmscan",
    "url": "https://ftmscan.com",
    "icon": "ftmscan",
    "standard": "EIP3091"
  }]
}, {
  "name": "Huobi ECO Chain Testnet",
  "chain": "Heco",
  "network": "testnet",
  "rpc": ["https://http-testnet.hecochain.com", "wss://ws-testnet.hecochain.com"],
  "faucets": ["https://scan-testnet.hecochain.com/faucet"],
  "nativeCurrency": {
    "name": "Huobi ECO Chain Test Native Token",
    "symbol": "htt",
    "decimals": 18
  },
  "infoURL": "https://testnet.hecoinfo.com",
  "shortName": "hecot",
  "chainId": 256,
  "networkId": 256
}, {
  "name": "High Performance Blockchain",
  "chain": "HPB",
  "network": "mainnet",
  "rpc": ["https://hpb.app"],
  "faucets": [],
  "nativeCurrency": {
    "name": "High Performance Blockchain Ether",
    "symbol": "HPB",
    "decimals": 18
  },
  "infoURL": "https://hpbscan.org/",
  "shortName": "hpb",
  "chainId": 269,
  "networkId": 100,
  "slip44": 269
}, {
  "name": "KCC Mainnet",
  "chain": "KCC",
  "network": "mainnet",
  "rpc": ["https://rpc-mainnet.kcc.network", "wss://rpc-ws-mainnet.kcc.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "KuCoin Token",
    "symbol": "KCS",
    "decimals": 18
  },
  "infoURL": "https://kcc.io",
  "shortName": "kcs",
  "chainId": 321,
  "networkId": 1,
  "explorers": [{
    "name": "KCC Explorer",
    "url": "https://explorer.kcc.io/en",
    "standard": "EIP3091"
  }]
}, {
  "name": "KCC Testnet",
  "chain": "KCC",
  "network": "testnet",
  "rpc": ["https://rpc-testnet.kcc.network", "wss://rpc-ws-testnet.kcc.network"],
  "faucets": ["https://faucet-testnet.kcc.network"],
  "nativeCurrency": {
    "name": "KuCoin Testnet Token",
    "symbol": "tKCS",
    "decimals": 18
  },
  "infoURL": "https://scan-testnet.kcc.network",
  "shortName": "kcst",
  "chainId": 322,
  "networkId": 322,
  "explorers": [{
    "name": "kcc-scan",
    "url": "https://scan-testnet.kcc.network",
    "standard": "EIP3091"
  }]
}, {
  "name": "Theta Mainnet",
  "chain": "Theta",
  "network": "mainnet",
  "rpc": ["https://eth-rpc-api.thetatoken.org/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Theta Fuel",
    "symbol": "TFUEL",
    "decimals": 18
  },
  "infoURL": "https://www.thetatoken.org/",
  "shortName": "theta-mainnet",
  "chainId": 361,
  "networkId": 361,
  "explorers": [{
    "name": "Theta Mainnet Explorer",
    "url": "https://explorer.thetatoken.org",
    "standard": "EIP3091"
  }]
}, {
  "name": "Theta Sapphire Testnet",
  "chain": "Theta",
  "network": "testnet_sapphire",
  "rpc": ["https://eth-rpc-api-sapphire.thetatoken.org/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Theta Fuel",
    "symbol": "TFUEL",
    "decimals": 18
  },
  "infoURL": "https://www.thetatoken.org/",
  "shortName": "theta-sapphire",
  "chainId": 363,
  "networkId": 363,
  "explorers": [{
    "name": "Theta Sapphire Testnet Explorer",
    "url": "https://guardian-testnet-sapphire-explorer.thetatoken.org",
    "standard": "EIP3091"
  }]
}, {
  "name": "Theta Amber Testnet",
  "chain": "Theta",
  "network": "testnet_amber",
  "rpc": ["https://eth-rpc-api-amber.thetatoken.org/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Theta Fuel",
    "symbol": "TFUEL",
    "decimals": 18
  },
  "infoURL": "https://www.thetatoken.org/",
  "shortName": "theta-amber",
  "chainId": 364,
  "networkId": 364,
  "explorers": [{
    "name": "Theta Amber Testnet Explorer",
    "url": "https://guardian-testnet-amber-explorer.thetatoken.org",
    "standard": "EIP3091"
  }]
}, {
  "name": "Theta Testnet",
  "chain": "Theta",
  "network": "testnet",
  "rpc": ["https://eth-rpc-api-testnet.thetatoken.org/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Theta Fuel",
    "symbol": "TFUEL",
    "decimals": 18
  },
  "infoURL": "https://www.thetatoken.org/",
  "shortName": "theta-testnet",
  "chainId": 365,
  "networkId": 365,
  "explorers": [{
    "name": "Theta Testnet Explorer",
    "url": "https://testnet-explorer.thetatoken.org",
    "standard": "EIP3091"
  }]
}, {
  "name": "Lisinski",
  "chain": "CRO",
  "network": "mainnet",
  "rpc": ["https://rpc-bitfalls1.lisinski.online"],
  "faucets": ["https://pipa.lisinski.online"],
  "nativeCurrency": {
    "name": "Lisinski Ether",
    "symbol": "LISINSKI",
    "decimals": 18
  },
  "infoURL": "https://lisinski.online",
  "shortName": "lisinski",
  "chainId": 385,
  "networkId": 385
}, {
  "name": "Optimistic Ethereum Testnet Goerli",
  "chain": "ETH",
  "network": "goerli",
  "rpc": ["https://goerli.optimism.io/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Görli Ether",
    "symbol": "GOR",
    "decimals": 18
  },
  "infoURL": "https://optimism.io",
  "shortName": "ogor",
  "chainId": 420,
  "networkId": 420
}, {
  "name": "Rupaya",
  "chain": "RUPX",
  "network": "mainnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Rupaya",
    "symbol": "RUPX",
    "decimals": 18
  },
  "infoURL": "https://www.rupx.io",
  "shortName": "rupx",
  "chainId": 499,
  "networkId": 499,
  "slip44": 499
}, {
  "name": "Tao Network",
  "chain": "TAO",
  "network": "core",
  "rpc": ["https://rpc.testnet.tao.network", "http://rpc.testnet.tao.network:8545", "https://rpc.tao.network", "wss://rpc.tao.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Tao",
    "symbol": "TAO",
    "decimals": 18
  },
  "infoURL": "https://tao.network",
  "shortName": "tao",
  "chainId": 558,
  "networkId": 558
}, {
  "name": "Acala Mandala Testnet",
  "chain": "mACA",
  "network": "testnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Acala Mandala Token",
    "symbol": "mACA",
    "decimals": 18
  },
  "infoURL": "https://acala.network",
  "shortName": "maca",
  "chainId": 595,
  "networkId": 595
}, {
  "name": "Karura Network",
  "chain": "KAR",
  "network": "mainnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Karura Token",
    "symbol": "KAR",
    "decimals": 18
  },
  "infoURL": "https://karura.network",
  "shortName": "kar",
  "chainId": 686,
  "networkId": 686,
  "slip44": 686
}, {
  "name": "Factory 127 Testnet",
  "chain": "FETH",
  "network": "factory127 testnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Factory 127 Token",
    "symbol": "FETH",
    "decimals": 18
  },
  "infoURL": "https://www.factory127.com",
  "shortName": "tfeth",
  "chainId": 721,
  "networkId": 721,
  "slip44": 721
}, {
  "name": "cheapETH",
  "chain": "cheapETH",
  "network": "cheapnet",
  "rpc": ["https://node.cheapeth.org/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "cTH",
    "symbol": "cTH",
    "decimals": 18
  },
  "infoURL": "https://cheapeth.org/",
  "shortName": "cth",
  "chainId": 777,
  "networkId": 777
}, {
  "name": "Acala Network",
  "chain": "ACA",
  "network": "mainnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Acala Token",
    "symbol": "ACA",
    "decimals": 18
  },
  "infoURL": "https://acala.network",
  "shortName": "aca",
  "chainId": 787,
  "networkId": 787,
  "slip44": 787
}, {
  "name": "Haic",
  "chain": "Haic",
  "network": "mainnet",
  "rpc": ["https://orig.haichain.io/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Haicoin",
    "symbol": "HAIC",
    "decimals": 18
  },
  "infoURL": "https://www.haichain.io/",
  "shortName": "haic",
  "chainId": 803,
  "networkId": 803
}, {
  "name": "Callisto Mainnet",
  "chain": "CLO",
  "network": "mainnet",
  "rpc": ["https://clo-geth.0xinfra.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Callisto Mainnet Ether",
    "symbol": "CLO",
    "decimals": 18
  },
  "infoURL": "https://callisto.network",
  "shortName": "clo",
  "chainId": 820,
  "networkId": 1,
  "slip44": 820
}, {
  "name": "Callisto Testnet",
  "chain": "CLO",
  "network": "testnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Callisto Testnet Ether",
    "symbol": "TCLO",
    "decimals": 18
  },
  "infoURL": "https://callisto.network",
  "shortName": "tclo",
  "chainId": 821,
  "networkId": 2
}, {
  "name": "Wanchain",
  "chain": "WAN",
  "network": "mainnet",
  "rpc": ["https://gwan-ssl.wandevs.org:56891/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Wancoin",
    "symbol": "WAN",
    "decimals": 18
  },
  "infoURL": "https://www.wanscan.org",
  "shortName": "wan",
  "chainId": 888,
  "networkId": 888,
  "slip44": 5718350
}, {
  "name": "Nepal Blockchain Network",
  "chain": "YETI",
  "network": "mainnet",
  "rpc": ["https://api.nepalblockchain.dev", "https://api.nepalblockchain.network"],
  "faucets": ["https://faucet.nepalblockchain.network"],
  "nativeCurrency": {
    "name": "Nepal Blockchain Network Ether",
    "symbol": "YETI",
    "decimals": 18
  },
  "infoURL": "https://nepalblockchain.network",
  "shortName": "yeti",
  "chainId": 977,
  "networkId": 977
}, {
  "name": "Wanchain Testnet",
  "chain": "WAN",
  "network": "testnet",
  "rpc": ["https://gwan-ssl.wandevs.org:46891/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Wancoin",
    "symbol": "WAN",
    "decimals": 18
  },
  "infoURL": "https://testnet.wanscan.org",
  "shortName": "twan",
  "chainId": 999,
  "networkId": 999
}, {
  "name": "Klaytn Testnet Baobab",
  "chain": "KLAY",
  "network": "baobab",
  "rpc": ["https://node-api.klaytnapi.com/v1/klaytn"],
  "faucets": ["https://baobab.wallet.klaytn.com/access?next=faucet"],
  "nativeCurrency": {
    "name": "KLAY",
    "symbol": "KLAY",
    "decimals": 18
  },
  "infoURL": "https://www.klaytn.com/",
  "shortName": "Baobab",
  "chainId": 1001,
  "networkId": 1001
}, {
  "name": "Newton Testnet",
  "chain": "NEW",
  "network": "testnet",
  "rpc": ["https://rpc1.newchain.newtonproject.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Newton",
    "symbol": "NEW",
    "decimals": 18
  },
  "infoURL": "https://www.newtonproject.org/",
  "shortName": "tnew",
  "chainId": 1007,
  "networkId": 1007
}, {
  "name": "Evrice Network",
  "chain": "EVC",
  "network": "Evrice",
  "rpc": ["https://meta.evrice.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Evrice",
    "symbol": "EVC",
    "decimals": 18
  },
  "infoURL": "https://evrice.com",
  "shortName": "EVC",
  "chainId": 1010,
  "networkId": 1010
}, {
  "name": "Newton",
  "chain": "NEW",
  "network": "mainnet",
  "rpc": ["https://global.rpc.mainnet.newtonproject.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Newton",
    "symbol": "NEW",
    "decimals": 18
  },
  "infoURL": "https://www.newtonproject.org/",
  "shortName": "new",
  "chainId": 1012,
  "networkId": 1012
}, {
  "name": "Sakura",
  "chain": "Sakura",
  "network": "sakura",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Sakura",
    "symbol": "SKU",
    "decimals": 18
  },
  "infoURL": "https://clover.finance/sakura",
  "shortName": "sku",
  "chainId": 1022,
  "networkId": 1022
}, {
  "name": "Clover Testnet",
  "chain": "Clover",
  "network": "clover testnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Clover",
    "symbol": "CLV",
    "decimals": 18
  },
  "infoURL": "https://clover.finance",
  "shortName": "tclv",
  "chainId": 1023,
  "networkId": 1023
}, {
  "name": "Clover Mainnet",
  "chain": "Clover",
  "network": "clover mainnet",
  "rpc": ["https://rpc-ivy.clover.finance", "https://rpc-ivy-2.clover.finance", "https://rpc-ivy-3.clover.finance"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Clover",
    "symbol": "CLV",
    "decimals": 18
  },
  "infoURL": "https://clover.finance",
  "shortName": "clv",
  "chainId": 1024,
  "networkId": 1024
}, {
  "name": "MathChain",
  "chain": "MATH",
  "network": "mainnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "MathChain",
    "symbol": "MATH",
    "decimals": 18
  },
  "infoURL": "https://mathchain.org",
  "shortName": "MATH",
  "chainId": 1139,
  "networkId": 1139
}, {
  "name": "MathChain Testnet",
  "chain": "MATH",
  "network": "testnet",
  "rpc": ["https://galois-hk.maiziqianbao.net/rpc"],
  "faucets": ["https://scan.boka.network/#/Galois/faucet"],
  "nativeCurrency": {
    "name": "MathChain",
    "symbol": "MATH",
    "decimals": 18
  },
  "infoURL": "https://mathchain.org",
  "shortName": "tMATH",
  "chainId": 1140,
  "networkId": 1140
}, {
  "name": "Moonbeam",
  "chain": "MOON",
  "network": "moonbeam",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Glimmer",
    "symbol": "GLMR",
    "decimals": 18
  },
  "infoURL": "https://moonbeam.network/networks/moonbeam/",
  "shortName": "mbeam",
  "chainId": 1284,
  "networkId": 1284
}, {
  "name": "Moonriver",
  "chain": "MOON",
  "network": "moonriver",
  "rpc": ["https://rpc.moonriver.moonbeam.network", "wss://wss.moonriver.moonbeam.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Moonriver",
    "symbol": "MOVR",
    "decimals": 18
  },
  "infoURL": "https://moonbeam.network/networks/moonriver/",
  "shortName": "mriver",
  "chainId": 1285,
  "networkId": 1285
}, {
  "name": "Moonrock",
  "chain": "MOON",
  "network": "moonrock",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Rocs",
    "symbol": "ROC",
    "decimals": 18
  },
  "infoURL": "",
  "shortName": "mrock",
  "chainId": 1286,
  "networkId": 1286
}, {
  "name": "Moonbase Alpha",
  "chain": "MOON",
  "network": "moonbase",
  "rpc": ["https://rpc.testnet.moonbeam.network", "wss://wss.testnet.moonbeam.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Dev",
    "symbol": "DEV",
    "decimals": 18
  },
  "infoURL": "https://docs.moonbeam.network/networks/testnet/",
  "shortName": "mbase",
  "chainId": 1287,
  "networkId": 1287
}, {
  "name": "Moonshadow",
  "chain": "MOON",
  "network": "moonshadow",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Moonshadow",
    "symbol": "MSHD",
    "decimals": 18
  },
  "infoURL": "https://docs.moonbeam.network/networks/overview/",
  "shortName": "mshadow",
  "chainId": 1288,
  "networkId": 1288
}, {
  "name": "Catecoin Chain Mainnet",
  "chain": "Catechain",
  "network": "mainnet",
  "rpc": ["https://send.catechain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Catecoin",
    "symbol": "CATE",
    "decimals": 18
  },
  "infoURL": "https://catechain.com",
  "shortName": "cate",
  "chainId": 1618,
  "networkId": 1618
}, {
  "name": "Atheios",
  "chain": "ATH",
  "network": "mainnet",
  "rpc": ["https://wallet.atheios.com:8797"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Atheios Ether",
    "symbol": "ATH",
    "decimals": 18
  },
  "infoURL": "https://atheios.com",
  "shortName": "ath",
  "chainId": 1620,
  "networkId": 11235813,
  "slip44": 1620
}, {
  "name": "Teslafunds",
  "chain": "TSF",
  "network": "mainnet",
  "rpc": ["https://tsfapi.europool.me"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Teslafunds Ether",
    "symbol": "TSF",
    "decimals": 18
  },
  "infoURL": "https://teslafunds.io",
  "shortName": "tsf",
  "chainId": 1856,
  "networkId": 1
}, {
  "name": "EtherGem",
  "chain": "EGEM",
  "network": "mainnet",
  "rpc": ["https://jsonrpc.egem.io/custom"],
  "faucets": [],
  "nativeCurrency": {
    "name": "EtherGem Ether",
    "symbol": "EGEM",
    "decimals": 18
  },
  "infoURL": "https://egem.io",
  "shortName": "egem",
  "chainId": 1987,
  "networkId": 1987,
  "slip44": 1987
}, {
  "name": "420coin",
  "chain": "420",
  "network": "mainnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "Fourtwenty",
    "symbol": "420",
    "decimals": 18
  },
  "infoURL": "https://420integrated.com",
  "shortName": "420",
  "chainId": 2020,
  "networkId": 2020
}, {
  "name": "Edgeware Mainnet",
  "chain": "EDG",
  "network": "mainnet",
  "rpc": ["https://mainnet1.edgewa.re"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Edge",
    "symbol": "EDG",
    "decimals": 18
  },
  "infoURL": "http://edgewa.re",
  "shortName": "edg",
  "chainId": 2021,
  "networkId": 2021
}, {
  "name": "Beresheet Testnet",
  "chain": "EDG",
  "network": "beresheet",
  "rpc": ["https://beresheet1.edgewa.re"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Testnet Edge",
    "symbol": "tEDG",
    "decimals": 18
  },
  "infoURL": "http://edgewa.re",
  "shortName": "edgt",
  "chainId": 2022,
  "networkId": 2022
}, {
  "name": "Kortho Mainnet",
  "chain": "Kortho Chain",
  "network": "mainnet",
  "rpc": ["https://www.kortho-chain.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "KorthoChain",
    "symbol": "KTO",
    "decimals": 11
  },
  "infoURL": "https://www.kortho.io/",
  "shortName": "ktoc",
  "chainId": 2559,
  "networkId": 2559
}, {
  "name": "IoTeX Network Mainnet",
  "chain": "iotex.io",
  "network": "mainnet",
  "rpc": ["https://babel-api.mainnet.iotex.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "IoTeX",
    "symbol": "IOTX",
    "decimals": 18
  },
  "infoURL": "https://iotex.io",
  "shortName": "iotex-mainnet",
  "chainId": 4689,
  "networkId": 4689,
  "explorers": [{
    "name": "iotexscan",
    "url": "https://iotexscan.io",
    "standard": "EIP3091"
  }]
}, {
  "name": "IoTeX Network Testnet",
  "chain": "iotex.io",
  "network": "testnet",
  "rpc": ["https://babel-api.testnet.iotex.io"],
  "faucets": ["https://faucet.iotex.io/"],
  "nativeCurrency": {
    "name": "IoTeX",
    "symbol": "IOTX",
    "decimals": 18
  },
  "infoURL": "https://iotex.io",
  "shortName": "iotex-testnet",
  "chainId": 4690,
  "networkId": 4690,
  "explorers": [{
    "name": "testnet iotexscan",
    "url": "https://testnet.iotexscan.io",
    "standard": "EIP3091"
  }]
}, {
  "name": "EraSwap Mainnet",
  "chain": "ESN",
  "network": "mainnet",
  "icon": "eraswap",
  "rpc": ["https://mainnet.eraswap.network", "https://rpc-mumbai.mainnet.eraswap.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "EraSwap",
    "symbol": "ES",
    "decimals": 18
  },
  "infoURL": "https://eraswap.info/",
  "shortName": "es",
  "chainId": 5197,
  "networkId": 5197
}, {
  "name": "Syscoin Tanenbaum Testnet",
  "chain": "SYS",
  "network": "testnet",
  "rpc": ["https://tanenbaum.io/api/eth-rpc"],
  "faucets": ["https://faucet.tanenbaum.io"],
  "nativeCurrency": {
    "name": "Testnet Syscoin",
    "symbol": "tSYS",
    "decimals": 18
  },
  "infoURL": "https://syscoin.org",
  "shortName": "tsys",
  "chainId": 5700,
  "networkId": 5700
}, {
  "name": "Ontology Testnet",
  "chain": "Ontology",
  "network": "testnet",
  "rpc": ["https://polaris1.ont.io:20339", "https://polaris2.ont.io:20339", "https://polaris3.ont.io:20339", "https://polaris4.ont.io:20339"],
  "faucets": ["https://developer.ont.io/"],
  "nativeCurrency": {
    "name": "ONG",
    "symbol": "ONG",
    "decimals": 9
  },
  "infoURL": "https://ont.io/",
  "shortName": "Ontology Testnet",
  "chainId": 5851,
  "networkId": 5851,
  "explorers": [{
    "name": "explorer",
    "url": "https://explorer.ont.io/testnet",
    "standard": "EIP3091"
  }]
}, {
  "name": "Wegochain Rubidium Mainnet",
  "chain": "RBD",
  "network": "mainnet",
  "rpc": ["https://proxy.wegochain.io", "http://wallet.wegochain.io:7764"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Rubid",
    "symbol": "RBD",
    "decimals": 18
  },
  "infoURL": "http://wegochain.io",
  "shortName": "rbd",
  "chainId": 5869,
  "networkId": 5869
}, {
  "name": "MDGL Testnet",
  "chain": "MDGL",
  "network": "testnet",
  "rpc": ["https://testnet.mdgl.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "MDGL Token",
    "symbol": "MDGLT",
    "decimals": 18
  },
  "infoURL": "https://mdgl.io",
  "shortName": "mdgl",
  "chainId": 8029,
  "networkId": 8029
}, {
  "name": "GeneChain Adenine Testnet",
  "chain": "GeneChain",
  "network": "adenine",
  "rpc": ["https://rpc-testnet.genechain.io"],
  "faucets": ["https://faucet.genechain.io"],
  "nativeCurrency": {
    "name": "Testnet RNA",
    "symbol": "tRNA",
    "decimals": 18
  },
  "infoURL": "https://scan-testnet.genechain.io/",
  "shortName": "GeneChainAdn",
  "chainId": 8080,
  "networkId": 8080,
  "explorers": [{
    "name": "GeneChain Adenine Testnet Scan",
    "url": "https://scan-testnet.genechain.io",
    "standard": "EIP3091"
  }]
}, {
  "name": "Klaytn Mainnet Cypress",
  "chain": "KLAY",
  "network": "cypress",
  "rpc": ["https://node-api.klaytnapi.com/v1/klaytn"],
  "faucets": [],
  "nativeCurrency": {
    "name": "KLAY",
    "symbol": "KLAY",
    "decimals": 18
  },
  "infoURL": "https://www.klaytn.com/",
  "shortName": "Cypress",
  "chainId": 8217,
  "networkId": 8217,
  "slip44": 8217
}, {
  "name": "KorthoTest",
  "chain": "Kortho",
  "network": "Test",
  "rpc": ["https://www.krotho-test.net"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Kortho Test",
    "symbol": "KTO",
    "decimals": 11
  },
  "infoURL": "https://www.kortho.io/",
  "shortName": "Kortho",
  "chainId": 8285,
  "networkId": 8285
}, {
  "name": "TOOL Global Mainnet",
  "chain": "OLO",
  "network": "mainnet",
  "rpc": ["https://mainnet-web3.wolot.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "TOOL Global",
    "symbol": "OLO",
    "decimals": 18
  },
  "infoURL": "https://ibdt.io",
  "shortName": "olo",
  "chainId": 8723,
  "networkId": 8723,
  "slip44": 479,
  "explorers": [{
    "name": "OLO Block Explorer",
    "url": "https://www.olo.network",
    "standard": "EIP3091"
  }]
}, {
  "name": "TOOL Global Testnet",
  "chain": "OLO",
  "network": "testnet",
  "rpc": ["https://testnet-web3.wolot.io"],
  "faucets": ["https://testnet-explorer.wolot.io"],
  "nativeCurrency": {
    "name": "TOOL Global",
    "symbol": "OLO",
    "decimals": 18
  },
  "infoURL": "https://testnet-explorer.wolot.io",
  "shortName": "tolo",
  "chainId": 8724,
  "networkId": 8724,
  "slip44": 479
}, {
  "name": "bloxberg",
  "chain": "bloxberg",
  "network": "mainnet",
  "rpc": ["https://core.bloxberg.org"],
  "faucets": ["https://faucet.bloxberg.org/"],
  "nativeCurrency": {
    "name": "BERG",
    "symbol": "U+25B3",
    "decimals": 18
  },
  "infoURL": "https://bloxberg.org",
  "shortName": "berg",
  "chainId": 8995,
  "networkId": 8995
}, {
  "name": "Smart Bitcoin Cash",
  "chain": "smartBCH",
  "network": "mainnet",
  "rpc": ["https://smartbch.greyh.at", "https://rpc-mainnet.smartbch.org", "https://smartbch.fountainhead.cash/mainnet"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bitcoin Cash",
    "symbol": "BCH",
    "decimals": 18
  },
  "infoURL": "https://smartbch.org/",
  "shortName": "smartbch",
  "chainId": 10000,
  "networkId": 10000
}, {
  "name": "Smart Bitcoin Cash Testnet",
  "chain": "smartBCHTest",
  "network": "testnet",
  "rpc": ["https://rpc-testnet.smartbch.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Bitcoin Cash Test Token",
    "symbol": "BCHT",
    "decimals": 18
  },
  "infoURL": "http://smartbch.org/",
  "shortName": "smartbchtest",
  "chainId": 10001,
  "networkId": 10001
}, {
  "name": "Blockchain Genesis Mainnet",
  "chain": "GEN",
  "network": "mainnet",
  "rpc": ["https://eu.mainnet.xixoio.com", "https://us.mainnet.xixoio.com", "https://asia.mainnet.xixoio.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "GEN",
    "symbol": "GEN",
    "decimals": 18
  },
  "infoURL": "https://www.xixoio.com/",
  "shortName": "GEN",
  "chainId": 10101,
  "networkId": 10101
}, {
  "name": "MetaDot Mainnet",
  "chain": "MTT",
  "network": "mainnet",
  "rpc": ["https://mainnet.metadot.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "MetaDot Token",
    "symbol": "MTT",
    "decimals": 18
  },
  "infoURL": "https://metadot.network",
  "shortName": "mtt",
  "chainId": 16000,
  "networkId": 16000
}, {
  "name": "MetaDot Testnet",
  "chain": "MTTTest",
  "network": "devnet",
  "rpc": ["https://testnet.metadot.network"],
  "faucets": ["https://faucet.metadot.network/"],
  "nativeCurrency": {
    "name": "MetaDot Token TestNet",
    "symbol": "MTT-test",
    "decimals": 18
  },
  "infoURL": "https://metadot.network",
  "shortName": "mtttest",
  "chainId": 16001,
  "networkId": 16001
}, {
  "name": "Webchain",
  "chain": "WEB",
  "network": "mainnet",
  "rpc": ["https://node1.webchain.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Webchain Ether",
    "symbol": "WEB",
    "decimals": 18
  },
  "infoURL": "https://webchain.network",
  "shortName": "web",
  "chainId": 24484,
  "networkId": 37129
}, {
  "name": "MintMe.com Coin",
  "chain": "MINTME",
  "network": "mainnet",
  "rpc": ["https://node1.mintme.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "MintMe.com Coin",
    "symbol": "MINTME",
    "decimals": 18
  },
  "infoURL": "https://www.mintme.com",
  "shortName": "mintme",
  "chainId": 24734,
  "networkId": 37480
}, {
  "name": "Ethersocial Network",
  "chain": "ESN",
  "network": "mainnet",
  "rpc": ["https://api.esn.gonspool.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ethersocial Network Ether",
    "symbol": "ESN",
    "decimals": 18
  },
  "infoURL": "https://ethersocial.org",
  "shortName": "esn",
  "chainId": 31102,
  "networkId": 1,
  "slip44": 31102
}, {
  "name": "GoChain Testnet",
  "chain": "GO",
  "network": "testnet",
  "rpc": ["https://testnet-rpc.gochain.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "GoChain Coin",
    "symbol": "GO",
    "decimals": 18
  },
  "infoURL": "https://gochain.io",
  "shortName": "got",
  "chainId": 31337,
  "networkId": 31337,
  "slip44": 6060,
  "explorers": [{
    "name": "GoChain Testnet Explorer",
    "url": "https://testnet-explorer.gochain.io",
    "standard": "EIP3091"
  }]
}, {
  "name": "Fusion Mainnet",
  "chain": "FSN",
  "network": "mainnet",
  "rpc": ["https://mainnet.anyswap.exchange", "https://fsn.dev/api"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Fusion",
    "symbol": "FSN",
    "decimals": 18
  },
  "infoURL": "https://www.fusion.org/",
  "shortName": "fsn",
  "chainId": 32659,
  "networkId": 32659
}, {
  "name": "Energi Mainnet",
  "chain": "NRG",
  "network": "mainnet",
  "rpc": ["https://nodeapi.gen3.energi.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Energi",
    "symbol": "NRG",
    "decimals": 18
  },
  "infoURL": "https://www.energi.world/",
  "shortName": "nrg",
  "chainId": 39797,
  "networkId": 39797,
  "slip44": 39797
}, {
  "name": "pegglecoin",
  "chain": "42069",
  "network": "mainnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "pegglecoin",
    "symbol": "peggle",
    "decimals": 18
  },
  "infoURL": "https://teampeggle.com",
  "shortName": "PC",
  "chainId": 42069,
  "networkId": 42069
}, {
  "name": "Arbitrum One",
  "chainId": 42161,
  "shortName": "arb1",
  "chain": "ETH",
  "network": "mainnet",
  "networkId": 42161,
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "AETH",
    "decimals": 18
  },
  "rpc": ["https://mainnet.infura.io/v3/${INFURA_API_KEY}", "https://rpc.tenderly.co/fork/a94242fc-85e6-4280-b92e-fc852cd7a165", "https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://arb1.arbitrum.io/rpc", "wss://arb1.arbitrum.io/ws"],
  "faucets": [],
  "explorers": [{
    "name": "Arbiscan",
    "url": "https://arbiscan.io",
    "standard": "EIP3091"
  }, {
    "name": "Arbitrum Explorer",
    "url": "https://explorer.arbitrum.io",
    "standard": "EIP3091"
  }],
  "infoURL": "https://arbitrum.io"
}, {
  "name": "Celo Mainnet",
  "chainId": 42220,
  "shortName": "CELO",
  "chain": "CELO",
  "network": "Mainnet",
  "networkId": 42220,
  "nativeCurrency": {
    "name": "CELO",
    "symbol": "CELO",
    "decimals": 18
  },
  "rpc": ["https://forno.celo.org", "wss://forno.celo.org/ws"],
  "faucets": [],
  "infoURL": "https://docs.celo.org/"
}, {
  "name": "Athereum",
  "chain": "ATH",
  "network": "athereum",
  "rpc": ["https://ava.network:21015/ext/evm/rpc"],
  "faucets": ["http://athfaucet.ava.network//?address=${ADDRESS}"],
  "nativeCurrency": {
    "name": "Athereum Ether",
    "symbol": "ATH",
    "decimals": 18
  },
  "infoURL": "https://athereum.ava.network",
  "shortName": "avaeth",
  "chainId": 43110,
  "networkId": 43110
}, {
  "name": "Avalanche Fuji Testnet",
  "chain": "AVAX",
  "network": "testnet",
  "rpc": ["https://api.avax-test.network/ext/bc/C/rpc"],
  "faucets": ["https://faucet.avax-test.network/"],
  "nativeCurrency": {
    "name": "Avalanche",
    "symbol": "AVAX",
    "decimals": 18
  },
  "infoURL": "https://cchain.explorer.avax-test.network",
  "shortName": "Fuji",
  "chainId": 43113,
  "networkId": 1
}, {
  "name": "Avalanche Mainnet",
  "chain": "AVAX",
  "network": "mainnet",
  "rpc": ["https://api.avax.network/ext/bc/C/rpc"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Avalanche",
    "symbol": "AVAX",
    "decimals": 18
  },
  "infoURL": "https://cchain.explorer.avax.network/",
  "shortName": "Avalanche",
  "chainId": 43114,
  "networkId": 1
}, {
  "name": "Celo Alfajores Testnet",
  "chainId": 44787,
  "shortName": "ALFA",
  "chain": "CELO",
  "network": "Alfajores",
  "networkId": 44787,
  "nativeCurrency": {
    "name": "CELO",
    "symbol": "CELO",
    "decimals": 18
  },
  "rpc": ["https://alfajores-forno.celo-testnet.org", "wss://alfajores-forno.celo-testnet.org/ws"],
  "faucets": ["https://celo.org/developers/faucet", "https://cauldron.pretoriaresearchlab.io/alfajores-faucet"],
  "infoURL": "https://docs.celo.org/"
}, {
  "name": "Energi Testnet",
  "chain": "NRG",
  "network": "testnet",
  "rpc": ["https://nodeapi.test3.energi.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Energi",
    "symbol": "tNRG",
    "decimals": 18
  },
  "infoURL": "https://www.energi.world/",
  "shortName": "tnrg",
  "chainId": 49797,
  "networkId": 49797,
  "slip44": 49797
}, {
  "name": "Celo Baklava Testnet",
  "chainId": 62320,
  "shortName": "BKLV",
  "chain": "CELO",
  "network": "Baklava",
  "networkId": 62320,
  "nativeCurrency": {
    "name": "CELO",
    "symbol": "CELO",
    "decimals": 18
  },
  "rpc": ["https://baklava-forno.celo-testnet.org"],
  "faucets": ["https://docs.google.com/forms/d/e/1FAIpQLSdfr1BwUTYepVmmvfVUDRCwALejZ-TUva2YujNpvrEmPAX2pg/viewform", "https://cauldron.pretoriaresearchlab.io/baklava-faucet"],
  "infoURL": "https://docs.celo.org/"
}, {
  "name": "Polyjuice Testnet",
  "chain": "CKB",
  "network": "testnet",
  "icon": "polyjuice",
  "rpc": ["https://godwoken-testnet-web3-rpc.ckbapp.dev", "ws://godwoken-testnet-web3-rpc.ckbapp.dev/ws"],
  "faucets": ["https://faucet.nervos.org/"],
  "nativeCurrency": {
    "name": "CKB",
    "symbol": "CKB",
    "decimals": 8
  },
  "infoURL": "https://github.com/nervosnetwork/godwoken",
  "shortName": "ckb",
  "chainId": 71393,
  "networkId": 1
}, {
  "name": "Energy Web Volta Testnet",
  "chain": "Volta",
  "network": "testnet",
  "rpc": ["https://volta-rpc.energyweb.org", "wss://volta-rpc.energyweb.org/ws"],
  "faucets": ["https://voltafaucet.energyweb.org"],
  "nativeCurrency": {
    "name": "Volta Token",
    "symbol": "VT",
    "decimals": 18
  },
  "infoURL": "https://energyweb.org",
  "shortName": "vt",
  "chainId": 73799,
  "networkId": 73799
}, {
  "name": "Firenze test network",
  "chain": "ETH",
  "network": "testnet",
  "rpc": ["https://ethnode.primusmoney.com/firenze"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Firenze Ether",
    "symbol": "FIN",
    "decimals": 18
  },
  "infoURL": "https://primusmoney.com",
  "shortName": "firenze",
  "chainId": 78110,
  "networkId": 78110
}, {
  "name": "Matic(Polygon) Testnet Mumbai",
  "chain": "Matic(Polygon)",
  "network": "testnet",
  "rpc": ["https://rpc-mumbai.matic.today", "wss://ws-mumbai.matic.today"],
  "faucets": ["https://faucet.matic.network/"],
  "nativeCurrency": {
    "name": "Matic",
    "symbol": "tMATIC",
    "decimals": 18
  },
  "infoURL": "https://matic.network/",
  "shortName": "maticmum",
  "chainId": 80001,
  "networkId": 80001,
  "explorers": [{
    "name": "polygonscan",
    "url": "https://mumbai.polygonscan.com/",
    "standard": "EIP3091"
  }]
}, {
  "name": "QuarkChain Mainnet Root",
  "chain": "QuarkChain",
  "network": "mainnet",
  "rpc": ["http://jrpc.mainnet.quarkchain.io:38391/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io/",
  "shortName": "qkc-r",
  "chainId": 100000,
  "networkId": 100000
}, {
  "name": "QuarkChain Mainnet Shard 0",
  "chain": "QuarkChain",
  "network": "mainnet",
  "rpc": ["http://jrpc.mainnet.quarkchain.io:39000/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io/",
  "shortName": "qkc-s0",
  "chainId": 100001,
  "networkId": 100001,
  "parent": {
    "chain": "eip155-100000",
    "type": "shard"
  }
}, {
  "name": "QuarkChain Mainnet Shard 1",
  "chain": "QuarkChain",
  "network": "mainnet",
  "rpc": ["http://jrpc.mainnet.quarkchain.io:39001/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io/",
  "shortName": "qkc-s1",
  "chainId": 100002,
  "networkId": 100002,
  "parent": {
    "chain": "eip155-100000",
    "type": "shard"
  }
}, {
  "name": "QuarkChain Mainnet Shard 2",
  "chain": "QuarkChain",
  "network": "mainnet",
  "rpc": ["http://jrpc.mainnet.quarkchain.io:39002/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io/",
  "shortName": "qkc-s2",
  "chainId": 100003,
  "networkId": 100003,
  "parent": {
    "chain": "eip155-100000",
    "type": "shard"
  }
}, {
  "name": "QuarkChain Mainnet Shard 3",
  "chain": "QuarkChain",
  "network": "mainnet",
  "rpc": ["http://jrpc.mainnet.quarkchain.io:39003/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io/",
  "shortName": "qkc-s3",
  "chainId": 100004,
  "networkId": 100004,
  "parent": {
    "chain": "eip155-100000",
    "type": "shard"
  }
}, {
  "name": "QuarkChain Mainnet Shard 4",
  "chain": "QuarkChain",
  "network": "mainnet",
  "rpc": ["http://jrpc.mainnet.quarkchain.io:39004/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io/",
  "shortName": "qkc-s4",
  "chainId": 100005,
  "networkId": 100005,
  "parent": {
    "chain": "eip155-100000",
    "type": "shard"
  }
}, {
  "name": "QuarkChain Mainnet Shard 5",
  "chain": "QuarkChain",
  "network": "mainnet",
  "rpc": ["http://jrpc.mainnet.quarkchain.io:39005/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io/",
  "shortName": "qkc-s5",
  "chainId": 100006,
  "networkId": 100006,
  "parent": {
    "chain": "eip155-100000",
    "type": "shard"
  }
}, {
  "name": "QuarkChain Mainnet Shard 6",
  "chain": "QuarkChain",
  "network": "mainnet",
  "rpc": ["http://jrpc.mainnet.quarkchain.io:39006/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io/",
  "shortName": "qkc-s6",
  "chainId": 100007,
  "networkId": 100007,
  "parent": {
    "chain": "eip155-100000",
    "type": "shard"
  }
}, {
  "name": "QuarkChain Mainnet Shard 7",
  "chain": "QuarkChain",
  "network": "mainnet",
  "rpc": ["http://jrpc.mainnet.quarkchain.io:39007/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io/",
  "shortName": "qkc-s7",
  "chainId": 100008,
  "networkId": 100008,
  "parent": {
    "chain": "eip155-100000",
    "type": "shard"
  }
}, {
  "name": "QuarkChain Devnet Root",
  "chain": "QuarkChain",
  "network": "devnet",
  "rpc": ["http://jrpc.devnet.quarkchain.io:38391/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io/",
  "shortName": "qkc-d-r",
  "chainId": 110000,
  "networkId": 110000
}, {
  "name": "QuarkChain Devnet Shard 0",
  "chain": "QuarkChain",
  "network": "devnet",
  "rpc": ["http://jrpc.devnet.quarkchain.io:39000/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io/",
  "shortName": "qkc-d-s0",
  "chainId": 110001,
  "networkId": 110001,
  "parent": {
    "chain": "eip155-110000",
    "type": "shard"
  }
}, {
  "name": "QuarkChain Devnet Shard 1",
  "chain": "QuarkChain",
  "network": "devnet",
  "rpc": ["http://jrpc.devnet.quarkchain.io:39001/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io/",
  "shortName": "qkc-d-s1",
  "chainId": 110002,
  "networkId": 110002,
  "parent": {
    "chain": "eip155-110000",
    "type": "shard"
  }
}, {
  "name": "QuarkChain Devnet Shard 2",
  "chain": "QuarkChain",
  "network": "devnet",
  "rpc": ["http://jrpc.devnet.quarkchain.io:39002/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io/",
  "shortName": "qkc-d-s2",
  "chainId": 110003,
  "networkId": 110003,
  "parent": {
    "chain": "eip155-110000",
    "type": "shard"
  }
}, {
  "name": "QuarkChain Devnet Shard 3",
  "chain": "QuarkChain",
  "network": "devnet",
  "rpc": ["http://jrpc.devnet.quarkchain.io:39003/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io/",
  "shortName": "qkc-d-s3",
  "chainId": 110004,
  "networkId": 110004,
  "parent": {
    "chain": "eip155-110000",
    "type": "shard"
  }
}, {
  "name": "QuarkChain Devnet Shard 4",
  "chain": "QuarkChain",
  "network": "devnet",
  "rpc": ["http://jrpc.devnet.quarkchain.io:39004/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io/",
  "shortName": "qkc-d-s4",
  "chainId": 110005,
  "networkId": 110005,
  "parent": {
    "chain": "eip155-110000",
    "type": "shard"
  }
}, {
  "name": "QuarkChain Devnet Shard 5",
  "chain": "QuarkChain",
  "network": "devnet",
  "rpc": ["http://jrpc.devnet.quarkchain.io:39005/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io/",
  "shortName": "qkc-d-s5",
  "chainId": 110006,
  "networkId": 110006,
  "parent": {
    "chain": "eip155-110000",
    "type": "shard"
  }
}, {
  "name": "QuarkChain Devnet Shard 6",
  "chain": "QuarkChain",
  "network": "devnet",
  "rpc": ["http://jrpc.devnet.quarkchain.io:39006/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io/",
  "shortName": "qkc-d-s6",
  "chainId": 110007,
  "networkId": 110007,
  "parent": {
    "chain": "eip155-110000",
    "type": "shard"
  }
}, {
  "name": "QuarkChain Devnet Shard 7",
  "chain": "QuarkChain",
  "network": "devnet",
  "rpc": ["http://jrpc.devnet.quarkchain.io:39007/"],
  "faucets": [],
  "nativeCurrency": {
    "name": "QKC",
    "symbol": "QKC",
    "decimals": 18
  },
  "infoURL": "https://www.quarkchain.io/",
  "shortName": "qkc-d-s7",
  "chainId": 110008,
  "networkId": 110008,
  "parent": {
    "chain": "eip155-110000",
    "type": "shard"
  }
}, {
  "name": "Akroma",
  "chain": "AKA",
  "network": "mainnet",
  "rpc": ["https://remote.akroma.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Akroma Ether",
    "symbol": "AKA",
    "decimals": 18
  },
  "infoURL": "https://akroma.io",
  "shortName": "aka",
  "chainId": 200625,
  "networkId": 200625,
  "slip44": 200625
}, {
  "name": "ARTIS sigma1",
  "chain": "ARTIS",
  "network": "sigma1",
  "rpc": ["https://rpc.sigma1.artis.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ARTIS sigma1 Ether",
    "symbol": "ATS",
    "decimals": 18
  },
  "infoURL": "https://artis.eco",
  "shortName": "ats",
  "chainId": 246529,
  "networkId": 246529,
  "slip44": 246529
}, {
  "name": "ARTIS Testnet tau1",
  "chain": "ARTIS",
  "network": "tau1",
  "rpc": ["https://rpc.tau1.artis.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ARTIS tau1 Ether",
    "symbol": "tATS",
    "decimals": 18
  },
  "infoURL": "https://artis.network",
  "shortName": "atstau",
  "chainId": 246785,
  "networkId": 246785
}, {
  "name": "Polis Testnet",
  "chain": "Sparta",
  "network": "testnet",
  "icon": "polis",
  "rpc": ["https://sparta-rpc.polis.tech"],
  "faucets": ["https://faucet.polis.tech"],
  "nativeCurrency": {
    "name": "tPolis",
    "symbol": "tPOLIS",
    "decimals": 18
  },
  "infoURL": "https://polis.tech",
  "shortName": "sparta",
  "chainId": 333888,
  "networkId": 333888
}, {
  "name": "Polis Mainnet",
  "chain": "Olympus",
  "network": "mainnet",
  "icon": "polis",
  "rpc": ["https://rpc.polis.tech"],
  "faucets": ["https://faucet.polis.tech"],
  "nativeCurrency": {
    "name": "Polis",
    "symbol": "POLIS",
    "decimals": 18
  },
  "infoURL": "https://polis.tech",
  "shortName": "olympus",
  "chainId": 333999,
  "networkId": 333999
}, {
  "name": "Arbitrum Testnet Rinkeby",
  "chainId": 421611,
  "shortName": "arb-rinkeby",
  "chain": "ETH",
  "network": "rinkeby",
  "networkId": 421611,
  "nativeCurrency": {
    "name": "Arbitrum Rinkeby Ether",
    "symbol": "ARETH",
    "decimals": 18
  },
  "rpc": ["https://rinkeby.arbitrum.io/rpc", "wss://rinkeby.arbitrum.io/ws"],
  "faucets": [],
  "infoURL": "https://arbitrum.io",
  "explorers": [{
    "name": "arbitrum-rinkeby",
    "url": "https://rinkeby-explorer.arbitrum.io",
    "standard": "EIP3091"
  }]
}, {
  "name": "Ether-1",
  "chain": "ETHO",
  "network": "mainnet",
  "rpc": ["https://rpc.ether1.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether-1 Ether",
    "symbol": "ETHO",
    "decimals": 18
  },
  "infoURL": "https://ether1.org",
  "shortName": "etho",
  "chainId": 1313114,
  "networkId": 1313114,
  "slip44": 1313114
}, {
  "name": "Xerom",
  "chain": "XERO",
  "network": "mainnet",
  "rpc": ["https://rpc.xerom.org"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Xerom Ether",
    "symbol": "XERO",
    "decimals": 18
  },
  "infoURL": "https://xerom.org",
  "shortName": "xero",
  "chainId": 1313500,
  "networkId": 1313500
}, {
  "name": "Musicoin",
  "chain": "MUSIC",
  "network": "mainnet",
  "rpc": ["https://mewapi.musicoin.tw"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Musicoin",
    "symbol": "MUSIC",
    "decimals": 18
  },
  "infoURL": "https://musicoin.tw",
  "shortName": "music",
  "chainId": 7762959,
  "networkId": 7762959,
  "slip44": 184
}, {
  "name": "PepChain Churchill",
  "chain": "PEP",
  "network": "testnet",
  "rpc": ["https://churchill-rpc.pepchain.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "PepChain Churchill Ether",
    "symbol": "TPEP",
    "decimals": 18
  },
  "infoURL": "https://pepchain.io",
  "shortName": "tpep",
  "chainId": 13371337,
  "networkId": 13371337
}, {
  "name": "IOLite",
  "chain": "ILT",
  "network": "mainnet",
  "rpc": ["https://net.iolite.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "IOLite Ether",
    "symbol": "ILT",
    "decimals": 18
  },
  "infoURL": "https://iolite.io",
  "shortName": "ilt",
  "chainId": 18289463,
  "networkId": 18289463
}, {
  "name": "quarkblockchain",
  "chain": "QKI",
  "network": "mainnet",
  "rpc": ["https://hz.rpc.qkiscan.cn", "https://jp.rpc.qkiscan.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "quarkblockchain Native Token",
    "symbol": "QKI",
    "decimals": 18
  },
  "infoURL": "https://quarkblockchain.org/",
  "shortName": "qki",
  "chainId": 20181205,
  "networkId": 20181205
}, {
  "name": "Auxilium Network Mainnet",
  "chain": "AUX",
  "network": "mainnet",
  "rpc": ["https://rpc.auxilium.global"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Auxilium coin",
    "symbol": "AUX",
    "decimals": 18
  },
  "infoURL": "https://auxilium.global",
  "shortName": "auxi",
  "chainId": 28945486,
  "networkId": 28945486,
  "slip44": 344
}, {
  "name": "Joys Digital Mainnet",
  "chain": "JOYS",
  "network": "mainnet",
  "rpc": ["https://node.joys.digital"],
  "faucets": [],
  "nativeCurrency": {
    "name": "JOYS",
    "symbol": "JOYS",
    "decimals": 18
  },
  "infoURL": "https://joys.digital",
  "shortName": "JOYS",
  "chainId": 35855456,
  "networkId": 35855456
}, {
  "name": "Aquachain",
  "chain": "AQUA",
  "network": "mainnet",
  "rpc": ["https://c.onical.org", "https://tx.aquacha.in/api"],
  "faucets": ["https://aquacha.in/faucet"],
  "nativeCurrency": {
    "name": "Aquachain Ether",
    "symbol": "AQUA",
    "decimals": 18
  },
  "infoURL": "https://aquachain.github.io",
  "shortName": "aqua",
  "chainId": 61717561,
  "networkId": 61717561,
  "slip44": 61717561
}, {
  "name": "Joys Digital TestNet",
  "chain": "TOYS",
  "network": "testnet",
  "rpc": ["https://toys.joys.cash/"],
  "faucets": ["https://faucet.joys.digital/"],
  "nativeCurrency": {
    "name": "TOYS",
    "symbol": "TOYS",
    "decimals": 18
  },
  "infoURL": "https://joys.digital",
  "shortName": "TOYS",
  "chainId": 99415706,
  "networkId": 99415706
}, {
  "name": "OneLedger Nexus Mainnet",
  "chain": "OLT",
  "network": "mainnet",
  "icon": "oneledger",
  "rpc": ["https://nexus-rpc.oneledger.network"],
  "faucets": [],
  "nativeCurrency": {
    "name": "OLT",
    "symbol": "OLT",
    "decimals": 18
  },
  "infoURL": "https://oneledger.io",
  "shortName": "nexus",
  "chainId": 311752642,
  "networkId": 311752642,
  "explorers": [{
    "name": "OneLedger Block Explorer",
    "url": "https://nexus-explorer.oneledger.network",
    "standard": "EIP3091"
  }]
}, {
  "name": "IPOS Network",
  "chain": "IPOS",
  "network": "mainnet",
  "rpc": ["https://rpc.iposlab.com", "https://rpc2.iposlab.com"],
  "faucets": [],
  "nativeCurrency": {
    "name": "IPOS Network Ether",
    "symbol": "IPOS",
    "decimals": 18
  },
  "infoURL": "https://iposlab.com",
  "shortName": "ipos",
  "chainId": 1122334455,
  "networkId": 1122334455
}, {
  "name": "Aurora MainNet",
  "chain": "NEAR",
  "network": "mainnet",
  "rpc": ["https://rpc.mainnet.aurora.dev:8545"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "aETH",
    "decimals": 18
  },
  "infoURL": "https://aurora.dev",
  "shortName": "aurora",
  "chainId": 1313161554,
  "networkId": 1313161554
}, {
  "name": "Aurora TestNet",
  "chain": "NEAR",
  "network": "testnet",
  "rpc": ["https://rpc.testnet.aurora.dev:8545"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "aETH",
    "decimals": 18
  },
  "infoURL": "https://aurora.dev",
  "shortName": "aurora-testnet",
  "chainId": 1313161555,
  "networkId": 1313161555
}, {
  "name": "Aurora BetaNet",
  "chain": "NEAR",
  "network": "betanet",
  "rpc": ["https://rpc.betanet.aurora.dev:8545"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "aETH",
    "decimals": 18
  },
  "infoURL": "https://aurora.dev",
  "shortName": "aurora-betanet",
  "chainId": 1313161556,
  "networkId": 1313161556
}, {
  "name": "Harmony Mainnet Shard 0",
  "chain": "Harmony",
  "network": "mainnet",
  "rpc": ["https://api.harmony.one"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
  },
  "infoURL": "https://www.harmony.one/",
  "shortName": "hmy-s0",
  "chainId": 1666600000,
  "networkId": 1666600000,
  "explorers": [{
    "name": "Harmony Block Explorer",
    "url": "https://explorer.harmony.one",
    "standard": "EIP3091"
  }]
}, {
  "name": "Harmony Mainnet Shard 1",
  "chain": "Harmony",
  "network": "mainnet",
  "rpc": ["https://s1.api.harmony.one"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
  },
  "infoURL": "https://www.harmony.one/",
  "shortName": "hmy-s1",
  "chainId": 1666600001,
  "networkId": 1666600001
}, {
  "name": "Harmony Mainnet Shard 2",
  "chain": "Harmony",
  "network": "mainnet",
  "rpc": ["https://s2.api.harmony.one"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
  },
  "infoURL": "https://www.harmony.one/",
  "shortName": "hmy-s2",
  "chainId": 1666600002,
  "networkId": 1666600002
}, {
  "name": "Harmony Mainnet Shard 3",
  "chain": "Harmony",
  "network": "mainnet",
  "rpc": ["https://s3.api.harmony.one"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
  },
  "infoURL": "https://www.harmony.one/",
  "shortName": "hmy-s3",
  "chainId": 1666600003,
  "networkId": 1666600003
}, {
  "name": "Harmony Testnet Shard 0",
  "chain": "Harmony",
  "network": "testnet",
  "rpc": ["https://api.s0.b.hmny.io"],
  "faucets": ["https://faucet.pops.one"],
  "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
  },
  "infoURL": "https://www.harmony.one/",
  "shortName": "hmy-b-s0",
  "chainId": 1666700000,
  "networkId": 1666700000,
  "explorers": [{
    "name": "Harmony Testnet Block Explorer",
    "url": "https://explorer.pops.one",
    "standard": "EIP3091"
  }]
}, {
  "name": "Harmony Testnet Shard 1",
  "chain": "Harmony",
  "network": "testnet",
  "rpc": ["https://api.s1.b.hmny.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
  },
  "infoURL": "https://www.harmony.one/",
  "shortName": "hmy-b-s1",
  "chainId": 1666700001,
  "networkId": 1666700001
}, {
  "name": "Harmony Testnet Shard 2",
  "chain": "Harmony",
  "network": "testnet",
  "rpc": ["https://api.s2.b.hmny.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
  },
  "infoURL": "https://www.harmony.one/",
  "shortName": "hmy-b-s2",
  "chainId": 1666700002,
  "networkId": 1666700002
}, {
  "name": "Harmony Testnet Shard 3",
  "chain": "Harmony",
  "network": "testnet",
  "rpc": ["https://api.s3.b.hmny.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "ONE",
    "symbol": "ONE",
    "decimals": 18
  },
  "infoURL": "https://www.harmony.one/",
  "shortName": "hmy-b-s3",
  "chainId": 1666700003,
  "networkId": 1666700003
}, {
  "name": "Pirl",
  "chain": "PIRL",
  "network": "mainnet",
  "rpc": ["https://wallrpc.pirl.io"],
  "faucets": [],
  "nativeCurrency": {
    "name": "Pirl Ether",
    "symbol": "PIRL",
    "decimals": 18
  },
  "infoURL": "https://pirl.io",
  "shortName": "pirl",
  "chainId": 3125659152,
  "networkId": 3125659152,
  "slip44": 164
}, {
  "name": "OneLedger Frankenstein Testnet",
  "chain": "OLT",
  "network": "testnet",
  "icon": "oneledger",
  "rpc": ["https://frankenstein-rpc.oneledger.network"],
  "faucets": ["https://frankenstein-faucet.oneledger.network"],
  "nativeCurrency": {
    "name": "OLT",
    "symbol": "OLT",
    "decimals": 18
  },
  "infoURL": "https://oneledger.io",
  "shortName": "frankenstein",
  "chainId": 4216137055,
  "networkId": 4216137055,
  "explorers": [{
    "name": "OneLedger Block Explorer",
    "url": "https://frankenstein-explorer.oneledger.network",
    "standard": "EIP3091"
  }]
}, {
  "name": "Palm Testnet",
  "chain": "Palm",
  "network": "testnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "PALM",
    "symbol": "PALM",
    "decimals": 18
  },
  "infoURL": "https://palm.io",
  "shortName": "tpalm",
  "chainId": 11297108099,
  "networkId": 11297108099
}, {
  "name": "Palm Mainnet",
  "chain": "Palm",
  "network": "mainnet",
  "rpc": [],
  "faucets": [],
  "nativeCurrency": {
    "name": "PALM",
    "symbol": "PALM",
    "decimals": 18
  },
  "infoURL": "https://palm.io",
  "shortName": "palm",
  "chainId": 11297108109,
  "networkId": 11297108109
}];



