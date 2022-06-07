// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.8.0;

import {Factory} from "./Factory.sol"; 
import {ChainlinkFeedPriceOracle} from "./ChainlinkFeedPriceOracle.sol"; 

/// @title ChainlinkFeedPriceOracleFactory
/// @notice Factory for creating and deploying `ChainlinkFeedPriceOracle`.
contract ChainlinkFeedPriceOracleFactory is Factory {
    /// @inheritdoc Factory
    function _createChild(bytes calldata data_)
        internal
        virtual
        override
        returns (address)
    {
        // This is built directly with `new` instead of cloning as we're
        // optimizing for use of cheap immutables at runtime rather than cheap
        // deployments.
        return
            address(new ChainlinkFeedPriceOracle(abi.decode(data_, (address))));
    }

    /// Typed wrapper for `createChild` with Source.
    /// Use original `Factory` `createChild` function signature if function
    /// parameters are already encoded.
    ///
    /// @param config_ `address` of the price oracle.
    /// @return New `ChainlinkFeedPriceOracle` child contract address.
    function createChildTyped(address config_)
        external
        returns (ChainlinkFeedPriceOracle)
    {
        return ChainlinkFeedPriceOracle(this.createChild(abi.encode(config_)));
    }
}