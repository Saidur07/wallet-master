// Function for get ids

function InputValue(inputId) {
  const inputField = document.querySelector(inputId);
  const inputValue = parseFloat(inputField.value);
  inputField.value = "";

  return inputValue;
}

//Geting Total expense

function getTotalExpense() {
  const foodExpense = InputValue("#food-expense");
  const rentExpense = InputValue("#rent-expense");
  const clothsExpense = InputValue("#cloths-expense");
  const totalExpense = foodExpense + rentExpense + clothsExpense;

  // Handling the error

  if (isNaN(foodExpense) || isNaN(rentExpense) || isNaN(clothsExpense)) {
    alert("Please enter a valid amount 😶");
  } else {
    return totalExpense;
  }
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const totalIncome = InputValue("#income");
  const totalExpense = getTotalExpense();
  // Handling the error
  if (totalIncome <= 0) {
    alert("Please enter a valid amount 😑");
  } else if (totalIncome < totalExpense) {
    alert("Oops! You can't spend anymore 🙄");
  } else {
    if (isNaN(totalExpense)) {
    } else {
      //Updating total spending to the Total Spending Field

      const totalSpendField = document.getElementById("total-expense");
      totalSpendField.innerText = totalExpense;

      //Updating current balance to the current Balance Field

      const currentBalance = totalIncome - totalExpense;
      const currentBalanceField = document.getElementById("expense-balance");
      currentBalanceField.innerText = currentBalance;
    }
  }
});
document.getElementById("save-btn").addEventListener("click", function () {
  //Getting the current Balance

  const currentBalance = parseFloat(document.getElementById("expense-balance").innerText);

  //Updating the saving amount

  const savingParcent = InputValue("#saving-percent");
  const savingAmount = currentBalance * (savingParcent / 100);

  //Handling the error

  if (savingParcent < 0) {
    alert("Please enter a valid amount 😑");
  } else if (currentBalance < savingAmount) {
    alert("Oops! You can't save more than your balance 🙄");
  } else if (isNaN(currentBalance) || isNaN(savingParcent)) {
    alert("Fill out the input Field 🤨");
  } else {
    const savingField = document.getElementById("saving-amount");
    savingField.innerText = savingAmount;

    //Updating the Remaining Balance

    const remainingBalance = currentBalance - savingAmount;
    const remainingBanalceField = document.getElementById("total-balance");
    remainingBanalceField.innerText = remainingBalance;
  }
});
