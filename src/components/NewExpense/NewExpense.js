import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) =>
{
   function onsaveExpenseDataHandler(enteredExpenseData) {
      const expenseData = {
        ...enteredExpenseData,
          id: Math.random().toString()
      
      };
      // console.log(expenseData);
      props.onAdd(expenseData);
    };
    
  return (
    <div className="new-expense">
      <ExpenseForm onsaveExpenseData={onsaveExpenseDataHandler}></ExpenseForm>
    </div>
  );
}
export default NewExpense;
