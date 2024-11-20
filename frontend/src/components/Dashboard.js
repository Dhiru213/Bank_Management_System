import React, { useState } from 'react';
import axios from 'axios';

function Dashboard({ user }) {
  const [amount, setAmount] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [balance, setBalance] = useState(user.balance);
  const [loan, setLoan] = useState(user.loan);

  const handleWithdraw = () => {
    axios.post('http://localhost:8080/api/bank/withdraw', null, {
      params: { username: user.username, amount: parseFloat(amount) }
    }).then(response => {
      setBalance(response.data.balance);
      alert('Withdrawal successful');
    }).catch(error => {
      alert('Error during withdrawal');
    });
  };

  const handleLoan = () => {
    axios.post('http://localhost:8080/api/bank/loan', null, {
      params: { username: user.username, loanAmount: parseFloat(loanAmount) }
    }).then(response => {
      setLoan(response.data.loan);
      alert('Loan granted');
    }).catch(error => {
      alert('Error requesting loan');
    });
  };

  return (
    <div>
      <h2>Welcome {user.username}</h2>
      <p>Balance: ${balance}</p>
      <p>Loan: ${loan}</p>

      <h3>Withdraw</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount to withdraw"
      />
      <button onClick={handleWithdraw}>Withdraw</button>

      <h3>Request Loan</h3>
      <input
        type="number"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
        placeholder="Enter loan amount"
      />
      <button onClick={handleLoan}>Request Loan</button>
    </div>
  );
}

export default Dashboard;
