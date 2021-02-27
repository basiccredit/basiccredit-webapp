import Web3 from 'web3';

export const getWeb3 = async (): Promise<Web3> => {
  const web3 = new Web3(Web3.givenProvider);
  // @ts-expect-error window.ethereum is defined
  await window.ethereum.enable();

  return web3;
};

export const getAccounts = async (): Promise<string[]> => {
  const web3 = await getWeb3();
  return await web3.eth.getAccounts();
};
