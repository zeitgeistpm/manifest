/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import * as beetSolana from '@metaplex-foundation/beet-solana';

/**
 * Arguments used to create {@link QuoteAtomsPerBaseAtom}
 * @category Accounts
 * @category generated
 */
export type QuoteAtomsPerBaseAtomArgs = {
  inner: beet.bignum;
};
/**
 * Holds the data for the {@link QuoteAtomsPerBaseAtom} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class QuoteAtomsPerBaseAtom implements QuoteAtomsPerBaseAtomArgs {
  private constructor(readonly inner: beet.bignum) {}

  /**
   * Creates a {@link QuoteAtomsPerBaseAtom} instance from the provided args.
   */
  static fromArgs(args: QuoteAtomsPerBaseAtomArgs) {
    return new QuoteAtomsPerBaseAtom(args.inner);
  }

  /**
   * Deserializes the {@link QuoteAtomsPerBaseAtom} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [QuoteAtomsPerBaseAtom, number] {
    return QuoteAtomsPerBaseAtom.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link QuoteAtomsPerBaseAtom} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<QuoteAtomsPerBaseAtom> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig,
    );
    if (accountInfo == null) {
      throw new Error(
        `Unable to find QuoteAtomsPerBaseAtom account at ${address}`,
      );
    }
    return QuoteAtomsPerBaseAtom.fromAccountInfo(accountInfo, 0)[0];
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
    return beetSolana.GpaBuilder.fromStruct(
      programId,
      quoteAtomsPerBaseAtomBeet,
    );
  }

  /**
   * Deserializes the {@link QuoteAtomsPerBaseAtom} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [QuoteAtomsPerBaseAtom, number] {
    return quoteAtomsPerBaseAtomBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link QuoteAtomsPerBaseAtom} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return quoteAtomsPerBaseAtomBeet.serialize(this);
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link QuoteAtomsPerBaseAtom}
   */
  static get byteSize() {
    return quoteAtomsPerBaseAtomBeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link QuoteAtomsPerBaseAtom} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      QuoteAtomsPerBaseAtom.byteSize,
      commitment,
    );
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link QuoteAtomsPerBaseAtom} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === QuoteAtomsPerBaseAtom.byteSize;
  }

  /**
   * Returns a readable version of {@link QuoteAtomsPerBaseAtom} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      inner: (() => {
        const x = <{ toNumber: () => number }>this.inner;
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber();
          } catch (_) {
            return x;
          }
        }
        return x;
      })(),
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const quoteAtomsPerBaseAtomBeet = new beet.BeetStruct<
  QuoteAtomsPerBaseAtom,
  QuoteAtomsPerBaseAtomArgs
>(
  [['inner', beet.u128]],
  QuoteAtomsPerBaseAtom.fromArgs,
  'QuoteAtomsPerBaseAtom',
);
