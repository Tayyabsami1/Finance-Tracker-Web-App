import React from 'react'
import '../Css/Income.css'
import { useState } from 'react';
import AddIcon from '../Assets/Add.png';
import DeleteIcon  from '../Assets/delete.png';
import ShowIcon from '../Assets/Show.png';

const Income = () => {
  const [balance, setBalance] = useState(1000);
  const [income, setIncome] = useState(1000);
  const incomeSources = ['Job Salary', 'Freelance Work', 'Investments', 'Business'];

  const addIncome = () => {
    const newIncome = prompt("Enter income amount:");
    
    if (!isNaN(newIncome)) {
      setIncome(income + parseFloat(newIncome));
      setBalance(balance + parseFloat(newIncome));
    } else {
      alert("Please enter a valid number for income.");
    }
  };

  const deleteIncome = () => {
    const deletedIncome = prompt("Enter income amount to delete:");
    if (!isNaN(deletedIncome) && income >= parseFloat(deletedIncome)) {
      setIncome(income - parseFloat(deletedIncome));
      setBalance(balance - parseFloat(deletedIncome));
    } else {
      alert("Invalid amount or insufficient balance to delete.");
    }
  };

  return (
    <div>
      <div className="income-page">
        <div className="balance-section">
          <div className="current-balance">Current Balance</div>
          <div className="balance-amount">${balance.toFixed(2)}</div>
          <div className="total-income">Total Income: ${income.toFixed(2)}</div>
        </div>
        <div className="income-sources">
          <h2>Income Sources</h2>
          <ul>
            {incomeSources.map((source, index) => (
              <li key={index}>{source}</li>
            ))}
          </ul>
        </div>
        <div className="icons-section">
          <img className='icon' src={AddIcon} onClick={addIncome} alt="" />
          <img className='icon' src={DeleteIcon} onClick={deleteIncome} alt="" />
          <img className='icon' src={ShowIcon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Income
