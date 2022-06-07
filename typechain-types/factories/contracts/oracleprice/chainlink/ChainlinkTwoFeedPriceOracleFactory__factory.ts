/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ChainlinkTwoFeedPriceOracleFactory,
  ChainlinkTwoFeedPriceOracleFactoryInterface,
} from "../../../../contracts/oracleprice/chainlink/ChainlinkTwoFeedPriceOracleFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Implementation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "child",
        type: "address",
      },
    ],
    name: "NewChild",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data_",
        type: "bytes",
      },
    ],
    name: "createChild",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "base",
            type: "address",
          },
          {
            internalType: "address",
            name: "quote",
            type: "address",
          },
        ],
        internalType: "struct ChainlinkTwoFeedPriceOracleConfig",
        name: "config_",
        type: "tuple",
      },
    ],
    name: "createChildTyped",
    outputs: [
      {
        internalType: "contract ChainlinkTwoFeedPriceOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "maybeChild_",
        type: "address",
      },
    ],
    name: "isChild",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506001600055610e2e806100256000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632ea72a49146100465780638ce7fcc814610083578063fc91a89714610096575b600080fd5b6100596100543660046103a8565b6100df565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61005961009136600461041a565b61028d565b6100cf6100a4366004610457565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b604051901515815260200161007a565b600060026000541415610153576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260009081556101648484610330565b73ffffffffffffffffffffffffffffffffffffffff811660009081526001602052604090205490915060ff16156101f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4455504c49434154455f4348494c440000000000000000000000000000000000604482015260640161014a565b73ffffffffffffffffffffffffffffffffffffffff811660008181526001602081815260409283902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169092179091558151338152908101929092527f7da70c4e5387d7038610b79ca7d304caaef815826e51e67cf247135387a79bce910160405180910390a160016000559392505050565b60003073ffffffffffffffffffffffffffffffffffffffff16632ea72a49836040516020016102bc919061047b565b6040516020818303038152906040526040518263ffffffff1660e01b81526004016102e791906104c3565b6020604051808303816000875af1158015610306573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032a9190610536565b92915050565b600061033e82840184610553565b60405161034a9061039b565b815173ffffffffffffffffffffffffffffffffffffffff90811682526020928301511691810191909152604001604051809103906000f080158015610393573d6000803e3d6000fd5b509392505050565b61081f806105da83390190565b600080602083850312156103bb57600080fd5b823567ffffffffffffffff808211156103d357600080fd5b818501915085601f8301126103e757600080fd5b8135818111156103f657600080fd5b86602082850101111561040857600080fd5b60209290920196919550909350505050565b60006040828403121561042c57600080fd5b50919050565b73ffffffffffffffffffffffffffffffffffffffff8116811461045457600080fd5b50565b60006020828403121561046957600080fd5b813561047481610432565b9392505050565b60408101823561048a81610432565b73ffffffffffffffffffffffffffffffffffffffff90811683526020840135906104b382610432565b8082166020850152505092915050565b600060208083528351808285015260005b818110156104f0578581018301518582016040015282016104d4565b81811115610502576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60006020828403121561054857600080fd5b815161047481610432565b60006040828403121561056557600080fd5b6040516040810181811067ffffffffffffffff821117156105af577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405282356105bd81610432565b815260208301356105cd81610432565b6020820152939250505056fe60c060405234801561001057600080fd5b5060405161081f38038061081f83398101604081905261002f916100b4565b80516001600160a01b0390811660805260208083018051831660a05260408051338152855185169381019390935290519092168183015290517f3928767a7b1aefe738102e15a05eb56cc29c394f05627cd33764d8d42f389ff79181900360600190a15061011c565b80516001600160a01b03811681146100af57600080fd5b919050565b6000604082840312156100c657600080fd5b604080519081016001600160401b03811182821017156100f657634e487b7160e01b600052604160045260246000fd5b60405261010283610098565b815261011060208401610098565b60208201529392505050565b60805160a0516106d261014d6000396000818160e60152610256015260008181604f01526102f701526106d26000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063a035b1fe14610030575b600080fd5b61003861004a565b60405190815260200160405180910390f35b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa1580156100b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100dc919061041e565b50505091505060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa15801561014f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610173919061041e565b505050915050600082136101e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4d494e5f424153455f505249434500000000000000000000000000000000000060448201526064015b60405180910390fd5b60008113610252576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4d494e5f51554f54455f5052494345000000000000000000000000000000000060448201526064016101df565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e3919061046e565b6102f19060ff1660126104c7565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610360573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610384919061046e565b60ff169050808211156103c4578261039c82846104df565b6103a790600a610618565b6103b19086610624565b6103bb9190610661565b94505050505090565b818111156103f5576103d682826104df565b6103e190600a610618565b6103eb9084610624565b6103bb9085610661565b6103bb8385610661565b805169ffffffffffffffffffff8116811461041957600080fd5b919050565b600080600080600060a0868803121561043657600080fd5b61043f866103ff565b9450602086015193506040860151925060608601519150610462608087016103ff565b90509295509295909350565b60006020828403121561048057600080fd5b815160ff8116811461049157600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082198211156104da576104da610498565b500190565b6000828210156104f1576104f1610498565b500390565b600181815b8085111561054f57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561053557610535610498565b8085161561054257918102915b93841c93908002906104fb565b509250929050565b60008261056657506001610612565b8161057357506000610612565b81600181146105895760028114610593576105af565b6001915050610612565b60ff8411156105a4576105a4610498565b50506001821b610612565b5060208310610133831016604e8410600b84101617156105d2575081810a610612565b6105dc83836104f6565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482111561060e5761060e610498565b0290505b92915050565b60006104918383610557565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561065c5761065c610498565b500290565b600082610697577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea2646970667358221220a99bad18af126e31dd0df3b62c3b0f32d2ec4a7621ebf6b4ae6a0ebaea2fd86864736f6c634300080a0033a26469706673582212207c1fb977e9fdbb500a304bff287be72e50dc8a9f988984b78c76ef5f7df4db8364736f6c634300080a0033";

type ChainlinkTwoFeedPriceOracleFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChainlinkTwoFeedPriceOracleFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChainlinkTwoFeedPriceOracleFactory__factory extends ContractFactory {
  constructor(...args: ChainlinkTwoFeedPriceOracleFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ChainlinkTwoFeedPriceOracleFactory> {
    return super.deploy(
      overrides || {}
    ) as Promise<ChainlinkTwoFeedPriceOracleFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ChainlinkTwoFeedPriceOracleFactory {
    return super.attach(address) as ChainlinkTwoFeedPriceOracleFactory;
  }
  override connect(
    signer: Signer
  ): ChainlinkTwoFeedPriceOracleFactory__factory {
    return super.connect(signer) as ChainlinkTwoFeedPriceOracleFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChainlinkTwoFeedPriceOracleFactoryInterface {
    return new utils.Interface(
      _abi
    ) as ChainlinkTwoFeedPriceOracleFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkTwoFeedPriceOracleFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ChainlinkTwoFeedPriceOracleFactory;
  }
}
