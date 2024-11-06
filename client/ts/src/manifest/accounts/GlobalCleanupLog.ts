/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js';
import * as beetSolana from '@metaplex-foundation/beet-solana';
import * as beet from '@metaplex-foundation/beet';
import { GlobalAtoms, globalAtomsBeet } from './GlobalAtoms';

/**
 * Arguments used to create {@link GlobalCleanupLog}
 * @category Accounts
 * @category generated
 */
export type GlobalCleanupLogArgs = {
  cleaner: web3.PublicKey;
  maker: web3.PublicKey;
  amountDesired: GlobalAtoms;
  amountDeposited: GlobalAtoms;
};
/**
 * Holds the data for the {@link GlobalCleanupLog} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class GlobalCleanupLog implements GlobalCleanupLogArgs {
  private constructor(
    readonly cleaner: web3.PublicKey,
    readonly maker: web3.PublicKey,
    readonly amountDesired: GlobalAtoms,
    readonly amountDeposited: GlobalAtoms,
  ) {}

  /**
   * Creates a {@link GlobalCleanupLog} instance from the provided args.
   */
  static fromArgs(args: GlobalCleanupLogArgs) {
    return new GlobalCleanupLog(
      args.cleaner,
      args.maker,
      args.amountDesired,
      args.amountDeposited,
    );
  }

  /**
   * Deserializes the {@link GlobalCleanupLog} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [GlobalCleanupLog, number] {
    return GlobalCleanupLog.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link GlobalCleanupLog} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<GlobalCleanupLog> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig,
    );
    if (accountInfo == null) {
      throw new Error(`Unable to find GlobalCleanupLog account at ${address}`);
    }
    return GlobalCleanupLog.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      'A6wH2LfJogmERLARqF75pH2Yu5Gh1t6Nzmt9nkMU9cDA',
    ),
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, globalCleanupLogBeet);
  }

  /**
   * Deserializes the {@link GlobalCleanupLog} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [GlobalCleanupLog, number] {
    return globalCleanupLogBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link GlobalCleanupLog} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return globalCleanupLogBeet.serialize(this);
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link GlobalCleanupLog}
   */
  static get byteSize() {
    return globalCleanupLogBeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link GlobalCleanupLog} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      GlobalCleanupLog.byteSize,
      commitment,
    );
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link GlobalCleanupLog} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === GlobalCleanupLog.byteSize;
  }

  /**
   * Returns a readable version of {@link GlobalCleanupLog} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      cleaner: this.cleaner.toBase58(),
      maker: this.maker.toBase58(),
      amountDesired: this.amountDesired,
      amountDeposited: this.amountDeposited,
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const globalCleanupLogBeet = new beet.BeetStruct<
  GlobalCleanupLog,
  GlobalCleanupLogArgs
>(
  [
    ['cleaner', beetSolana.publicKey],
    ['maker', beetSolana.publicKey],
    ['amountDesired', globalAtomsBeet],
    ['amountDeposited', globalAtomsBeet],
  ],
  GlobalCleanupLog.fromArgs,
  'GlobalCleanupLog',
);
