import React, { useState } from "react";
import "../Styles/Calculator.css";

export const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMortgagePayment = () => {
    const principal = loanAmount - downPayment;
    const monthlyInterestRate = interestRate / 1200;
    const termInMonths = loanTerm * 12;
    const mortgagePayment =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -termInMonths));
    setMonthlyPayment(mortgagePayment.toFixed(2));
  };

  return (
    <div className="container">
      <div className="headline">
        <h2>The Mortgage Calculator!</h2>
        <p>By Lasse Vestergaard Fuglsbjerg</p>
      </div>
      <div className="mortgageCalculator">
        <label>
          Loan Amount:
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </label>
        <br />
        <label>
          Interest Rate:
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Loan Term (in years):
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </label>
        <br />
        <label>
          Down Payment:
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
          />
        </label>
        <br />
        <button onClick={calculateMortgagePayment}>Calculate Payment</button>
        <br />
        <div className="result">
          Monthly Payment: <br /> <br /> ${monthlyPayment}
        </div>
      </div>
    </div>
  );
};
