import { Base64 } from 'js-base64';
import winston from 'winston';

import { Address, Slice, beginCell } from '@ton/core';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.label({ label: 'APP' }),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    winston.format.printf(({ level, message, label, timestamp, ...meta }) => {
      return `[${timestamp}] [${label}] ${level.toUpperCase()}: ${message} ${
        Object.keys(meta).length ? '\n' + JSON.stringify(meta, null, 2) : ''
      }`;
    })
  ),
  transports: [new winston.transports.Console()],
});

export function makeStakePayload(
  queryId: bigint,
  planIndex: number,
  refStakeA: Address | null,
  refStakeB: Address | null
): Slice {
  const b = beginCell().storeUint(1, 1); // begin_payload_prefix (have payload)
  b.storeUint(queryId, 32);
  b.storeUint(planIndex, 4);
  if (refStakeA && refStakeB) {
    b.storeUint(2, 2);
    logger.info(`stored 2 refs`);
  } else if (refStakeA) {
    b.storeUint(1, 2);
    logger.info(`stored 1 ref`);
  } else {
    b.storeUint(0, 2);
    logger.info(`stored zero refs`);
  }
  b.storeMaybeRef(
    refStakeA ? beginCell().storeAddress(refStakeA).endCell() : null
  );
  logger.info(`stored refStakeA: ${refStakeA?.toString()}`);
  b.storeMaybeRef(
    refStakeB ? beginCell().storeAddress(refStakeB).endCell() : null
  );
  logger.info(`stored refStakeB: ${refStakeB?.toString()}`);
  logger.info(`stored planIndex: ${planIndex}`);
  logger.info(`stored queryId: ${queryId}`);
  logger.info(`stored payload: refs=${b.refs}, bits=${b.bits} of 1023`);
  const a = b.endCell();
  const b64 = Base64.fromUint8Array(a.toBoc());
  logger.info(`payload: ${b64}`);
  return a.asSlice();
}
