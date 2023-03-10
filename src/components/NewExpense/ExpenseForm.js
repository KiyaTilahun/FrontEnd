import React,{useState} from "react";
import './ExpenseForm.css';

function ExpenseForm(props){
 const [enteredTitle,setEnteredTitle]=useState('');
 const [enteredAmount,setEnteredAmount]=useState('');
 const [enteredDate,setEnteredDate]=useState('');
// const [userInput,setUserInput]=useState({
//     enteredTitle:'',
//     enteredAmount:'',
//     enteredDate:''
// });

    function changeHandler(event){
        setEnteredTitle(event.target.value);

    //    setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
    //    })
    // setUserInput((prevState)=>{
    //        return {...userInput,
    //             enteredTitle:event.target.value,}
    //        })
    }
    function amountchangeHandler(event){
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        //    })
        // setUserInput((prevState)=>{
        //     return {...userInput,
        //          enteredAmount:event.target.value,}
        //     })

    }
    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        //    })
        // setUserInput((prevState)=>{
        //     return {...userInput,
        //          enteredDate:event.target.value,}
        //     })

    }
    function submitHandler(event){
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
        }
     props.onsaveExpenseData(expenseData);
     console.log(expenseData +" haha");
        setEnteredTitle(' ');
        setEnteredAmount(' ');
        setEnteredDate(' ');



    }
return <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
    <div className="new-expense__control">
<label>Title</label>
<input onChange={changeHandler} value={enteredTitle} type="text"/>
    </div>
    <div className="new-expense__control">
<label>Amount</label>
<input onChange={amountchangeHandler} value={enteredAmount} type="number" min="0.01" step="0.01"/>
    </div>
    <div className="new-expense__control">
<label>Date</label>
<input onChange={dateChangeHandler} value={enteredDate} type="date" min="2019-01-01" max="2022-12-31"/>
    </div>

    </div>
    <div className="new-expense__actions"><button type="submit">Submit</button> </div>


</form>
};
export default ExpenseForm;