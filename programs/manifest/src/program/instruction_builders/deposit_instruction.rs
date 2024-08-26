use crate::{
    program::{deposit::DepositParams, ManifestInstruction},
    validation::get_vault_address,
};
use borsh::BorshSerialize;
use solana_program::{
    instruction::{AccountMeta, Instruction},
    pubkey::Pubkey,
};

pub fn deposit_instruction(
    market: &Pubkey,
    payer: &Pubkey,
    mint: &Pubkey,
    amount_atoms: u64,
    trader_token_account: &Pubkey,
    token_program: Pubkey,
) -> Instruction {
    let (vault_address, _) = get_vault_address(market, mint);

    Instruction {
        program_id: crate::id(),
        accounts: vec![
            AccountMeta::new(*payer, true),
            AccountMeta::new(*market, false),
            AccountMeta::new(*trader_token_account, false),
            AccountMeta::new(vault_address, false),
            AccountMeta::new_readonly(token_program, false),
            AccountMeta::new_readonly(*mint, false),
        ],
        data: [
            ManifestInstruction::Deposit.to_vec(),
            DepositParams::new(amount_atoms).try_to_vec().unwrap(),
        ]
        .concat(),
    }
}