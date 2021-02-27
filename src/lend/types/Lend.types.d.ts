declare namespace Lend {
  interface State {
    mode: 'DEPOSIT' | 'WITHDRAW';
    currency: string;
    amount: string;
  }
}
