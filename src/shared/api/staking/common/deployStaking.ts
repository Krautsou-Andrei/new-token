import { Dictionary, toNano } from '@ton/core';
import { Address } from '@ton/core';
import { TonClient } from '@ton/ton';

import { env } from '@/shared/consts';

import { JettonWallet } from './Jetton/tact_JettonWallet';
import { StakeHolder, type StakePlan } from './StakingHolder/tact_StakeHolder';
import { StakingMaster } from './StakingMaster/tact_StakingMaster';
import { makeStakePayload } from './stakeUtils';

function stakePlan(pps: bigint, duration: number, minStake: string): StakePlan {
  return {
    $$type: 'StakePlan',
    pps: pps,
    duration: BigInt(duration),
    min_stake: toNano(minStake),
  };
}
export const FEES = {
  // Объединённые комиссии
  mint: toNano(0.02),
  initStakingMaster: toNano(0.0865), // EXACT
  takeRewardBeforeFinish: toNano(0.7), // ~EXACT
  tokenTransferValue: toNano(0.1), // EXACT
  tokenTransferForwardTon: toNano(0.08), // EXACT
};
const plans = Dictionary.empty(Dictionary.Keys.Uint(8));
const plan0 = stakePlan(toNano(10), 1, '0.1');
plans.set(0, plan0); // total 10% per 1 second

const stackingAddr = Address.parse(env.stakeMasterAddress);

export async function sendStaking(
  id: number,
  amount: number,
  address: string,
  refA?: Address,
  refB?: Address
) {
  const staking = await JettonWallet.send({
    $$type: 'TokenTransfer',
    receiver: stackingAddr,
    amount: toNano(amount),
    query_id: BigInt(id),
    response_destination: Address.parse(address),
    custom_payload: null,
    forward_ton_amount: FEES.tokenTransferForwardTon,
    forward_payload: makeStakePayload(
      BigInt(id),
      0,
      refA ?? null,
      refB ?? null
    ),
  });
  return staking;
}

const client = new TonClient({
  endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
});

export async function getStaker(
  id: number,
  staker: string,
  amount: number,
  planId: number
) {
  const stakingMaster = new StakingMaster(stackingAddr);
  const stakingAddr = await stakingMaster.getStakingAddress(
    client.provider(stackingAddr),
    BigInt(id),
    Address.parse(staker),
    toNano(amount),
    BigInt(planId)
  );
  const stakingHolder = StakeHolder.fromAddress(stakingAddr);
  const cell = await stakingHolder.send({
    $$type: 'HolderUnstake',
  });
  return { addr: stakingAddr, cell: cell };
}

// export async function takeReward(id: number, amount: number, planId: number) {
//   const stakingMaster = new StakingMaster(stackingAddr);

//   const cell = await stakingMaster.send({
//     $$type: 'TakeReward',
//     query_id: 120n,
//     stake_id: BigInt(id),
//     stake_amount: toNano(amount),
//     stake_plan_index: BigInt(planId),
//   });
//   return { addr: stakingMaster, cell };
// }
