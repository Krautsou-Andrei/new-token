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

export type JettonWallet$Data = {
  $$type: 'JettonWallet$Data';
  balance: bigint;
  owner: Address;
  master: Address;
};

export function storeJettonWallet$Data(src: JettonWallet$Data) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeCoins(src.balance);
    b_0.storeAddress(src.owner);
    b_0.storeAddress(src.master);
  };
}

export function loadJettonWallet$Data(slice: Slice) {
  const sc_0 = slice;
  const _balance = sc_0.loadCoins();
  const _owner = sc_0.loadAddress();
  const _master = sc_0.loadAddress();
  return {
    $$type: 'JettonWallet$Data' as const,
    balance: _balance,
    owner: _owner,
    master: _master,
  };
}

export function loadTupleJettonWallet$Data(source: TupleReader) {
  const _balance = source.readBigNumber();
  const _owner = source.readAddress();
  const _master = source.readAddress();
  return {
    $$type: 'JettonWallet$Data' as const,
    balance: _balance,
    owner: _owner,
    master: _master,
  };
}

export function loadGetterTupleJettonWallet$Data(source: TupleReader) {
  const _balance = source.readBigNumber();
  const _owner = source.readAddress();
  const _master = source.readAddress();
  return {
    $$type: 'JettonWallet$Data' as const,
    balance: _balance,
    owner: _owner,
    master: _master,
  };
}

export function storeTupleJettonWallet$Data(source: JettonWallet$Data) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.balance);
  builder.writeAddress(source.owner);
  builder.writeAddress(source.master);
  return builder.build();
}

export function dictValueParserJettonWallet$Data(): DictionaryValue<JettonWallet$Data> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeJettonWallet$Data(src)).endCell()
      );
    },
    parse: (src) => {
      return loadJettonWallet$Data(src.loadRef().beginParse());
    },
  };
}

export type ChangeOwner = {
  $$type: 'ChangeOwner';
  queryId: bigint;
  newOwner: Address;
};

export function storeChangeOwner(src: ChangeOwner) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(2174598809, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.newOwner);
  };
}

export function loadChangeOwner(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 2174598809) {
    throw Error('Invalid prefix');
  }
  const _queryId = sc_0.loadUintBig(64);
  const _newOwner = sc_0.loadAddress();
  return {
    $$type: 'ChangeOwner' as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

export function loadTupleChangeOwner(source: TupleReader) {
  const _queryId = source.readBigNumber();
  const _newOwner = source.readAddress();
  return {
    $$type: 'ChangeOwner' as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

export function loadGetterTupleChangeOwner(source: TupleReader) {
  const _queryId = source.readBigNumber();
  const _newOwner = source.readAddress();
  return {
    $$type: 'ChangeOwner' as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

export function storeTupleChangeOwner(source: ChangeOwner) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.newOwner);
  return builder.build();
}

export function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
    },
    parse: (src) => {
      return loadChangeOwner(src.loadRef().beginParse());
    },
  };
}

export type ChangeOwnerOk = {
  $$type: 'ChangeOwnerOk';
  queryId: bigint;
  newOwner: Address;
};

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(846932810, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.newOwner);
  };
}

export function loadChangeOwnerOk(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 846932810) {
    throw Error('Invalid prefix');
  }
  const _queryId = sc_0.loadUintBig(64);
  const _newOwner = sc_0.loadAddress();
  return {
    $$type: 'ChangeOwnerOk' as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

export function loadTupleChangeOwnerOk(source: TupleReader) {
  const _queryId = source.readBigNumber();
  const _newOwner = source.readAddress();
  return {
    $$type: 'ChangeOwnerOk' as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

export function loadGetterTupleChangeOwnerOk(source: TupleReader) {
  const _queryId = source.readBigNumber();
  const _newOwner = source.readAddress();
  return {
    $$type: 'ChangeOwnerOk' as const,
    queryId: _queryId,
    newOwner: _newOwner,
  };
}

export function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.newOwner);
  return builder.build();
}

export function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
    },
    parse: (src) => {
      return loadChangeOwnerOk(src.loadRef().beginParse());
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

export type Mint = {
  $$type: 'Mint';
  amount: bigint;
  receiver: Address;
};

export function storeMint(src: Mint) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeUint(4235234258, 32);
    b_0.storeInt(src.amount, 257);
    b_0.storeAddress(src.receiver);
  };
}

export function loadMint(slice: Slice) {
  const sc_0 = slice;
  if (sc_0.loadUint(32) !== 4235234258) {
    throw Error('Invalid prefix');
  }
  const _amount = sc_0.loadIntBig(257);
  const _receiver = sc_0.loadAddress();
  return { $$type: 'Mint' as const, amount: _amount, receiver: _receiver };
}

export function loadTupleMint(source: TupleReader) {
  const _amount = source.readBigNumber();
  const _receiver = source.readAddress();
  return { $$type: 'Mint' as const, amount: _amount, receiver: _receiver };
}

export function loadGetterTupleMint(source: TupleReader) {
  const _amount = source.readBigNumber();
  const _receiver = source.readAddress();
  return { $$type: 'Mint' as const, amount: _amount, receiver: _receiver };
}

export function storeTupleMint(source: Mint) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  builder.writeAddress(source.receiver);
  return builder.build();
}

export function dictValueParserMint(): DictionaryValue<Mint> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeMint(src)).endCell());
    },
    parse: (src) => {
      return loadMint(src.loadRef().beginParse());
    },
  };
}

export type JettonMaster$Data = {
  $$type: 'JettonMaster$Data';
  total_supply: bigint;
  owner: Address;
  content: Cell;
  mintable: boolean;
  max_supply: bigint;
};

export function storeJettonMaster$Data(src: JettonMaster$Data) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeInt(src.total_supply, 257);
    b_0.storeAddress(src.owner);
    b_0.storeRef(src.content);
    b_0.storeBit(src.mintable);
    b_0.storeCoins(src.max_supply);
  };
}

export function loadJettonMaster$Data(slice: Slice) {
  const sc_0 = slice;
  const _total_supply = sc_0.loadIntBig(257);
  const _owner = sc_0.loadAddress();
  const _content = sc_0.loadRef();
  const _mintable = sc_0.loadBit();
  const _max_supply = sc_0.loadCoins();
  return {
    $$type: 'JettonMaster$Data' as const,
    total_supply: _total_supply,
    owner: _owner,
    content: _content,
    mintable: _mintable,
    max_supply: _max_supply,
  };
}

export function loadTupleJettonMaster$Data(source: TupleReader) {
  const _total_supply = source.readBigNumber();
  const _owner = source.readAddress();
  const _content = source.readCell();
  const _mintable = source.readBoolean();
  const _max_supply = source.readBigNumber();
  return {
    $$type: 'JettonMaster$Data' as const,
    total_supply: _total_supply,
    owner: _owner,
    content: _content,
    mintable: _mintable,
    max_supply: _max_supply,
  };
}

export function loadGetterTupleJettonMaster$Data(source: TupleReader) {
  const _total_supply = source.readBigNumber();
  const _owner = source.readAddress();
  const _content = source.readCell();
  const _mintable = source.readBoolean();
  const _max_supply = source.readBigNumber();
  return {
    $$type: 'JettonMaster$Data' as const,
    total_supply: _total_supply,
    owner: _owner,
    content: _content,
    mintable: _mintable,
    max_supply: _max_supply,
  };
}

export function storeTupleJettonMaster$Data(source: JettonMaster$Data) {
  const builder = new TupleBuilder();
  builder.writeNumber(source.total_supply);
  builder.writeAddress(source.owner);
  builder.writeCell(source.content);
  builder.writeBoolean(source.mintable);
  builder.writeNumber(source.max_supply);
  return builder.build();
}

export function dictValueParserJettonMaster$Data(): DictionaryValue<JettonMaster$Data> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(
        beginCell().store(storeJettonMaster$Data(src)).endCell()
      );
    },
    parse: (src) => {
      return loadJettonMaster$Data(src.loadRef().beginParse());
    },
  };
}

type JettonMaster_init_args = {
  $$type: 'JettonMaster_init_args';
  owner: Address;
  content: Cell;
  max_supply: bigint;
};

function initJettonMaster_init_args(src: JettonMaster_init_args) {
  return (builder: Builder) => {
    const b_0 = builder;
    b_0.storeAddress(src.owner);
    b_0.storeRef(src.content);
    b_0.storeInt(src.max_supply, 257);
  };
}

async function JettonMaster_init(
  owner: Address,
  content: Cell,
  max_supply: bigint
) {
  const __code = Cell.fromHex(
    'b5ee9c7241022c01000b81000228ff008e88f4a413f4bcf2c80bed5320e303ed43d9010902027102040167be28ef6a268690000c708408080eb807d206a69007d002aa0360ac7097d206a408080eb802a9001e8ac382a903f80f16d9e3628c030002230202710507016badbcf6a268690000c708408080eb807d206a69007d002aa0360ac7097d206a408080eb802a9001e8ac382a903f80f12a826d9e3628c006017af82888c87001ca005a59cf1601cf16c9705920f90022f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f90400c87401cb0212ca07cbffc9d0180167af16f6a268690000c708408080eb807d206a69007d002aa0360ac7097d206a408080eb802a9001e8ac382a903f80f16d9e362ac0080132f828524088c87001ca005a59cf1601cf16c9305465305466601802f830eda2edfb01d072d721d200d200fa4021103450666f04f86102f862ed44d0d200018e10810101d700fa40d4d200fa0055406c158e12fa40d4810101d700552003d1587055207f01e206925f06e024d749c21fe30004f9012082f01cb7a7a0cb80ae3d534b0f9102c31987b0caf090e7fa29f82cc8cc93c78f1232ba0a1504f404d31f218210fc708bd2ba8ed031810101d700fa405932f8416f2410235f03248138c602c705f2f4810e6826f2f4812fd15351a028bbf2f423105706103504db3cc87f01ca0055405045810101cf0058cf16ccca0001fa02c9ed54db31e0218210af1ca26abae3022182107bdd97debae3020182102c76b973ba160b0d10015631d4013110344135db3c3210344300c87f01ca0055405045810101cf0058cf16ccca0001fa02c9ed54db310c0012f8425240c705f2e084029e31d33ffa00fa4020d70b01c30093fa40019472d7216de2144330341056104610364780db3c5047a1246eb3923434e30d441302c87f01ca0055405045810101cf0058cf16ccca0001fa02c9ed54db310e0f018cf8416f2410235f035550db3c0181114d02705920f90022f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f90400c87401cb0212ca07cbffc9d017c70516f2f455031700aa04206ef2d0807070804008c8018210d53276db58cb1fcb3fc91034413018146d50436d5033c8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf819d58cf8680cf8480f400f400cf81e2f400c901fb0003a48fced33ffa40d200552033815d8ff8416f24135f0382085d1420bef2f4f828521088c87001ca005a59cf1601cf16c904e30f4034c87f01ca0055405045810101cf0058cf16ccca0001fa02c9ed54db31e00418111302fef8427002804006705920f90022f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f90400c87401cb0212ca07cbffc9d07fc8ca005004cf16c9d04430c855208210d17354005004cb1f12cb3f01cf1601cf16c9135a6d6d40037fc8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf818ae2f400c90114120004fb0001fe31f8427002804005705920f90022f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f90400c87401cb0212ca07cbffc9d070c8ca00c9d01024c855208210d17354005004cb1f12cb3f01cf1601cf16c941305a6d6d40037fc8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf818ae2f400c901fb0014001a58cf8680cf8480f400f400cf8102da8ebe30f8416f2410235f03810e6825f2f4812fd124a66427bbf2f4103580642306103504db3cc87f01ca0055405045810101cf0058cf16ccca0001fa02c9ed54e0340382f0efebab918279b430101f68870d502c28d286c3bafd19a290fd5f6575d4008f31bae3025f04f2c082162b02f48148ec25f2f45171a05541db3c5c705920f90022f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f90400c87401cb0212ca07cbffc9d0707f804022f82821c8c9d01035104f102302111002c855508210178d45195007cb1f15cb3f5003fa0201cf1601206e9430cf848092cf16e201fa0201cf16c9172a0120f82888c87001ca005a59cf1601cf16c918022cff008e88f4a413f4bcf2c80bed53208e8130e1ed43d9191e0202711a1c0147bfd8176a268690000cd7d007d207d202a903609cd7d207d202c816880b82cf16d9e361a41b002c5cf82ac87001ca005a59cf1601cf16c9305463305230014bbc9bcf6a268690000cd7d007d207d202a903609cd7d207d202c816880b82cf12a816d9e3618c1d007a21f82ac87001ca005a59cf1601cf16c9705920f90022f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f90400c87401cb0212ca07cbffc9d004b401d072d721d200d200fa4021103450666f04f86102f862ed44d0d200019afa00fa40fa4055206c139afa40fa405902d1017059e204e30202d70d1ff2e0822182100f8a7ea5bae302218210178d4519bae302018210595f07bcba1f20232800c2028020d7217021d749c21f9430d31f01de208210178d4519ba8e1d30d33ffa00596c21a002c87f01ca0055205afa0258cf1601cf16c9ed54e082107bdd97deba8e1cd33ffa00596c21a002c87f01ca0055205afa0258cf1601cf16c9ed54e05f0401fa31d33ffa00fa4020d70b01c30093fa40019472d7216de201f404fa00516616151443303236f8416f2481114d53c3c705f2f443305230fa40fa0071d721fa00fa00306c6170f83aaa0082098cba80a0820921eac0a027a001813ebb02bcf2f45163a18200f5fc21c2fff2f45128f82ac87001ca005a59cf1601cf16c95c2101fe705920f90022f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f90400c87401cb0212ca07cbffc9d050657080407f2c471350bcc855508210178d45195007cb1f15cb3f5003fa0201cf1601206e9430cf848092cf16e201fa0201cf16c9104610574014030710465522c8cf8580ca00cf8440ce01fa028069cf40220066025c6e016eb0935bcf819d58cf8680cf8480f400f400cf81e2f400c901fb0002c87f01ca0055205afa0258cf1601cf16c9ed5401fe31d33ffa00fa4020d70b01c30093fa40019472d7216de201fa0051551514433036f8416f2453c2c705b38e4a536cf82ac87001ca005a59cf1601cf16c9018200a6d402705920f90022f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f90400c87401cb0212ca07cbffc9d05240c705f2f4de51a7a08200f5fc2124039cc2fff2f440bc2bdb3c10344dcbfa40fa0071d721fa00fa00306c6170f83a22c200953036135f03e30d206eb39323c2009170e29410235f03e30d59c87f01ca0055205afa0258cf1601cf16c9ed54252627002cf8276f1021a1820921eac066b608a18208c65d40a0a100ca5182a15008a171702747135069c8553082107362d09c5005cb1f13cb3f01fa0201cf1601cf16c9294314450010246d50436d03c8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf819d58cf8680cf8480f400f400cf81e2f400c901fb00102300a0206ef2d0807002c8018210d53276db58cb1fcb3fc91344407150346d036d5520c8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf819d58cf8680cf8480f400f400cf81e2f400c901fb0001dc8ee6d33ffa0020d70b01c30093fa40019472d7216de201f40455303033f8416f2481114d5393c705f2f45174a18200f5fc21c2fff2f443305238fa40fa0071d721fa00fa00306c6170f83a8200a99e0182098cba80a0820921eac0a012bcf2f47080405413267f06e05f04f2c0822900e2c8553082107bdd97de5005cb1f13cb3f01fa0201cf1601206e9430cf848092cf16e2c926504410246d50436d03c8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf819d58cf8680cf8480f400f400cf81e2f400c901fb0002c87f01ca0055205afa0258cf1601cf16c9ed54007e4650104b103a40ba1036453304c8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf819d58cf8680cf8480f400f400cf81e2f400c901fb004034005ef8416f2410235f03218138c602c705f2f440037001c87f01ca0055405045810101cf0058cf16ccca0001fa02c9ed548ada8f09'
  );
  const builder = beginCell();
  builder.storeUint(0, 1);
  initJettonMaster_init_args({
    $$type: 'JettonMaster_init_args',
    owner,
    content,
    max_supply,
  })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

export const JettonMaster_errors = {
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
  3688: { message: 'Not mintable' },
  4429: { message: 'Invalid sender' },
  12241: { message: 'Max supply exceeded' },
  14534: { message: 'Not owner' },
  16059: { message: 'Invalid value' },
  18668: { message: "Can't Mint Anymore" },
  23951: { message: 'Insufficient gas' },
  42708: { message: 'Invalid sender!' },
  43422: { message: 'Invalid value - Burn' },
  62972: { message: 'Invalid balance' },
} as const;

export const JettonMaster_errors_backward = {
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
  'Not mintable': 3688,
  'Invalid sender': 4429,
  'Max supply exceeded': 12241,
  'Not owner': 14534,
  'Invalid value': 16059,
  "Can't Mint Anymore": 18668,
  'Insufficient gas': 23951,
  'Invalid sender!': 42708,
  'Invalid value - Burn': 43422,
  'Invalid balance': 62972,
} as const;

const JettonMaster_types: ABIType[] = [
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
    name: 'JettonWallet$Data',
    header: null,
    fields: [
      {
        name: 'balance',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
      {
        name: 'owner',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'master',
        type: { kind: 'simple', type: 'address', optional: false },
      },
    ],
  },
  {
    name: 'ChangeOwner',
    header: 2174598809,
    fields: [
      {
        name: 'queryId',
        type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
      },
      {
        name: 'newOwner',
        type: { kind: 'simple', type: 'address', optional: false },
      },
    ],
  },
  {
    name: 'ChangeOwnerOk',
    header: 846932810,
    fields: [
      {
        name: 'queryId',
        type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
      },
      {
        name: 'newOwner',
        type: { kind: 'simple', type: 'address', optional: false },
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
    name: 'Mint',
    header: 4235234258,
    fields: [
      {
        name: 'amount',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
      {
        name: 'receiver',
        type: { kind: 'simple', type: 'address', optional: false },
      },
    ],
  },
  {
    name: 'JettonMaster$Data',
    header: null,
    fields: [
      {
        name: 'total_supply',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
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
        name: 'mintable',
        type: { kind: 'simple', type: 'bool', optional: false },
      },
      {
        name: 'max_supply',
        type: {
          kind: 'simple',
          type: 'uint',
          optional: false,
          format: 'coins',
        },
      },
    ],
  },
];

const JettonMaster_opcodes = {
  ChangeOwner: 2174598809,
  ChangeOwnerOk: 846932810,
  TokenTransfer: 260734629,
  TokenTransferInternal: 395134233,
  TokenNotification: 1935855772,
  TokenBurn: 1499400124,
  TokenBurnNotification: 2078119902,
  TokenExcesses: 3576854235,
  TokenUpdateContent: 2937889386,
  ProvideWalletAddress: 745978227,
  TakeWalletAddress: 3513996288,
  Mint: 4235234258,
};

const JettonMaster_getters: ABIGetter[] = [
  {
    name: 'get_jetton_data',
    methodId: 106029,
    arguments: [],
    returnType: { kind: 'simple', type: 'JettonData', optional: false },
  },
  {
    name: 'get_wallet_address',
    methodId: 103289,
    arguments: [
      {
        name: 'owner',
        type: { kind: 'simple', type: 'address', optional: false },
      },
    ],
    returnType: { kind: 'simple', type: 'address', optional: false },
  },
  {
    name: 'owner',
    methodId: 83229,
    arguments: [],
    returnType: { kind: 'simple', type: 'address', optional: false },
  },
];

export const JettonMaster_getterMapping: { [key: string]: string } = {
  get_jetton_data: 'getGetJettonData',
  get_wallet_address: 'getGetWalletAddress',
  owner: 'getOwner',
};

const JettonMaster_receivers: ABIReceiver[] = [
  { receiver: 'internal', message: { kind: 'typed', type: 'Mint' } },
  { receiver: 'internal', message: { kind: 'text', text: 'Mint: 100' } },
  { receiver: 'internal', message: { kind: 'text', text: 'Owner: MintClose' } },
  {
    receiver: 'internal',
    message: { kind: 'typed', type: 'TokenUpdateContent' },
  },
  {
    receiver: 'internal',
    message: { kind: 'typed', type: 'TokenBurnNotification' },
  },
  {
    receiver: 'internal',
    message: { kind: 'typed', type: 'ProvideWalletAddress' },
  },
];

export class JettonMaster implements Contract {
  public static readonly minTonsForStorage = 19000000n;
  public static readonly gasConsumption = 13000000n;
  public static readonly storageReserve = 0n;
  public static readonly errors = JettonMaster_errors_backward;
  public static readonly opcodes = JettonMaster_opcodes;

  static async init(owner: Address, content: Cell, max_supply: bigint) {
    return await JettonMaster_init(owner, content, max_supply);
  }

  static async fromInit(owner: Address, content: Cell, max_supply: bigint) {
    const __gen_init = await JettonMaster_init(owner, content, max_supply);
    const address = contractAddress(0, __gen_init);
    return new JettonMaster(address, __gen_init);
  }

  static fromAddress(address: Address) {
    return new JettonMaster(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell; data: Cell };
  readonly abi: ContractABI = {
    types: JettonMaster_types,
    getters: JettonMaster_getters,
    receivers: JettonMaster_receivers,
    errors: JettonMaster_errors,
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
      | Mint
      | 'Mint: 100'
      | 'Owner: MintClose'
      | TokenUpdateContent
      | TokenBurnNotification
      | ProvideWalletAddress
  ) {
    let body: Cell | null = null;
    if (
      message &&
      typeof message === 'object' &&
      !(message instanceof Slice) &&
      message.$$type === 'Mint'
    ) {
      body = beginCell().store(storeMint(message)).endCell();
    }
    if (message === 'Mint: 100') {
      body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
    }
    if (message === 'Owner: MintClose') {
      body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
    }
    if (
      message &&
      typeof message === 'object' &&
      !(message instanceof Slice) &&
      message.$$type === 'TokenUpdateContent'
    ) {
      body = beginCell().store(storeTokenUpdateContent(message)).endCell();
    }
    if (
      message &&
      typeof message === 'object' &&
      !(message instanceof Slice) &&
      message.$$type === 'TokenBurnNotification'
    ) {
      body = beginCell().store(storeTokenBurnNotification(message)).endCell();
    }
    if (
      message &&
      typeof message === 'object' &&
      !(message instanceof Slice) &&
      message.$$type === 'ProvideWalletAddress'
    ) {
      body = beginCell().store(storeProvideWalletAddress(message)).endCell();
    }
    if (body === null) {
      throw new Error('Invalid message type');
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getGetJettonData(provider: ContractProvider) {
    const builder = new TupleBuilder();
    const source = (await provider.get('get_jetton_data', builder.build()))
      .stack;
    const result = loadGetterTupleJettonData(source);
    return result;
  }

  async getGetWalletAddress(provider: ContractProvider, owner: Address) {
    const builder = new TupleBuilder();
    builder.writeAddress(owner);
    const source = (await provider.get('get_wallet_address', builder.build()))
      .stack;
    const result = source.readAddress();
    return result;
  }

  async getOwner(provider: ContractProvider) {
    const builder = new TupleBuilder();
    const source = (await provider.get('owner', builder.build())).stack;
    const result = source.readAddress();
    return result;
  }
}
