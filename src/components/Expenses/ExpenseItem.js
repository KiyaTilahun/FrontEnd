// c component in react id just a javascript function
import React,{useState} from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const  [title,setTitle]=useState(props.title);
  const clickme = () => {
    setTitle('updated');
    console.log(title)
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickme}>Change title</button>
    </Card>
  );
}
export default ExpenseItem;
