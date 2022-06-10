import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEdditing, setIsEdditing] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEdditing(false);
  };

  const startEdditingHandler = () => {
    setIsEdditing(true);
  };

  const stopEditingHandler = () => {
    setIsEdditing(false);
  };

  return (
    <div className="new-expense">
      {!isEdditing && (
        <button onClick={startEdditingHandler}>Add New Expense</button>
      )}
      {isEdditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
