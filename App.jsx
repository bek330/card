import React from 'react';
import CardInfo from './CardInfo';  // The card information component
import TransactionInfo from './TransactionsTable'; // The transaction display component

const App = () => {
  return (
    <div className="App">
      <h1>Bakar Fintech - Card & Transactions</h1>
      <CardInfo />
      <TransactionInfo />
    </div>
  );
};

export default App;
