// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.8.10;

// Open Zeppelin imports.
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC1155} from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

import {IPriceOracle} from "./oracleprice/IPriceOracle.sol";
import {PriceOracleConstants} from "./oracleprice/PriceOracleConstants.sol";

struct GildConfig {
    string name;
    string symbol;
    string uri;
    uint256 erc20OverburnNumerator;
    uint256 erc20OverburnDenominator;
    IPriceOracle priceOracle;
}
contract Gildable is ERC20, ERC1155, ReentrancyGuard {
    /// Sender has constructed the contract.
    event Construction(address sender, GildConfig config);

    /// Some ETH has been gilded.
    event Gild(
        /// `msg.sender` address gilding ETH.
        address sender,
        /// Reference price gilded at.
        uint256 price,
        /// Amount of token gilded.
        uint256 amount
    );
    /// Some native token has been ungilded.
    event Ungild(
        /// `msg.sender` address ungilding native token.
        address sender,
        /// Reference price ungilded at.
        uint256 price,
        /// Amount of token ungilded.
        uint256 amount
    );

    /// erc20 is burned faster than erc1155.
    /// This is the numerator for that.
    uint256 public immutable erc20OverburnNumerator;
    /// erc20 is burned faster than erc1155.
    /// This is the denominator for that.
    uint256 public immutable erc20OverburnDenominator;

    // Price oracle.
    IPriceOracle public immutable priceOracle;

    /// Constructs both erc20 and erc1155 tokens and sets oracle addresses.
    constructor(GildConfig memory config_)
        ERC20(config_.name, config_.symbol)
        ERC1155(config_.uri)
    {
        erc20OverburnNumerator = config_.erc20OverburnNumerator;
        erc20OverburnDenominator = config_.erc20OverburnDenominator;
        priceOracle = config_.priceOracle;
        emit Construction(msg.sender, config_);
    }

    function _gild(uint256 amount_, uint256 minPrice_)
        internal
        nonReentrant
        returns (uint256)
    {
        uint256 price_ = priceOracle.price();
        require(price_ >= minPrice_, "MIN_PRICE");

        // Amount of GETH to mint.
        uint256 gethAmount_ = (amount_ * price_) / PriceOracleConstants.ONE;
        require(gethAmount_ >= erc20OverburnDenominator, "MIN_GILD");
        emit Gild(msg.sender, price_, amount_);

        // erc20 mint.
        _mint(msg.sender, gethAmount_);

        // erc1155 mint.
        // Receiving contracts MUST implement `IERC1155Receiver`.
        _mint(msg.sender, price_, gethAmount_, "");
        return price_;
    }

    /// Overburn GETH at 1001:1000 ratio to receive initial ETH refund.
    /// If the `msg.sender` does not have _both_ the erc1155 and erc20 balances
    /// for a given reference price the ETH will not ungild. The erc20 and
    /// erc1155 amounts as `xauReferencePrice * ethAmount` (+0.1% for erc20)
    /// will be burned.
    /// @param price_ oracle price in Native asset. MUST correspond
    /// to an erc1155 balance held by `msg.sender`.
    /// @param erc1155Amount_ the amount of ETH to ungild.
    function _ungild(uint256 price_, uint256 erc1155Amount_)
        internal
        nonReentrant
        returns (uint256)
    {
        require(erc1155Amount_ >= erc20OverburnDenominator, "MIN_UNGILD");

        // GETH erc20 burn.
        // 0.1% more than erc1155 burn.
        _burn(
            msg.sender,
            (erc1155Amount_ * erc20OverburnNumerator) / erc20OverburnDenominator
        );

        // erc1155 burn.
        _burn(msg.sender, price_, erc1155Amount_);

        // Amount of token to ungild.
        uint256 amount_ = (erc1155Amount_ * PriceOracleConstants.ONE) / price_;
        emit Ungild(msg.sender, price_, amount_);

        return amount_;
    
    }
}