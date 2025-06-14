import {
  type ABIGetter,
  type ABIReceiver,
  type ABIType,
  Address,
  Builder,
  Cell,
  type Contract,
  type ContractABI,
  type ContractProvider,
  Dictionary,
  type DictionaryValue,
  type Sender,
  Slice,
  TupleBuilder,
  TupleReader,
  beginCell,
  contractAddress,
} from '@ton/core';

export type DataSize = {
  $$type: 'DataSize';
  cells: bigint;
  bits: bigint;
  refs: bigint;
};

export function storeDataSize(src: DataSize) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeInt(src.cells, 257);
    b_0.storeInt(src.bits, 257);
    b_0.storeInt(src.refs, 257);
  };
}

export function loadDataSize(slice: Slice) {
  const sc_0 = slice;
  const _cells = sc_0.loadIntBig(257);
  const _bits = sc_0.loadIntBig(257);
  const _refs = sc_0.loadIntBig(257);
  return {
    $$type: 'DataSize' as const,
    cells: _cells,
    bits: _bits,
    refs: _refs,
  };
}

export function loadTupleDataSize(source: TupleReader) {
  const _cells = source.readBigNumber();
  const _bits = source.readBigNumber();
  const _refs = source.readBigNumber();
  return {
    $$type: 'DataSize' as const,
    cells: _cells,
    bits: _bits,
    refs: _refs,
  };
}

export function loadGetterTupleDataSize(source: TupleReader) {
  const _cells = source.readBigNumber();
  const _bits = source.readBigNumber();
  const _refs = source.readBigNumber();
  return {
    $$type: 'DataSize' as const,
    cells: _cells,
    bits: _bits,
    refs: _refs,
  };
}

export function storeTupleDataSize(source: DataSize) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.cells);
  builder.writeNumber(source.bits);
  builder.writeNumber(source.refs);
  return builder.build();
}

export function dictValueParserDataSize(): DictionaryValue<DataSize> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeDataSize(src)).endCell());
    },
    parse: (src) => {
      return loadDataSize(src.loadRef().beginParse());
    },
  };
}

export type SignedBundle = {
  $$type: 'SignedBundle';
  signature: Buffer;
  signedData: Slice;
};

export function storeSignedBundle(src: SignedBundle) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeBuffer(src.signature);
    b_0.storeBuilder(src.signedData.asBuilder());
  };
}

export function loadSignedBundle(slice: Slice) {
  const sc_0 = slice;
  const _signature = sc_0.loadBuffer(64);
  const _signedData = sc_0;
  return {
    $$type: 'SignedBundle' as const,
    signature: _signature,
    signedData: _signedData,
  };
}

export function loadTupleSignedBundle(source: TupleReader) {
  const _signature = source.readBuffer();
  const _signedData = source.readCell().asSlice();
  return {
    $$type: 'SignedBundle' as const,
    signature: _signature,
    signedData: _signedData,
  };
}

export function loadGetterTupleSignedBundle(source: TupleReader) {
  const _signature = source.readBuffer();
  const _signedData = source.readCell().asSlice();
  return {
    $$type: 'SignedBundle' as const,
    signature: _signature,
    signedData: _signedData,
  };
}

export function storeTupleSignedBundle(source: SignedBundle) {
  const builder = new TupleBuilder();
  builder.writeBuffer(source.signature);
  builder.writeSlice(source.signedData.asCell());
  return builder.build();
}

export function dictValueParserSignedBundle(): DictionaryValue<SignedBundle> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeSignedBundle(src)).endCell());
    },
    parse: (src) => {
      return loadSignedBundle(src.loadRef().beginParse());
    },
  };
}

export type StateInit = {
  $$type: 'StateInit';
  code: Cell;
  data: Cell;
};

export function storeStateInit(src: StateInit) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeRef(src.code);
    b_0.storeRef(src.data);
  };
}

export function loadStateInit(slice: Slice) {
  const sc_0 = slice;
  const _code = sc_0.loadRef();
  const _data = sc_0.loadRef();
  return { $$type: 'StateInit' as const, code: _code, data: _data };
}

export function loadTupleStateInit(source: TupleReader) {
  const _code = source.readCell();
  const _data = source.readCell();
  return { $$type: 'StateInit' as const, code: _code, data: _data };
}

export function loadGetterTupleStateInit(source: TupleReader) {
  const _code = source.readCell();
  const _data = source.readCell();
  return { $$type: 'StateInit' as const, code: _code, data: _data };
}

export function storeTupleStateInit(source: StateInit) {
  const builder = new TupleBuilder();
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

export function dictValueParserStateInit(): DictionaryValue<StateInit> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
    },
    parse: (src) => {
      return loadStateInit(src.loadRef().beginParse());
    },
  };
}

export type Context = {
  $$type: 'Context';
  bounceable: boolean;
  sender: Address;
  value: bigint;
  raw: Slice;
};

export function storeContext(src: Context) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeBit(src.bounceable);
    b_0.storeAddress(src.sender);
    b_0.storeInt(src.value, 257);
    b_0.storeRef(src.raw.asCell());
  };
}

export function loadContext(slice: Slice) {
  const sc_0 = slice;
  const _bounceable = sc_0.loadBit();
  const _sender = sc_0.loadAddress();
  const _value = sc_0.loadIntBig(257);
  const _raw = sc_0.loadRef().asSlice();
  return {
    $$type: 'Context' as const,
    bounceable: _bounceable,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

export function loadTupleContext(source: TupleReader) {
  const _bounceable = source.readBoolean();
  const _sender = source.readAddress();
  const _value = source.readBigNumber();
  const _raw = source.readCell().asSlice();
  return {
    $$type: 'Context' as const,
    bounceable: _bounceable,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

export function loadGetterTupleContext(source: TupleReader) {
  const _bounceable = source.readBoolean();
  const _sender = source.readAddress();
  const _value = source.readBigNumber();
  const _raw = source.readCell().asSlice();
  return {
    $$type: 'Context' as const,
    bounceable: _bounceable,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

export function storeTupleContext(source: Context) {
  const builder = new TupleBuilder();
  builder.writeBoolean(source.bounceable);
  builder.writeAddress(source.sender);
  builder.writeNumber(source.value);
  builder.writeSlice(source.raw.asCell());
  return builder.build();
}

export function dictValueParserContext(): DictionaryValue<Context> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeContext(src)).endCell());
    },
    parse: (src) => {
      return loadContext(src.loadRef().beginParse());
    },
  };
}

export type SendParameters = {
  $$type: 'SendParameters';
  mode: bigint;
  body: Cell | null;
  code: Cell | null;
  data: Cell | null;
  value: bigint;
  to: Address;
  bounce: boolean;
};

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body);
    } else {
      b_0.storeBit(false);
    }
    if (src.code !== null && src.code !== undefined) {
      b_0.storeBit(true).storeRef(src.code);
    } else {
      b_0.storeBit(false);
    }
    if (src.data !== null && src.data !== undefined) {
      b_0.storeBit(true).storeRef(src.data);
    } else {
      b_0.storeBit(false);
    }
    b_0.storeInt(src.value, 257);
    b_0.storeAddress(src.to);
    b_0.storeBit(src.bounce);
  };
}

export function loadSendParameters(slice: Slice) {
  const sc_0 = slice;
  const _mode = sc_0.loadIntBig(257);
  const _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  const _code = sc_0.loadBit() ? sc_0.loadRef() : null;
  const _data = sc_0.loadBit() ? sc_0.loadRef() : null;
  const _value = sc_0.loadIntBig(257);
  const _to = sc_0.loadAddress();
  const _bounce = sc_0.loadBit();
  return {
    $$type: 'SendParameters' as const,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
    value: _value,
    to: _to,
    bounce: _bounce,
  };
}

export function loadTupleSendParameters(source: TupleReader) {
  const _mode = source.readBigNumber();
  const _body = source.readCellOpt();
  const _code = source.readCellOpt();
  const _data = source.readCellOpt();
  const _value = source.readBigNumber();
  const _to = source.readAddress();
  const _bounce = source.readBoolean();
  return {
    $$type: 'SendParameters' as const,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
    value: _value,
    to: _to,
    bounce: _bounce,
  };
}

export function loadGetterTupleSendParameters(source: TupleReader) {
  const _mode = source.readBigNumber();
  const _body = source.readCellOpt();
  const _code = source.readCellOpt();
  const _data = source.readCellOpt();
  const _value = source.readBigNumber();
  const _to = source.readAddress();
  const _bounce = source.readBoolean();
  return {
    $$type: 'SendParameters' as const,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
    value: _value,
    to: _to,
    bounce: _bounce,
  };
}

export function storeTupleSendParameters(source: SendParameters) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.mode);
  builder.writeCell(source.body);
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  builder.writeNumber(source.value);
  builder.writeAddress(source.to);
  builder.writeBoolean(source.bounce);
  return builder.build();
}

export function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
    },
    parse: (src) => {
      return loadSendParameters(src.loadRef().beginParse());
    },
  };
}

export type MessageParameters = {
  $$type: 'MessageParameters';
  mode: bigint;
  body: Cell | null;
  value: bigint;
  to: Address;
  bounce: boolean;
};

export function storeMessageParameters(src: MessageParameters) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body);
    } else {
      b_0.storeBit(false);
    }
    b_0.storeInt(src.value, 257);
    b_0.storeAddress(src.to);
    b_0.storeBit(src.bounce);
  };
}

export function loadMessageParameters(slice: Slice) {
  const sc_0 = slice;
  const _mode = sc_0.loadIntBig(257);
  const _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  const _value = sc_0.loadIntBig(257);
  const _to = sc_0.loadAddress();
  const _bounce = sc_0.loadBit();
  return {
    $$type: 'MessageParameters' as const,
    mode: _mode,
    body: _body,
    value: _value,
    to: _to,
    bounce: _bounce,
  };
}

export function loadTupleMessageParameters(source: TupleReader) {
  const _mode = source.readBigNumber();
  const _body = source.readCellOpt();
  const _value = source.readBigNumber();
  const _to = source.readAddress();
  const _bounce = source.readBoolean();
  return {
    $$type: 'MessageParameters' as const,
    mode: _mode,
    body: _body,
    value: _value,
    to: _to,
    bounce: _bounce,
  };
}

export function loadGetterTupleMessageParameters(source: TupleReader) {
  const _mode = source.readBigNumber();
  const _body = source.readCellOpt();
  const _value = source.readBigNumber();
  const _to = source.readAddress();
  const _bounce = source.readBoolean();
  return {
    $$type: 'MessageParameters' as const,
    mode: _mode,
    body: _body,
    value: _value,
    to: _to,
    bounce: _bounce,
  };
}

export function storeTupleMessageParameters(source: MessageParameters) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.mode);
  builder.writeCell(source.body);
  builder.writeNumber(source.value);
  builder.writeAddress(source.to);
  builder.writeBoolean(source.bounce);
  return builder.build();
}

export function dictValueParserMessageParameters(): DictionaryValue<MessageParameters> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeMessageParameters(src)).endCell()
      );
    },
    parse: (src) => {
      return loadMessageParameters(src.loadRef().beginParse());
    },
  };
}

export type DeployParameters = {
  $$type: 'DeployParameters';
  mode: bigint;
  body: Cell | null;
  value: bigint;
  bounce: boolean;
  init: StateInit;
};

export function storeDeployParameters(src: DeployParameters) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body);
    } else {
      b_0.storeBit(false);
    }
    b_0.storeInt(src.value, 257);
    b_0.storeBit(src.bounce);
    b_0.store(storeStateInit(src.init));
  };
}

export function loadDeployParameters(slice: Slice) {
  const sc_0 = slice;
  const _mode = sc_0.loadIntBig(257);
  const _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  const _value = sc_0.loadIntBig(257);
  const _bounce = sc_0.loadBit();
  const _init = loadStateInit(sc_0);
  return {
    $$type: 'DeployParameters' as const,
    mode: _mode,
    body: _body,
    value: _value,
    bounce: _bounce,
    init: _init,
  };
}

export function loadTupleDeployParameters(source: TupleReader) {
  const _mode = source.readBigNumber();
  const _body = source.readCellOpt();
  const _value = source.readBigNumber();
  const _bounce = source.readBoolean();
  const _init = loadTupleStateInit(source);
  return {
    $$type: 'DeployParameters' as const,
    mode: _mode,
    body: _body,
    value: _value,
    bounce: _bounce,
    init: _init,
  };
}

export function loadGetterTupleDeployParameters(source: TupleReader) {
  const _mode = source.readBigNumber();
  const _body = source.readCellOpt();
  const _value = source.readBigNumber();
  const _bounce = source.readBoolean();
  const _init = loadGetterTupleStateInit(source);
  return {
    $$type: 'DeployParameters' as const,
    mode: _mode,
    body: _body,
    value: _value,
    bounce: _bounce,
    init: _init,
  };
}

export function storeTupleDeployParameters(source: DeployParameters) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.mode);
  builder.writeCell(source.body);
  builder.writeNumber(source.value);
  builder.writeBoolean(source.bounce);
  builder.writeTuple(storeTupleStateInit(source.init));
  return builder.build();
}

export function dictValueParserDeployParameters(): DictionaryValue<DeployParameters> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeDeployParameters(src)).endCell());
    },
    parse: (src) => {
      return loadDeployParameters(src.loadRef().beginParse());
    },
  };
}

export type StdAddress = {
  $$type: 'StdAddress';
  workchain: bigint;
  address: bigint;
};

export function storeStdAddress(src: StdAddress) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeInt(src.workchain, 8);
    b_0.storeUint(src.address, 256);
  };
}

export function loadStdAddress(slice: Slice) {
  const sc_0 = slice;
  const _workchain = sc_0.loadIntBig(8);
  const _address = sc_0.loadUintBig(256);
  return {
    $$type: 'StdAddress' as const,
    workchain: _workchain,
    address: _address,
  };
}

export function loadTupleStdAddress(source: TupleReader) {
  const _workchain = source.readBigNumber();
  const _address = source.readBigNumber();
  return {
    $$type: 'StdAddress' as const,
    workchain: _workchain,
    address: _address,
  };
}

export function loadGetterTupleStdAddress(source: TupleReader) {
  const _workchain = source.readBigNumber();
  const _address = source.readBigNumber();
  return {
    $$type: 'StdAddress' as const,
    workchain: _workchain,
    address: _address,
  };
}

export function storeTupleStdAddress(source: StdAddress) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.workchain);
  builder.writeNumber(source.address);
  return builder.build();
}

export function dictValueParserStdAddress(): DictionaryValue<StdAddress> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeStdAddress(src)).endCell());
    },
    parse: (src) => {
      return loadStdAddress(src.loadRef().beginParse());
    },
  };
}

export type VarAddress = {
  $$type: 'VarAddress';
  workchain: bigint;
  address: Slice;
};

export function storeVarAddress(src: VarAddress) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeInt(src.workchain, 32);
    b_0.storeRef(src.address.asCell());
  };
}

export function loadVarAddress(slice: Slice) {
  const sc_0 = slice;
  const _workchain = sc_0.loadIntBig(32);
  const _address = sc_0.loadRef().asSlice();
  return {
    $$type: 'VarAddress' as const,
    workchain: _workchain,
    address: _address,
  };
}

export function loadTupleVarAddress(source: TupleReader) {
  const _workchain = source.readBigNumber();
  const _address = source.readCell().asSlice();
  return {
    $$type: 'VarAddress' as const,
    workchain: _workchain,
    address: _address,
  };
}

export function loadGetterTupleVarAddress(source: TupleReader) {
  const _workchain = source.readBigNumber();
  const _address = source.readCell().asSlice();
  return {
    $$type: 'VarAddress' as const,
    workchain: _workchain,
    address: _address,
  };
}

export function storeTupleVarAddress(source: VarAddress) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.workchain);
  builder.writeSlice(source.address.asCell());
  return builder.build();
}

export function dictValueParserVarAddress(): DictionaryValue<VarAddress> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeVarAddress(src)).endCell());
    },
    parse: (src) => {
      return loadVarAddress(src.loadRef().beginParse());
    },
  };
}

export type BasechainAddress = {
  $$type: 'BasechainAddress';
  hash: bigint | null;
};

export function storeBasechainAddress(src: BasechainAddress) {
  return (builder: Builder) => {
    const b_0 = builder;
    if (src.hash !== null && src.hash !== undefined) {
      b_0.storeBit(true).storeInt(src.hash, 257);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadBasechainAddress(slice: Slice) {
  const sc_0 = slice;
  const _hash = sc_0.loadBit() ? sc_0.loadIntBig(257) : null;
  return { $$type: 'BasechainAddress' as const, hash: _hash };
}

export function loadTupleBasechainAddress(source: TupleReader) {
  const _hash = source.readBigNumberOpt();
  return { $$type: 'BasechainAddress' as const, hash: _hash };
}

export function loadGetterTupleBasechainAddress(source: TupleReader) {
  const _hash = source.readBigNumberOpt();
  return { $$type: 'BasechainAddress' as const, hash: _hash };
}

export function storeTupleBasechainAddress(source: BasechainAddress) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.hash);
  return builder.build();
}

export function dictValueParserBasechainAddress(): DictionaryValue<BasechainAddress> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeBasechainAddress(src)).endCell());
    },
    parse: (src) => {
      return loadBasechainAddress(src.loadRef().beginParse());
    },
  };
}

export type JettonData = {
  $$type: 'JettonData';
  total_supply: bigint;
  mintable: boolean;
  owner: Address;
  content: Cell;
  wallet_code: Cell;
};

export function storeJettonData(src: JettonData) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeInt(src.total_supply, 257);
    b_0.storeBit(src.mintable);
    b_0.storeAddress(src.owner);
    b_0.storeRef(src.content);
    b_0.storeRef(src.wallet_code);
  };
}

export function loadJettonData(slice: Slice) {
  const sc_0 = slice;
  const _total_supply = sc_0.loadIntBig(257);
  const _mintable = sc_0.loadBit();
  const _owner = sc_0.loadAddress();
  const _content = sc_0.loadRef();
  const _wallet_code = sc_0.loadRef();
  return {
    $$type: 'JettonData' as const,
    total_supply: _total_supply,
    mintable: _mintable,
    owner: _owner,
    content: _content,
    wallet_code: _wallet_code,
  };
}

export function loadTupleJettonData(source: TupleReader) {
  const _total_supply = source.readBigNumber();
  const _mintable = source.readBoolean();
  const _owner = source.readAddress();
  const _content = source.readCell();
  const _wallet_code = source.readCell();
  return {
    $$type: 'JettonData' as const,
    total_supply: _total_supply,
    mintable: _mintable,
    owner: _owner,
    content: _content,
    wallet_code: _wallet_code,
  };
}

export function loadGetterTupleJettonData(source: TupleReader) {
  const _total_supply = source.readBigNumber();
  const _mintable = source.readBoolean();
  const _owner = source.readAddress();
  const _content = source.readCell();
  const _wallet_code = source.readCell();
  return {
    $$type: 'JettonData' as const,
    total_supply: _total_supply,
    mintable: _mintable,
    owner: _owner,
    content: _content,
    wallet_code: _wallet_code,
  };
}

export function storeTupleJettonData(source: JettonData) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.total_supply);
  builder.writeBoolean(source.mintable);
  builder.writeAddress(source.owner);
  builder.writeCell(source.content);
  builder.writeCell(source.wallet_code);
  return builder.build();
}

export function dictValueParserJettonData(): DictionaryValue<JettonData> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeJettonData(src)).endCell());
    },
    parse: (src) => {
      return loadJettonData(src.loadRef().beginParse());
    },
  };
}

export type JettonWalletData = {
  $$type: 'JettonWalletData';
  balance: bigint;
  owner: Address;
  master: Address;
  code: Cell;
};

export function storeJettonWalletData(src: JettonWalletData) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeInt(src.balance, 257);
    b_0.storeAddress(src.owner);
    b_0.storeAddress(src.master);
    b_0.storeRef(src.code);
  };
}

export function loadJettonWalletData(slice: Slice) {
  const sc_0 = slice;
  const _balance = sc_0.loadIntBig(257);
  const _owner = sc_0.loadAddress();
  const _master = sc_0.loadAddress();
  const _code = sc_0.loadRef();
  return {
    $$type: 'JettonWalletData' as const,
    balance: _balance,
    owner: _owner,
    master: _master,
    code: _code,
  };
}

export function loadTupleJettonWalletData(source: TupleReader) {
  const _balance = source.readBigNumber();
  const _owner = source.readAddress();
  const _master = source.readAddress();
  const _code = source.readCell();
  return {
    $$type: 'JettonWalletData' as const,
    balance: _balance,
    owner: _owner,
    master: _master,
    code: _code,
  };
}

export function loadGetterTupleJettonWalletData(source: TupleReader) {
  const _balance = source.readBigNumber();
  const _owner = source.readAddress();
  const _master = source.readAddress();
  const _code = source.readCell();
  return {
    $$type: 'JettonWalletData' as const,
    balance: _balance,
    owner: _owner,
    master: _master,
    code: _code,
  };
}

export function storeTupleJettonWalletData(source: JettonWalletData) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.balance);
  builder.writeAddress(source.owner);
  builder.writeAddress(source.master);
  builder.writeCell(source.code);
  return builder.build();
}

export function dictValueParserJettonWalletData(): DictionaryValue<JettonWalletData> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeJettonWalletData(src)).endCell());
    },
    parse: (src) => {
      return loadJettonWalletData(src.loadRef().beginParse());
    },
  };
}

export type TokenTransfer = {
  $$type: 'TokenTransfer';
  query_id: bigint;
  amount: bigint;
  receiver: Address;
  response_destination: Address | null;
  custom_payload: Cell | null;
  forward_ton_amount: bigint;
  forward_payload: Slice;
};

export function storeTokenTransfer(src: TokenTransfer) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(260734629, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.receiver);
    b_0.storeAddress(src.response_destination);
    if (src.custom_payload !== null && src.custom_payload !== undefined) {
      b_0.storeBit(true).storeRef(src.custom_payload);
    } else {
      b_0.storeBit(false);
    }
    b_0.storeCoins(src.forward_ton_amount);
    b_0.storeBuilder(src.forward_payload.asBuilder());
  };
}

export function loadTokenTransfer(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 260734629) {
    throw Error('Invalid prefix');
  }
  const _query_id = sc_0.loadUintBig(64);
  const _amount = sc_0.loadCoins();
  const _receiver = sc_0.loadAddress();
  const _response_destination = sc_0.loadMaybeAddress();
  const _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
  const _forward_ton_amount = sc_0.loadCoins();
  const _forward_payload = sc_0;
  return {
    $$type: 'TokenTransfer' as const,
    query_id: _query_id,
    amount: _amount,
    receiver: _receiver,
    response_destination: _response_destination,
    custom_payload: _custom_payload,
    forward_ton_amount: _forward_ton_amount,
    forward_payload: _forward_payload,
  };
}

export function loadTupleTokenTransfer(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _amount = source.readBigNumber();
  const _receiver = source.readAddress();
  const _response_destination = source.readAddressOpt();
  const _custom_payload = source.readCellOpt();
  const _forward_ton_amount = source.readBigNumber();
  const _forward_payload = source.readCell().asSlice();
  return {
    $$type: 'TokenTransfer' as const,
    query_id: _query_id,
    amount: _amount,
    receiver: _receiver,
    response_destination: _response_destination,
    custom_payload: _custom_payload,
    forward_ton_amount: _forward_ton_amount,
    forward_payload: _forward_payload,
  };
}

export function loadGetterTupleTokenTransfer(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _amount = source.readBigNumber();
  const _receiver = source.readAddress();
  const _response_destination = source.readAddressOpt();
  const _custom_payload = source.readCellOpt();
  const _forward_ton_amount = source.readBigNumber();
  const _forward_payload = source.readCell().asSlice();
  return {
    $$type: 'TokenTransfer' as const,
    query_id: _query_id,
    amount: _amount,
    receiver: _receiver,
    response_destination: _response_destination,
    custom_payload: _custom_payload,
    forward_ton_amount: _forward_ton_amount,
    forward_payload: _forward_payload,
  };
}

export function storeTupleTokenTransfer(source: TokenTransfer) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeNumber(source.amount);
  builder.writeAddress(source.receiver);
  builder.writeAddress(source.response_destination);
  builder.writeCell(source.custom_payload);
  builder.writeNumber(source.forward_ton_amount);
  builder.writeSlice(source.forward_payload.asCell());
  return builder.build();
}

export function dictValueParserTokenTransfer(): DictionaryValue<TokenTransfer> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeTokenTransfer(src)).endCell());
    },
    parse: (src) => {
      return loadTokenTransfer(src.loadRef().beginParse());
    },
  };
}

export type TokenTransferInternal = {
  $$type: 'TokenTransferInternal';
  query_id: bigint;
  amount: bigint;
  from: Address;
  response_destination: Address | null;
  forward_ton_amount: bigint;
  forward_payload: Slice;
};

export function storeTokenTransferInternal(src: TokenTransferInternal) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(395134233, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.from);
    b_0.storeAddress(src.response_destination);
    b_0.storeCoins(src.forward_ton_amount);
    b_0.storeBuilder(src.forward_payload.asBuilder());
  };
}

export function loadTokenTransferInternal(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 395134233) {
    throw Error('Invalid prefix');
  }
  const _query_id = sc_0.loadUintBig(64);
  const _amount = sc_0.loadCoins();
  const _from = sc_0.loadAddress();
  const _response_destination = sc_0.loadMaybeAddress();
  const _forward_ton_amount = sc_0.loadCoins();
  const _forward_payload = sc_0;
  return {
    $$type: 'TokenTransferInternal' as const,
    query_id: _query_id,
    amount: _amount,
    from: _from,
    response_destination: _response_destination,
    forward_ton_amount: _forward_ton_amount,
    forward_payload: _forward_payload,
  };
}

export function loadTupleTokenTransferInternal(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _amount = source.readBigNumber();
  const _from = source.readAddress();
  const _response_destination = source.readAddressOpt();
  const _forward_ton_amount = source.readBigNumber();
  const _forward_payload = source.readCell().asSlice();
  return {
    $$type: 'TokenTransferInternal' as const,
    query_id: _query_id,
    amount: _amount,
    from: _from,
    response_destination: _response_destination,
    forward_ton_amount: _forward_ton_amount,
    forward_payload: _forward_payload,
  };
}

export function loadGetterTupleTokenTransferInternal(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _amount = source.readBigNumber();
  const _from = source.readAddress();
  const _response_destination = source.readAddressOpt();
  const _forward_ton_amount = source.readBigNumber();
  const _forward_payload = source.readCell().asSlice();
  return {
    $$type: 'TokenTransferInternal' as const,
    query_id: _query_id,
    amount: _amount,
    from: _from,
    response_destination: _response_destination,
    forward_ton_amount: _forward_ton_amount,
    forward_payload: _forward_payload,
  };
}

export function storeTupleTokenTransferInternal(source: TokenTransferInternal) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeNumber(source.amount);
  builder.writeAddress(source.from);
  builder.writeAddress(source.response_destination);
  builder.writeNumber(source.forward_ton_amount);
  builder.writeSlice(source.forward_payload.asCell());
  return builder.build();
}

export function dictValueParserTokenTransferInternal(): DictionaryValue<TokenTransferInternal> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeTokenTransferInternal(src)).endCell()
      );
    },
    parse: (src) => {
      return loadTokenTransferInternal(src.loadRef().beginParse());
    },
  };
}

export type TokenNotification = {
  $$type: 'TokenNotification';
  query_id: bigint;
  amount: bigint;
  from: Address;
  forward_payload: Slice;
};

export function storeTokenNotification(src: TokenNotification) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(1935855772, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.from);
    b_0.storeBuilder(src.forward_payload.asBuilder());
  };
}

export function loadTokenNotification(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 1935855772) {
    throw Error('Invalid prefix');
  }
  const _query_id = sc_0.loadUintBig(64);
  const _amount = sc_0.loadCoins();
  const _from = sc_0.loadAddress();
  const _forward_payload = sc_0;
  return {
    $$type: 'TokenNotification' as const,
    query_id: _query_id,
    amount: _amount,
    from: _from,
    forward_payload: _forward_payload,
  };
}

export function loadTupleTokenNotification(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _amount = source.readBigNumber();
  const _from = source.readAddress();
  const _forward_payload = source.readCell().asSlice();
  return {
    $$type: 'TokenNotification' as const,
    query_id: _query_id,
    amount: _amount,
    from: _from,
    forward_payload: _forward_payload,
  };
}

export function loadGetterTupleTokenNotification(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _amount = source.readBigNumber();
  const _from = source.readAddress();
  const _forward_payload = source.readCell().asSlice();
  return {
    $$type: 'TokenNotification' as const,
    query_id: _query_id,
    amount: _amount,
    from: _from,
    forward_payload: _forward_payload,
  };
}

export function storeTupleTokenNotification(source: TokenNotification) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeNumber(source.amount);
  builder.writeAddress(source.from);
  builder.writeSlice(source.forward_payload.asCell());
  return builder.build();
}

export function dictValueParserTokenNotification(): DictionaryValue<TokenNotification> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeTokenNotification(src)).endCell()
      );
    },
    parse: (src) => {
      return loadTokenNotification(src.loadRef().beginParse());
    },
  };
}

export type TokenBurn = {
  $$type: 'TokenBurn';
  query_id: bigint;
  amount: bigint;
  response_destination: Address | null;
  custom_payload: Cell | null;
};

export function storeTokenBurn(src: TokenBurn) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(1499400124, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.response_destination);
    if (src.custom_payload !== null && src.custom_payload !== undefined) {
      b_0.storeBit(true).storeRef(src.custom_payload);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadTokenBurn(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 1499400124) {
    throw Error('Invalid prefix');
  }
  const _query_id = sc_0.loadUintBig(64);
  const _amount = sc_0.loadCoins();
  const _response_destination = sc_0.loadMaybeAddress();
  const _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
  return {
    $$type: 'TokenBurn' as const,
    query_id: _query_id,
    amount: _amount,
    response_destination: _response_destination,
    custom_payload: _custom_payload,
  };
}

export function loadTupleTokenBurn(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _amount = source.readBigNumber();
  const _response_destination = source.readAddressOpt();
  const _custom_payload = source.readCellOpt();
  return {
    $$type: 'TokenBurn' as const,
    query_id: _query_id,
    amount: _amount,
    response_destination: _response_destination,
    custom_payload: _custom_payload,
  };
}

export function loadGetterTupleTokenBurn(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _amount = source.readBigNumber();
  const _response_destination = source.readAddressOpt();
  const _custom_payload = source.readCellOpt();
  return {
    $$type: 'TokenBurn' as const,
    query_id: _query_id,
    amount: _amount,
    response_destination: _response_destination,
    custom_payload: _custom_payload,
  };
}

export function storeTupleTokenBurn(source: TokenBurn) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeNumber(source.amount);
  builder.writeAddress(source.response_destination);
  builder.writeCell(source.custom_payload);
  return builder.build();
}

export function dictValueParserTokenBurn(): DictionaryValue<TokenBurn> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeTokenBurn(src)).endCell());
    },
    parse: (src) => {
      return loadTokenBurn(src.loadRef().beginParse());
    },
  };
}

export type TokenBurnNotification = {
  $$type: 'TokenBurnNotification';
  query_id: bigint;
  amount: bigint;
  sender: Address;
  response_destination: Address | null;
};

export function storeTokenBurnNotification(src: TokenBurnNotification) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(2078119902, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.sender);
    b_0.storeAddress(src.response_destination);
  };
}

export function loadTokenBurnNotification(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 2078119902) {
    throw Error('Invalid prefix');
  }
  const _query_id = sc_0.loadUintBig(64);
  const _amount = sc_0.loadCoins();
  const _sender = sc_0.loadAddress();
  const _response_destination = sc_0.loadMaybeAddress();
  return {
    $$type: 'TokenBurnNotification' as const,
    query_id: _query_id,
    amount: _amount,
    sender: _sender,
    response_destination: _response_destination,
  };
}

export function loadTupleTokenBurnNotification(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _amount = source.readBigNumber();
  const _sender = source.readAddress();
  const _response_destination = source.readAddressOpt();
  return {
    $$type: 'TokenBurnNotification' as const,
    query_id: _query_id,
    amount: _amount,
    sender: _sender,
    response_destination: _response_destination,
  };
}

export function loadGetterTupleTokenBurnNotification(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _amount = source.readBigNumber();
  const _sender = source.readAddress();
  const _response_destination = source.readAddressOpt();
  return {
    $$type: 'TokenBurnNotification' as const,
    query_id: _query_id,
    amount: _amount,
    sender: _sender,
    response_destination: _response_destination,
  };
}

export function storeTupleTokenBurnNotification(source: TokenBurnNotification) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeNumber(source.amount);
  builder.writeAddress(source.sender);
  builder.writeAddress(source.response_destination);
  return builder.build();
}

export function dictValueParserTokenBurnNotification(): DictionaryValue<TokenBurnNotification> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeTokenBurnNotification(src)).endCell()
      );
    },
    parse: (src) => {
      return loadTokenBurnNotification(src.loadRef().beginParse());
    },
  };
}

export type TokenExcesses = {
  $$type: 'TokenExcesses';
  query_id: bigint;
};

export function storeTokenExcesses(src: TokenExcesses) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(3576854235, 32);
    b_0.storeUint(src.query_id, 64);
  };
}

export function loadTokenExcesses(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 3576854235) {
    throw Error('Invalid prefix');
  }
  const _query_id = sc_0.loadUintBig(64);
  return { $$type: 'TokenExcesses' as const, query_id: _query_id };
}

export function loadTupleTokenExcesses(source: TupleReader) {
  const _query_id = source.readBigNumber();
  return { $$type: 'TokenExcesses' as const, query_id: _query_id };
}

export function loadGetterTupleTokenExcesses(source: TupleReader) {
  const _query_id = source.readBigNumber();
  return { $$type: 'TokenExcesses' as const, query_id: _query_id };
}

export function storeTupleTokenExcesses(source: TokenExcesses) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  return builder.build();
}

export function dictValueParserTokenExcesses(): DictionaryValue<TokenExcesses> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeTokenExcesses(src)).endCell());
    },
    parse: (src) => {
      return loadTokenExcesses(src.loadRef().beginParse());
    },
  };
}

export type TokenUpdateContent = {
  $$type: 'TokenUpdateContent';
  content: Cell;
};

export function storeTokenUpdateContent(src: TokenUpdateContent) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(2937889386, 32);
    b_0.storeRef(src.content);
  };
}

export function loadTokenUpdateContent(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 2937889386) {
    throw Error('Invalid prefix');
  }
  const _content = sc_0.loadRef();
  return { $$type: 'TokenUpdateContent' as const, content: _content };
}

export function loadTupleTokenUpdateContent(source: TupleReader) {
  const _content = source.readCell();
  return { $$type: 'TokenUpdateContent' as const, content: _content };
}

export function loadGetterTupleTokenUpdateContent(source: TupleReader) {
  const _content = source.readCell();
  return { $$type: 'TokenUpdateContent' as const, content: _content };
}

export function storeTupleTokenUpdateContent(source: TokenUpdateContent) {
  const builder = new TupleBuilder();
  builder.writeCell(source.content);
  return builder.build();
}

export function dictValueParserTokenUpdateContent(): DictionaryValue<TokenUpdateContent> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeTokenUpdateContent(src)).endCell()
      );
    },
    parse: (src) => {
      return loadTokenUpdateContent(src.loadRef().beginParse());
    },
  };
}

export type ProvideWalletAddress = {
  $$type: 'ProvideWalletAddress';
  query_id: bigint;
  owner_address: Address;
  include_address: boolean;
};

export function storeProvideWalletAddress(src: ProvideWalletAddress) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(745978227, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeAddress(src.owner_address);
    b_0.storeBit(src.include_address);
  };
}

export function loadProvideWalletAddress(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 745978227) {
    throw Error('Invalid prefix');
  }
  const _query_id = sc_0.loadUintBig(64);
  const _owner_address = sc_0.loadAddress();
  const _include_address = sc_0.loadBit();
  return {
    $$type: 'ProvideWalletAddress' as const,
    query_id: _query_id,
    owner_address: _owner_address,
    include_address: _include_address,
  };
}

export function loadTupleProvideWalletAddress(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _owner_address = source.readAddress();
  const _include_address = source.readBoolean();
  return {
    $$type: 'ProvideWalletAddress' as const,
    query_id: _query_id,
    owner_address: _owner_address,
    include_address: _include_address,
  };
}

export function loadGetterTupleProvideWalletAddress(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _owner_address = source.readAddress();
  const _include_address = source.readBoolean();
  return {
    $$type: 'ProvideWalletAddress' as const,
    query_id: _query_id,
    owner_address: _owner_address,
    include_address: _include_address,
  };
}

export function storeTupleProvideWalletAddress(source: ProvideWalletAddress) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeAddress(source.owner_address);
  builder.writeBoolean(source.include_address);
  return builder.build();
}

export function dictValueParserProvideWalletAddress(): DictionaryValue<ProvideWalletAddress> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeProvideWalletAddress(src)).endCell()
      );
    },
    parse: (src) => {
      return loadProvideWalletAddress(src.loadRef().beginParse());
    },
  };
}

export type TakeWalletAddress = {
  $$type: 'TakeWalletAddress';
  query_id: bigint;
  wallet_address: Address;
  owner_address: Slice;
};

export function storeTakeWalletAddress(src: TakeWalletAddress) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(3513996288, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeAddress(src.wallet_address);
    b_0.storeBuilder(src.owner_address.asBuilder());
  };
}

export function loadTakeWalletAddress(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 3513996288) {
    throw Error('Invalid prefix');
  }
  const _query_id = sc_0.loadUintBig(64);
  const _wallet_address = sc_0.loadAddress();
  const _owner_address = sc_0;
  return {
    $$type: 'TakeWalletAddress' as const,
    query_id: _query_id,
    wallet_address: _wallet_address,
    owner_address: _owner_address,
  };
}

export function loadTupleTakeWalletAddress(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _wallet_address = source.readAddress();
  const _owner_address = source.readCell().asSlice();
  return {
    $$type: 'TakeWalletAddress' as const,
    query_id: _query_id,
    wallet_address: _wallet_address,
    owner_address: _owner_address,
  };
}

export function loadGetterTupleTakeWalletAddress(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _wallet_address = source.readAddress();
  const _owner_address = source.readCell().asSlice();
  return {
    $$type: 'TakeWalletAddress' as const,
    query_id: _query_id,
    wallet_address: _wallet_address,
    owner_address: _owner_address,
  };
}

export function storeTupleTakeWalletAddress(source: TakeWalletAddress) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeAddress(source.wallet_address);
  builder.writeSlice(source.owner_address.asCell());
  return builder.build();
}

export function dictValueParserTakeWalletAddress(): DictionaryValue<TakeWalletAddress> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeTakeWalletAddress(src)).endCell()
      );
    },
    parse: (src) => {
      return loadTakeWalletAddress(src.loadRef().beginParse());
    },
  };
}

export type SetJettonWalletAddress = {
  $$type: 'SetJettonWalletAddress';
  wallet: Address;
};

export function storeSetJettonWalletAddress(src: SetJettonWalletAddress) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(4168773701, 32);
    b_0.storeAddress(src.wallet);
  };
}

export function loadSetJettonWalletAddress(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 4168773701) {
    throw Error('Invalid prefix');
  }
  const _wallet = sc_0.loadAddress();
  return { $$type: 'SetJettonWalletAddress' as const, wallet: _wallet };
}

export function loadTupleSetJettonWalletAddress(source: TupleReader) {
  const _wallet = source.readAddress();
  return { $$type: 'SetJettonWalletAddress' as const, wallet: _wallet };
}

export function loadGetterTupleSetJettonWalletAddress(source: TupleReader) {
  const _wallet = source.readAddress();
  return { $$type: 'SetJettonWalletAddress' as const, wallet: _wallet };
}

export function storeTupleSetJettonWalletAddress(
  source: SetJettonWalletAddress
) {
  const builder = new TupleBuilder();
  builder.writeAddress(source.wallet);
  return builder.build();
}

export function dictValueParserSetJettonWalletAddress(): DictionaryValue<SetJettonWalletAddress> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeSetJettonWalletAddress(src)).endCell()
      );
    },
    parse: (src) => {
      return loadSetJettonWalletAddress(src.loadRef().beginParse());
    },
  };
}

export type WithdrawTokensAdmin = {
  $$type: 'WithdrawTokensAdmin';
  amount: bigint;
};

export function storeWithdrawTokensAdmin(src: WithdrawTokensAdmin) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(3029345321, 32);
    b_0.storeCoins(src.amount);
  };
}

export function loadWithdrawTokensAdmin(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 3029345321) {
    throw Error('Invalid prefix');
  }
  const _amount = sc_0.loadCoins();
  return { $$type: 'WithdrawTokensAdmin' as const, amount: _amount };
}

export function loadTupleWithdrawTokensAdmin(source: TupleReader) {
  const _amount = source.readBigNumber();
  return { $$type: 'WithdrawTokensAdmin' as const, amount: _amount };
}

export function loadGetterTupleWithdrawTokensAdmin(source: TupleReader) {
  const _amount = source.readBigNumber();
  return { $$type: 'WithdrawTokensAdmin' as const, amount: _amount };
}

export function storeTupleWithdrawTokensAdmin(source: WithdrawTokensAdmin) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  return builder.build();
}

export function dictValueParserWithdrawTokensAdmin(): DictionaryValue<WithdrawTokensAdmin> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeWithdrawTokensAdmin(src)).endCell()
      );
    },
    parse: (src) => {
      return loadWithdrawTokensAdmin(src.loadRef().beginParse());
    },
  };
}

export type StakePlan = {
  $$type: 'StakePlan';
  pps: bigint;
  duration: bigint;
  min_stake: bigint;
};

export function storeStakePlan(src: StakePlan) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(src.pps, 128);
    b_0.storeUint(src.duration, 32);
    b_0.storeCoins(src.min_stake);
  };
}

export function loadStakePlan(slice: Slice) {
  const sc_0 = slice;
  const _pps = sc_0.loadUintBig(128);
  const _duration = sc_0.loadUintBig(32);
  const _min_stake = sc_0.loadCoins();
  return {
    $$type: 'StakePlan' as const,
    pps: _pps,
    duration: _duration,
    min_stake: _min_stake,
  };
}

export function loadTupleStakePlan(source: TupleReader) {
  const _pps = source.readBigNumber();
  const _duration = source.readBigNumber();
  const _min_stake = source.readBigNumber();
  return {
    $$type: 'StakePlan' as const,
    pps: _pps,
    duration: _duration,
    min_stake: _min_stake,
  };
}

export function loadGetterTupleStakePlan(source: TupleReader) {
  const _pps = source.readBigNumber();
  const _duration = source.readBigNumber();
  const _min_stake = source.readBigNumber();
  return {
    $$type: 'StakePlan' as const,
    pps: _pps,
    duration: _duration,
    min_stake: _min_stake,
  };
}

export function storeTupleStakePlan(source: StakePlan) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.pps);
  builder.writeNumber(source.duration);
  builder.writeNumber(source.min_stake);
  return builder.build();
}

export function dictValueParserStakePlan(): DictionaryValue<StakePlan> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeStakePlan(src)).endCell());
    },
    parse: (src) => {
      return loadStakePlan(src.loadRef().beginParse());
    },
  };
}

export type Stake = {
  $$type: 'Stake';
  query_id: bigint;
  plan_index: bigint;
  refA: Address | null;
  refB: Address | null;
};

export function storeStake(src: Stake) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(src.query_id, 16);
    b_0.storeUint(src.plan_index, 4);
    b_0.storeAddress(src.refA);
    b_0.storeAddress(src.refB);
  };
}

export function loadStake(slice: Slice) {
  const sc_0 = slice;
  const _query_id = sc_0.loadUintBig(16);
  const _plan_index = sc_0.loadUintBig(4);
  const _refA = sc_0.loadMaybeAddress();
  const _refB = sc_0.loadMaybeAddress();
  return {
    $$type: 'Stake' as const,
    query_id: _query_id,
    plan_index: _plan_index,
    refA: _refA,
    refB: _refB,
  };
}

export function loadTupleStake(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _plan_index = source.readBigNumber();
  const _refA = source.readAddressOpt();
  const _refB = source.readAddressOpt();
  return {
    $$type: 'Stake' as const,
    query_id: _query_id,
    plan_index: _plan_index,
    refA: _refA,
    refB: _refB,
  };
}

export function loadGetterTupleStake(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _plan_index = source.readBigNumber();
  const _refA = source.readAddressOpt();
  const _refB = source.readAddressOpt();
  return {
    $$type: 'Stake' as const,
    query_id: _query_id,
    plan_index: _plan_index,
    refA: _refA,
    refB: _refB,
  };
}

export function storeTupleStake(source: Stake) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeNumber(source.plan_index);
  builder.writeAddress(source.refA);
  builder.writeAddress(source.refB);
  return builder.build();
}

export function dictValueParserStake(): DictionaryValue<Stake> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeStake(src)).endCell());
    },
    parse: (src) => {
      return loadStake(src.loadRef().beginParse());
    },
  };
}

export type StakeNotification = {
  $$type: 'StakeNotification';
  query_id: bigint;
  holder_address: Address;
};

export function storeStakeNotification(src: StakeNotification) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(248769505, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeAddress(src.holder_address);
  };
}

export function loadStakeNotification(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 248769505) {
    throw Error('Invalid prefix');
  }
  const _query_id = sc_0.loadUintBig(64);
  const _holder_address = sc_0.loadAddress();
  return {
    $$type: 'StakeNotification' as const,
    query_id: _query_id,
    holder_address: _holder_address,
  };
}

export function loadTupleStakeNotification(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _holder_address = source.readAddress();
  return {
    $$type: 'StakeNotification' as const,
    query_id: _query_id,
    holder_address: _holder_address,
  };
}

export function loadGetterTupleStakeNotification(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _holder_address = source.readAddress();
  return {
    $$type: 'StakeNotification' as const,
    query_id: _query_id,
    holder_address: _holder_address,
  };
}

export function storeTupleStakeNotification(source: StakeNotification) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeAddress(source.holder_address);
  return builder.build();
}

export function dictValueParserStakeNotification(): DictionaryValue<StakeNotification> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeStakeNotification(src)).endCell()
      );
    },
    parse: (src) => {
      return loadStakeNotification(src.loadRef().beginParse());
    },
  };
}

export type Unstake = {
  $$type: 'Unstake';
  query_id: bigint;
  started_at: bigint;
  staker: Address;
  amount: bigint;
  withdrawn: bigint;
  plan_index: bigint;
};

export function storeUnstake(src: Unstake) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(2193396772, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeUint(src.started_at, 32);
    b_0.storeAddress(src.staker);
    b_0.storeCoins(src.amount);
    b_0.storeCoins(src.withdrawn);
    b_0.storeUint(src.plan_index, 4);
  };
}

export function loadUnstake(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 2193396772) {
    throw Error('Invalid prefix');
  }
  const _query_id = sc_0.loadUintBig(64);
  const _started_at = sc_0.loadUintBig(32);
  const _staker = sc_0.loadAddress();
  const _amount = sc_0.loadCoins();
  const _withdrawn = sc_0.loadCoins();
  const _plan_index = sc_0.loadUintBig(4);
  return {
    $$type: 'Unstake' as const,
    query_id: _query_id,
    started_at: _started_at,
    staker: _staker,
    amount: _amount,
    withdrawn: _withdrawn,
    plan_index: _plan_index,
  };
}

export function loadTupleUnstake(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _started_at = source.readBigNumber();
  const _staker = source.readAddress();
  const _amount = source.readBigNumber();
  const _withdrawn = source.readBigNumber();
  const _plan_index = source.readBigNumber();
  return {
    $$type: 'Unstake' as const,
    query_id: _query_id,
    started_at: _started_at,
    staker: _staker,
    amount: _amount,
    withdrawn: _withdrawn,
    plan_index: _plan_index,
  };
}

export function loadGetterTupleUnstake(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _started_at = source.readBigNumber();
  const _staker = source.readAddress();
  const _amount = source.readBigNumber();
  const _withdrawn = source.readBigNumber();
  const _plan_index = source.readBigNumber();
  return {
    $$type: 'Unstake' as const,
    query_id: _query_id,
    started_at: _started_at,
    staker: _staker,
    amount: _amount,
    withdrawn: _withdrawn,
    plan_index: _plan_index,
  };
}

export function storeTupleUnstake(source: Unstake) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeNumber(source.started_at);
  builder.writeAddress(source.staker);
  builder.writeNumber(source.amount);
  builder.writeNumber(source.withdrawn);
  builder.writeNumber(source.plan_index);
  return builder.build();
}

export function dictValueParserUnstake(): DictionaryValue<Unstake> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeUnstake(src)).endCell());
    },
    parse: (src) => {
      return loadUnstake(src.loadRef().beginParse());
    },
  };
}

export type UnstakeOk = {
  $$type: 'UnstakeOk';
};

export function storeUnstakeOk(src: UnstakeOk) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(118910251, 32);
  };
}

export function loadUnstakeOk(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 118910251) {
    throw Error('Invalid prefix');
  }
  return { $$type: 'UnstakeOk' as const };
}

export function loadTupleUnstakeOk(source: TupleReader) {
  return { $$type: 'UnstakeOk' as const };
}

export function loadGetterTupleUnstakeOk(source: TupleReader) {
  return { $$type: 'UnstakeOk' as const };
}

export function storeTupleUnstakeOk(source: UnstakeOk) {
  const builder = new TupleBuilder();
  return builder.build();
}

export function dictValueParserUnstakeOk(): DictionaryValue<UnstakeOk> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeUnstakeOk(src)).endCell());
    },
    parse: (src) => {
      return loadUnstakeOk(src.loadRef().beginParse());
    },
  };
}

export type StakeRejected = {
  $$type: 'StakeRejected';
};

export function storeStakeRejected(src: StakeRejected) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(3833305740, 32);
  };
}

export function loadStakeRejected(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 3833305740) {
    throw Error('Invalid prefix');
  }
  return { $$type: 'StakeRejected' as const };
}

export function loadTupleStakeRejected(source: TupleReader) {
  return { $$type: 'StakeRejected' as const };
}

export function loadGetterTupleStakeRejected(source: TupleReader) {
  return { $$type: 'StakeRejected' as const };
}

export function storeTupleStakeRejected(source: StakeRejected) {
  const builder = new TupleBuilder();
  return builder.build();
}

export function dictValueParserStakeRejected(): DictionaryValue<StakeRejected> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeStakeRejected(src)).endCell());
    },
    parse: (src) => {
      return loadStakeRejected(src.loadRef().beginParse());
    },
  };
}

export type HolderUnstake = {
  $$type: 'HolderUnstake';
};

export function storeHolderUnstake(src: HolderUnstake) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(1243310637, 32);
  };
}

export function loadHolderUnstake(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 1243310637) {
    throw Error('Invalid prefix');
  }
  return { $$type: 'HolderUnstake' as const };
}

export function loadTupleHolderUnstake(source: TupleReader) {
  return { $$type: 'HolderUnstake' as const };
}

export function loadGetterTupleHolderUnstake(source: TupleReader) {
  return { $$type: 'HolderUnstake' as const };
}

export function storeTupleHolderUnstake(source: HolderUnstake) {
  const builder = new TupleBuilder();
  return builder.build();
}

export function dictValueParserHolderUnstake(): DictionaryValue<HolderUnstake> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeHolderUnstake(src)).endCell());
    },
    parse: (src) => {
      return loadHolderUnstake(src.loadRef().beginParse());
    },
  };
}

export type TakeReward = {
  $$type: 'TakeReward';
  query_id: bigint;
  stake_id: bigint;
  stake_amount: bigint;
  stake_plan_index: bigint;
};

export function storeTakeReward(src: TakeReward) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(809829684, 32);
    b_0.storeUint(src.query_id, 16);
    b_0.storeUint(src.stake_id, 16);
    b_0.storeCoins(src.stake_amount);
    b_0.storeUint(src.stake_plan_index, 4);
  };
}

export function loadTakeReward(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 809829684) {
    throw Error('Invalid prefix');
  }
  const _query_id = sc_0.loadUintBig(16);
  const _stake_id = sc_0.loadUintBig(16);
  const _stake_amount = sc_0.loadCoins();
  const _stake_plan_index = sc_0.loadUintBig(4);
  return {
    $$type: 'TakeReward' as const,
    query_id: _query_id,
    stake_id: _stake_id,
    stake_amount: _stake_amount,
    stake_plan_index: _stake_plan_index,
  };
}

export function loadTupleTakeReward(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _stake_id = source.readBigNumber();
  const _stake_amount = source.readBigNumber();
  const _stake_plan_index = source.readBigNumber();
  return {
    $$type: 'TakeReward' as const,
    query_id: _query_id,
    stake_id: _stake_id,
    stake_amount: _stake_amount,
    stake_plan_index: _stake_plan_index,
  };
}

export function loadGetterTupleTakeReward(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _stake_id = source.readBigNumber();
  const _stake_amount = source.readBigNumber();
  const _stake_plan_index = source.readBigNumber();
  return {
    $$type: 'TakeReward' as const,
    query_id: _query_id,
    stake_id: _stake_id,
    stake_amount: _stake_amount,
    stake_plan_index: _stake_plan_index,
  };
}

export function storeTupleTakeReward(source: TakeReward) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeNumber(source.stake_id);
  builder.writeNumber(source.stake_amount);
  builder.writeNumber(source.stake_plan_index);
  return builder.build();
}

export function dictValueParserTakeReward(): DictionaryValue<TakeReward> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeTakeReward(src)).endCell());
    },
    parse: (src) => {
      return loadTakeReward(src.loadRef().beginParse());
    },
  };
}

export type HolderTakeReward = {
  $$type: 'HolderTakeReward';
  query_id: bigint;
  full_reward: bigint;
};

export function storeHolderTakeReward(src: HolderTakeReward) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(525124255, 32);
    b_0.storeUint(src.query_id, 16);
    b_0.storeCoins(src.full_reward);
  };
}

export function loadHolderTakeReward(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 525124255) {
    throw Error('Invalid prefix');
  }
  const _query_id = sc_0.loadUintBig(16);
  const _full_reward = sc_0.loadCoins();
  return {
    $$type: 'HolderTakeReward' as const,
    query_id: _query_id,
    full_reward: _full_reward,
  };
}

export function loadTupleHolderTakeReward(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _full_reward = source.readBigNumber();
  return {
    $$type: 'HolderTakeReward' as const,
    query_id: _query_id,
    full_reward: _full_reward,
  };
}

export function loadGetterTupleHolderTakeReward(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _full_reward = source.readBigNumber();
  return {
    $$type: 'HolderTakeReward' as const,
    query_id: _query_id,
    full_reward: _full_reward,
  };
}

export function storeTupleHolderTakeReward(source: HolderTakeReward) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeNumber(source.full_reward);
  return builder.build();
}

export function dictValueParserHolderTakeReward(): DictionaryValue<HolderTakeReward> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeHolderTakeReward(src)).endCell());
    },
    parse: (src) => {
      return loadHolderTakeReward(src.loadRef().beginParse());
    },
  };
}

export type TakeRewardOk = {
  $$type: 'TakeRewardOk';
  query_id: bigint;
  stake_id: bigint;
  staker: Address;
  amount: bigint;
  reward: bigint;
  plan_index: bigint;
};

export function storeTakeRewardOk(src: TakeRewardOk) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(2688512301, 32);
    b_0.storeUint(src.query_id, 16);
    b_0.storeUint(src.stake_id, 16);
    b_0.storeAddress(src.staker);
    b_0.storeCoins(src.amount);
    b_0.storeCoins(src.reward);
    b_0.storeUint(src.plan_index, 4);
  };
}

export function loadTakeRewardOk(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 2688512301) {
    throw Error('Invalid prefix');
  }
  const _query_id = sc_0.loadUintBig(16);
  const _stake_id = sc_0.loadUintBig(16);
  const _staker = sc_0.loadAddress();
  const _amount = sc_0.loadCoins();
  const _reward = sc_0.loadCoins();
  const _plan_index = sc_0.loadUintBig(4);
  return {
    $$type: 'TakeRewardOk' as const,
    query_id: _query_id,
    stake_id: _stake_id,
    staker: _staker,
    amount: _amount,
    reward: _reward,
    plan_index: _plan_index,
  };
}

export function loadTupleTakeRewardOk(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _stake_id = source.readBigNumber();
  const _staker = source.readAddress();
  const _amount = source.readBigNumber();
  const _reward = source.readBigNumber();
  const _plan_index = source.readBigNumber();
  return {
    $$type: 'TakeRewardOk' as const,
    query_id: _query_id,
    stake_id: _stake_id,
    staker: _staker,
    amount: _amount,
    reward: _reward,
    plan_index: _plan_index,
  };
}

export function loadGetterTupleTakeRewardOk(source: TupleReader) {
  const _query_id = source.readBigNumber();
  const _stake_id = source.readBigNumber();
  const _staker = source.readAddress();
  const _amount = source.readBigNumber();
  const _reward = source.readBigNumber();
  const _plan_index = source.readBigNumber();
  return {
    $$type: 'TakeRewardOk' as const,
    query_id: _query_id,
    stake_id: _stake_id,
    staker: _staker,
    amount: _amount,
    reward: _reward,
    plan_index: _plan_index,
  };
}

export function storeTupleTakeRewardOk(source: TakeRewardOk) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.query_id);
  builder.writeNumber(source.stake_id);
  builder.writeAddress(source.staker);
  builder.writeNumber(source.amount);
  builder.writeNumber(source.reward);
  builder.writeNumber(source.plan_index);
  return builder.build();
}

export function dictValueParserTakeRewardOk(): DictionaryValue<TakeRewardOk> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeTakeRewardOk(src)).endCell());
    },
    parse: (src) => {
      return loadTakeRewardOk(src.loadRef().beginParse());
    },
  };
}

export type StakeProofRequest = {
  $$type: 'StakeProofRequest';
  reward: bigint;
};

export function storeStakeProofRequest(src: StakeProofRequest) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(1264588156, 32);
    b_0.storeCoins(src.reward);
  };
}

export function loadStakeProofRequest(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 1264588156) {
    throw Error('Invalid prefix');
  }
  const _reward = sc_0.loadCoins();
  return { $$type: 'StakeProofRequest' as const, reward: _reward };
}

export function loadTupleStakeProofRequest(source: TupleReader) {
  const _reward = source.readBigNumber();
  return { $$type: 'StakeProofRequest' as const, reward: _reward };
}

export function loadGetterTupleStakeProofRequest(source: TupleReader) {
  const _reward = source.readBigNumber();
  return { $$type: 'StakeProofRequest' as const, reward: _reward };
}

export function storeTupleStakeProofRequest(source: StakeProofRequest) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.reward);
  return builder.build();
}

export function dictValueParserStakeProofRequest(): DictionaryValue<StakeProofRequest> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeStakeProofRequest(src)).endCell()
      );
    },
    parse: (src) => {
      return loadStakeProofRequest(src.loadRef().beginParse());
    },
  };
}

export type StakeProof = {
  $$type: 'StakeProof';
  id: bigint;
  staker: Address;
  amount: bigint;
  plan_index: bigint;
  reward: bigint;
};

export function storeStakeProof(src: StakeProof) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(4056561772, 32);
    b_0.storeInt(src.id, 257);
    b_0.storeAddress(src.staker);
    b_0.storeInt(src.amount, 257);
    b_0.storeUint(src.plan_index, 4);
    b_0.storeCoins(src.reward);
  };
}

export function loadStakeProof(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 4056561772) {
    throw Error('Invalid prefix');
  }
  const _id = sc_0.loadIntBig(257);
  const _staker = sc_0.loadAddress();
  const _amount = sc_0.loadIntBig(257);
  const _plan_index = sc_0.loadUintBig(4);
  const _reward = sc_0.loadCoins();
  return {
    $$type: 'StakeProof' as const,
    id: _id,
    staker: _staker,
    amount: _amount,
    plan_index: _plan_index,
    reward: _reward,
  };
}

export function loadTupleStakeProof(source: TupleReader) {
  const _id = source.readBigNumber();
  const _staker = source.readAddress();
  const _amount = source.readBigNumber();
  const _plan_index = source.readBigNumber();
  const _reward = source.readBigNumber();
  return {
    $$type: 'StakeProof' as const,
    id: _id,
    staker: _staker,
    amount: _amount,
    plan_index: _plan_index,
    reward: _reward,
  };
}

export function loadGetterTupleStakeProof(source: TupleReader) {
  const _id = source.readBigNumber();
  const _staker = source.readAddress();
  const _amount = source.readBigNumber();
  const _plan_index = source.readBigNumber();
  const _reward = source.readBigNumber();
  return {
    $$type: 'StakeProof' as const,
    id: _id,
    staker: _staker,
    amount: _amount,
    plan_index: _plan_index,
    reward: _reward,
  };
}

export function storeTupleStakeProof(source: StakeProof) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.id);
  builder.writeAddress(source.staker);
  builder.writeNumber(source.amount);
  builder.writeNumber(source.plan_index);
  builder.writeNumber(source.reward);
  return builder.build();
}

export function dictValueParserStakeProof(): DictionaryValue<StakeProof> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeStakeProof(src)).endCell());
    },
    parse: (src) => {
      return loadStakeProof(src.loadRef().beginParse());
    },
  };
}

export type Withdraw = {
  $$type: 'Withdraw';
  amount: bigint;
  recipient: Address;
};

export function storeWithdraw(src: Withdraw) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(2856211534, 32);
    b_0.storeCoins(src.amount);
    b_0.storeAddress(src.recipient);
  };
}

export function loadWithdraw(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 2856211534) {
    throw Error('Invalid prefix');
  }
  const _amount = sc_0.loadCoins();
  const _recipient = sc_0.loadAddress();
  return {
    $$type: 'Withdraw' as const,
    amount: _amount,
    recipient: _recipient,
  };
}

export function loadTupleWithdraw(source: TupleReader) {
  const _amount = source.readBigNumber();
  const _recipient = source.readAddress();
  return {
    $$type: 'Withdraw' as const,
    amount: _amount,
    recipient: _recipient,
  };
}

export function loadGetterTupleWithdraw(source: TupleReader) {
  const _amount = source.readBigNumber();
  const _recipient = source.readAddress();
  return {
    $$type: 'Withdraw' as const,
    amount: _amount,
    recipient: _recipient,
  };
}

export function storeTupleWithdraw(source: Withdraw) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  builder.writeAddress(source.recipient);
  return builder.build();
}

export function dictValueParserWithdraw(): DictionaryValue<Withdraw> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeWithdraw(src)).endCell());
    },
    parse: (src) => {
      return loadWithdraw(src.loadRef().beginParse());
    },
  };
}

export type StakeHolder$Data = {
  $$type: 'StakeHolder$Data';
  started_at: bigint;
  finish_at: bigint;
  id: bigint;
  master: Address;
  staker: Address;
  amount: bigint;
  withdrawn: bigint;
  plan: bigint;
  holding: boolean;
};

export function storeStakeHolder$Data(src: StakeHolder$Data) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(src.started_at, 32);
    b_0.storeUint(src.finish_at, 32);
    b_0.storeUint(src.id, 16);
    b_0.storeAddress(src.master);
    b_0.storeAddress(src.staker);
    b_0.storeCoins(src.amount);
    b_0.storeCoins(src.withdrawn);
    b_0.storeUint(src.plan, 4);
    b_0.storeBit(src.holding);
  };
}

export function loadStakeHolder$Data(slice: Slice) {
  const sc_0 = slice;
  const _started_at = sc_0.loadUintBig(32);
  const _finish_at = sc_0.loadUintBig(32);
  const _id = sc_0.loadUintBig(16);
  const _master = sc_0.loadAddress();
  const _staker = sc_0.loadAddress();
  const _amount = sc_0.loadCoins();
  const _withdrawn = sc_0.loadCoins();
  const _plan = sc_0.loadUintBig(4);
  const _holding = sc_0.loadBit();
  return {
    $$type: 'StakeHolder$Data' as const,
    started_at: _started_at,
    finish_at: _finish_at,
    id: _id,
    master: _master,
    staker: _staker,
    amount: _amount,
    withdrawn: _withdrawn,
    plan: _plan,
    holding: _holding,
  };
}

export function loadTupleStakeHolder$Data(source: TupleReader) {
  const _started_at = source.readBigNumber();
  const _finish_at = source.readBigNumber();
  const _id = source.readBigNumber();
  const _master = source.readAddress();
  const _staker = source.readAddress();
  const _amount = source.readBigNumber();
  const _withdrawn = source.readBigNumber();
  const _plan = source.readBigNumber();
  const _holding = source.readBoolean();
  return {
    $$type: 'StakeHolder$Data' as const,
    started_at: _started_at,
    finish_at: _finish_at,
    id: _id,
    master: _master,
    staker: _staker,
    amount: _amount,
    withdrawn: _withdrawn,
    plan: _plan,
    holding: _holding,
  };
}

export function loadGetterTupleStakeHolder$Data(source: TupleReader) {
  const _started_at = source.readBigNumber();
  const _finish_at = source.readBigNumber();
  const _id = source.readBigNumber();
  const _master = source.readAddress();
  const _staker = source.readAddress();
  const _amount = source.readBigNumber();
  const _withdrawn = source.readBigNumber();
  const _plan = source.readBigNumber();
  const _holding = source.readBoolean();
  return {
    $$type: 'StakeHolder$Data' as const,
    started_at: _started_at,
    finish_at: _finish_at,
    id: _id,
    master: _master,
    staker: _staker,
    amount: _amount,
    withdrawn: _withdrawn,
    plan: _plan,
    holding: _holding,
  };
}

export function storeTupleStakeHolder$Data(source: StakeHolder$Data) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.started_at);
  builder.writeNumber(source.finish_at);
  builder.writeNumber(source.id);
  builder.writeAddress(source.master);
  builder.writeAddress(source.staker);
  builder.writeNumber(source.amount);
  builder.writeNumber(source.withdrawn);
  builder.writeNumber(source.plan);
  builder.writeBoolean(source.holding);
  return builder.build();
}

export function dictValueParserStakeHolder$Data(): DictionaryValue<StakeHolder$Data> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeStakeHolder$Data(src)).endCell());
    },
    parse: (src) => {
      return loadStakeHolder$Data(src.loadRef().beginParse());
    },
  };
}

export type StakingMaster$Data = {
  $$type: 'StakingMaster$Data';
  id: bigint;
  plans: Dictionary<number, StakePlan>;
  admin: Address;
  jetton_wallet: Address | null;
  total_balance: bigint;
  locked_value: bigint;
};

export function storeStakingMaster$Data(src: StakingMaster$Data) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(src.id, 32);
    b_0.storeDict(
      src.plans,
      Dictionary.Keys.Uint(4),
      dictValueParserStakePlan()
    );
    b_0.storeAddress(src.admin);
    b_0.storeAddress(src.jetton_wallet);
    b_0.storeUint(src.total_balance, 256);
    const b_1 = new Builder();
    b_1.storeUint(src.locked_value, 256);
    b_0.storeRef(b_1.endCell());
  };
}

export function loadStakingMaster$Data(slice: Slice) {
  const sc_0 = slice;
  const _id = sc_0.loadUintBig(32);
  const _plans = Dictionary.load(
    Dictionary.Keys.Uint(4),
    dictValueParserStakePlan(),
    sc_0
  );
  const _admin = sc_0.loadAddress();
  const _jetton_wallet = sc_0.loadMaybeAddress();
  const _total_balance = sc_0.loadUintBig(256);
  const sc_1 = sc_0.loadRef().beginParse();
  const _locked_value = sc_1.loadUintBig(256);
  return {
    $$type: 'StakingMaster$Data' as const,
    id: _id,
    plans: _plans,
    admin: _admin,
    jetton_wallet: _jetton_wallet,
    total_balance: _total_balance,
    locked_value: _locked_value,
  };
}

export function loadTupleStakingMaster$Data(source: TupleReader) {
  const _id = source.readBigNumber();
  const _plans = Dictionary.loadDirect(
    Dictionary.Keys.Uint(4),
    dictValueParserStakePlan(),
    source.readCellOpt()
  );
  const _admin = source.readAddress();
  const _jetton_wallet = source.readAddressOpt();
  const _total_balance = source.readBigNumber();
  const _locked_value = source.readBigNumber();
  return {
    $$type: 'StakingMaster$Data' as const,
    id: _id,
    plans: _plans,
    admin: _admin,
    jetton_wallet: _jetton_wallet,
    total_balance: _total_balance,
    locked_value: _locked_value,
  };
}

export function loadGetterTupleStakingMaster$Data(source: TupleReader) {
  const _id = source.readBigNumber();
  const _plans = Dictionary.loadDirect(
    Dictionary.Keys.Uint(4),
    dictValueParserStakePlan(),
    source.readCellOpt()
  );
  const _admin = source.readAddress();
  const _jetton_wallet = source.readAddressOpt();
  const _total_balance = source.readBigNumber();
  const _locked_value = source.readBigNumber();
  return {
    $$type: 'StakingMaster$Data' as const,
    id: _id,
    plans: _plans,
    admin: _admin,
    jetton_wallet: _jetton_wallet,
    total_balance: _total_balance,
    locked_value: _locked_value,
  };
}

export function storeTupleStakingMaster$Data(source: StakingMaster$Data) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.id);
  builder.writeCell(
    source.plans.size > 0
      ? beginCell()
          .storeDictDirect(
            source.plans,
            Dictionary.Keys.Uint(4),
            dictValueParserStakePlan()
          )
          .endCell()
      : null
  );
  builder.writeAddress(source.admin);
  builder.writeAddress(source.jetton_wallet);
  builder.writeNumber(source.total_balance);
  builder.writeNumber(source.locked_value);
  return builder.build();
}

export function dictValueParserStakingMaster$Data(): DictionaryValue<StakingMaster$Data> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeStakingMaster$Data(src)).endCell()
      );
    },
    parse: (src) => {
      return loadStakingMaster$Data(src.loadRef().beginParse());
    },
  };
}

type StakeHolder_init_args = {
  $$type: 'StakeHolder_init_args';
  id: bigint;
  master: Address;
  staker: Address;
  amount: bigint;
  plan_index: bigint;
  duration: bigint;
};

function initStakeHolder_init_args(src: StakeHolder_init_args) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeInt(src.id, 257);
    b_0.storeAddress(src.master);
    b_0.storeAddress(src.staker);
    const b_1 = new Builder();
    b_1.storeInt(src.amount, 257);
    b_1.storeUint(src.plan_index, 4);
    b_1.storeUint(src.duration, 32);
    b_0.storeRef(b_1.endCell());
  };
}

async function StakeHolder_init(
  id: bigint,
  master: Address,
  staker: Address,
  amount: bigint,
  plan_index: bigint,
  duration: bigint
) {
  const __code = Cell.fromHex(
    'b5ee9c7241021e0100066200025aff008e88f4a413f4bcf2c80bed53208e983001d072d721d200d200fa4021103450666f04f86102f862e1ed43d90115020271020a020120030501d9b990ced44d0d200018e16d31fd31fd30ffa40fa40fa00fa00d303d20055806c198e45810101d700fa40fa40d401d0810101d700d303d31f3010361035103406d15504707f812bb0f8425280c705f2f4f823f8235004a082080f424072fb02103807103605035044e2db3c6c91804000221020120060801d9b6c0dda89a1a400031c2da63fa63fa61ff481f481f401f401a607a400ab00d8331c8b020203ae01f481f481a803a1020203ae01a607a63e60206c206a20680da2aa08e0ff025761f084a5018e0be5e9f047f046a0094104101e8480e5f60420700e206c0a06a089c5b678d92300700022201d9b618dda89a1a400031c2da63fa63fa61ff481f481f401f401a607a400ab00d8331c8b020203ae01f481f481a803a1020203ae01a607a63e60206c206a20680da2aa08e0ff025761f084a5018e0be5e9f047f046a0094104101e8480e5f60420700e206c0a06a089c5b678d9230090002200201200b130201200c110201200d0f01d9b2bb3b51343480006385b4c7f4c7f4c3fe903e903e803e8034c0f48015601b06639160404075c03e903e9035007420404075c034c0f4c7cc040d840d440d01b455411c1fe04aec3e1094a031c17cbd3e08fe08d40128208203d0901cbec0840e01c40d8140d41138b6cf1b24600e00022301d9b3643b51343480006385b4c7f4c7f4c3fe903e903e803e8034c0f48015601b06639160404075c03e903e9035007420404075c034c0f4c7cc040d840d440d01b455411c1fe04aec3e1094a031c17cbd3e08fe08d40128208203d0901cbec0840e01c40d8140d41138b6cf1b24601000022601d9b778dda89a1a400031c2da63fa63fa61ff481f481f401f401a607a400ab00d8331c8b020203ae01f481f481a803a1020203ae01a607a63e60206c206a20680da2aa08e0ff025761f084a5018e0be5e9f047f046a0094104101e8480e5f60420700e206c0a06a089c5b678d92301200022701d9ba9f1ed44d0d200018e16d31fd31fd30ffa40fa40fa00fa00d303d20055806c198e45810101d700fa40fa40d401d0810101d700d303d31f3010361035103406d15504707f812bb0f8425280c705f2f4f823f8235004a082080f424072fb02103807103605035044e2db3c6c9181400022801f4ed44d0d200018e16d31fd31fd30ffa40fa40fa00fa00d303d20055806c198e45810101d700fa40fa40d401d0810101d700d303d31f3010361035103406d15504707f812bb0f8425280c705f2f4f823f8235004a082080f424072fb02103807103605035044e20a925f0ae07029d74920c21f953109d31f0ade211603f682104a1b6a2dba8ee65b388163d6f8425240c705f2f482008d05f82327bef2f481443e29f2f470830654768454765cc85550821082bc94245007cb1f15cb3f13cb1f01cf1601fa0201fa02cb03c926552040037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb0010685515e02182101f4cc29fbae302211c171a02fe5b08d30ffa005932509a812bb0f8425270c705f2f4817c05f82329bbf2f481443e21f2f45387db3c0a8064a904500aa822a18200966921c200f2f45122a070543b752680405176c855508210a03f712d5007cb1f15cb0f13cb0f01cf1601fa0201fa02cb03c9264c13504440037fc8cf8580ca00cf8440ce01fa02806acf401819003421a1f82358a120c101925b70e05301be935b8064e0a76401a9040068f400c901fb0010681057104610354403c87f01ca0055805089cb1f16cb1f14cb0f58cf1601cf1601fa0201fa02cb03ca00c9ed5402fc821007166d2bba8e375b3810685515812bb0f8425270c705f2f43070c87f01ca0055805089cb1f16cb1f14cb0f58cf1601cf1601fa0201fa02cb03ca00c9ed54e02182104b60157cbae3023ac00009c12119b08e2810685515c87f01ca0055805089cb1f16cb1f14cb0f58cf1601cf1601fa0201fa02cb03ca00c9ed54e01b1d01d45b08fa000131107810671056104510344139812bb0f8425270c705f2f4708040f8425469805468701110c855408210f1ca386c5006cb1f14810101cf0058cf16810101cf00cb0301fa02c941301c40337fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb0055071c0048c87f01ca0055805089cb1f16cb1f14cb0f58cf1601cf1601fa0201fa02cb03ca00c9ed54000a5f09f2c08210fa888f'
  );
  const builder = beginCell();
  builder.storeUint(0, 1);
  initStakeHolder_init_args({
    $$type: 'StakeHolder_init_args',
    id,
    master,
    staker,
    amount,
    plan_index,
    duration,
  })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

export const StakeHolder_errors = {
  2: { message: 'Stack underflow' },
  3: { message: 'Stack overflow' },
  4: { message: 'Integer overflow' },
  5: { message: 'Integer out of expected range' },
  6: { message: 'Invalid opcode' },
  7: { message: 'Type check error' },
  8: { message: 'Cell overflow' },
  9: { message: 'Cell underflow' },
  10: { message: 'Dictionary error' },
  11: { message: "'Unknown' error" },
  12: { message: 'Fatal error' },
  13: { message: 'Out of gas error' },
  14: { message: 'Virtualization error' },
  32: { message: 'Action list is invalid' },
  33: { message: 'Action list is too long' },
  34: { message: 'Action is invalid or not supported' },
  35: { message: 'Invalid source address in outbound message' },
  36: { message: 'Invalid destination address in outbound message' },
  37: { message: 'Not enough Toncoin' },
  38: { message: 'Not enough extra currencies' },
  39: { message: 'Outbound message does not fit into a cell after rewriting' },
  40: { message: 'Cannot process a message' },
  41: { message: 'Library reference is null' },
  42: { message: 'Library change action error' },
  43: {
    message:
      'Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree',
  },
  50: { message: 'Account state size exceeded limits' },
  128: { message: 'Null reference exception' },
  129: { message: 'Invalid serialization prefix' },
  130: { message: 'Invalid incoming message' },
  131: { message: 'Constraints error' },
  132: { message: 'Access denied' },
  133: { message: 'Contract stopped' },
  134: { message: 'Invalid argument' },
  135: { message: 'Code of a contract was not found' },
  136: { message: 'Invalid standard address' },
  138: { message: 'Not a basechain address' },
  3980: { message: 'Not enough jettons to payout' },
  11184: { message: 'Not a master' },
  14434: { message: 'No such plan' },
  17470: { message: 'Already unstaked' },
  25558: { message: 'Not a staker' },
  31749: { message: 'No need to take reward only, unstake' },
  32683: { message: 'Not enough value for fees' },
  36101: { message: 'Too early to unstake' },
  38505: { message: 'No reward to withdraw' },
  44179: { message: 'Not a holder' },
  45135: { message: 'Not my jetton wallet' },
  45786: { message: 'Not an admin' },
  52251: { message: 'Plan not exist' },
  55100: { message: 'Not enough free balance' },
  61639: { message: 'Not enough jettons to payout wtf' },
} as const;

export const StakeHolder_errors_backward = {
  'Stack underflow': 2,
  'Stack overflow': 3,
  'Integer overflow': 4,
  'Integer out of expected range': 5,
  'Invalid opcode': 6,
  'Type check error': 7,
  'Cell overflow': 8,
  'Cell underflow': 9,
  'Dictionary error': 10,
  "'Unknown' error": 11,
  'Fatal error': 12,
  'Out of gas error': 13,
  'Virtualization error': 14,
  'Action list is invalid': 32,
  'Action list is too long': 33,
  'Action is invalid or not supported': 34,
  'Invalid source address in outbound message': 35,
  'Invalid destination address in outbound message': 36,
  'Not enough Toncoin': 37,
  'Not enough extra currencies': 38,
  'Outbound message does not fit into a cell after rewriting': 39,
  'Cannot process a message': 40,
  'Library reference is null': 41,
  'Library change action error': 42,
  'Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree': 43,
  'Account state size exceeded limits': 50,
  'Null reference exception': 128,
  'Invalid serialization prefix': 129,
  'Invalid incoming message': 130,
  'Constraints error': 131,
  'Access denied': 132,
  'Contract stopped': 133,
  'Invalid argument': 134,
  'Code of a contract was not found': 135,
  'Invalid standard address': 136,
  'Not a basechain address': 138,
  'Not enough jettons to payout': 3980,
  'Not a master': 11184,
  'No such plan': 14434,
  'Already unstaked': 17470,
  'Not a staker': 25558,
  'No need to take reward only, unstake': 31749,
  'Not enough value for fees': 32683,
  'Too early to unstake': 36101,
  'No reward to withdraw': 38505,
  'Not a holder': 44179,
  'Not my jetton wallet': 45135,
  'Not an admin': 45786,
  'Plan not exist': 52251,
  'Not enough free balance': 55100,
  'Not enough jettons to payout wtf': 61639,
} as const;

const StakeHolder_types: ABIType[] = [
  {
    name: 'DataSize',
    header: null,
    fields: [
      {
        name: 'cells',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
      {
        name: 'bits',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
      {
        name: 'refs',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
    ],
  },
  {
    name: 'SignedBundle',
    header: null,
    fields: [
      {
        name: 'signature',
        type: {
          kind: 'simple',
          type: 'fixed-bytes',
          optional: false,
          format: 64,
        },
      },
      {
        name: 'signedData',
        type: {
          kind: 'simple',
          type: 'slice',
          optional: false,
          format: 'remainder',
        },
      },
    ],
  },
  {
    name: 'StateInit',
    header: null,
    fields: [
      { name: 'code', type: { kind: 'simple', type: 'cell', optional: false } },
      { name: 'data', type: { kind: 'simple', type: 'cell', optional: false } },
    ],
  },
  {
    name: 'Context',
    header: null,
    fields: [
      {
        name: 'bounceable',
        type: { kind: 'simple', type: 'bool', optional: false },
      },
      {
        name: 'sender',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'value',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
      { name: 'raw', type: { kind: 'simple', type: 'slice', optional: false } },
    ],
  },
  {
    name: 'SendParameters',
    header: null,
    fields: [
      {
        name: 'mode',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
      { name: 'body', type: { kind: 'simple', type: 'cell', optional: true } },
      { name: 'code', type: { kind: 'simple', type: 'cell', optional: true } },
      { name: 'data', type: { kind: 'simple', type: 'cell', optional: true } },
      {
        name: 'value',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
      {
        name: 'to',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'bounce',
        type: { kind: 'simple', type: 'bool', optional: false },
      },
    ],
  },
  {
    name: 'MessageParameters',
    header: null,
    fields: [
      {
        name: 'mode',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
      { name: 'body', type: { kind: 'simple', type: 'cell', optional: true } },
      {
        name: 'value',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
      {
        name: 'to',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'bounce',
        type: { kind: 'simple', type: 'bool', optional: false },
      },
    ],
  },
  {
    name: 'DeployParameters',
    header: null,
    fields: [
      {
        name: 'mode',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
      { name: 'body', type: { kind: 'simple', type: 'cell', optional: true } },
      {
        name: 'value',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
      {
        name: 'bounce',
        type: { kind: 'simple', type: 'bool', optional: false },
      },
      {
        name: 'init',
        type: { kind: 'simple', type: 'StateInit', optional: false },
      },
    ],
  },
  {
    name: 'StdAddress',
    header: null,
    fields: [
      {
        name: 'workchain',
        type: { kind: 'simple', type: 'int', optional: false, format: 8 },
      },
      {
        name: 'address',
        type: { kind: 'simple', type: 'uint', optional: false, format: 256 },
      },
    ],
  },
  {
    name: 'VarAddress',
    header: null,
    fields: [
      {
        name: 'workchain',
        type: { kind: 'simple', type: 'int', optional: false, format: 32 },
      },
      {
        name: 'address',
        type: { kind: 'simple', type: 'slice', optional: false },
      },
    ],
  },
  {
    name: 'BasechainAddress',
    header: null,
    fields: [
      {
        name: 'hash',
        type: { kind: 'simple', type: 'int', optional: true, format: 257 },
      },
    ],
  },
  {
    name: 'JettonData',
    header: null,
    fields: [
      {
        name: 'total_supply',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
      {
        name: 'mintable',
        type: { kind: 'simple', type: 'bool', optional: false },
      },
      {
        name: 'owner',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'content',
        type: { kind: 'simple', type: 'cell', optional: false },
      },
      {
        name: 'wallet_code',
        type: { kind: 'simple', type: 'cell', optional: false },
      },
    ],
  },
  {
    name: 'JettonWalletData',
    header: null,
    fields: [
      {
        name: 'balance',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
      {
        name: 'owner',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'master',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      { name: 'code', type: { kind: 'simple', type: 'cell', optional: false } },
    ],
  },
  {
    name: 'TokenTransfer',
    header: 260734629,
    fields: [
      {
        name: 'query_id',
        type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
      },
      {
        name: 'amount',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
      {
        name: 'receiver',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'response_destination',
        type: { kind: 'simple', type: 'address', optional: true },
      },
      {
        name: 'custom_payload',
        type: { kind: 'simple', type: 'cell', optional: true },
      },
      {
        name: 'forward_ton_amount',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
      {
        name: 'forward_payload',
        type: {
          kind: 'simple',
          type: 'slice',
          optional: false,
          format: 'remainder',
        },
      },
    ],
  },
  {
    name: 'TokenTransferInternal',
    header: 395134233,
    fields: [
      {
        name: 'query_id',
        type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
      },
      {
        name: 'amount',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
      {
        name: 'from',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'response_destination',
        type: { kind: 'simple', type: 'address', optional: true },
      },
      {
        name: 'forward_ton_amount',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
      {
        name: 'forward_payload',
        type: {
          kind: 'simple',
          type: 'slice',
          optional: false,
          format: 'remainder',
        },
      },
    ],
  },
  {
    name: 'TokenNotification',
    header: 1935855772,
    fields: [
      {
        name: 'query_id',
        type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
      },
      {
        name: 'amount',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
      {
        name: 'from',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'forward_payload',
        type: {
          kind: 'simple',
          type: 'slice',
          optional: false,
          format: 'remainder',
        },
      },
    ],
  },
  {
    name: 'TokenBurn',
    header: 1499400124,
    fields: [
      {
        name: 'query_id',
        type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
      },
      {
        name: 'amount',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
      {
        name: 'response_destination',
        type: { kind: 'simple', type: 'address', optional: true },
      },
      {
        name: 'custom_payload',
        type: { kind: 'simple', type: 'cell', optional: true },
      },
    ],
  },
  {
    name: 'TokenBurnNotification',
    header: 2078119902,
    fields: [
      {
        name: 'query_id',
        type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
      },
      {
        name: 'amount',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
      {
        name: 'sender',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'response_destination',
        type: { kind: 'simple', type: 'address', optional: true },
      },
    ],
  },
  {
    name: 'TokenExcesses',
    header: 3576854235,
    fields: [
      {
        name: 'query_id',
        type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
      },
    ],
  },
  {
    name: 'TokenUpdateContent',
    header: 2937889386,
    fields: [
      {
        name: 'content',
        type: { kind: 'simple', type: 'cell', optional: false },
      },
    ],
  },
  {
    name: 'ProvideWalletAddress',
    header: 745978227,
    fields: [
      {
        name: 'query_id',
        type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
      },
      {
        name: 'owner_address',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'include_address',
        type: { kind: 'simple', type: 'bool', optional: false },
      },
    ],
  },
  {
    name: 'TakeWalletAddress',
    header: 3513996288,
    fields: [
      {
        name: 'query_id',
        type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
      },
      {
        name: 'wallet_address',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'owner_address',
        type: {
          kind: 'simple',
          type: 'slice',
          optional: false,
          format: 'remainder',
        },
      },
    ],
  },
  {
    name: 'SetJettonWalletAddress',
    header: 4168773701,
    fields: [
      {
        name: 'wallet',
        type: { kind: 'simple', type: 'address', optional: false },
      },
    ],
  },
  {
    name: 'WithdrawTokensAdmin',
    header: 3029345321,
    fields: [
      {
        name: 'amount',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
    ],
  },
  {
    name: 'StakePlan',
    header: null,
    fields: [
      {
        name: 'pps',
        type: { kind: 'simple', type: 'uint', optional: false, format: 128 },
      },
      {
        name: 'duration',
        type: { kind: 'simple', type: 'uint', optional: false, format: 32 },
      },
      {
        name: 'min_stake',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
    ],
  },
  {
    name: 'Stake',
    header: null,
    fields: [
      {
        name: 'query_id',
        type: { kind: 'simple', type: 'uint', optional: false, format: 16 },
      },
      {
        name: 'plan_index',
        type: { kind: 'simple', type: 'uint', optional: false, format: 4 },
      },
      {
        name: 'refA',
        type: { kind: 'simple', type: 'address', optional: true },
      },
      {
        name: 'refB',
        type: { kind: 'simple', type: 'address', optional: true },
      },
    ],
  },
  {
    name: 'StakeNotification',
    header: 248769505,
    fields: [
      {
        name: 'query_id',
        type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
      },
      {
        name: 'holder_address',
        type: { kind: 'simple', type: 'address', optional: false },
      },
    ],
  },
  {
    name: 'Unstake',
    header: 2193396772,
    fields: [
      {
        name: 'query_id',
        type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
      },
      {
        name: 'started_at',
        type: { kind: 'simple', type: 'uint', optional: false, format: 32 },
      },
      {
        name: 'staker',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'amount',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
      {
        name: 'withdrawn',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
      {
        name: 'plan_index',
        type: { kind: 'simple', type: 'uint', optional: false, format: 4 },
      },
    ],
  },
  { name: 'UnstakeOk', header: 118910251, fields: [] },
  { name: 'StakeRejected', header: 3833305740, fields: [] },
  { name: 'HolderUnstake', header: 1243310637, fields: [] },
  {
    name: 'TakeReward',
    header: 809829684,
    fields: [
      {
        name: 'query_id',
        type: { kind: 'simple', type: 'uint', optional: false, format: 16 },
      },
      {
        name: 'stake_id',
        type: { kind: 'simple', type: 'uint', optional: false, format: 16 },
      },
      {
        name: 'stake_amount',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
      {
        name: 'stake_plan_index',
        type: { kind: 'simple', type: 'uint', optional: false, format: 4 },
      },
    ],
  },
  {
    name: 'HolderTakeReward',
    header: 525124255,
    fields: [
      {
        name: 'query_id',
        type: { kind: 'simple', type: 'uint', optional: false, format: 16 },
      },
      {
        name: 'full_reward',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
    ],
  },
  {
    name: 'TakeRewardOk',
    header: 2688512301,
    fields: [
      {
        name: 'query_id',
        type: { kind: 'simple', type: 'uint', optional: false, format: 16 },
      },
      {
        name: 'stake_id',
        type: { kind: 'simple', type: 'uint', optional: false, format: 16 },
      },
      {
        name: 'staker',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'amount',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
      {
        name: 'reward',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
      {
        name: 'plan_index',
        type: { kind: 'simple', type: 'uint', optional: false, format: 4 },
      },
    ],
  },
  {
    name: 'StakeProofRequest',
    header: 1264588156,
    fields: [
      {
        name: 'reward',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
    ],
  },
  {
    name: 'StakeProof',
    header: 4056561772,
    fields: [
      {
        name: 'id',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
      {
        name: 'staker',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'amount',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
      {
        name: 'plan_index',
        type: { kind: 'simple', type: 'uint', optional: false, format: 4 },
      },
      {
        name: 'reward',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
    ],
  },
  {
    name: 'Withdraw',
    header: 2856211534,
    fields: [
      {
        name: 'amount',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
      {
        name: 'recipient',
        type: { kind: 'simple', type: 'address', optional: false },
      },
    ],
  },
  {
    name: 'StakeHolder$Data',
    header: null,
    fields: [
      {
        name: 'started_at',
        type: { kind: 'simple', type: 'uint', optional: false, format: 32 },
      },
      {
        name: 'finish_at',
        type: { kind: 'simple', type: 'uint', optional: false, format: 32 },
      },
      {
        name: 'id',
        type: { kind: 'simple', type: 'uint', optional: false, format: 16 },
      },
      {
        name: 'master',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'staker',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'amount',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
      {
        name: 'withdrawn',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
      {
        name: 'plan',
        type: { kind: 'simple', type: 'uint', optional: false, format: 4 },
      },
      {
        name: 'holding',
        type: { kind: 'simple', type: 'bool', optional: false },
      },
    ],
  },
  {
    name: 'StakingMaster$Data',
    header: null,
    fields: [
      {
        name: 'id',
        type: { kind: 'simple', type: 'uint', optional: false, format: 32 },
      },
      {
        name: 'plans',
        type: {
          kind: 'dict',
          key: 'uint',
          keyFormat: 4,
          value: 'StakePlan',
          valueFormat: 'ref',
        },
      },
      {
        name: 'admin',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'jetton_wallet',
        type: { kind: 'simple', type: 'address', optional: true },
      },
      {
        name: 'total_balance',
        type: { kind: 'simple', type: 'uint', optional: false, format: 256 },
      },
      {
        name: 'locked_value',
        type: { kind: 'simple', type: 'uint', optional: false, format: 256 },
      },
    ],
  },
];

const StakeHolder_opcodes = {
  TokenTransfer: 260734629,
  TokenTransferInternal: 395134233,
  TokenNotification: 1935855772,
  TokenBurn: 1499400124,
  TokenBurnNotification: 2078119902,
  TokenExcesses: 3576854235,
  TokenUpdateContent: 2937889386,
  ProvideWalletAddress: 745978227,
  TakeWalletAddress: 3513996288,
  SetJettonWalletAddress: 4168773701,
  WithdrawTokensAdmin: 3029345321,
  StakeNotification: 248769505,
  Unstake: 2193396772,
  UnstakeOk: 118910251,
  StakeRejected: 3833305740,
  HolderUnstake: 1243310637,
  TakeReward: 809829684,
  HolderTakeReward: 525124255,
  TakeRewardOk: 2688512301,
  StakeProofRequest: 1264588156,
  StakeProof: 4056561772,
  Withdraw: 2856211534,
};

const StakeHolder_getters: ABIGetter[] = [
  {
    name: 'plan',
    methodId: 71948,
    arguments: [],
    returnType: { kind: 'simple', type: 'int', optional: false, format: 257 },
  },
  {
    name: 'started_at',
    methodId: 125425,
    arguments: [],
    returnType: { kind: 'simple', type: 'int', optional: false, format: 257 },
  },
  {
    name: 'finish_at',
    methodId: 113606,
    arguments: [],
    returnType: { kind: 'simple', type: 'int', optional: false, format: 257 },
  },
  {
    name: 'amount',
    methodId: 101100,
    arguments: [],
    returnType: { kind: 'simple', type: 'int', optional: false, format: 257 },
  },
  {
    name: 'withdrawn',
    methodId: 87558,
    arguments: [],
    returnType: { kind: 'simple', type: 'int', optional: false, format: 257 },
  },
  {
    name: 'is_holding',
    methodId: 94406,
    arguments: [],
    returnType: { kind: 'simple', type: 'bool', optional: false },
  },
  {
    name: 'id',
    methodId: 105872,
    arguments: [],
    returnType: { kind: 'simple', type: 'int', optional: false, format: 257 },
  },
];

export const StakeHolder_getterMapping: { [key: string]: string } = {
  plan: 'getPlan',
  started_at: 'getStartedAt',
  finish_at: 'getFinishAt',
  amount: 'getAmount',
  withdrawn: 'getWithdrawn',
  is_holding: 'getIsHolding',
  id: 'getId',
};

const StakeHolder_receivers: ABIReceiver[] = [
  { receiver: 'internal', message: { kind: 'typed', type: 'HolderUnstake' } },
  {
    receiver: 'internal',
    message: { kind: 'typed', type: 'HolderTakeReward' },
  },
  { receiver: 'internal', message: { kind: 'typed', type: 'UnstakeOk' } },
  {
    receiver: 'internal',
    message: { kind: 'typed', type: 'StakeProofRequest' },
  },
  { receiver: 'internal', message: { kind: 'empty' } },
];

export const WITHDRAW_REWARDS_FEE = 500000000n;

export class StakeHolder implements Contract {
  public static readonly storageReserve = 0n;
  public static readonly errors = StakeHolder_errors_backward;
  public static readonly opcodes = StakeHolder_opcodes;

  static async init(
    id: bigint,
    master: Address,
    staker: Address,
    amount: bigint,
    plan_index: bigint,
    duration: bigint
  ) {
    return await StakeHolder_init(
      id,
      master,
      staker,
      amount,
      plan_index,
      duration
    );
  }

  static async fromInit(
    id: bigint,
    master: Address,
    staker: Address,
    amount: bigint,
    plan_index: bigint,
    duration: bigint
  ) {
    const __gen_init = await StakeHolder_init(
      id,
      master,
      staker,
      amount,
      plan_index,
      duration
    );
    const address = contractAddress(0, __gen_init);
    return new StakeHolder(address, __gen_init);
  }

  static fromAddress(address: Address) {
    return new StakeHolder(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell; data: Cell };
  readonly abi: ContractABI = {
    types: StakeHolder_types,
    getters: StakeHolder_getters,
    receivers: StakeHolder_receivers,
    errors: StakeHolder_errors,
  };

  constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(
    provider: ContractProvider,
    via: Sender,
    args: { value: bigint; bounce?: boolean | null | undefined },
    message:
      | HolderUnstake
      | HolderTakeReward
      | UnstakeOk
      | StakeProofRequest
      | null
  ) {
    let body: Cell | null = null;
    if (
      message &&
      typeof message === 'object' &&
      !(message instanceof Slice) &&
      message.$$type === 'HolderUnstake'
    ) {
      body = beginCell().store(storeHolderUnstake(message)).endCell();
    }
    if (
      message &&
      typeof message === 'object' &&
      !(message instanceof Slice) &&
      message.$$type === 'HolderTakeReward'
    ) {
      body = beginCell().store(storeHolderTakeReward(message)).endCell();
    }
    if (
      message &&
      typeof message === 'object' &&
      !(message instanceof Slice) &&
      message.$$type === 'UnstakeOk'
    ) {
      body = beginCell().store(storeUnstakeOk(message)).endCell();
    }
    if (
      message &&
      typeof message === 'object' &&
      !(message instanceof Slice) &&
      message.$$type === 'StakeProofRequest'
    ) {
      body = beginCell().store(storeStakeProofRequest(message)).endCell();
    }
    if (message === null) {
      body = new Cell();
    }
    if (body === null) {
      throw new Error('Invalid message type');
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getPlan(provider: ContractProvider) {
    const builder = new TupleBuilder();
    const source = (await provider.get('plan', builder.build())).stack;
    const result = source.readBigNumber();
    return result;
  }

  async getStartedAt(provider: ContractProvider) {
    const builder = new TupleBuilder();
    const source = (await provider.get('started_at', builder.build())).stack;
    const result = source.readBigNumber();
    return result;
  }

  async getFinishAt(provider: ContractProvider) {
    const builder = new TupleBuilder();
    const source = (await provider.get('finish_at', builder.build())).stack;
    const result = source.readBigNumber();
    return result;
  }

  async getAmount(provider: ContractProvider) {
    const builder = new TupleBuilder();
    const source = (await provider.get('amount', builder.build())).stack;
    const result = source.readBigNumber();
    return result;
  }

  async getWithdrawn(provider: ContractProvider) {
    const builder = new TupleBuilder();
    const source = (await provider.get('withdrawn', builder.build())).stack;
    const result = source.readBigNumber();
    return result;
  }

  async getIsHolding(provider: ContractProvider) {
    const builder = new TupleBuilder();
    const source = (await provider.get('is_holding', builder.build())).stack;
    const result = source.readBoolean();
    return result;
  }

  async getId(provider: ContractProvider) {
    const builder = new TupleBuilder();
    const source = (await provider.get('id', builder.build())).stack;
    const result = source.readBigNumber();
    return result;
  }
}
