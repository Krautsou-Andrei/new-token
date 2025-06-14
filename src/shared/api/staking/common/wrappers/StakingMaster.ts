import {
  Address,
  Cell,
  type Contract,
  type ContractProvider,
  beginCell,
} from '@ton/core';

export class StakingMaster implements Contract {
  address: Address;
  init?: { code: Cell; data: Cell };

  constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  // Статический метод для создания тела сообщения стейка
  static createStakeMessage(amount: bigint): Cell {
    return beginCell()
      .storeUint(0x12345678, 32) // OP-код операции стейка
      .storeCoins(amount)
      .endCell();
  }

  // Статический метод для создания тела анстейка
  static createUnstakeMessage(stakeId: number): Cell {
    return beginCell()
      .storeUint(0x87654321, 32) // OP-код операции анстейка
      .storeUint(stakeId, 64)
      .endCell();
  }

  // Для чтения данных (не требует отправки транзакции)
  async getStakes(provider: ContractProvider) {
    const { stack } = await provider.get('get_stakes', []);
    return stack.readBigNumber();
  }
}
