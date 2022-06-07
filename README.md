# Contract Deployment

ChainlinkTwoFeedPriceOracleFactory deployed to: 0xE638F1a1a4E5C918E555bA64c44E28beAA1C6FfF

ChainlinkTwoFeedPriceOracle deployed to: 0xF0e682050498979EE72cbb7a8154200eC9b1357f

NativeGildFactoryFactory deployed to: 0xd716D2aB210E00b4362cC9C580bbb80fA22A6539

NativeGild deployed to: 0x64AF9b04Ec8A5bcB060548E2a94E32Df93920B26

# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
# Gild
To gild means to cover with gold.
A wrapped token that wraps and unwraps an EVM chain's native token based on a price oracle.
The same as wrapped eth (WETH). WETH "wraps" ETH 1:1 in an erc20 token, which can be unwrapped to recover the original ETH. GildEth (ETHg) encircles (gilds) ETH with an erc20 token at the current reference gold price, which can be unwrapped to recover the original ETH. The gilding is represented by an NFT (erc1155) that the gilder owns. The NFT owner can convert ETHg to ETH at the same rate that ETHg was minted for that NFT. When it is ungilded, 0.1 percent more ETHg must be burned (overburn). The overburn secures a sliver of ETH in each gilding to assist in the growth of an organic ETHg community. Anyone wishing to ungild all of their ETH must first obtain a small amount of extra ETHg from another gilder. The most severe strain on ETHg will most likely occur during rapid ETH market price spike and crash cycles. We should expect large amounts of ETHg to be minted by fearful ETH hodlers whenever ETH approaches an ATH or similar. As the market price of ETH falls due to large new ETHg supply, there will be a lot of pressure on ETHg, possibly resulting in short-term chaos. Because of the overburn, a "bank run" on ETHg will push the market price up towards the current reference gold price, incentivizing new gildings. Long term, the steady cumulative increase in locked ETH in the system will cushion future ETHg market price shocks. The figure of 0.1 percent is somewhat arbitrary, but it is meant to compete with typical onchain DEX trades that include fee percent + slippage + gas. The goal is for the target audience to find wrapping ETH to ETHg more appealing than trading their ETH for stablecoins.

# Significance

If the market price of ETHg is 0.8x the reference price of gold then gild 1 ETH and buy 0.8 ETH. If the market price of ETH goes up 50% against gold then sell 0.8 ETH for 1.6x erc20 minted, unlock 1 ETH and sell remaining erc20.

Feel somewhat safe knowing that the market price of ETHg erc20 can never be higher than the reference price of gold. For example, if the market price of ETHg is 1.1x gold price then gild 1 ETH to buy 1.1 ETH, infinitely. This means there is an upper limit on the cost to ungild later.

# Implementation

EthGild is an erc1155 and an erc20 token. The default behavior of all tokens is Open Zeppelin. This works because none of the function names overlap, or if the signature overloads are done cleanly (e.g. '_mint').

# Gilding

Call the payable `gild` function with an ETH `value` to be gilded. The
"reference price" is source from Chainlink oracle for internal calculations, nothing is actually bought/sold/traded in a gild. The erc1155 is minted as the current reference price in ETH as its id, and the reference price multiplied by ETH locked as amount (18 decimals). The ETHg erc20 is minted as the reference price multiplied by ETH locked as amount(18 decimals). The ETH amount is calculated as the `msg.value` sent to the EthGild contract (excludes gas).

# Ungilding

The erc1155 id (reference price) and amount of ETH to ungild must be specified to the `ungild` function. The erc1155 under the reference priceid is burned as ETH being ungild multiplied by the reference price. The ETHg erc20 is burned as 1001/1000 times the erc1155 burn. The ETH amount is sent to `msg.sender` (excludes gas).
# Reentrancy
The erc20 minting and all burning is not reentrant but the erc1155 mint _is_ reentrant. Both `gild` and `ungild` end with reentrant calls to the `msg.sender`. `gild` will attempt to treat the `msg.sender` as an `IERC1155Receiver`. `ungild` will call the sender's `receive` function when it sends the ungilded ETH. This is safe for the EthGild contract state as the reentrant calls are last and allowed to facilitate creative use-cases.
# Tokenomics

- Market price pressure above reference price of 1 ounce of gold.
- Exceeding this allows anyone to gild 1 ETH, sell minted ETHg, buy more
than 1 ETH, repeat infinitely.
- Market price pressure below max recent ETH drawdown.
- Exceeding this allows all gilded eth to be ungilded on a market buy of
ETHg cheaper than the gilded ETH backing it.
- Ranging between two (dynamic) limits.
- Gild when market is high to leverage ETH without liquidation threat.
- Buy low to anticipate upward "bank runs".
- Use in range as less-volatile proxy to underlying ETH value.
- Use in range for LP on AMM with low IL.
- Pair with other gold tokens knowing that ETHg is bounded by gold
reference price.
- IL is credibly impermanent, or at least mitigated.
- All liquidity on AMM is locking ETH in the bonding curve so more
liquidity implies tighter market (virtuous cycle).
- Should always be baseline supply/demand from leveraging use-case.
- Overburn should always tighten the price range as cumulative (un)gild
volume builds over time.
- The more ETHg is used outside of the (un)gild process, the more
underyling ETH is locked

# Deployment Data

chainlinkTwoFeedPriceOracleFactory deployed to: 0xE638F1a1a4E5C918E555bA64c44E28beAA1C6FfF
tx {
  hash: '0x3ff7e0cb0b625ba9858f3905c505cbfc4d28d0f1c921cabbe4b0a6345cbdf2b1',
  type: 2,
  accessList: [],
  blockHash: null,
  blockNumber: null,
  transactionIndex: null,
  confirmations: 0,
  from: '0xfa4774d49EdD0CE5d1263284F11245e5162BFd11',
  gasPrice: BigNumber { value: "2500000016" },
  maxPriorityFeePerGas: BigNumber { value: "2500000000" },
  maxFeePerGas: BigNumber { value: "2500000020" },
  gasLimit: BigNumber { value: "445541" },
  to: '0xE638F1a1a4E5C918E555bA64c44E28beAA1C6FfF',
  value: BigNumber { value: "0" },
  nonce: 3,
  data: '0x8ce7fcc8000000000000000000000000ab594600376ec9fd91f8e885dadf0ce036862de00000000000000000000000000c466540b2ee1a31b441671eac0ca886e051e410',
  r: '0xcffafae11d5f50272dde2ec95e7f623b39e5304dc236b590941b89f9c333e113',
  s: '0x27204f3c9e8223c3a14cfd1f2a908dec5d337e44de2104b31d4311cce4ed3d09',
  v: 0,
  creates: null,
  chainId: 4,
  wait: [Function (anonymous)]
}
chainlinkTwoFeedPriceOracle deployed to: 0xF0e682050498979EE72cbb7a8154200eC9b1357f
nativeGildFactoryFactory deployed to: 0xd716D2aB210E00b4362cC9C580bbb80fA22A6539
nativeGildTx {
  hash: '0x7ddb4cf3dcbe178b2360848c6b23bdb542ef80c2b5db3d4a86bc5a026fb8e53a',
  type: 2,
  accessList: [],
  blockHash: '0x4fdcb15e3236091843b071d9947c06bb3d7acdf5343b52e6c3f9d2ba4d26b62c',
  blockNumber: 10810802,
  transactionIndex: 10,
  confirmations: 1,
  from: '0xfa4774d49EdD0CE5d1263284F11245e5162BFd11',
  gasPrice: BigNumber { value: "2500000017" },
  maxPriorityFeePerGas: BigNumber { value: "2500000000" },
  maxFeePerGas: BigNumber { value: "2500000021" },
  gasLimit: BigNumber { value: "2964703" },
  to: '0xd716D2aB210E00b4362cC9C580bbb80fA22A6539',
  value: BigNumber { value: "0" },
  nonce: 5,
  data: '0x7e8f5cbb000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000003e900000000000000000000000000000000000000000000000000000000000003e8000000000000000000000000f0e682050498979ee72cbb7a8154200ec9b1357f000000000000000000000000000000000000000000000000000000000000000745746847696c6400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000445544867000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000042697066733a2f2f6261666b7265696168757474616b326a766a7a736434723632786f78623465326d6870686236366f34636c326e7465676e6a7269647479716e7a34000000000000000000000000000000000000000000000000000000000000',
  r: '0x21ed6c77795796886654da215a6ba3b5a9898ebf81ea2bf98ebd6ed8c1362d3b',
  s: '0x508cda308a8ab9b96ed93ca788b5ae75b17bc255e09b0e0f23fe275bc431c00f',
  v: 0,
  creates: null,
  chainId: 4,
  wait: [Function (anonymous)]
}
NativeGild deployed to: 0x64AF9b04Ec8A5bcB060548E2a94E32Df93920B26
