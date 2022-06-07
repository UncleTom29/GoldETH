/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface ChainlinkFeedPriceOracleInterface extends utils.Interface {
  functions: {
    "price()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "price"): FunctionFragment;

  encodeFunctionData(functionFragment: "price", values?: undefined): string;

  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;

  events: {
    "Construction(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Construction"): EventFragment;
}

export interface ConstructionEventObject {
  sender: string;
  feed: string;
}
export type ConstructionEvent = TypedEvent<
  [string, string],
  ConstructionEventObject
>;

export type ConstructionEventFilter = TypedEventFilter<ConstructionEvent>;

export interface ChainlinkFeedPriceOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ChainlinkFeedPriceOracleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    price(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  price(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    price(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Construction(address,address)"(
      sender?: null,
      feed?: null
    ): ConstructionEventFilter;
    Construction(sender?: null, feed?: null): ConstructionEventFilter;
  };

  estimateGas: {
    price(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    price(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
