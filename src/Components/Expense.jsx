import React from 'react';
import '../Css/Expense.css';

const Expense = () => {
  return (
    <div className='Expense'>
      <div className='existing-budget'>
        Existing Budgets
      </div>

      <div className='form-wrapper1'>
        <h2 className='h3'>Create Budget</h2>
        <form method='post' className='grid-sm'>
        <div className='grid-xs'>
            <label htmlFor='newBudget'>Budget Name</label>
            <input 
              type='text' 
              name='newBudget'
              id='newBudget'
              placeholder='e.g., Groceries'
              required
            />
          </div>

          <div className='grid-xs'>
            <label htmlFor='newBudgetAmount'>Amount</label>
            <input 
              type='text' 
              pattern='\d*'  // Enforce numeric input
              name='newBudgetAmount'
              id='newBudgetAmount'
              placeholder='e.g., Pkr 1000'
              required
              
            />
          </div>
          <button type='submit'>Create</button>

        </form>
      </div>

      <div className='form-wrapper2'>
        <h2 className='h3'>Add New Expense</h2>
        <form method='post' className='grid-sm'>
        <div className='grid-xs'>
            <label htmlFor='expenseName'>Expense Name</label>
            <input 
              type='text' 
              name='expenseName'
              id='expenseName'
              placeholder='e.g., Dinner'
              required
            />
          </div>

          <div className='grid-xs'>
            <label htmlFor='expenseAmount'>Amount</label>
            <input 
              type='text' 
              pattern='\d*'  // Enforce numeric input
              name='expenseAmount'
              id='expenseAmount'
              placeholder='e.g., Pkr 500'
              required
            />
          </div>
          <div className='grid-xs'>
            <label htmlFor='expenseCategory'>Expense Category</label>
            {/* You can replace the options with your actual expense categories */}
            <select name='expenseCategory' id='expenseCategory' required>
              <option value=''>Select Category</option>
              <option value='dining'>Dining</option>
              <option value='shopping'>Shopping</option>
              <option value='travel'>Travel</option>
              {/* Add more categories as needed */}
            </select>
          </div>
          <button type='submit'>Add Expense</button>
        </form>
      </div>

      <div className='transparent-blur-wrapper'>
        <h2 className='h3'>Budget Details</h2>
        <div className='budget-item'>
          <label htmlFor='dining'>Dining</label>
          <div className='slide-bar'></div>
          <span>Remaining Budget: $500</span>
        </div>
        <div className='budget-item'>
          <label htmlFor='travel'>Travel</label>
          <div className='slide-bar'></div>
          <span>Remaining Budget: $700</span>
        </div>
        <div className='budget-item'>
          <label htmlFor='shopping'>Shopping</label>
          <div className='slide-bar'></div>
          <span>Remaining Budget: $300</span>
        </div>
      </div>
    </div>
  );
};

export default Expense;