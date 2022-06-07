/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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

export interface FactoryInterface extends utils.Interface {
  functions: {
    "createChild(bytes)": FunctionFragment;
    "isChild(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createChild" | "isChild"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createChild",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "isChild", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "createChild",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isChild", data: BytesLike): Result;

  events: {
    "Implementation(address,address)": EventFragment;
    "NewChild(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Implementation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewChild"): EventFragment;
}

export interface ImplementationEventObject {
  sender: string;
  implementation: string;
}
export type ImplementationEvent = TypedEvent<
  [string, string],
  ImplementationEventObject
>;

export type ImplementationEventFilter = TypedEventFilter<ImplementationEvent>;

export interface NewChildEventObject {
  sender: string;
  child: string;
}
export type NewChildEvent = TypedEvent<[string, string], NewChildEventObject>;

export type NewChildEventFilter = TypedEventFilter<NewChildEvent>;

export interface Factory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FactoryInterface;

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
    createChild(
      data_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isChild(maybeChild_: string, overrides?: CallOverrides): Promise<[boolean]>;
  };

  createChild(
    data_: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isChild(maybeChild_: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    createChild(data_: BytesLike, overrides?: CallOverrides): Promise<string>;

    isChild(maybeChild_: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "Implementation(address,address)"(
      sender?: null,
      implementation?: null
    ): ImplementationEventFilter;
    Implementation(
      sender?: null,
      implementation?: null
    ): ImplementationEventFilter;

    "NewChild(address,address)"(
      sender?: null,
      child?: null
    ): NewChildEventFilter;
    NewChild(sender?: null, child?: null): NewChildEventFilter;
  };

  estimateGas: {
    createChild(
      data_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isChild(maybeChild_: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createChild(
      data_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isChild(
      maybeChild_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
