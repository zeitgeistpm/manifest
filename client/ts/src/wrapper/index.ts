import { PublicKey } from '@solana/web3.js';
export * from './instructions';
export * from './types';

/**
 * Program address
 *
 * @category constants
 * @category generated
 */
export const PROGRAM_ADDRESS = '3rCLCzJkLq9samFyzFsmeUV1BnJRZ14KBqUvM8MvNfVA';

/**
 * Program public key
 *
 * @category constants
 * @category generated
 */
export const PROGRAM_ID = new PublicKey(PROGRAM_ADDRESS);
