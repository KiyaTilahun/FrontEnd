import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filtedredExpenses=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear;
  });
  console.log(filtedredExpenses,props.items);
let expenseContent=<p>Nothing here</p>
if(filtedredExpenses.length>0){
  console.log(filtedredExpenses.length);
 expenseContent= filtedredExpenses.map((expense) => (
    <ExpenseItem
    key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
}

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
         <ExpensesChart expenses={filtedredExpenses} />
       {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
