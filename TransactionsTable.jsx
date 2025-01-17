import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableRow, TableCell, Button, Container, Text } from '@shadcn/ui';

const TransactionInfo = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Mocking a request with static data, replace with actual API call as needed
    const mockData = [
      { amount: '100.50', currency: 'EUR', cardholder: 'Dai Yuan', status: 'Succeeded', created: 'Nov 15, 2006' },
      { amount: '750.00', currency: 'EUR', cardholder: 'Dai Yuan', status: 'Pending', created: 'Nov 15, 2006' },
      { amount: '8603.00', currency: 'EUR', cardholder: 'James Smith', status: 'Canceled', created: 'Nov 15, 2007' },
      { amount: '9000.00',currency: 'EUR', cardholder: 'James Smith', status: 'Failed', created: 'Nov 15, 2007' },
      {amount: '10000.00', currency: 'EUR', cardholder: 'James Smith', status: 'Refunded', created: 'Nov 15, 2007' },
      { amount: '7493.00', currency: 'EUR', cardholder: 'James Smith', status: 'Disputed', created: 'Nov 15, 2007' },
      { amount: '400.00', currency: 'EUR', cardholder: 'James Smith', status: 'Succeeded', created: 'Nov 15, 2007' },
      { amount: '600.00', currency: 'EUR', cardholder: 'James Smith', status: 'Succeeded', created: 'Nov 15, 2007' },
      { amount: '700.00', currency: 'EUR', cardholder: 'James Smith', status: 'Succeeded', created: 'Nov 15, 2007' },
      { amount: '300.00', currency: 'EUR', cardholder: 'James Smith', status: 'Succeeded', created: 'Nov 15, 2007' },
      // Add more transactions as needed
    ];
    setTransactions(mockData);
  }, []);

  return (
    <Container>
      <Text variant="h4">Transactions</Text>
      <Table>
        <thead>
          <TableRow>
            <TableCell>Amount</TableCell>
            <TableCell>Currency</TableCell>
            <TableCell>Cardholder</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Created</TableCell>
          </TableRow>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.currency}</TableCell>
              <TableCell>{transaction.cardholder}</TableCell>
              <TableCell>{transaction.status}</TableCell>
              <TableCell>{transaction.created}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <Button variant="outline" onClick={() => alert('Download')}>Download</Button>
      <Button variant="outline" onClick={() => alert('Filter')}>Filter</Button>
    </Container>
  );
};

export default TransactionInfo;
