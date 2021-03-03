import { getAccounts, web3Instance } from '../../wallet/web3/web3';
import { BASIC_CREDIT_ABIS } from '../abis/basicCredit';
import { BASIC_CREDIT_ADDRESSES } from '../addresses/basicCredit';
import { T_DAI_ADDRESSES } from '../addresses/tDai';

const onReceipt = (contractName: string) => (receipt: Object): void => {
  console.log(`Transaction from contract ${contractName} completed`, receipt);
};

const onError = (contractName: string) => (
  error: Error,
  receipt: Object
): void => {
  console.error(`Error from contract ${contractName}`, error, receipt);
};

export const depositTokens = async (
  amount: Readonly<number>,
  network: Readonly<keyof Networks>
): Promise<void> => {
  const web3 = await web3Instance;
  const accounts = await getAccounts();
  const basicCreditContracts = new web3.eth.Contract(
    BASIC_CREDIT_ABIS[network] as any,
    BASIC_CREDIT_ADDRESSES[network]
  );
  await basicCreditContracts.methods
    .DepositTokens(T_DAI_ADDRESSES[network], amount)
    .send({ from: accounts[0] })
    .on('error', onError('DepositTokens'))
    .on('receipt', onReceipt('DepositTokens'));
};

export const withdrawTokens = async (
  amount: Readonly<number>,
  network: Readonly<keyof Networks>
): Promise<void> => {
  const web3 = await web3Instance;
  const accounts = await getAccounts();
  const basicCreditContracts = new web3.eth.Contract(
    BASIC_CREDIT_ABIS[network] as any,
    BASIC_CREDIT_ADDRESSES[network]
  );
  await basicCreditContracts.methods
    .WithdrawTokens(T_DAI_ADDRESSES[network], amount)
    .send({ from: accounts[0] })
    .on('error', onError('WithdrawTokens'))
    .on('receipt', onReceipt('WithdrawTokens'));
};

export const borrowTokens = async (
  amount: Readonly<number>,
  network: Readonly<keyof Networks>
): Promise<void> => {
  const web3 = await web3Instance;
  const accounts = await getAccounts();
  const basicCreditContracts = new web3.eth.Contract(
    BASIC_CREDIT_ABIS[network] as any,
    BASIC_CREDIT_ADDRESSES[network]
  );
  await basicCreditContracts.methods
    .BorrowTokens(T_DAI_ADDRESSES[network], amount)
    .send({ from: accounts[0] })
    .on('error', onError('BorrowTokens'))
    .on('receipt', onReceipt('BorrowTokens'));
};

export const repayTokens = async (
  amount: Readonly<number>,
  network: Readonly<keyof Networks>
): Promise<void> => {
  const web3 = await web3Instance;
  const accounts = await getAccounts();
  const basicCreditContracts = new web3.eth.Contract(
    BASIC_CREDIT_ABIS[network] as any,
    BASIC_CREDIT_ADDRESSES[network]
  );
  await basicCreditContracts.methods
    .RepayTokens(T_DAI_ADDRESSES[network], amount)
    .send({ from: accounts[0] })
    .on('error', onError('RepayTokens'))
    .on('receipt', onReceipt('RepayTokens'));
};
