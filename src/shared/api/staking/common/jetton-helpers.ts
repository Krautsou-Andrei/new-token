import { sha256_sync } from '@ton/crypto';
import { Cell, Dictionary, Slice, beginCell } from '@ton/ton';

const ONCHAIN_CONTENT_PREFIX = 0x00;
const SNAKE_PREFIX = 0x00;
const CELL_MAX_SIZE_BYTES = Math.floor((1023 - 8) / 8);

export const begin_payload_prefix = beginCell().storeUint(1, 1);
export const no_payload = beginCell().storeUint(0, 1).endCell().asSlice();

export function makeForwardPayload(data: Cell): Slice {
  return begin_payload_prefix.storeRef(data).endCell().asSlice();
}

const toKey = (key: string) => {
  return BigInt(`0x${sha256_sync(key).toString('hex')}`);
};

export function buildOnchainMetadata(data: {
  name: string;
  description: string;
  image: string;
}): Cell {
  const dict = Dictionary.empty(
    Dictionary.Keys.BigUint(256),
    Dictionary.Values.Cell()
  );

  // Store the on-chain metadata in the dictionary
  Object.entries(data).forEach(([key, value]) => {
    dict.set(toKey(key), makeSnakeCell(Buffer.from(value, 'utf8')));
  });

  return beginCell()
    .storeInt(ONCHAIN_CONTENT_PREFIX, 8)
    .storeDict(dict)
    .endCell();
}

export function dummy_metadata() {
  const j_name = `Staking:${generateRandomString(4)}`;
  return {
    metadata: buildOnchainMetadata({
      name: j_name,
      description: 'Staking token',
      image:
        'https://assets.website-files.com/5fec984ac113c1d4eec8f1ef/607ef532ca7fbd254935a465_stakingrewards.png',
    }),
    jetton_name: j_name,
  };
}

export function generateRandomString(length: number): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

export function makeSnakeCell(data: Buffer) {
  // Create a cell that package the data
  const chunks = bufferToChunks(data, CELL_MAX_SIZE_BYTES);

  const b = chunks.reduceRight((curCell, chunk, index) => {
    if (index === 0) {
      curCell.storeInt(SNAKE_PREFIX, 8);
    }
    curCell.storeBuffer(chunk);
    if (index > 0) {
      const cell = curCell.endCell();
      return beginCell().storeRef(cell);
    } else {
      return curCell;
    }
  }, beginCell());
  return b.endCell();
}

function bufferToChunks(buff: Buffer, chunkSize: number) {
  const chunks: Buffer[] = [];
  while (buff.byteLength > 0) {
    chunks.push(buff.slice(0, chunkSize));
    buff = buff.slice(chunkSize);
  }
  return chunks;
}
